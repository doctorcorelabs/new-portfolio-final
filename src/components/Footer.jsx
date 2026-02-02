import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="mt-32 pt-16 border-t border-white/5 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-32 mb-16">
                {/* Brand */}
                <div className="max-w-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Daivan<span className="text-gray-500">.</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Creative Technologist crafting digital experiences at the intersection of AI, design, and code.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-24">
                    {/* Links */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm" href="#about">About</a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm" href="#education">Education</a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm" href="#research">Research</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    {location.pathname !== '/education' && (
                        <div>
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Connect</h4>
                            <ul className="space-y-3">
                                <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#">Twitter / X <span className="material-icons text-xs">arrow_outward</span></a></li>
                                <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#">GitHub <span className="material-icons text-xs">arrow_outward</span></a></li>
                                <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="#">LinkedIn <span className="material-icons text-xs">arrow_outward</span></a></li>
                                <li><a className="text-gray-400 hover:text-white transition-colors text-sm" href="mailto:contact@daivan.com">Email</a></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray-500">
                <p>© 2026 Daivan Febri Juan Setiya. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Crafted with React, Tailwind CSS & Coffee ☕</p>
            </div>
        </footer>
    );
};

export default Footer;
