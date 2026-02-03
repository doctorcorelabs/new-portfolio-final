import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Turnstile } from '@marsidev/react-turnstile';

const WORKER_URL = import.meta.env.VITE_AI_WORKER_URL || 'http://localhost:8787';
const TURNSTILE_SITE_KEY = '0x4AAAAAABJj5Q0iqgbTzacQ';

const ArticleChatbot = ({ article, isOpen }) => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isTurnstileVerified, setIsTurnstileVerified] = useState(false);
    const [turnstileToken, setTurnstileToken] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-scroll to bottom when new messages appear
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    // Reset verification when article changes
    useEffect(() => {
        if (article?.id) {
            setMessages([]);
            setIsTurnstileVerified(false);
            setTurnstileToken(null);
        }
    }, [article?.id]);

    // Close chat when modal closes
    useEffect(() => {
        if (!isOpen) {
            setIsChatOpen(false);
        }
    }, [isOpen]);

    // Focus input when chat opens and verified
    useEffect(() => {
        if (isChatOpen && isTurnstileVerified) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isChatOpen, isTurnstileVerified]);

    // Handle Turnstile success
    const handleTurnstileSuccess = (token) => {
        setTurnstileToken(token);
        setIsTurnstileVerified(true);
        // Show welcome message after verification
        setMessages([{
            role: 'assistant',
            content: `Hi! I'm here to help you understand **${article.title}**. Ask me anything about this article! 📚`
        }]);
    };

    const sendMessage = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        try {
            const isFirstMessage = messages.filter(m => m.role === 'user').length === 0;

            const payload = {
                articleId: article.id,
                articleTitle: article.title,
                articleContent: article.content,
                message: input,
                conversationHistory: messages.filter(m => m.role !== 'system')
            };

            // Include Turnstile token for first message
            if (isFirstMessage && turnstileToken) {
                payload.turnstileToken = turnstileToken;
            }

            console.log('[Chatbot] Sending request to:', WORKER_URL);
            console.log('[Chatbot] Payload:', { ...payload, articleContent: '[truncated]' });

            const response = await fetch(WORKER_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            console.log('[Chatbot] Response status:', response.status);

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    throw new Error(`Server error (${response.status})`);
                }
                throw new Error(errorData.error || 'Failed to get response');
            }

            const data = await response.json();
            console.log('[Chatbot] Success response received');

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.response
            }]);
        } catch (error) {
            console.error('[Chatbot] Error details:', {
                message: error.message,
                name: error.name,
                workerUrl: WORKER_URL,
                userAgent: navigator.userAgent
            });

            let errorMessage = '❌ Sorry, I encountered an error. Please try again.';

            // More specific error messages
            if (error.message.includes('Failed to fetch') || error.name === 'TypeError') {
                errorMessage = `❌ Connection failed. Please check your internet connection.\n\n*Debug: Using ${WORKER_URL}*`;
            } else if (error.message) {
                errorMessage = `❌ ${error.message}`;
            }

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: errorMessage
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const clearConversation = () => {
        setMessages([{
            role: 'assistant',
            content: `Conversation cleared! Ask me anything about **${article.title}**. 📚`
        }]);
    };

    if (!isOpen || !article) return null;

    return (
        <>
            {/* Floating Chatbot Button */}
            <AnimatePresence>
                {!isChatOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                        onClick={() => setIsChatOpen(true)}
                        className="fixed bottom-8 right-8 z-[110] w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center group"
                        title="Ask about this article"
                    >
                        <span className="material-icons text-white text-2xl md:text-3xl">chat</span>
                        <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping-slow"></div>

                        {/* Tooltip */}
                        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-mono rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Ask about article
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Panel */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="chatbot-panel fixed bottom-8 right-8 z-[110] bg-[#0c0c12] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="chatbot-header bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border-b border-gray-800 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                <span className="material-icons text-emerald-400 text-lg flex-shrink-0">article</span>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-mono text-emerald-400 uppercase">Article Assistant</div>
                                    <div className="text-xs text-gray-400 truncate">{article.title}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                                {isTurnstileVerified && (
                                    <button
                                        onClick={clearConversation}
                                        className="p-1.5 hover:bg-white/5 rounded transition-colors"
                                        title="Clear conversation"
                                    >
                                        <span className="material-icons text-gray-400 text-lg">refresh</span>
                                    </button>
                                )}
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="p-1.5 hover:bg-white/5 rounded transition-colors"
                                    title="Minimize"
                                >
                                    <span className="material-icons text-gray-400 text-lg">expand_more</span>
                                </button>
                            </div>
                        </div>

                        {/* Messages or Turnstile */}
                        <div className="chatbot-messages flex-1 overflow-y-auto p-4">
                            {!isTurnstileVerified ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="turnstile-container flex flex-col items-center justify-center h-full"
                                >
                                    <div className="text-center mb-6">
                                        <span className="material-icons text-emerald-400 text-5xl mb-3 animate-pulse">shield</span>
                                        <h3 className="text-base font-semibold text-white mb-2">Security Verification</h3>
                                        <p className="text-sm text-gray-400 font-mono max-w-xs mx-auto">
                                            Please verify you're human to start chatting with the AI assistant
                                        </p>
                                    </div>
                                    <div className="turnstile-widget">
                                        <Turnstile
                                            siteKey={TURNSTILE_SITE_KEY}
                                            onSuccess={handleTurnstileSuccess}
                                            theme="dark"
                                            size="normal"
                                        />
                                    </div>
                                    <div className="mt-4 text-xs text-gray-600 font-mono text-center max-w-xs">
                                        <span className="material-icons text-[10px] align-middle">info</span> This helps protect against automated bots
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.map((msg, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-2' : 'order-1'}`}>
                                                <div className={`message-bubble ${msg.role === 'user' ? 'message-user' : 'message-assistant'}`}>
                                                    {msg.role === 'assistant' ? (
                                                        <div className="prose prose-invert prose-sm max-w-none
                                                            prose-p:text-gray-300 prose-p:my-1 prose-p:leading-relaxed
                                                            prose-strong:text-white prose-strong:font-bold
                                                            prose-em:text-emerald-300 prose-em:italic
                                                            prose-ul:text-gray-300 prose-ul:my-1
                                                            prose-ol:text-gray-300 prose-ol:my-1
                                                            prose-li:my-0.5 prose-li:marker:text-emerald-400
                                                            prose-headings:text-white prose-headings:mt-2 prose-headings:mb-1
                                                            prose-h2:text-base prose-h3:text-sm
                                                            prose-code:text-cyan-400 prose-code:bg-black/30 prose-code:px-1 prose-code:rounded">
                                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                                {msg.content}
                                                            </ReactMarkdown>
                                                        </div>
                                                    ) : (
                                                        <p className="text-sm text-white leading-relaxed">{msg.content}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className={`flex items-end ${msg.role === 'user' ? 'order-1 mr-2' : 'order-2 ml-2'}`}>
                                                {msg.role === 'user' ? (
                                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                                                        <span className="material-icons text-white text-sm">person</span>
                                                    </div>
                                                ) : (
                                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                                        <span className="material-icons text-white text-sm">smart_toy</span>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Typing Indicator */}
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-start"
                                        >
                                            <div className="flex items-end">
                                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center mr-2">
                                                    <span className="material-icons text-white text-sm">smart_toy</span>
                                                </div>
                                                <div className="message-bubble message-assistant">
                                                    <div className="typing-indicator">
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="chatbot-input border-t border-gray-800 p-4 bg-[#13161c]/50">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={
                                        isTurnstileVerified
                                            ? "Ask about this article..."
                                            : "Complete verification to chat"
                                    }
                                    disabled={!isTurnstileVerified || isTyping}
                                    className="flex-1 bg-black/40 border border-gray-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all disabled:opacity-50"
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!isTurnstileVerified || !input.trim() || isTyping}
                                    className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 disabled:from-gray-700 disabled:to-gray-700 rounded-lg transition-all disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    <span className="material-icons text-white text-lg">send</span>
                                </button>
                            </div>
                            {isTurnstileVerified && (
                                <div className="text-[10px] text-gray-600 mt-2 font-mono">
                                    Press Enter to send • Shift+Enter for new line
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ArticleChatbot;
