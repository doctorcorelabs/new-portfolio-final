import React, { useEffect, useState, useMemo } from 'react';
import { supabase } from '../supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import DOMPurify from 'dompurify';

const CATEGORIES = [
    { value: 'all', label: 'ALL SIGNALS', color: 'white' },
    { value: 'Announcement', label: 'R&D UPDATES', color: 'emerald' },
    { value: 'Research', label: 'PUBLICATIONS', color: 'blue' },
    { value: 'Project', label: 'PROJECTS', color: 'purple' },
    { value: 'Personal', label: 'INSIGHTS', color: 'amber' },
    { value: 'Changelog', label: 'CHANGELOG', color: 'cyan' },
];

const getCategoryStyle = (category) => {
    const styles = {
        Announcement: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', bar: 'bg-emerald-500', shadow: 'shadow-[0_0_10px_#10b981]' },
        Research: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', bar: 'bg-blue-500', shadow: 'shadow-[0_0_10px_#3b82f6]' },
        Project: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20', bar: 'bg-purple-500', shadow: 'shadow-[0_0_10px_#a855f7]' },
        Personal: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', bar: 'bg-amber-500', shadow: 'shadow-[0_0_10px_#f59e0b]' },
        Changelog: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20', bar: 'bg-cyan-500', shadow: 'shadow-[0_0_10px_#06b6d4]' },
    };
    return styles[category] || styles.Announcement;
};

// Wireframe Globe Component
const WireframeGlobe = () => (
    <div className="globe-container flex items-center justify-center relative h-[280px]">
        <div className="wireframe-globe flex items-center justify-center">
            <div className="globe-dot" style={{ top: '30%', left: '40%' }}></div>
            <div className="globe-dot" style={{ top: '60%', left: '70%', animationDelay: '0.5s' }}></div>
            <div className="globe-dot" style={{ top: '45%', left: '20%', animationDelay: '1s' }}></div>
            <div className="w-20 h-20 rounded-full bg-emerald-900/20 blur-xl absolute"></div>
        </div>
        <div className="absolute top-8 right-4 md:right-16 bg-black/40 backdrop-blur border border-emerald-500/30 px-2 py-1 rounded text-[10px] font-mono text-emerald-400">
            ORIGIN: INDONESIA
        </div>
        <div className="absolute bottom-8 left-4 md:left-16 bg-black/40 backdrop-blur border border-emerald-500/30 px-2 py-1 rounded text-[10px] font-mono text-emerald-400">
            STATUS: ACTIVE
        </div>
    </div>
);

// Signal Strength Indicator
const SignalStrength = () => (
    <div className="flex items-center space-x-3 border border-gray-800 rounded px-3 py-1.5 bg-[#13161c]">
        <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-medium text-gray-400">SIGNAL STRENGTH</span>
            <div className="flex gap-0.5 items-end h-3">
                <div className="w-1 h-1 bg-emerald-500"></div>
                <div className="w-1 h-2 bg-emerald-500"></div>
                <div className="w-1 h-3 bg-emerald-500"></div>
                <div className="w-1 h-2 bg-gray-700 animate-pulse"></div>
            </div>
        </div>
    </div>
);

// System Status Panel
const SystemStatusPanel = ({ posts }) => {
    const totalPosts = posts.length;
    const avgImpact = totalPosts > 0
        ? Math.round(posts.reduce((acc, p) => acc + (p.impact_score || 0), 0) / totalPosts)
        : 0;

    // Find most active category
    const catCounts = posts.reduce((acc, p) => {
        const cat = p.category || 'Announcement';
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
    }, {});
    const topCategory = Object.entries(catCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    // Calculate load
    const systemLoad = Math.min(100, Math.max(10, totalPosts * 5));

    return (
        <div className="border border-gray-800 bg-[#13161c]/80 p-5 rounded-lg backdrop-blur-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2 relative z-10">
                <span className="text-xs font-mono text-gray-400 uppercase">System Diagnostics</span>
                <span className="material-icons text-emerald-500 text-sm animate-pulse">memory</span>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="bg-black/40 p-3 rounded border border-gray-800 hover:border-emerald-500/30 transition-colors">
                    <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">Signal Density</div>
                    <div className="text-xl font-mono text-white font-bold">{totalPosts}</div>
                </div>
                <div className="bg-black/40 p-3 rounded border border-gray-800 hover:border-emerald-500/30 transition-colors">
                    <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">Avg Impact</div>
                    <div className="text-xl font-mono text-emerald-400 font-bold">{avgImpact}%</div>
                </div>
                <div className="bg-black/40 p-3 rounded border border-gray-800 hover:border-emerald-500/30 transition-colors">
                    <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">Dominant Freq</div>
                    <div className="text-xs font-mono text-blue-400 font-bold truncate">{topCategory.toUpperCase()}</div>
                </div>
                <div className="bg-black/40 p-3 rounded border border-gray-800 hover:border-emerald-500/30 transition-colors">
                    <div className="text-[9px] font-mono text-gray-500 uppercase mb-1">System Load</div>
                    <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 flex-1 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: `${systemLoad}%` }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visualizer Animation */}
            <div className="mt-4 relative h-12 bg-black/40 rounded border border-gray-800 overflow-hidden flex items-end gap-0.5 px-1 py-1">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 bg-emerald-500/20 rounded-t-sm"
                        style={{
                            height: `${20 + Math.random() * 80}%`,
                            animation: `pulse-bar 0.5s infinite alternate ${i * 0.05}s`
                        }}
                    ></div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-1 left-2 text-[8px] font-mono text-emerald-500/50">LIVE_WAVEFORM</div>
            </div>

            {/* Decorative Scanline */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent h-[200%] w-full animate-scanline pointer-events-none"></div>
        </div>
    );
};

// Stream Filters Sidebar
const StreamFilters = ({ categories, activeFilters, onFilterChange }) => (
    <div className="border border-gray-800 bg-[#13161c]/80 p-5 rounded-lg backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
            <span className="text-xs font-mono text-gray-400 uppercase">Stream Filters</span>
            <span className="material-icons text-gray-500 text-sm">tune</span>
        </div>
        <div className="space-y-2">
            {categories.filter(c => c.value !== 'all').map((cat) => (
                <label
                    key={cat.value}
                    className="flex items-center gap-3 p-2 rounded hover:bg-white/5 cursor-pointer group transition-colors"
                >
                    <input
                        type="checkbox"
                        checked={activeFilters.includes(cat.value)}
                        onChange={() => onFilterChange(cat.value)}
                        className="form-checkbox bg-transparent border-gray-600 text-emerald-500 rounded focus:ring-0 focus:ring-offset-0 h-3 w-3"
                    />
                    <span className="text-xs font-mono text-gray-300 group-hover:text-emerald-400">{cat.label}</span>
                </label>
            ))}
        </div>
    </div>
);

// News Card Component
const NewsCard = ({ post, index, isFirst, onClick }) => {
    const style = getCategoryStyle(post.category);
    const readingTime = Math.ceil((post.content?.replace(/<[^>]*>/g, '') || '').split(/\s+/).length / 200);
    const impactScore = post.impact_score || 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
        >
            {/* Timeline Node */}
            <div className="absolute -left-[39px] md:-left-[55px] top-6 flex items-center justify-center w-[14px]">
                {isFirst && <div className="ecg-spike absolute -left-3 group-hover:brightness-150 transition-all"></div>}
                <div className={`w-2.5 h-2.5 bg-gray-900 border rounded-full z-10 relative transition-colors ${isFirst ? 'border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'border-gray-600 group-hover:border-emerald-500'}`}></div>
            </div>

            {/* Card */}
            <div
                onClick={onClick}
                className="news-card-bio p-6 md:p-8 rounded-xl relative overflow-hidden cursor-pointer"
            >
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                    <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${style.bg} ${style.text} border ${style.border}`}>
                            {post.category?.toUpperCase() || 'ANNOUNCEMENT'}
                        </span>
                        <span className="text-xs font-mono text-gray-500">
                            {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
                        </span>
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 flex items-center gap-1">
                        <span className="material-icons text-[12px]">schedule</span>
                        {readingTime} MIN READ
                    </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold text-white mb-3 transition-colors ${style.text.replace('text-', 'group-hover:text-')}`}>
                    {post.title}
                </h3>

                {/* Summary Box */}
                <div className={`bg-black/30 p-4 rounded-lg border-l-2 mb-5 ${style.border.replace('border-', 'border-l-').replace('/20', '/40')}`}>
                    <p className={`text-xs font-mono mb-1 uppercase tracking-wider ${style.text}`}>Summary</p>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                        {post.summary}
                    </p>
                </div>

                {/* Footer with Impact Bar */}
                <div className="flex items-center gap-6">
                    <div className="flex-1">
                        <div className="flex justify-between text-[10px] font-mono uppercase mb-1">
                            <span className="text-gray-500">Impact Score</span>
                            <span className={style.text}>{impactScore}/100</span>
                        </div>
                        <div className="impact-bar-bg">
                            <div
                                className={`impact-bar-fill ${style.bar} ${style.shadow}`}
                                style={{ width: `${impactScore}%`, backgroundColor: style.bar.replace('bg-', '').replace('-500', '') }}
                            ></div>
                        </div>
                    </div>
                    <button className={`text-xs font-mono ${style.text} flex items-center gap-1 hover:text-white transition-colors`}>
                        READ LOGS <span className="material-icons text-[14px]">arrow_forward</span>
                    </button>
                </div>

                {/* Views Badge */}
                {post.views > 0 && (
                    <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600 flex items-center gap-1">
                        <span className="material-icons text-[12px]">visibility</span>
                        {post.views}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// Main Nucleus Component
const Nucleus = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilters, setActiveFilters] = useState(['Announcement', 'Research', 'Project', 'Personal', 'Changelog']);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('nucleus_posts')
                .select('*')
                .eq('is_published', true)
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error('Error fetching posts:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const incrementViews = async (postId) => {
        try {
            const post = posts.find(p => p.id === postId);
            if (post) {
                await supabase
                    .from('nucleus_posts')
                    .update({ views: (post.views || 0) + 1 })
                    .eq('id', postId);
            }
        } catch (error) {
            console.error('Error incrementing views:', error);
        }
    };

    const handlePostClick = (post) => {
        setSelectedPost(post);
        incrementViews(post.id);
    };

    const handleFilterChange = (category) => {
        setActiveFilters(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredPosts = useMemo(() => {
        return posts.filter(post => {
            const matchesSearch = searchQuery === '' ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.summary.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesFilter = activeFilters.includes(post.category || 'Announcement');
            return matchesSearch && matchesFilter;
        });
    }, [posts, searchQuery, activeFilters]);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const calculateReadingTime = (content) => {
        const text = (content || '').replace(/<[^>]*>/g, '');
        const words = text.split(/\s+/).length;
        return Math.ceil(words / 200);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedPost) {
                setSelectedPost(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPost]);

    return (
        <section className="relative min-h-screen bg-[#050505] text-gray-300">
            {/* Background Layers */}
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
            <div className="fixed inset-0 bio-grid-pattern z-0 opacity-40 pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
                {/* Hero Section */}
                <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 mb-4 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/5 backdrop-blur-sm w-fit">
                                <span className="material-icons text-emerald-500 text-[14px]">satellite_alt</span>
                                <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Live Feed v3.0</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                                BIO-DIGITAL<br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">NEWS STREAM</span>
                            </h1>
                            <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed mb-8 border-l-2 border-gray-700 pl-4">
                                Tracking the pulse of innovation. A chronological log of updates, research notes, and announcements.
                            </p>
                            <div className="flex gap-6">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-gray-500 uppercase mb-1">Last Update</span>
                                    <span className="text-sm font-mono text-white">
                                        {posts.length > 0 ? `T-MINUS ${Math.floor((Date.now() - new Date(posts[0]?.created_at).getTime()) / 3600000)} HRS` : 'N/A'}
                                    </span>
                                </div>
                                <div className="w-[1px] h-full bg-gray-800"></div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono text-gray-500 uppercase mb-1">Active Nodes</span>
                                    <span className="text-sm font-mono text-emerald-400">{filteredPosts.length} DETECTED</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <WireframeGlobe />
                </section>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 min-h-screen">
                    {/* Sidebar */}
                    <div className="lg:col-span-3 hidden lg:block relative">
                        <div className="sticky top-32 space-y-6">
                            <StreamFilters
                                categories={CATEGORIES}
                                activeFilters={activeFilters}
                                onFilterChange={handleFilterChange}
                            />
                            <SystemStatusPanel posts={posts} />
                        </div>
                    </div>

                    {/* Timeline Feed */}
                    <div className="lg:col-span-9 relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800 ml-0 md:ml-4">
                            <div className="timeline-line-gradient absolute inset-0"></div>
                        </div>

                        {/* Search Bar (Mobile) */}
                        <div className="mb-8 pl-8 md:pl-16 lg:hidden">
                            <div className="relative">
                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-lg">search</span>
                                <input
                                    type="text"
                                    placeholder="Search transmissions..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-[#13161c] border border-gray-800 rounded-lg pl-11 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-sm"
                                />
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center h-64 pl-8 md:pl-16">
                                <div className="relative">
                                    <div className="w-16 h-16 border-2 border-emerald-500/30 rounded-full"></div>
                                    <div className="w-16 h-16 border-2 border-transparent border-t-emerald-500 rounded-full absolute top-0 left-0 animate-spin"></div>
                                </div>
                            </div>
                        ) : filteredPosts.length === 0 ? (
                            <div className="text-center py-24 pl-8 md:pl-16">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-900 mb-6 border border-gray-800">
                                    <span className="material-icons text-4xl text-gray-700">
                                        {searchQuery || activeFilters.length < 5 ? 'search_off' : 'inbox'}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-lg font-mono">
                                    {searchQuery || activeFilters.length < 5 ? 'NO MATCHING SIGNALS' : 'NO TRANSMISSIONS YET'}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-12 pl-8 md:pl-16 relative">
                                {filteredPosts.map((post, index) => (
                                    <NewsCard
                                        key={post.id}
                                        post={post}
                                        index={index}
                                        isFirst={index === 0}
                                        onClick={() => handlePostClick(post)}
                                    />
                                ))}

                                {/* End of Feed */}
                                <div className="mt-12 flex items-center gap-4 opacity-50">
                                    <div className="h-px w-12 bg-gray-700"></div>
                                    <span className="text-xs font-mono text-gray-600">END OF TRANSMISSION</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Article Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPost(null)}
                        className="fixed inset-0 z-[100] flex items-start justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md overflow-y-auto"
                    >
                        <motion.article
                            initial={{ scale: 0.95, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 40 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0c0c12] border border-gray-800 rounded-2xl w-full max-w-3xl my-8 relative shadow-2xl shadow-black/50"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 z-20 p-2.5 bg-gray-900 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors border border-gray-800"
                            >
                                <span className="material-icons">close</span>
                            </button>

                            {/* Cover Image */}
                            {selectedPost.image_url && (
                                <div className="h-56 md:h-72 w-full overflow-hidden relative rounded-t-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c12] via-transparent to-transparent z-10"></div>
                                    <img
                                        src={selectedPost.image_url}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}

                            {/* Content */}
                            <div className={`p-8 md:p-12 ${selectedPost.image_url ? '-mt-16 relative z-20' : ''}`}>
                                <div className="mb-6">
                                    <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                                        <span className={`px-3 py-1 rounded-full text-xs font-mono ${getCategoryStyle(selectedPost.category).bg} ${getCategoryStyle(selectedPost.category).text}`}>
                                            {selectedPost.category?.toUpperCase() || 'ANNOUNCEMENT'}
                                        </span>
                                        <span className="text-emerald-400 font-mono text-xs">{formatDate(selectedPost.created_at)}</span>
                                        <span className="text-gray-600 text-xs">•</span>
                                        <span className="text-gray-600 text-xs">{calculateReadingTime(selectedPost.content)} MIN READ</span>
                                    </div>
                                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                                        {selectedPost.title}
                                    </h1>
                                    <div className="bg-black/30 p-4 rounded-lg border-l-2 border-emerald-500/40">
                                        <p className="text-xs text-emerald-400 font-mono mb-1 uppercase tracking-wider">Summary</p>
                                        <p className="text-gray-400 leading-relaxed">
                                            {selectedPost.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-gradient-to-r from-emerald-500/30 via-transparent to-transparent my-8"></div>

                                {/* Rich Text Content */}
                                <div
                                    className="prose prose-invert prose-lg max-w-none
                                               prose-headings:text-white prose-headings:font-semibold
                                               prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg
                                               prose-p:text-gray-300 prose-p:leading-relaxed
                                               prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline
                                               prose-strong:text-white
                                               prose-blockquote:border-l-emerald-500 prose-blockquote:text-gray-400
                                               prose-ul:text-gray-300 prose-ol:text-gray-300
                                               prose-li:marker:text-emerald-500"
                                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedPost.content) }}
                                />

                                {/* Footer */}
                                <div className="mt-12 pt-6 border-t border-gray-800 flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-mono text-sm"
                                    >
                                        <span className="material-icons text-lg">arrow_back</span>
                                        BACK TO FEED
                                    </button>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(window.location.origin + '/nucleus#' + selectedPost.id);
                                            alert('Link copied to clipboard!');
                                        }}
                                        className="flex items-center gap-2 text-gray-500 hover:text-emerald-400 transition-colors font-mono text-sm"
                                    >
                                        <span className="material-icons text-lg">share</span>
                                        SHARE
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-3 bg-gray-900 hover:bg-gray-800 border border-gray-800 rounded-full text-gray-400 hover:text-emerald-400 transition-all shadow-lg z-50"
                title="Back to top"
            >
                <span className="material-icons">keyboard_arrow_up</span>
            </button>
        </section>
    );
};

export default Nucleus;
