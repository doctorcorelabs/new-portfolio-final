import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import TiptapEditor from './TiptapEditor';
import DOMPurify from 'dompurify';

const CATEGORIES = [
    { value: 'Announcement', label: 'Announcement', color: 'emerald' },
    { value: 'Research', label: 'Research Update', color: 'blue' },
    { value: 'Project', label: 'Project', color: 'purple' },
    { value: 'Personal', label: 'Personal', color: 'amber' },
    { value: 'Changelog', label: 'Changelog', color: 'cyan' },
];

const getCategoryStyle = (category) => {
    const styles = {
        Announcement: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
        Research: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
        Project: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
        Personal: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
        Changelog: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
    };
    return styles[category] || styles.Announcement;
};

const NucleusAdmin = () => {
    const [session, setSession] = useState(null);
    const [userRole, setUserRole] = useState(null); // 'admin' or 'contributor'
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        content: '',
        image_url: '',
        category: 'Announcement',
        is_published: true,
        impact_score: 80
    });
    const [editingId, setEditingId] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [previewMode, setPreviewMode] = useState(false);
    const [filter, setFilter] = useState('all');

    // Login State
    const [authLoading, setAuthLoading] = useState(false);
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const fileInputRef = useRef(null);

    useEffect(() => {
        // Check active session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            if (session) fetchUserRole(session.user.id);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            if (session) fetchUserRole(session.user.id);
            else setUserRole(null);
        });

        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        if (session) fetchPosts();
    }, [session]);

    const fetchUserRole = async (userId) => {
        try {
            const { data, error } = await supabase
                .from('nucleus_profiles')
                .select('role')
                .eq('id', userId)
                .single();

            if (data) setUserRole(data.role);
            // If no profile found (e.g. legacy/manual user), default to contributor (safe fallback) or null
        } catch (error) {
            console.error('Error fetching role:', error);
        }
    };

    const fetchPosts = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from('nucleus_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setPosts(data || []);
        } catch (error) {
            console.error('Error fetching posts:', error);
            // showMessage('error', 'Failed to fetch posts'); // Don't spam error on mount
        } finally {
            setLoading(false);
        }
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setAuthLoading(true);
        try {
            // Using username to construct pseudo-email
            const email = `${loginData.username.toLowerCase().trim()}@nucleus.local`;
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: loginData.password,
            });

            if (error) throw error;
            showMessage('success', 'Authentication Successful');
        } catch (error) {
            console.error('Login error:', error);
            showMessage('error', 'Authentication Failed: Invalid credentials');
        } finally {
            setAuthLoading(false);
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setPosts([]);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleContentChange = (newContent) => {
        setFormData({ ...formData, content: newContent });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            showMessage('error', 'Please select an image file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            showMessage('error', 'Image must be less than 5MB');
            return;
        }

        try {
            setUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
            const filePath = `covers/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('nucleus-images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('nucleus-images')
                .getPublicUrl(filePath);

            setFormData({ ...formData, image_url: publicUrl });
            showMessage('success', 'Image uploaded successfully');
        } catch (error) {
            console.error('Error uploading image:', error);
            showMessage('error', 'Failed to upload image. Ensure bucket exists.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const isContributor = userRole !== 'admin';

            // Force draft if contributor
            const payload = {
                ...formData,
                is_published: isContributor ? false : formData.is_published,
            };

            if (editingId) {
                const { error } = await supabase
                    .from('nucleus_posts')
                    .update(payload)
                    .eq('id', editingId);
                if (error) throw error;
                showMessage('success', 'Post updated successfully');
            } else {
                const { error } = await supabase
                    .from('nucleus_posts')
                    .insert([{ ...payload, author_id: session.user.id }]); // Add author_id
                if (error) throw error;
                showMessage('success', isContributor ? 'Draft submitted successfully' : 'Post created successfully');
            }

            resetForm();
            fetchPosts();
        } catch (error) {
            console.error('Error saving post:', error);
            showMessage('error', 'Failed to save post: ' + error.message);
        }
    };

    const resetForm = () => {
        setFormData({ title: '', summary: '', content: '', image_url: '', category: 'Announcement', is_published: true, impact_score: 80 });
        setEditingId(null);
        setPreviewMode(false);
    };

    const handleEdit = (post) => {
        setFormData({
            title: post.title,
            summary: post.summary,
            content: post.content,
            image_url: post.image_url || '',
            category: post.category || 'Announcement',
            is_published: post.is_published !== false,
            impact_score: post.impact_score || 60
        });
        setEditingId(post.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this post?')) return;

        try {
            const { error } = await supabase
                .from('nucleus_posts')
                .delete()
                .eq('id', id);

            if (error) throw error;
            showMessage('success', 'Post deleted successfully');
            fetchPosts();
        } catch (error) {
            console.error('Error deleting post:', error);
            showMessage('error', 'Failed to delete post');
        }
    };

    const togglePublish = async (post) => {
        if (userRole !== 'admin') return; // Security check
        try {
            const { error } = await supabase
                .from('nucleus_posts')
                .update({ is_published: !post.is_published })
                .eq('id', post.id);

            if (error) throw error;
            showMessage('success', post.is_published ? 'Post unpublished' : 'Post published');
            fetchPosts();
        } catch (error) {
            console.error('Error toggling publish:', error);
            showMessage('error', 'Failed to update post');
        }
    };

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    };

    const filteredPosts = posts.filter(post => {
        if (filter === 'published') return post.is_published !== false;
        if (filter === 'draft') return post.is_published === false;
        return true;
    });

    // Login Screen
    if (!session) {
        return (
            <div className="min-h-screen py-24 px-6 bg-[#050505] text-gray-300 font-sans flex items-center justify-center">
                {/* Background Layers */}
                <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
                <div className="fixed inset-0 bio-grid-pattern z-0 opacity-40 pointer-events-none"></div>

                <div className="relative z-10 w-full max-w-md bg-[#13161c]/90 backdrop-blur-md border border-gray-800 rounded-xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/5 backdrop-blur-sm w-fit">
                            <span className="material-icons text-emerald-500 text-[14px]">lock</span>
                            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Secure Access</span>
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-tight mb-1">
                            Nucleus <span className="text-emerald-500">Terminal</span>
                        </h1>
                        <p className="text-xs font-mono text-gray-500">Identify yourself to proceed</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Username_ID</label>
                            <div className="relative">
                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm">person</span>
                                <input
                                    type="text"
                                    name="username"
                                    value={loginData.username}
                                    onChange={handleLoginChange}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 pl-10 focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-700 font-mono text-sm"
                                    placeholder="Enter username..."
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Access_Key</label>
                            <div className="relative">
                                <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-sm">key</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginData.password}
                                    onChange={handleLoginChange}
                                    required
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 pl-10 focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-700 font-mono text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {message.text && (
                            <div className={`p-3 rounded border text-xs font-mono flex items-center gap-2 ${message.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'}`}>
                                <span className="material-icons text-sm">{message.type === 'error' ? 'error_outline' : 'check_circle'}</span>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={authLoading}
                            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest mt-4"
                        >
                            {authLoading ? (
                                <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                            ) : (
                                <>
                                    <span className="material-icons text-sm">login</span>
                                    AUTHENTICATE
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    // Admin Dashboard
    return (
        <div className="min-h-screen py-24 px-6 bg-[#050505] text-gray-300 font-sans">
            {/* Background Layers */}
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
            <div className="fixed inset-0 bio-grid-pattern z-0 opacity-40 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-2 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-500/5 backdrop-blur-sm w-fit">
                            <span className="material-icons text-emerald-500 text-[14px]">admin_panel_settings</span>
                            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Admin Terminal</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">
                            Nucleus <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Control Center</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <div className="text-xs font-mono text-emerald-500 uppercase tracking-wider">{userRole || 'USER'}</div>
                            <div className="text-[10px] font-mono text-gray-500">{session.user.email}</div>
                        </div>
                        <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded border border-emerald-500/20 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            ONLINE
                        </span>
                        <button
                            onClick={handleLogout}
                            className="p-2 border border-gray-700 bg-gray-800 text-gray-400 hover:text-white rounded hover:bg-gray-700 transition-colors"
                            title="Sign Out"
                        >
                            <span className="material-icons text-sm">logout</span>
                        </button>
                    </div>
                </div>

                {/* Toast Message */}
                <AnimatePresence>
                    {message.text && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`fixed top-24 right-6 z-50 p-4 rounded-lg flex items-center gap-3 shadow-lg backdrop-blur-md border ${message.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-200' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'}`}
                        >
                            <span className="material-icons text-lg">{message.type === 'error' ? 'error_outline' : 'check_circle'}</span>
                            <span className="font-mono text-sm">{message.text}</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
                    {/* Form Section - Left */}
                    <div className="xl:col-span-2">
                        <div className="bg-[#13161c]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 sticky top-24 shadow-2xl">
                            <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                                    <span className="material-icons text-emerald-500 text-sm">{editingId ? 'edit' : 'add_circle'}</span>
                                    {editingId ? 'EDIT_NODE' : 'NEW_ENTRY'}
                                </h2>
                                {formData.title && (
                                    <button
                                        type="button"
                                        onClick={() => setPreviewMode(!previewMode)}
                                        className={`text-[10px] font-mono px-3 py-1.5 rounded transition-all uppercase tracking-wider ${previewMode ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'}`}
                                    >
                                        {previewMode ? 'Edit Mode' : 'Preview'}
                                    </button>
                                )}
                            </div>

                            {previewMode ? (
                                /* Preview Mode */
                                <div className="space-y-4">
                                    <div className="bg-[#0c0c12] rounded-lg p-6 border border-gray-800">
                                        {formData.image_url && (
                                            <img src={formData.image_url} alt="Cover" className="w-full h-40 object-cover rounded mb-4 opacity-80" />
                                        )}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase ${getCategoryStyle(formData.category).bg} ${getCategoryStyle(formData.category).text} border ${getCategoryStyle(formData.category).border}`}>
                                                {formData.category}
                                            </span>
                                            {!formData.is_published && (
                                                <span className="text-[10px] px-2 py-0.5 rounded font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">Draft</span>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{formData.title || 'Untitled'}</h3>
                                        <p className="text-gray-400 text-sm mb-4 font-mono border-l-2 border-emerald-500/40 pl-3">{formData.summary || 'No summary'}</p>
                                        <div className="prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(formData.content) }} />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setPreviewMode(false)}
                                        className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded font-mono text-xs uppercase tracking-widest transition-colors border border-gray-700"
                                    >
                                        RETURN TO TERMINAL
                                    </button>
                                </div>
                            ) : (
                                /* Edit Mode */
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Headline_Title</label>
                                        <input
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 text-white placeholder-gray-700 transition-all font-mono text-sm"
                                            placeholder="Enter transmission title..."
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Signal_Type</label>
                                            <select
                                                name="category"
                                                value={formData.category}
                                                onChange={handleChange}
                                                className="w-full bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-emerald-500/50 text-gray-300 transition-all text-sm appearance-none cursor-pointer"
                                            >
                                                {CATEGORIES.map(cat => (
                                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Visibility Toggle - Only for Admins */}
                                        {userRole === 'admin' ? (
                                            <div>
                                                <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Visibility</label>
                                                <label className="flex items-center gap-3 bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 cursor-pointer hover:border-gray-700 transition-all h-[46px]">
                                                    <input
                                                        type="checkbox"
                                                        name="is_published"
                                                        checked={formData.is_published}
                                                        onChange={handleChange}
                                                        className="w-4 h-4 rounded border-gray-600 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0 bg-transparent"
                                                    />
                                                    <span className="text-xs font-mono text-gray-300 uppercase">{formData.is_published ? 'LIVE' : 'OFFLINE'}</span>
                                                </label>
                                            </div>
                                        ) : (
                                            <div>
                                                <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Visibility</label>
                                                <div className="flex items-center gap-3 bg-[#0a0a0a/50] border border-gray-800 border-dashed rounded px-4 py-3 h-[46px]">
                                                    <span className="text-xs font-mono text-amber-500 uppercase">DRAFT ONLY</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest">Impact_Score</label>
                                            <span className="text-xs font-mono text-emerald-400">{formData.impact_score}/100</span>
                                        </div>
                                        <div className="flex items-center gap-4 bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3">
                                            <input
                                                type="range"
                                                name="impact_score"
                                                min="0"
                                                max="100"
                                                value={formData.impact_score}
                                                onChange={handleChange}
                                                className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Briefing_Summary</label>
                                        <textarea
                                            name="summary"
                                            value={formData.summary}
                                            onChange={handleChange}
                                            required
                                            rows="2"
                                            className="w-full bg-[#0a0a0a] border border-gray-800 rounded px-4 py-3 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 text-white placeholder-gray-700 resize-none transition-all text-sm"
                                            placeholder="Transmission abstract..."
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Main_Payload</label>
                                        <div className="border border-gray-800 rounded overflow-hidden">
                                            <TiptapEditor
                                                content={formData.content}
                                                onUpdate={handleContentChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-mono text-gray-500 mb-2 uppercase tracking-widest">Visual_Asset</label>
                                        <div className="space-y-3">
                                            {formData.image_url && (
                                                <div className="relative group border border-gray-800 rounded p-1 bg-[#0a0a0a]">
                                                    <img src={formData.image_url} alt="Preview" className="w-full h-32 object-cover rounded opacity-70" />
                                                    <button
                                                        type="button"
                                                        onClick={() => setFormData({ ...formData, image_url: '' })}
                                                        className="absolute top-2 right-2 p-1 bg-red-900/80 hover:bg-red-600 text-white rounded opacity-0 group-hover:opacity-100 transition-all"
                                                    >
                                                        <span className="material-icons text-sm">close</span>
                                                    </button>
                                                </div>
                                            )}
                                            <div className="flex gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => fileInputRef.current?.click()}
                                                    disabled={uploading}
                                                    className="flex-1 flex items-center justify-center gap-2 bg-[#0a0a0a] border border-dashed border-gray-700 rounded px-4 py-3 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all text-gray-400 hover:text-emerald-400 disabled:opacity-50 text-xs font-mono uppercase"
                                                >
                                                    {uploading ? (
                                                        <>
                                                            <div className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                                            UPLOADING...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="material-icons text-sm">cloud_upload</span>
                                                            UPLOAD FILE
                                                        </>
                                                    )}
                                                </button>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleImageUpload}
                                                    className="hidden"
                                                />
                                            </div>
                                            <input
                                                type="text"
                                                name="image_url"
                                                value={formData.image_url}
                                                onChange={handleChange}
                                                className="w-full bg-[#0a0a0a] border border-gray-800 rounded px-4 py-2 focus:outline-none focus:border-emerald-500/50 text-gray-400 placeholder-gray-700 transition-all text-xs font-mono"
                                                placeholder="OR PASTE SECURE URL..."
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-4 border-t border-gray-800">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-5 rounded transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest"
                                        >
                                            <span className="material-icons text-sm">{editingId ? 'save' : 'send'}</span>
                                            {editingId ? 'UPDATE_NODE' : (userRole === 'admin' && formData.is_published ? 'INITIATE_UPLOAD' : 'SAVE_DRAFT')}
                                        </button>
                                        {editingId && (
                                            <button
                                                type="button"
                                                onClick={resetForm}
                                                className="px-5 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded transition-colors border border-gray-700 font-mono text-xs uppercase"
                                            >
                                                CANCEL
                                            </button>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* List Section - Right */}
                    <div className="xl:col-span-3 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                            <h2 className="text-lg font-bold text-white font-mono uppercase tracking-wide">Signal Log</h2>
                            <div className="flex items-center gap-2 p-1 bg-[#13161c] border border-gray-800 rounded">
                                {['all', 'published', 'draft'].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`text-[10px] font-mono px-3 py-1.5 rounded transition-all uppercase ${filter === f ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-gray-500 hover:text-gray-300'}`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center p-16 bg-[#13161c]/80 rounded-xl border border-gray-800">
                                <div className="animate-spin rounded-full h-8 w-8 border-2 border-emerald-500 border-t-transparent"></div>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {filteredPosts.map((post, index) => {
                                    const style = getCategoryStyle(post.category);
                                    // Admins can toggle publish, Contributors can only see status
                                    const canToggle = userRole === 'admin';
                                    const canDelete = userRole === 'admin';
                                    const canEdit = userRole === 'admin' || (post.author_id === session?.user?.id && post.is_published === false);

                                    return (
                                        <motion.div
                                            key={post.id}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`group bg-[#13161c]/60 hover:bg-[#13161c] border border-gray-800 rounded-lg p-5 transition-all flex justify-between gap-4 relative overflow-hidden`}
                                        >
                                            {/* Status Indicator Line */}
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 ${post.is_published !== false ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>

                                            <div className="flex-1 min-w-0 pl-3">
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase border ${style.bg} ${style.text} ${style.border}`}>
                                                        {post.category || 'ANNOUNCEMENT'}
                                                    </span>
                                                    {post.is_published === false && (
                                                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20">DRAFT_MODE</span>
                                                    )}
                                                </div>
                                                <h3 className="font-bold text-white group-hover:text-emerald-400 transition-colors truncate mb-1">
                                                    {post.title}
                                                </h3>
                                                <p className="text-gray-500 text-xs line-clamp-1 mb-2 font-mono">{post.summary}</p>
                                                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <span className="material-icons text-[12px]">event</span>
                                                        {new Date(post.created_at).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }).replace(/\//g, '.')}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <span className="material-icons text-[12px]">bolt</span>
                                                        SCORE: {post.impact_score || 0}
                                                    </span>
                                                    {post.views > 0 && (
                                                        <span className="flex items-center gap-1">
                                                            <span className="material-icons text-[12px]">visibility</span>
                                                            {post.views}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                {canToggle && (
                                                    <button
                                                        onClick={() => togglePublish(post)}
                                                        className={`p-2 rounded border transition-all ${post.is_published !== false ? 'border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10' : 'border-amber-500/30 text-amber-500 hover:bg-amber-500/10'}`}
                                                        title={post.is_published !== false ? 'Deactivate' : 'Activate'}
                                                    >
                                                        <span className="material-icons text-lg">{post.is_published !== false ? 'visibility' : 'visibility_off'}</span>
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleEdit(post)}
                                                    className={`p-2 border border-blue-500/30 text-blue-400 rounded hover:bg-blue-500/10 transition-all ${!canEdit ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                    disabled={!canEdit}
                                                    title="Modify"
                                                >
                                                    <span className="material-icons text-lg">edit</span>
                                                </button>
                                                {canDelete && (
                                                    <button
                                                        onClick={() => handleDelete(post.id)}
                                                        className="p-2 border border-red-500/30 text-red-400 rounded hover:bg-red-500/10 transition-all"
                                                        title="Purge"
                                                    >
                                                        <span className="material-icons text-lg">delete_outline</span>
                                                    </button>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}

                                {filteredPosts.length === 0 && (
                                    <div className="text-center py-16 text-gray-600 bg-[#13161c]/40 rounded-xl border border-dashed border-gray-800">
                                        <span className="material-icons text-4xl mb-3 block text-gray-700">dns</span>
                                        <span className="font-mono text-xs uppercase">No {filter !== 'all' ? filter : ''} signals detected</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NucleusAdmin;
