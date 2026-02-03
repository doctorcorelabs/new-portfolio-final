import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ResearchPage.css';

const Molecule3D = () => {
    return (
        <div className="molecule-wrapper">
            <div className="molecule-structure">
                <div className="bond-line"></div>
                <div className="bond-line"></div>
                <div className="bond-line"></div>
                <div className="bond-line"></div>
                <div className="bond-line"></div>
                <div className="atom center"></div>
                <div className="atom p1"></div>
                <div className="atom p2"></div>
                <div className="atom p3"></div>
                <div className="atom p4"></div>
                <div className="atom p5"></div>
                <div className="atom p6"></div>
            </div>
        </div>
    );
};

const ResearchPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const publications = [
        {
            title: "Exploration of Amomum cardamomum Seed-Derived Compounds: LC-MS Profiling, Network Pharmacology, and Computational Analyses for Innovative Multi-Targeted Breast Cancer Therapy",
            type: "JOURNAL",
            venue: "Research",
            date: "2025",
            impact: "High",
            abstract: "Investigating the potential of Amomum cardamomum seeds as a source for multi-targeted breast cancer therapy through LC-MS profiling and network pharmacology.",
            authors: ["DFJS", "Et al."],
            status: "Published",
            chartType: "line"
        },
        {
            title: "Peran Microbiome Gut Axis Dalam Perkembangan Dan Kekambuhan Chronic Myeloid Leukemia: Systematic Review",
            type: "REVIEW",
            venue: "Systematic Review",
            date: "2024",
            impact: "Review",
            abstract: "A systematic review analyzing the role of the gut microbiome axis in the development and relapse of Chronic Myeloid Leukemia.",
            authors: ["DFJS"],
            status: "Completed",
            chartType: "scatter"
        },
        {
            title: "A Comparative Analysis Of Colonoscopy With Computer-Aided Detection And Standard Colonoscopy In The Detection Of Colorectal Adenomas And Polyps: A Systematic Review",
            type: "REVIEW",
            venue: "Systematic Review",
            date: "2024",
            impact: "Clinical",
            abstract: "Comparing the efficacy of AI-assisted colonoscopy versus standard methods in detecting colorectal adenomas and polyps.",
            authors: ["DFJS"],
            status: "Completed",
            chartType: "bar"
        },
        {
            title: "The Significant Roles of The Renin-Angiotensin-Aldosterone System Metabolism on the Development of Hypertension",
            type: "CONFERENCE",
            venue: "IC-CVD",
            date: "2024",
            impact: "Conf",
            abstract: "Presented at the 4th International Conference on Cardiovascular Diseases. Discussing RAAS metabolism impacts on hypertension development.",
            authors: ["DFJS"],
            status: "Presented",
            chartType: "line"
        }
    ];

    const awards = [
        "Gold Medal - International Science and Invention Fair (ISIF) 2025",
        "Silver Medal - Indonesia International Applied Science Project Olympiad (I2ASPO) 2025",
        "Gold Medal - World Robotics & Computer Science Olympiad (WRCSO) 2025",
        "Most Outstanding Student UII 2025"
    ];

    return (
        <div className="bg-[#0a0a0a] text-gray-300 min-h-screen relative overflow-x-hidden selection:bg-accent-emerald selection:text-white">
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>

            {/* Grid Pattern Overlay */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%2310b981' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
            ></div>

            <div className="w-full relative z-10">
                <Navbar />

                <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 pt-24 sm:pt-32">
                    <section className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 border border-emerald-500/30 px-3 py-1 rounded bg-emerald-900/10 backdrop-blur-sm w-fit animate-fade-in-up">
                            <span className="material-symbols-outlined text-emerald-400 text-[14px]">science</span>
                            <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Publications & Patents</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up delay-100">
                            SCIENTIFIC<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">PUBLICATIONS</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-emerald-500 pl-4 sm:pl-6 animate-fade-in-up delay-200">
                            Disseminating breakthroughs in medical science and biotechnology. A curated collection of peer-reviewed papers, systematic reviews, and international presentations by Daivan Febri Juan Setiya.
                        </p>
                    </section>

                    {/* Mobile Honors Section */}
                    <div className="lg:hidden mb-8">
                        <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2 mb-4">Recent Honors</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {awards.slice(0, 4).map((award, idx) => (
                                <div key={idx} className="text-xs text-gray-400 font-mono flex items-start gap-2 bg-[#13161c]/50 p-3 rounded border border-[#1f2937]">
                                    <span className="text-emerald-500 mt-0.5">▹</span>
                                    <span className="line-clamp-2">{award}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen">
                        {/* Sidebar with Molecule */}
                        <div className="lg:col-span-4 hidden lg:block relative">
                            <div className="sticky top-32 h-[500px] w-full border border-[#1f2937] bg-[#13161c]/50 rounded-lg backdrop-blur-sm overflow-hidden flex flex-col items-center justify-center">
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="text-[10px] font-mono text-emerald-400 mb-1">MOLECULAR_STRUCT_V2</div>
                                    <div className="flex gap-1">
                                        <div className="h-1 w-1 bg-emerald-400"></div>
                                        <div className="h-1 w-1 bg-emerald-400 opacity-50"></div>
                                        <div className="h-1 w-1 bg-emerald-400 opacity-25"></div>
                                    </div>
                                </div>

                                <Molecule3D />

                                <div className="absolute bottom-4 left-4 z-20 text-left w-full pr-8">
                                    <div className="flex justify-between items-end border-t border-gray-800 pt-2 w-full">
                                        <div>
                                            <div className="text-[10px] font-mono text-gray-500">COMPOUND: BIO-ACTIVE</div>
                                            <div className="text-[10px] font-mono text-emerald-400">BINDING AFFINITY: HIGH</div>
                                        </div>
                                        <span className="material-symbols-outlined text-gray-700 animate-spin">cyclone</span>
                                    </div>
                                </div>
                            </div>

                            {/* Brief Stats */}
                            <div className="mt-8 space-y-4">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-gray-800 pb-2">Recent Honors</h3>
                                <ul className="space-y-3">
                                    {awards.map((award, idx) => (
                                        <li key={idx} className="text-xs text-gray-400 font-mono flex items-start gap-2">
                                            <span className="text-emerald-500 mt-0.5">▹</span>
                                            {award}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Timeline */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="flex items-center justify-between border-b border-[#1f2937] pb-6">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-emerald-400">article</span>
                                        RESEARCH PAPERS
                                    </h2>
                                    <div className="h-4 w-[1px] bg-[#333]"></div>
                                    <span className="text-xs font-mono text-gray-400">Total Count: {publications.length}</span>
                                </div>
                                <span className="text-[10px] font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded hidden md:block">FILTER: ALL</span>
                            </div>

                            <div className="relative pl-4 sm:pl-8 space-y-8 sm:space-y-12">
                                {/* The Vertical Line */}
                                <div className="timeline-line"></div>

                                {publications.map((pub, index) => (
                                    <div key={index} className="relative card-emerald-border bg-[#13161c] p-0 rounded-sm group overflow-hidden">
                                        <div className="pub-marker-icon"></div>

                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <span className="material-symbols-outlined text-8xl text-emerald-500">
                                                {pub.type === 'JOURNAL' ? 'menu_book' : pub.type === 'REVIEW' ? 'find_in_page' : 'groups'}
                                            </span>
                                        </div>

                                        {/* Dynamic Mini Chart based on type */}
                                        <div className="chart-mini">
                                            {pub.chartType === 'line' && (
                                                <>
                                                    <svg height="100%" preserveAspectRatio="none" viewBox="0 0 400 60" width="100%">
                                                        <path className="chart-line" d="M0,50 Q20,10 40,40 T80,30 T120,50 T160,20 T200,45 T240,15 T280,35 T320,25 T360,40 T400,30"></path>
                                                    </svg>
                                                    <div className="absolute bottom-1 right-2 text-[8px] font-mono text-emerald-400">FIG 1.{index}: TRAJECTORY</div>
                                                </>
                                            )}
                                            {pub.chartType === 'scatter' && (
                                                <>
                                                    <svg height="100%" viewBox="0 0 400 60" width="100%">
                                                        <circle className="scatter-dot" cx="50" cy="30" r="3" style={{ animationDelay: '0s' }}></circle>
                                                        <circle className="scatter-dot" cx="90" cy="45" r="3" style={{ animationDelay: '0.2s' }}></circle>
                                                        <circle className="scatter-dot" cx="150" cy="15" r="3" style={{ animationDelay: '0.5s' }}></circle>
                                                        <circle className="scatter-dot" cx="200" cy="35" r="3" style={{ animationDelay: '0.1s' }}></circle>
                                                        <circle className="scatter-dot" cx="280" cy="20" r="3" style={{ animationDelay: '0.7s' }}></circle>
                                                        <circle className="scatter-dot" cx="340" cy="50" r="3" style={{ animationDelay: '0.3s' }}></circle>
                                                    </svg>
                                                    <div className="absolute bottom-1 right-2 text-[8px] font-mono text-emerald-400">FIG 2.{index}: CLUSTERS</div>
                                                </>
                                            )}
                                            {pub.chartType === 'bar' && (
                                                <div className="flex items-end justify-around px-10 pb-2 gap-2 h-full pt-4">
                                                    <div className="w-full bg-gray-800 h-1/3 hover:bg-emerald-500 transition-colors duration-500"></div>
                                                    <div className="w-full bg-gray-800 h-2/3 hover:bg-emerald-500 transition-colors duration-500"></div>
                                                    <div className="w-full bg-emerald-500 h-full shadow-[0_0_10px_#10b981]"></div>
                                                    <div className="w-full bg-gray-800 h-1/2 hover:bg-emerald-500 transition-colors duration-500"></div>
                                                    <div className="absolute bottom-1 right-2 text-[8px] font-mono text-emerald-400">FIG 3.{index}: EFFICACY</div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-4 sm:p-6 relative z-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`px-1.5 py-0.5 text-[10px] font-bold font-mono rounded-sm ${pub.type === 'JOURNAL' ? 'bg-emerald-500 text-black' : 'bg-[#1f2937] text-gray-300'}`}>
                                                            {pub.type}
                                                        </span>
                                                        <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">{pub.venue}</span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
                                                        {pub.title}
                                                    </h3>
                                                </div>
                                                <div className="text-right mt-4 md:mt-0 flex flex-col items-end min-w-fit pl-4">
                                                    <span className="block text-white font-mono text-sm font-bold">{pub.date}</span>
                                                    <div className="flex items-center gap-1 mt-1">
                                                        <span className="text-[10px] text-gray-500 uppercase">Impact</span>
                                                        <span className="text-[10px] bg-gray-800 text-emerald-400 px-1 rounded font-mono">{pub.impact}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
                                                <span className="text-gray-500 font-mono text-xs block mb-2 uppercase tracking-wide">Abstract (Brief)</span>
                                                {pub.abstract}
                                            </p>

                                            <div className="flex flex-wrap gap-2 border-t border-[#1f2937] pt-4 items-center">
                                                <span className="text-[10px] text-gray-500 font-mono mr-2">AUTHORS:</span>
                                                <div className="flex -space-x-2">
                                                    <div className="w-6 h-6 rounded-full bg-gray-700 border border-black flex items-center justify-center text-[8px] text-white font-bold">DF</div>
                                                </div>
                                                <div className="flex-grow"></div>
                                                <button className="text-emerald-500 text-xs font-mono font-bold hover:underline flex items-center gap-1">
                                                    VIEW DETAILS <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ResearchPage;
