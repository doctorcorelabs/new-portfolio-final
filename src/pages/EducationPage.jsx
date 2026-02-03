import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './EducationPage.css';

const EducationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-[#0a0a0a] text-gray-300 min-h-screen relative overflow-x-hidden font-body">
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>

            <Navbar />

            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-12 relative z-10">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24 min-h-[50vh] lg:min-h-[60vh] pt-8 sm:pt-12">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 mb-2 border border-accent-cyan/30 px-3 py-1 rounded bg-accent-cyan/10 backdrop-blur-sm w-fit">
                            <span className="material-symbols-outlined text-accent-cyan text-[14px]">school</span>
                            <span className="text-[10px] font-mono text-accent-cyan tracking-widest uppercase">Academic Database v1.0</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                            THE ACADEMIC<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-400 to-gray-600">SIGNAL</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-accent-cyan pl-4 sm:pl-6">
                            Decoding the foundational knowledge structures that power current bio-engineering and medical research. A timeline of rigorous inquiry and certification.
                        </p>
                        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8 max-w-md">
                            <div className="border border-[#1f2937] bg-[#13161c] p-3 sm:p-4 text-center hover:border-accent-cyan transition-colors card-cyan-border">
                                <div className="text-xl sm:text-2xl font-mono text-white mb-1">3.91</div>
                                <div className="text-[9px] sm:text-[10px] text-accent-cyan uppercase tracking-wider">Cum. GPA</div>
                            </div>
                            <div className="border border-[#1f2937] bg-[#13161c] p-3 sm:p-4 text-center hover:border-accent-cyan transition-colors card-cyan-border">
                                <div className="text-xl sm:text-2xl font-mono text-white mb-1">MED</div>
                                <div className="text-[9px] sm:text-[10px] text-accent-cyan uppercase tracking-wider">Major</div>
                            </div>
                            <div className="border border-[#1f2937] bg-[#13161c] p-3 sm:p-4 text-center hover:border-accent-cyan transition-colors card-cyan-border">
                                <div className="text-xl sm:text-2xl font-mono text-white mb-1">20+</div>
                                <div className="text-[9px] sm:text-[10px] text-accent-cyan uppercase tracking-wider">Certs</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full flex items-center justify-center microscope-container">
                        <div className="microscope-abstract relative w-64 h-64">
                            <div className="absolute inset-0 border border-accent-cyan/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border border-dashed border-accent-emerald/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <div className="lens-ring w-32 h-32 z-10"></div>
                            <div className="lens-ring w-24 h-24 z-20 !border-accent-emerald/80" style={{ transform: 'translate(-50%, -50%) rotateX(60deg)' }}></div>
                            <div className="lens-ring w-16 h-16 z-30 bg-accent-cyan/10 backdrop-blur-sm"></div>
                            <div className="absolute top-0 right-0 p-2 bg-black/80 border border-accent-cyan/50 text-[10px] font-mono text-accent-cyan rounded translate-x-12 translate-y-12 animate-pulse">
                                ANALYZING...
                            </div>
                            <div className="absolute top-1/2 left-1/2 w-1 h-32 bg-gradient-to-b from-transparent via-accent-cyan to-transparent transform -translate-x-1/2 translate-y-8 blur-sm"></div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-[#1f2937] pt-8 sm:pt-12">
                    <div className="lg:col-span-7 space-y-10">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent-cyan">history_edu</span>
                                CLINICAL TIMELINE
                            </h2>
                            <span className="text-[10px] font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded">SORT: CHRONOLOGICAL_DESC</span>
                        </div>
                        <div className="relative pl-4 sm:pl-8 space-y-6 sm:space-y-8">
                            <div className="timeline-line"></div>

                            <div className="relative card-cyan-border bg-[#13161c] p-4 sm:p-6 rounded-sm tech-marker group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-[#1f2937] pb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">Summer School Program</h3>
                                        <p className="text-sm text-gray-400 font-mono mt-1">Chulalongkorn University, Thailand</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="block text-accent-emerald font-mono text-xs font-bold">2025</span>
                                        <span className="block text-[10px] text-gray-500 mt-1 uppercase tracking-wider">AASP-PECT (CPDT)</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        Selected participant for the intensive summer program focusing on Pharmaceutical and Clinical development.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-[#0a0a0a] border border-[#333] text-[10px] text-gray-400 font-mono rounded hover:border-accent-cyan transition-colors">International</span>
                                        <span className="px-2 py-1 bg-[#0a0a0a] border border-[#333] text-[10px] text-gray-400 font-mono rounded hover:border-accent-cyan transition-colors">Clinical Tech</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative card-cyan-border bg-[#13161c] p-4 sm:p-6 rounded-sm tech-marker group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-[#1f2937] pb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">Bachelor of Medicine</h3>
                                        <p className="text-sm text-gray-400 font-mono mt-1">Islamic University of Indonesia</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="block text-accent-emerald font-mono text-xs font-bold">2021 - Present</span>
                                        <span className="block text-[10px] text-gray-500 mt-1 uppercase tracking-wider">GPA: 3.91 / 4.0</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        <span className="text-accent-cyan font-mono text-xs block mb-1">ACHIEVEMENTS:</span>
                                        Most Outstanding Student UII 2025. Awardee Beasiswa Unggulan Kemendikbudristek 2023.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-[#0a0a0a] border border-[#333] text-[10px] text-gray-400 font-mono rounded hover:border-accent-cyan transition-colors">Research</span>
                                        <span className="px-2 py-1 bg-[#0a0a0a] border border-[#333] text-[10px] text-gray-400 font-mono rounded hover:border-accent-cyan transition-colors">Public Health</span>
                                        <span className="px-2 py-1 bg-[#0a0a0a] border border-[#333] text-[10px] text-gray-400 font-mono rounded hover:border-accent-cyan transition-colors">Leadership</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative card-cyan-border bg-[#13161c] p-4 sm:p-6 rounded-sm tech-marker group">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b border-[#1f2937] pb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-white group-hover:text-accent-cyan transition-colors">Senior High School</h3>
                                        <p className="text-sm text-gray-400 font-mono mt-1">SMAN 1 Blora</p>
                                    </div>
                                    <div className="text-right mt-2 md:mt-0">
                                        <span className="block text-accent-emerald font-mono text-xs font-bold">Graduated</span>
                                        <span className="block text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Top 3 Student</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-300 leading-relaxed">
                                        3rd Most Outstanding Student based on Final Student Examination.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-10">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent-cyan">hub</span>
                                KNOWLEDGE MAP
                            </h2>
                            <span className="w-2 h-2 bg-accent-emerald rounded-full animate-pulse"></span>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-[#13161c] p-6 border border-[#1f2937] rounded relative overflow-hidden group hover:border-accent-cyan/50 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-6xl text-accent-cyan">neurology</span>
                                </div>
                                <h3 className="text-sm font-bold text-accent-cyan uppercase tracking-widest mb-6 font-mono border-b border-[#333] pb-2 inline-block">Research Methodology</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                                            <span>SYSTEMATIC REVIEW</span>
                                            <span className="text-accent-emerald">95%</span>
                                        </div>
                                        <div className="scale-bar">
                                            <div className="scale-fill w-[95%] bg-gradient-to-r from-cyan-600 to-cyan-400"></div>
                                            <div className="scale-tick left-[25%]"></div>
                                            <div className="scale-tick left-[50%]"></div>
                                            <div className="scale-tick left-[75%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                                            <span>META-ANALYSIS</span>
                                            <span className="text-accent-emerald">90%</span>
                                        </div>
                                        <div className="scale-bar">
                                            <div className="scale-fill w-[90%] bg-gradient-to-r from-cyan-600 to-cyan-400"></div>
                                            <div className="scale-tick left-[25%]"></div>
                                            <div className="scale-tick left-[50%]"></div>
                                            <div className="scale-tick left-[75%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#13161c] p-6 border border-[#1f2937] rounded relative overflow-hidden group hover:border-accent-cyan/50 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-6xl text-accent-emerald">genetics</span>
                                </div>
                                <h3 className="text-sm font-bold text-accent-emerald uppercase tracking-widest mb-6 font-mono border-b border-[#333] pb-2 inline-block">Medical Science</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                                            <span>CLINICAL DIAGNOSTICS</span>
                                            <span className="text-accent-emerald">85%</span>
                                        </div>
                                        <div className="scale-bar">
                                            <div className="scale-fill w-[85%] bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
                                            <div className="scale-tick left-[25%]"></div>
                                            <div className="scale-tick left-[50%]"></div>
                                            <div className="scale-tick left-[75%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1">
                                            <span>PUBLIC HEALTH</span>
                                            <span className="text-accent-emerald">90%</span>
                                        </div>
                                        <div className="scale-bar">
                                            <div className="scale-fill w-[90%] bg-gradient-to-r from-emerald-600 to-emerald-400"></div>
                                            <div className="scale-tick left-[25%]"></div>
                                            <div className="scale-tick left-[50%]"></div>
                                            <div className="scale-tick left-[75%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-[#1f2937]">
                            <h4 className="text-[10px] font-mono text-gray-500 uppercase mb-4 tracking-wider">Key Certifications</h4>
                            <div className="flex flex-wrap gap-3">
                                <div className="flex items-center gap-2 bg-[#0c0c0c] border border-[#333] px-3 py-2 rounded-sm hover:border-accent-cyan/50 transition-colors">
                                    <span className="material-symbols-outlined text-accent-cyan text-sm">verified</span>
                                    <span className="text-xs text-gray-300">WHO: Antimicrobial Resistance</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#0c0c0c] border border-[#333] px-3 py-2 rounded-sm hover:border-accent-cyan/50 transition-colors">
                                    <span className="material-symbols-outlined text-accent-cyan text-sm">verified</span>
                                    <span className="text-xs text-gray-300">Stanford: Food &amp; Health</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#0c0c0c] border border-[#333] px-3 py-2 rounded-sm hover:border-accent-cyan/50 transition-colors">
                                    <span className="material-symbols-outlined text-accent-cyan text-sm">verified</span>
                                    <span className="text-xs text-gray-300">JHU: Contact Tracing</span>
                                </div>
                                <div className="flex items-center gap-2 bg-[#0c0c0c] border border-[#333] px-3 py-2 rounded-sm hover:border-accent-cyan/50 transition-colors">
                                    <span className="material-symbols-outlined text-accent-cyan text-sm">verified</span>
                                    <span className="text-xs text-gray-300">U. of Colorado: Science of Exercise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default EducationPage;
