import React from 'react';

const NetworkViz = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-60">
        <div className="relative w-24 h-24">
            <div className="absolute inset-0 border border-emerald-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#34d399] z-10"></div>

            {/* Orbiting Nodes */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-500 rounded-full -translate-x-1/2 shadow-lg"></div>
                <div className="absolute bottom-2 right-1/4 w-1.5 h-1.5 bg-teal-400 rounded-full shadow-lg"></div>
                <div className="absolute top-1/3 left-0 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-lg"></div>

                {/* Connecting Lines in SVG relative to rotation container */}
                <svg className="absolute inset-0 w-full h-full overflow-visible" style={{ transform: 'rotate(-45deg)' }}>
                    <line x1="50%" y1="50%" x2="50%" y2="0%" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
                    <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
                </svg>
            </div>
        </div>
    </div>
);

const MicroViz = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-60 overflow-hidden">
        {/* Abstract organic flow */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
        <div className="absolute w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full animate-pulse"></div>

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-emerald-300 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce" style={{ animationDuration: '5s' }}></div>

        {/* Wave Lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path d="M0,40 Q50,20 100,40" fill="none" stroke="#34d399" strokeWidth="1" strokeOpacity="0.2" className="animate-pulse" />
            <path d="M0,50 Q50,30 100,50" fill="none" stroke="#10b981" strokeWidth="1" strokeOpacity="0.1" />
        </svg>
    </div>
);

const AiViz = () => (
    <div className="absolute inset-0 flex items-center justify-center opacity-60 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>

        {/* Animated Scan Line (using standard classes for effect) */}
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent top-1/2 -translate-y-1/2 animate-pulse"></div>

        {/* Target Reticle */}
        <div className="relative w-16 h-16 border border-emerald-500/30 rounded flex items-center justify-center">
            <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t-2 border-l-2 border-emerald-400"></div>
            <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t-2 border-r-2 border-emerald-400"></div>
            <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b-2 border-l-2 border-emerald-400"></div>
            <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b-2 border-r-2 border-emerald-400"></div>
            <span className="material-icons text-emerald-500/50 text-xl animate-ping" style={{ animationDuration: '2s' }}>filter_center_focus</span>
        </div>
    </div>
);
const Research = () => {
    const researchData = [
        {
            title: "Amomum Cardamomum for Breast Cancer Therapy",
            publication: "Research Journal",
            year: "2025",
            abstract: "Investigating Amomum cardamomum seeds as a source for multi-targeted breast cancer therapy through LC-MS profiling and network pharmacology.",
            type: "Journal"
        },
        {
            title: "Microbiome Gut Axis & CML Relapse",
            publication: "Systematic Review",
            year: "2024",
            abstract: "Analyzing the role of the gut microbiome axis in the development and relapse of Chronic Myeloid Leukemia.",
            type: "Review"
        },
        {
            title: "AI vs Standard Colonoscopy",
            publication: "Systematic Review",
            year: "2024",
            abstract: "Comparing the efficacy of AI-assisted colonoscopy versus standard methods in detecting colorectal adenomas and polyps.",
            type: "Review"
        }
    ];

    return (
        <div id="research" className="py-20 border-t border-white/5 relative">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-white"></span> Research
                </h2>
                <a href="/research" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    View All <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {researchData.map((item, index) => (
                    <div key={index} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-2xl">
                        <div className="h-40 bg-black/40 relative overflow-hidden group">
                            {/* Abstract Geometric Visualization */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80 z-0"></div>

                            <div className="absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-110">
                                {index === 0 && <NetworkViz />}
                                {index === 1 && <MicroViz />}
                                {index === 2 && <AiViz />}
                            </div>

                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-300 border border-white/10">
                                {item.year}
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 font-light">
                                {item.abstract}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-white/5 pt-4">
                                <span className="material-icons text-sm">article</span>
                                <span>{item.publication}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
