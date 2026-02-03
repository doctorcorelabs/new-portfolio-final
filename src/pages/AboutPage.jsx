import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './AboutPage.css';
import Footer from '../components/Footer';

const AboutPage = () => {

    // Add grid pattern to tailwind config dynamically or just use inline style/class if possible.
    // The user provided a script that extends tailwind theme. 
    // Since we are in a React app, we might need to rely on what's available or use arbitrary values.
    // The `bg-grid-pattern` was defined in the user's script. We can simulate it or add it to tailwind.config.
    // For now I'll use a style object for the background image to ensure it works without restarting build multiple times.

    const gridPattern = "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%2306b6d4\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')";

    return (
        <div className="bg-[#0a0a0a] text-gray-300 min-h-screen relative overflow-x-hidden selection-clinical font-body">
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
            <div className="w-full relative z-10 bg-fixed" style={{ backgroundImage: gridPattern }}>

                {/* Note: Navbar is handled by the main Layout usually, but the user's snippet INCLUDES a navbar. 
                    If we use the global Navbar, we should skip this one. 
                    However, the user asked to "open a new page... containing the following code".
                    The provided code HAS a navbar. I will include it as requested for this specific page 
                    or assumes this page replaces the layout for itself. 
                    Given the design looks VERY specific and different from the likely main app, 
                    I will render the page AS REQUESTED (full screen content).
                    BUT, user says "on about navigation bar... click to open new page".
                */}

                <Navbar />

                <main className="w-full">
                    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 border-b border-[#1f2937] relative overflow-hidden min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center">
                        {/* ECG Animation - SVG Based */}
                        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10"></div>
                            {/* Desktop ECG - more detailed pattern */}
                            <svg className="w-full h-full absolute inset-0 hidden md:block" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                <path className="ecg-line-bg" d="M0,50 L100,50 L110,40 L120,60 L130,50 L200,50 L210,20 L220,80 L230,50 L300,50 L310,40 L320,60 L330,50 L400,50 L410,10 L425,90 L440,50 L500,50 L510,40 L520,60 L530,50 L600,50 L610,30 L620,70 L630,50 L700,50 L710,40 L720,60 L730,50 L800,50 L810,10 L825,90 L840,50 L900,50 L910,40 L920,60 L930,50 L1000,50"></path>
                                <path className="ecg-line-main" d="M0,50 L100,50 L110,40 L120,60 L130,50 L200,50 L210,20 L220,80 L230,50 L300,50 L310,40 L320,60 L330,50 L400,50 L410,10 L425,90 L440,50 L500,50 L510,40 L520,60 L530,50 L600,50 L610,30 L620,70 L630,50 L700,50 L710,40 L720,60 L730,50 L800,50 L810,10 L825,90 L840,50 L900,50 L910,40 L920,60 L930,50 L1000,50"></path>
                            </svg>
                            {/* Mobile ECG - simplified pattern with fewer peaks */}
                            <svg className="w-full h-full absolute inset-0 md:hidden" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 100">
                                <path className="ecg-line-bg" d="M0,50 L80,50 L90,20 L100,80 L110,50 L200,50 L210,15 L225,85 L240,50 L320,50 L330,30 L340,70 L350,50 L400,50"></path>
                                <path className="ecg-line-main" d="M0,50 L80,50 L90,20 L100,80 L110,50 L200,50 L210,15 L225,85 L240,50 L320,50 L330,30 L340,70 L350,50 L400,50"></path>
                            </svg>
                        </div>
                        <div className="absolute top-10 right-12 hidden md:flex flex-col items-end opacity-50 z-20">
                            <span className="font-mono text-[10px] text-accent-cyan">GPA: 3.91 | SEM: 07</span>
                            <div className="w-32 h-[1px] bg-accent-cyan mt-1"></div>
                            <div className="flex gap-1 mt-1 justify-end">
                                <div className="w-1 h-3 bg-accent-emerald"></div>
                                <div className="w-1 h-2 bg-accent-emerald opacity-70"></div>
                                <div className="w-1 h-1 bg-accent-emerald opacity-40"></div>
                            </div>
                        </div>
                        <div className="max-w-screen-2xl mx-auto relative z-30 w-full">
                            <div className="inline-flex items-center gap-2 mb-6 border border-accent-cyan/30 px-3 py-1 rounded bg-accent-cyan/10 backdrop-blur-sm">
                                <span className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-mono text-accent-cyan tracking-widest uppercase">Research Active</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter text-white mb-6 sm:mb-8 leading-[0.9]">
                                MEDICAL<br />
                                <span className="text-gradient-header">RESEARCHER</span>
                            </h1>
                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-12 mt-8 md:mt-12 border-t border-dashed border-[#333] pt-6 md:pt-8">
                                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl">
                                    "A fourth year undergraduate student majoring in Medicine. Deeply passionate about acquiring new knowledge and aiming to <span className="text-accent-cyan font-normal">enhance health standards</span> in Indonesia."
                                </p>
                                <div className="text-right hidden lg:block border-l border-[#333] pl-6 bg-[#0a0a0a]/50 backdrop-blur-sm p-4 rounded-r border-y border-r flex-shrink-0 min-w-[280px]">
                                    <p className="text-[10px] font-mono text-accent-cyan mb-1 uppercase tracking-wider">Current Focus</p>
                                    <p className="text-sm text-gray-200">Systematic Reviews &amp; Meta-Analysis</p>
                                    <p className="text-[10px] font-mono text-accent-cyan mt-4 mb-1 uppercase tracking-wider">Awards Status</p>
                                    <p className="text-sm text-gray-200 flex items-center justify-end gap-2">
                                        Most Outstanding Student UII <span className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-ping"></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen bg-[#0a0a0a]">
                        <div className="lg:col-span-8 border-r border-[#1f2937]">
                            <div className="p-6 md:p-12 border-b border-[#1f2937]" id="research">
                                <h2 className="text-[10px] font-bold text-accent-cyan uppercase tracking-[0.2em] mb-8 flex items-center gap-2 font-mono">
                                    <span className="material-symbols-outlined text-sm">biotech</span>
                                    Diagnostics &amp; Research
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                                    <div className="md:col-span-2 bg-[#13161c] p-8 tech-border relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <span className="material-symbols-outlined text-8xl text-accent-cyan">vital_signs</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-accent-cyan">monitor_heart</span> Research Focus
                                        </h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-mono text-accent-cyan uppercase">Systematic Review</h4>
                                                <p className="text-xs text-gray-400">PCOS, Cancer, &amp; Gut Microbiome.</p>
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-mono text-accent-cyan uppercase">Drug Discovery</h4>
                                                <p className="text-xs text-gray-400">In Silico studies for TB &amp; Breast Cancer.</p>
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-mono text-accent-cyan uppercase">Public Health</h4>
                                                <p className="text-xs text-gray-400">Stunting prevention &amp; Health Standards.</p>
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xs font-mono text-accent-cyan uppercase">MedTech</h4>
                                                <p className="text-xs text-gray-400">AI in Diagnostics (Colonoscopy).</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1 bg-[#13161c] p-8 tech-border flex flex-col justify-between h-full relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div>
                                            <span className="material-symbols-outlined text-accent-cyan mb-4">psychology_alt</span>
                                            <h3 className="text-lg font-bold text-white mb-2">Vision</h3>
                                            <p className="text-xs text-gray-400 leading-relaxed font-mono">
                                                "To bring about sustainable change and create lasting positive impacts in Indonesia's healthcare."
                                            </p>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-[#333]">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                                                    <div className="h-full bg-accent-emerald w-[98%]"></div>
                                                </div>
                                                <span className="text-[10px] text-accent-emerald font-mono">GPA 3.91</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-3 bg-[#13161c] p-8 tech-border">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                                <span className="material-symbols-outlined text-accent-cyan">science</span> Methodologies &amp; Tools
                                            </h3>
                                            <span className="text-[10px] text-gray-500 font-mono mt-2 md:mt-0 bg-[#0a0a0a] px-2 py-1 border border-[#333] text-accent-cyan">ACTIVE</span>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                                            <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded border border-[#333] hover:border-accent-cyan transition-colors group">
                                                <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-cyan mb-2">library_books</span>
                                                <span className="text-[10px] font-mono text-gray-300 text-center">Systematic Review</span>
                                            </div>
                                            <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded border border-[#333] hover:border-accent-cyan transition-colors group">
                                                <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-cyan mb-2">biotech</span>
                                                <span className="text-[10px] font-mono text-gray-300 text-center">In Silico</span>
                                            </div>
                                            <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded border border-[#333] hover:border-accent-cyan transition-colors group">
                                                <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-cyan mb-2">medical_information</span>
                                                <span className="text-[10px] font-mono text-gray-300 text-center">Clinical Research</span>
                                            </div>
                                            <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded border border-[#333] hover:border-accent-cyan transition-colors group">
                                                <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-cyan mb-2">record_voice_over</span>
                                                <span className="text-[10px] font-mono text-gray-300 text-center">Public Speaking</span>
                                            </div>
                                            <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded border border-[#333] hover:border-accent-cyan transition-colors group">
                                                <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-cyan mb-2">monitoring</span>
                                                <span className="text-[10px] font-mono text-gray-300 text-center">Data Analysis</span>
                                            </div>
                                            <div className="flex flex-col items-center p-3 bg-[#0a0a0a] rounded border border-[#333] hover:border-accent-cyan transition-colors group">
                                                <span className="material-symbols-outlined text-gray-500 group-hover:text-accent-cyan mb-2">school</span>
                                                <span className="text-[10px] font-mono text-gray-300 text-center">Mentoring</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-12 max-w-3xl">
                                    <h3 className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider mb-6 border-b border-[#333] pb-2 inline-block font-mono">
                                        Academic Journey
                                    </h3>
                                    <div className="group grid grid-cols-1 md:grid-cols-4 gap-4 relative pl-4 md:pl-0 border-l border-[#333] md:border-none">
                                        <div className="text-gray-500 text-xs font-mono md:text-right md:pr-8 py-1">2021 — Present</div>
                                        <div className="md:col-span-3">
                                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">Medical Student · Islamic University of Indonesia</h3>
                                            <p className="text-gray-400 leading-relaxed mb-4 text-sm">Maintained a GPA of 3.91 while actively leading research initiatives and student organizations.</p>
                                            <div className="flex gap-2">
                                                <span className="px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan text-[10px] rounded border border-accent-cyan/20">Medicine</span>
                                                <span className="px-2 py-0.5 bg-accent-cyan/10 text-accent-cyan text-[10px] rounded border border-accent-cyan/20">Research</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group grid grid-cols-1 md:grid-cols-4 gap-4 relative pl-4 md:pl-0 border-l border-[#333] md:border-none">
                                        <div className="text-gray-500 text-xs font-mono md:text-right md:pr-8 py-1">2025</div>
                                        <div className="md:col-span-3">
                                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">Summer School · Chulalongkorn University</h3>
                                            <p className="text-gray-400 leading-relaxed mb-4 text-sm">AASP-PECT (CPDT) Summer School 2025 Program.</p>
                                        </div>
                                    </div>
                                    <div className="group grid grid-cols-1 md:grid-cols-4 gap-4 relative pl-4 md:pl-0 border-l border-[#333] md:border-none">
                                        <div className="text-gray-500 text-xs font-mono md:text-right md:pr-8 py-1">2023 — Present</div>
                                        <div className="md:col-span-3">
                                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-cyan transition-colors">Scholarship Awardee · Beasiswa Unggulan</h3>
                                            <p className="text-gray-400 leading-relaxed mb-4 text-sm">Awarded by Ministry of Education, Culture, Research, and Technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-12 bg-[#0a0a0a]" id="projects">
                                <h2 className="text-[10px] font-bold text-accent-cyan uppercase tracking-[0.2em] mb-12 flex items-center gap-2 font-mono">
                                    <span className="material-symbols-outlined text-sm">grid_view</span>
                                    Key Research Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1f2937] border border-[#1f2937]">
                                    <div className="group relative bg-[#0a0a0a] aspect-[4/3] overflow-hidden">
                                        <img alt="PCOS Research" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1500&auto=format&fit=crop" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                        <div className="absolute top-4 right-4 text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined">qr_code_2</span>
                                        </div>
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-accent-cyan text-[10px] font-mono mb-1">SYSTEMATIC REVIEW</p>
                                                    <h3 className="text-2xl font-bold text-white mb-2">Dietary Impacts on PCOS</h3>
                                                    <p className="text-gray-400 text-sm line-clamp-2">Head of Research examining dietary interventions for women with PCOS.</p>
                                                </div>
                                                <span className="material-symbols-outlined text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative bg-[#0a0a0a] aspect-[4/3] overflow-hidden">
                                        <img alt="Cancer Research" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1500&auto=format&fit=crop" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-accent-cyan text-[10px] font-mono mb-1">TOXICOLOGY STUDY</p>
                                                    <h3 className="text-2xl font-bold text-white mb-2">Bisphenol A &amp; Cancer</h3>
                                                    <p className="text-gray-400 text-sm">Systematic review on Bisphenol A in food/beverage containers and cancer risk.</p>
                                                </div>
                                                <span className="material-symbols-outlined text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative bg-[#0a0a0a] aspect-[4/3] overflow-hidden">
                                        <img alt="Drug Discovery" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1500&auto=format&fit=crop" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-accent-cyan text-[10px] font-mono mb-1">IN SILICO STUDY</p>
                                                    <h3 className="text-2xl font-bold text-white mb-2">TB Drug Discovery</h3>
                                                    <p className="text-gray-400 text-sm">Collaborative research on drug discovery for Tuberculosis.</p>
                                                </div>
                                                <span className="material-symbols-outlined text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group relative bg-[#0a0a0a] aspect-[4/3] overflow-hidden">
                                        <img alt="Gut Microbiome" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=1500&auto=format&fit=crop" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                                        <div className="absolute bottom-0 left-0 p-8 w-full">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-accent-cyan text-[10px] font-mono mb-1">PUBLICATION</p>
                                                    <h3 className="text-2xl font-bold text-white mb-2">Gut Axis &amp; Leukemia</h3>
                                                    <p className="text-gray-400 text-sm">Role of microbiome gut axis in development of Chronic Myeloid Leukemia.</p>
                                                </div>
                                                <span className="material-symbols-outlined text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 bg-[#0c0c0c] relative block" id="stream">
                            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none"></div>
                            <div className="lg:sticky lg:top-20 p-6 sm:p-8 md:p-12 lg:h-screen lg:overflow-y-auto z-10 custom-scrollbar">
                                <h2 className="text-[10px] font-bold text-accent-cyan uppercase tracking-[0.2em] mb-12 flex items-center gap-2 font-mono">
                                    <span className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse"></span> Achievements Log
                                </h2>
                                <div className="relative border-l border-[#1f2937] pl-8 space-y-12">
                                    <div className="relative group">
                                        <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-[#0a0a0a] border-2 border-[#1f2937] group-hover:border-accent-cyan transition-colors z-20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[8px] text-accent-emerald heart-beat">emoji_events</span>
                                        </div>
                                        <div className="absolute -left-[32px] top-[11px] h-[2px] w-[24px] bg-[#1f2937] group-hover:bg-accent-cyan transition-colors"></div>
                                        <p className="text-[10px] text-accent-cyan mb-2 font-mono">2025</p>
                                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                                            <span className="text-white font-semibold block mb-1">Most Outstanding Student UII 2025</span>
                                            Recognized as the top student at Universitas Islam Indonesia.
                                            <span className="block mt-2 text-accent-cyan text-xs hover:underline cursor-pointer font-mono">#Mapres #UII</span>
                                        </p>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-[#0a0a0a] border-2 border-[#1f2937] group-hover:border-accent-cyan transition-colors z-20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[8px] text-accent-emerald heart-beat" style={{ animationDelay: '0.2s' }}>emoji_events</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mb-2 font-mono">2025</p>
                                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                                            <span className="text-white font-semibold block mb-1">3rd Most Outstanding Student LLDIKTI V</span>
                                            Achieved regional recognition in the LLDIKTI V region.
                                        </p>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-[#0a0a0a] border-2 border-[#1f2937] group-hover:border-accent-cyan transition-colors z-20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[8px] text-accent-emerald heart-beat" style={{ animationDelay: '0.4s' }}>flight_takeoff</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mb-2 font-mono">2025</p>
                                        <p className="text-sm text-gray-300 leading-relaxed mb-4 font-light">
                                            <span className="text-white font-semibold block mb-1">Summer School in Thailand</span>
                                            Participated in AASP-PECT (CPDT) Summer School at Chulalongkorn University.
                                        </p>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full bg-[#0a0a0a] border-2 border-[#1f2937] group-hover:border-accent-cyan transition-colors z-20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[8px] text-accent-emerald heart-beat" style={{ animationDelay: '0.6s' }}>verified</span>
                                        </div>
                                        <p className="text-[10px] text-gray-500 mb-2 font-mono">2023</p>
                                        <p className="text-sm text-gray-300 leading-relaxed font-light">
                                            <span className="text-white font-semibold block mb-1">Beasiswa Unggulan Awardee</span>
                                            Selected for the prestigious scholarship by the Ministry of Education &amp; Culture.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
                <a className="fixed bottom-8 right-8 z-50 p-3 bg-accent-cyan text-black rounded shadow-lg hover:shadow-cyan-500/50 hover:scale-110 transition-all hidden md:flex items-center justify-center" href="#">
                    <span className="material-symbols-outlined">arrow_upward</span>
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
