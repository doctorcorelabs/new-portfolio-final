import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Education', href: '/education' },
        { name: 'Honors & Awards', href: '/awards' },
        { name: 'Research', href: '/research' },
        { name: 'Experience', href: '/experience' },
        { name: 'Certifications', href: '/certifications' },
        { name: 'Nucleus', href: '/nucleus' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl border-b border-white/5 bg-background-dark/70">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Brand */}
                <div className="flex-shrink-0">
                    <Link to="/" className="text-xl font-bold text-white tracking-tight">
                        DaivanLabs<span className="text-gray-500">.</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
                    {links.map((link) => {


                        const href = link.href;
                        return href.startsWith('/') ? (
                            <Link
                                key={link.name}
                                to={href}
                                className="text-gray-400 hover:text-white transition-colors hover:bg-white/5 px-3 py-1.5 rounded-lg"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={href}
                                className="text-gray-400 hover:text-white transition-colors hover:bg-white/5 px-3 py-1.5 rounded-lg"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-400 hover:text-white focus:outline-none bg-white/5 p-2 rounded-lg"
                    >
                        <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-background-dark/95 backdrop-blur-xl border-b border-white/10">
                    <div className="px-6 py-4 space-y-3 flex flex-col">
                        {links.map((link) => {


                            const href = link.href;
                            return href.startsWith('/') ? (
                                <Link
                                    key={link.name}
                                    to={href}
                                    className="text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <a
                                    key={link.name}
                                    href={href}
                                    className="text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
