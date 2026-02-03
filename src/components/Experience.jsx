import React from 'react';
import { Link } from 'react-router-dom';

const Experience = () => {
    // Summary data: top 3 most recent/significant roles from ExperiencePage
    const experiences = [
        {
            year: "JUNE 2025 — PRESENT",
            role: "Founder",
            company: "DAIVANLABS",
            description: "Founder of DaivanLabs, applying coding skills ('Code') to develop healthcare-related tools ('Cure') and build professional connections ('Connect'). Managing project development and operations."
        },
        {
            year: "SEP 2024 — FEB 2025",
            role: "Speaker & Mentor",
            company: "KAMPUSINOVATIF.ID",
            description: "Served as a speaker and mentor through the KampusInovatif.id platform, sharing insights and guidance on successfully applying for the Beasiswa Unggulan scholarship."
        },
        {
            year: "OCT 2023 — PRESENT",
            role: "Awardee Beasiswa Unggulan",
            company: "MINISTRY OF EDUCATION",
            description: "Recipient of the prestigious scholarship 'Beasiswa Unggulan' awarded by the Indonesian Ministry of Education, Culture, Research, and Technology."
        }
    ];

    return (
        <div className="w-full">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-white"></span> Experience
                </h2>
                <Link to="/experience" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    View Full Resume <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
            </div>

            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <div key={index} className="group grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div className="text-gray-500 font-mono text-xs md:text-sm pt-1 uppercase tracking-wide">{exp.year}</div>
                        <div className="md:col-span-3">
                            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-200 transition-colors">
                                {exp.role} <span className="text-gray-500 mx-2">·</span> <span className="text-gray-400 font-normal">{exp.company}</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-light text-justify">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link to="/experience" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                    View All Experience <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
};

export default Experience;

