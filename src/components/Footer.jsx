import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="mt-16 sm:mt-32 pt-12 sm:pt-16 px-4 sm:px-6 border-t border-white/5 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-32 mb-12 md:mb-16">
                {/* Brand */}
                <div className="max-w-sm">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                        Daivan<span className="text-gray-500">.</span>
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                        Medical Student & Researcher dedicated to enhancing healthcare standards through innovation, education, and sustainable change.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                    {/* Links */}


                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 sm:mb-4">Connect</h4>
                        <ul className="space-y-2 sm:space-y-3">
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="https://www.linkedin.com/in/daivan-febri-juan-setiya/" target="_blank" rel="noopener noreferrer">LinkedIn <span className="material-icons text-xs">arrow_outward</span></a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="https://orcid.org/0009-0000-2528-8459" target="_blank" rel="noopener noreferrer">ORCID <span className="material-icons text-xs">arrow_outward</span></a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="https://www.instagram.com/ddaiivan/" target="_blank" rel="noopener noreferrer">Instagram <span className="material-icons text-xs">arrow_outward</span></a></li>
                            <li><a className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2" href="mailto:daivanfebrijuansetiya@gmail.com">Email <span className="material-icons text-xs">email</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center py-6 sm:pt-8 border-t border-white/5 text-xs text-gray-500">
                <p>© 2026 Daivan Febri Juan Setiya. All rights reserved.</p>
                <p className="mt-2 md:mt-0">Crafted with React, Tailwind CSS & Coffee ☕</p>
            </div>
        </footer>
    );
};

export default Footer;
