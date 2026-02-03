import React from 'react';
import { Link } from 'react-router-dom';

const Certifications = () => {
    // Summary data: Top 4 recent certifications from CertificationsPage
    const certs = [
        {
            name: "Antimicrobial Resistance and Infection Prevention and Control",
            issuer: "World Health Organization (WHO)",
            year: "2024",
            icon: "health_and_safety"
        },
        {
            name: "Inequality Monitoring in Sexual Reproductive Health",
            issuer: "World Health Organization (WHO)",
            year: "2024",
            icon: "monitor_heart"
        },
        {
            name: "Gender Equality and Human Rights in Climate Action",
            issuer: "UNITAR",
            year: "2024",
            icon: "public"
        },
        {
            name: "Chemicals and Health",
            issuer: "The Johns Hopkins University",
            year: "2024",
            icon: "science"
        },
    ];

    return (
        <div className="w-full py-20 border-t border-white/5">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-white"></span> Certifications
                </h2>
                <Link to="/certifications" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    View All Certifications <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {certs.map((cert, index) => (
                    <div key={index} className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-center group backdrop-blur-sm flex flex-col items-center h-full">
                        <div className="w-12 h-12 mb-4 bg-white/10 rounded-full flex items-center justify-center text-gray-400 group-hover:text-emerald-400 transition-colors">
                            <span className="material-symbols-outlined text-xl">{cert.icon}</span>
                        </div>
                        <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{cert.name}</h3>
                        <p className="text-xs text-gray-500 mb-auto">{cert.issuer}</p>
                        <p className="text-[10px] text-gray-600 mt-3 font-mono border border-white/10 px-2 py-0.5 rounded">{cert.year}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link to="/certifications" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    View All Certifications <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
};

export default Certifications;

