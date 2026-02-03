import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseClient';

const FEED_URLS = [
    'https://rss.medicalnewstoday.com/featured.xml',
    'https://www.sciencedaily.com/rss/health_medicine.xml',
    'https://www.webmd.com/rss/health-news.xml'
];

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json?rss_url=';

const NewsTicker = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                // 1. Try to fetch from Supabase first
                const { data: dbNews, error: dbError } = await supabase
                    .from('medical_news')
                    .select('*')
                    .order('pub_date', { ascending: false })
                    .limit(25);

                let needsUpdate = false;

                // LOGIC: Update if data is older than the most recent 7:00 AM WIB
                const check7AMUpdate = (lastUpdateTime) => {
                    const now = new Date();
                    // Convert current time to Jakarta time (WIB)
                    const jakartaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));

                    // Create a Date object for Today's 7 AM Jakarta time
                    const today7AM = new Date(jakartaTime);
                    today7AM.setHours(7, 0, 0, 0);

                    // If currently before 7 AM, compare with Yesterday's 7 AM
                    if (jakartaTime < today7AM) {
                        today7AM.setDate(today7AM.getDate() - 1);
                    }

                    // If DB last update is OLDER than the standard 7 AM cutoff, update is needed
                    return lastUpdateTime < today7AM;
                };

                if (dbError || !dbNews || dbNews.length === 0) {
                    needsUpdate = true;
                } else if (dbNews.length > 0) {
                    const dbTimeLocal = new Date(dbNews[0].created_at);
                    if (check7AMUpdate(dbTimeLocal)) {
                        needsUpdate = true;
                    }
                }

                // If cache is valid, use it
                if (!needsUpdate && dbNews && dbNews.length > 0) {
                    setNews(dbNews);
                    setLoading(false);
                    return;
                }

                // 2. If we need update, create optimistic UI if we have stale tokens
                if (dbNews && dbNews.length > 0) {
                    setNews(dbNews);
                    setLoading(false);
                }

                // 3. Fetch fresh from RSS
                const requests = FEED_URLS.map(url => fetch(RSS2JSON_API + encodeURIComponent(url)).then(res => res.json()));
                const results = await Promise.all(requests);

                let allItems = [];
                results.forEach(result => {
                    if (result.status === 'ok') {
                        const source = result.feed.title;
                        const items = result.items.map(item => ({ ...item, source }));
                        allItems = [...allItems, ...items];
                    }
                });

                // Filter & Sort
                const sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

                const validNews = allItems.filter(item => {
                    const itemDate = new Date(item.pubDate);
                    return itemDate >= sevenDaysAgo;
                }).sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

                if (validNews.length > 0) {
                    const topNews = validNews.slice(0, 25);
                    setNews(topNews);

                    // 4. Sync to Supabase (Upsert)
                    const upsertData = topNews.map(item => ({
                        title: item.title,
                        link: item.link,
                        pub_date: new Date(item.pubDate).toISOString(),
                        source: item.source,
                        created_at: new Date().toISOString() // refresh timestamp
                    }));

                    if (upsertData.length > 0) {
                        await supabase.from('medical_news').upsert(upsertData, { onConflict: 'title', ignoreDuplicates: true });
                    }
                }

            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-play logic
    useEffect(() => {
        if (news.length === 0) return;

        const intervalTime = 3000; // 3 seconds per slide

        const timer = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % news.length);
        }, intervalTime);

        return () => clearInterval(timer);
    }, [news.length, isMobile]);


    if (loading) return null;
    if (news.length === 0) return null;

    const itemsToShow = isMobile ? 3 : 5;

    const visibleNews = [];
    for (let i = 0; i < itemsToShow; i++) {
        visibleNews.push(news[(currentIndex + i) % news.length]);
    }

    return (
        <div className="w-full mt-16 overflow-hidden">
            <div className="flex items-center justify-between mb-4 px-4 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <h3 className="text-white text-sm font-bold tracking-widest uppercase">Medical News Feed</h3>
                </div>
                <span className="text-xs text-gray-500">Live Updates from Top Sources</span>
            </div>

            <div className="relative w-full max-w-[1920px] mx-auto px-4">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                    <AnimatePresence mode='popLayout'>
                        {visibleNews.map((item) => (
                            <motion.div
                                key={item.guid || item.link}
                                layout
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between h-40 hover:bg-white/10 transition-colors group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                                onClick={() => window.open(item.link, '_blank')}
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-50 text-xs text-gray-400 group-hover:opacity-100 transition-opacity">
                                    <span className="material-icons text-sm transform -rotate-45">arrow_forward</span>
                                </div>

                                <h4 className="text-white text-xs sm:text-sm font-medium line-clamp-3 leading-relaxed group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h4>

                                <div className="mt-2 flex justify-between items-end">
                                    <span className="text-[10px] text-gray-500 uppercase tracking-wider truncate max-w-[70%]">
                                        {item.source}
                                    </span>
                                    <span className="text-[10px] text-gray-600">
                                        {new Date(item.pubDate || item.pub_date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
