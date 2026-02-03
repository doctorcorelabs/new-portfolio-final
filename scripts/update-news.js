import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables from .env file for local execution
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Configuration
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY; // OR SERVICE_ROLE_KEY if you want to bypass RLS

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Error: Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const FEED_URLS = [
    'https://rss.medicalnewstoday.com/featured.xml',
    'https://www.sciencedaily.com/rss/health_medicine.xml',
    'https://www.webmd.com/rss/health-news.xml'
];

const RSS2JSON_API = 'https://api.rss2json.com/v1/api.json?rss_url=';

async function updateNews() {
    console.log(`[${new Date().toISOString()}] Starting daily news update...`);

    try {
        // 1. Fetch fresh from RSS
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

        // 2. Filter & Sort (Last 7 Days)
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const validNews = allItems.filter(item => {
            const itemDate = new Date(item.pubDate);
            return itemDate >= sevenDaysAgo;
        }).sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

        if (validNews.length > 0) {
            const topNews = validNews.slice(0, 25);
            console.log(`Found ${topNews.length} valid news items.`);

            // 3. Sync to Supabase (Upsert)
            const upsertData = topNews.map(item => ({
                title: item.title,
                link: item.link,
                pub_date: new Date(item.pubDate).toISOString(),
                source: item.source,
                created_at: new Date().toISOString() // refresh timestamp
            }));

            const { error } = await supabase
                .from('medical_news')
                .upsert(upsertData, { onConflict: 'title', ignoreDuplicates: true });

            if (error) {
                console.error('Supabase Upsert Error:', error);
                process.exit(1);
            } else {
                console.log('Successfully updated medical_news table.');
            }
        } else {
            console.log('No recent news found.');
        }

    } catch (error) {
        console.error("Failed to fetch news:", error);
        process.exit(1);
    }
}

updateNews();
