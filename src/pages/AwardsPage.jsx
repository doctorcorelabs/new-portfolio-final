import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AwardsPage.css';

const AwardsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const awardsData = [
        // --- NATIONAL HONORS (13 items) ---
        {
            id: 'n1',
            category: 'national',
            title: 'Most Outstanding Student UII 2025',
            issuer: 'Islamic University of Indonesia',
            year: '2025',
            desc: 'Awarded to the top student of the university based on academic excellence and achievements.',
            tags: ['1st Place', 'University Level'],
            highlight: true
        },
        {
            id: 'n2',
            category: 'national',
            title: '3rd Most Outstanding Student LLDIKTI V',
            issuer: 'LLDIKTI Region V',
            year: '2025',
            desc: 'Regional recognition for outstanding high-achieving student in Yogyakarta region.',
            tags: ['Regional', 'Academic'],
            highlight: true
        },
        {
            id: 'n3',
            category: 'national',
            title: 'Awardee Beasiswa Unggulan 2023',
            issuer: 'Ministry of Education, Culture, Research, and Technology',
            year: '2023',
            desc: 'Prestigious national scholarship for outstanding students.',
            tags: ['Scholarship', 'National'],
            highlight: true
        },
        {
            id: 'n4',
            category: 'national',
            title: 'Head of Research: Dietary Impacts in Women with PCOS',
            issuer: 'Review Research Grant',
            year: '2024',
            desc: 'Leading a research project on dietary impacts in women with Polycystic Ovary Syndrome.',
            tags: ['Research Grant', 'Leader'],
            highlight: false
        },
        {
            id: 'n5',
            category: 'national',
            title: 'Grant: Bisphenol A in Canned Food',
            issuer: 'Faculty of Medicine, UII',
            year: '2024',
            desc: 'Grant for Systematic Review: Bisphenol A in canned and plastic food/beverage. Led by dr. Eko Andriyanto M.Sc.',
            tags: ['Research Grant', 'Toxicology'],
            highlight: false
        },
        {
            id: 'n6',
            category: 'national',
            title: 'Grant: Bisphenol A on Cancers',
            issuer: 'Faculty of Medicine, UII',
            year: '2024',
            desc: 'Grant for Systematic Review. Led by dr. Kuswati.',
            tags: ['Research Grant', 'Oncology'],
            highlight: false
        },
        {
            id: 'n7',
            category: 'national',
            title: 'Research Collaborator: Drug Discovery Kapulaga',
            issuer: 'Breast Cancer Study',
            year: '2024',
            desc: 'In Silico Study of Kapulaga on Breast Cancer.',
            tags: ['Collaborator', 'Drug Discovery'],
            highlight: false
        },
        {
            id: 'n8',
            category: 'national',
            title: 'Research Collaborator: Drug Discovery Tuberculosis',
            issuer: 'In Silico Study',
            year: '2024',
            desc: 'Research collaboration on Tuberculosis drug discovery.',
            tags: ['Collaborator', 'In Silico'],
            highlight: false
        },
        {
            id: 'n9',
            category: 'national',
            title: 'Gold Medal & Special Award - IIF 2025',
            issuer: 'Invention and Innovation Fair',
            year: '2025',
            desc: '1st Author. Recognized for innovative research contribution.',
            tags: ['Gold Medal', 'Innovation'],
            highlight: true
        },
        {
            id: 'n10',
            category: 'national',
            title: '1st Place Scientific Essay',
            issuer: 'Scientific Fair SMART FK UII',
            year: '2023',
            desc: 'Winner of the scientific essay competition.',
            tags: ['Essay', 'Scientific Writing'],
            highlight: false
        },
        {
            id: 'n11',
            category: 'national',
            title: 'Bronze Medal - IRPOCO 2023',
            issuer: 'Innovation And Research Poster Competition',
            year: '2023',
            desc: 'International Scale competition. Recognized for research poster.',
            tags: ['Bronze Medal', 'Poster'],
            highlight: false
        },
        {
            id: 'n12',
            category: 'national',
            title: '2nd Winner National Essay',
            issuer: 'RJJ Undiksha',
            year: '2023',
            desc: 'National essay competition winner.',
            tags: ['Essay', 'National'],
            highlight: false
        },
        {
            id: 'n13',
            category: 'national',
            title: '3rd Most Outstanding Student (High School)',
            issuer: 'SMAN 1 Blora',
            year: '2021',
            desc: 'Based on Final Student Examination.',
            tags: ['High School', 'Academic'],
            highlight: false
        },

        // --- INTERNATIONAL ACHIEVEMENTS (12 items) ---
        {
            id: 'i1',
            category: 'international',
            title: 'Gold Medal - ISIF 2025',
            issuer: 'International Science and Invention Fair',
            year: '2025',
            desc: '1st Author. Top award for scientific invention.',
            tags: ['Gold Medal', 'International'],
            highlight: true
        },
        {
            id: 'i2',
            category: 'international',
            title: 'Gold Medal - WRCSO 2025',
            issuer: 'World Robotics & Computer Science Olympiad',
            year: '2025',
            desc: '1st Author. Excellence in robotics and CS application.',
            tags: ['Gold Medal', 'Tech'],
            highlight: true
        },
        {
            id: 'i3',
            category: 'international',
            title: 'Gold Medal - IICYMS 2025',
            issuer: 'Intl Invention Competition For Young Moslem Scientists',
            year: '2025',
            desc: '1st Author. Gold medalist.',
            tags: ['Gold Medal', 'Invention'],
            highlight: true
        },
        {
            id: 'i4',
            category: 'international',
            title: 'Gold Medal - WSEEC 2025',
            issuer: 'World Science, Environment and Engineering Competition',
            year: '2025',
            desc: '1st Author. Engineering category winner.',
            tags: ['Gold Medal', 'Engineering'],
            highlight: true
        },
        {
            id: 'i5',
            category: 'international',
            title: 'Gold Medal - ISIF 2024',
            issuer: 'International Science and Invention Fair',
            year: '2024',
            desc: '1st Author. Consecutive gold medal achievement.',
            tags: ['Gold Medal', 'Science'],
            highlight: true
        },
        {
            id: 'i6',
            category: 'international',
            title: 'Silver Medal - I2ASPO 2025',
            issuer: 'Indonesia International Applied Science Project Olympiad',
            year: '2025',
            desc: '1st Author. Applied science project.',
            tags: ['Silver Medal', 'Applied Science'],
            highlight: false
        },
        {
            id: 'i7',
            category: 'international',
            title: 'Silver Medal - BISF 2025',
            issuer: 'Bali International Science Fair',
            year: '2025',
            desc: '1st Author. Silver medalist.',
            tags: ['Silver Medal', 'Science Fair'],
            highlight: false
        },
        {
            id: 'i8',
            category: 'international',
            title: 'Silver Medal - JISF 2025',
            issuer: 'Jakarta International Science Fair',
            year: '2025',
            desc: '1st Author. Silver medalist.',
            tags: ['Silver Medal', 'Science Fair'],
            highlight: false
        },
        {
            id: 'i9',
            category: 'international',
            title: 'Travel Grant Recipient - ICDM 2025',
            issuer: 'Intl Congress of Diabetes and Metabolism',
            year: '2025',
            desc: 'Grant to attend prestigious conference.',
            tags: ['Travel Grant', 'Conference'],
            highlight: false
        },
        {
            id: 'i10',
            category: 'international',
            title: 'ePoster Presentation - ENDO 2024',
            issuer: '4th World Congress of GI Endoscopy (Seoul)',
            year: '2024',
            desc: '1st Author. Presented at COEX Convention & Exhibition Center.',
            tags: ['Poster', 'Korea', 'Endoscopy'],
            highlight: false
        },
        {
            id: 'i11',
            category: 'international',
            title: 'Poster Presenter - ICKSH 2024',
            issuer: 'Korean Society of Hematology (South Korea)',
            year: '2024',
            desc: '1st Author. 65th Annual Meeting.',
            tags: ['Poster', 'Hematology'],
            highlight: false
        },
        {
            id: 'i12',
            category: 'international',
            title: 'Oral Presentation - MYHAM 2024',
            issuer: 'The 1st International Conference MYHAM',
            year: '2024',
            desc: '1st Author. Hospital & Healthcare Management conference.',
            tags: ['Oral Presentation', 'Healthcare'],
            highlight: false
        },

        // --- PUBLICATIONS (4 items) ---
        {
            id: 'p1',
            category: 'publications',
            title: 'Systematic Review: Microbiome Gut Axis & CML',
            issuer: 'Publication',
            year: '2024',
            desc: '"Peran Microbiome Gut Axis Dalam Perkembangan Dan Kekambuhan Chronic Myeloid Leukemia".',
            tags: ['Systematic Review', 'Oncology'],
            highlight: false
        },
        {
            id: 'p2',
            category: 'publications',
            title: 'Systematic Review: Colonoscopy AI vs Standard',
            issuer: 'Publication',
            year: '2024',
            desc: '"A Comparative Analysis Of Colonoscopy With Computer-Aided Detection And Standard Colonoscopy...".',
            tags: ['Systematic Review', 'AI'],
            highlight: false
        },
        {
            id: 'p3',
            category: 'publications',
            title: 'Systematic Review: Microbiome Gut Axis (Eng)',
            issuer: 'Publication',
            year: '2024',
            desc: '"The role of the microbiome gut axis in the development and relapse of chronic myeloid leukemia".',
            tags: ['Systematic Review', 'English'],
            highlight: false
        },
        {
            id: 'p4',
            category: 'publications',
            title: 'RAAS Metabolism & Hypertension',
            issuer: 'IC-CVD',
            year: '2024',
            desc: '"The Significant Roles of The Renin-Angiotensin-Aldosterone System Metabolism on the Development of Hypertension".',
            tags: ['Conference Paper', 'Cardiology'],
            highlight: false
        }
    ];

    const filteredAwards = activeCategory === 'all'
        ? awardsData
        : awardsData.filter(award => award.category === activeCategory);

    return (
        <div className="bg-[#0a0a0a] text-gray-300 min-h-screen relative overflow-x-hidden font-body">
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
            <div className="w-full relative z-10 bg-grid-pattern bg-fixed">

                <Navbar />

                <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
                    <section className="mb-16 pt-12">
                        <div className="inline-flex items-center gap-2 mb-4 border border-accent-emerald/30 px-3 py-1 rounded bg-accent-emerald/10 backdrop-blur-sm w-fit">
                            <span className="material-symbols-outlined text-accent-emerald text-[14px]">stars</span>
                            <span className="text-[10px] font-mono text-accent-emerald tracking-widest uppercase">Honors &amp; Grants</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9] mb-6">
                            ACHIEVEMENT<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-90">HELIX</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-accent-emerald pl-6">
                            Mapping the genetic markers of success. A comprehensive chronological sequence of grants, competitions, and academic honors.
                        </p>
                    </section>

                    {/* Fixed Right Panel - Recent Highlights */}
                    <div className="hidden fixed right-4 top-32 w-72 z-20">
                        <div className="bg-[#13161c]/80 backdrop-blur-md border border-[#1f2937] rounded-lg p-6 shadow-xl">
                            {/* Header */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-2 w-2 bg-accent-emerald rounded-full animate-pulse"></div>
                                    <h3 className="text-[10px] font-mono text-accent-emerald uppercase tracking-widest">Recent Highlights</h3>
                                </div>
                                <div className="h-[1px] w-full bg-gradient-to-r from-accent-emerald/50 to-transparent"></div>
                            </div>

                            {/* Timeline of Recent Achievements */}
                            <div className="space-y-4 max-h-[calc(100vh-250px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-accent-emerald/20 scrollbar-track-transparent">
                                {awardsData.filter(a => a.highlight).slice(0, 6).map((award, idx) => (
                                    <div key={award.id} className="group relative pl-4 border-l-2 border-[#1f2937] hover:border-accent-emerald/50 transition-all duration-300">
                                        {/* Timeline dot */}
                                        <div className="absolute -left-[5px] top-2 w-2 h-2 bg-accent-emerald rounded-full ring-4 ring-[#13161c] group-hover:scale-125 transition-transform"></div>

                                        <div className="pb-4">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-[10px] font-mono text-accent-emerald">{award.year}</span>
                                                {award.category === 'international' && (
                                                    <span className="text-[8px] px-1 py-0.5 bg-blue-900/30 text-blue-400 rounded font-mono">INTL</span>
                                                )}
                                            </div>
                                            <h4 className="text-xs font-semibold text-white leading-tight mb-1 group-hover:text-accent-emerald transition-colors">
                                                {award.title}
                                            </h4>
                                            <p className="text-[10px] text-gray-500 font-mono">{award.issuer}</p>
                                            {award.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="inline-block text-[8px] px-1.5 py-0.5 bg-black/40 border border-gray-800 rounded mt-1 mr-1 text-gray-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Stats */}
                            <div className="mt-6 pt-4 border-t border-[#1f2937]">
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-black/30 rounded p-2 border border-gray-800/50">
                                        <div className="text-[10px] text-gray-500 font-mono mb-1">Success Rate</div>
                                        <div className="text-lg font-bold text-white font-mono">
                                            {Math.round((awardsData.filter(a => a.highlight).length / awardsData.length) * 100)}%
                                        </div>
                                    </div>
                                    <div className="bg-black/30 rounded p-2 border border-gray-800/50">
                                        <div className="text-[10px] text-gray-500 font-mono mb-1">Peak Year</div>
                                        <div className="text-lg font-bold text-accent-emerald font-mono">2025</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Footer */}
                            <div className="mt-4 flex justify-between items-center opacity-30">
                                <div className="text-[8px] font-mono text-gray-600">LIVE_FEED</div>
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-accent-emerald/50"></div>
                                    <div className="w-1 h-1 bg-accent-emerald/30"></div>
                                    <div className="w-1 h-1 bg-accent-emerald"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-screen relative">
                        {/* DNA Visual - Seamless Integration with Stats */}
                        <div className="lg:col-span-4 hidden lg:block relative">
                            {/* Restored a subtle container for context */}
                            <div className="sticky top-32 h-[600px] w-full flex items-center justify-between border-l border-r border-[#1f2937]/30 bg-gradient-to-b from-[#13161c]/0 via-[#13161c]/20 to-[#13161c]/0 relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#10b981]/20 to-transparent"></div>
                                <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#10b981]/20 to-transparent"></div>

                                {/* System Status (Top Left) */}
                                <div className="absolute top-4 left-6 z-20">
                                    <div className="text-[10px] font-mono text-accent-emerald mb-1 tracking-widest font-bold uppercase">System Status</div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 bg-accent-emerald rounded-full animate-pulse"></div>
                                        <span className="text-xs font-mono text-white">SEQUENCE_ACTIVE</span>
                                    </div>
                                </div>

                                {/* DNA Helix Section - Left/Center */}
                                <div className="w-[40%] h-full relative flex items-center justify-center dna-wrapper">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="base-pair">
                                            <div className="dot left"></div>
                                            <div className="dot right"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* New Summary Honor Award - Right Side */}
                                <div className="w-[60%] h-full relative z-10 flex flex-col justify-center pl-4 pr-1 border-l border-[#1f2937]/30 backdrop-blur-[2px]">
                                    <div className="mb-8 pl-2">
                                        <h3 className="text-[10px] font-mono text-accent-emerald uppercase tracking-widest mb-2">Honor Summary</h3>
                                        <div className="h-[1px] w-12 bg-accent-emerald/50"></div>
                                    </div>

                                    <div className="space-y-6 w-full">
                                        {/* Total Awards */}
                                        <div className="group w-full">
                                            <div className="flex justify-between items-end mb-1 pr-2">
                                                <span className="text-xs font-mono text-gray-400 group-hover:text-white transition-colors">TOTAL_AWARDS</span>
                                                <span className="text-xl font-bold text-white font-mono">{awardsData.length}</span>
                                            </div>
                                            <div className="h-1 w-full bg-[#1f2937] overflow-hidden rounded-l-full">
                                                <div className="h-full bg-white w-full opacity-50"></div>
                                            </div>
                                        </div>

                                        {/* Gold Medals */}
                                        <div className="group w-full">
                                            <div className="flex justify-between items-end mb-1 pr-2">
                                                <span className="text-xs font-mono text-gray-400 group-hover:text-yellow-300 transition-colors">GOLD_MEDALS</span>
                                                <span className="text-xl font-bold text-yellow-400 font-mono">{awardsData.filter(a => a.tags.includes('Gold Medal')).length}</span>
                                            </div>
                                            <div className="h-1 w-full bg-[#1f2937] overflow-hidden rounded-l-full">
                                                <div
                                                    className="h-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] float-right"
                                                    style={{ width: `${(awardsData.filter(a => a.tags.includes('Gold Medal')).length / awardsData.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* International */}
                                        <div className="group w-full">
                                            <div className="flex justify-between items-end mb-1 pr-2">
                                                <span className="text-xs font-mono text-gray-400 group-hover:text-blue-300 transition-colors">INTL_SCALE</span>
                                                <span className="text-xl font-bold text-blue-400 font-mono">{awardsData.filter(a => a.category === 'international').length}</span>
                                            </div>
                                            <div className="h-1 w-full bg-[#1f2937] overflow-hidden rounded-l-full">
                                                <div
                                                    className="h-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)] float-right"
                                                    style={{ width: `${(awardsData.filter(a => a.category === 'international').length / awardsData.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Grants */}
                                        <div className="group w-full">
                                            <div className="flex justify-between items-end mb-1 pr-2">
                                                <span className="text-xs font-mono text-gray-400 group-hover:text-purple-300 transition-colors">RES_GRANTS</span>
                                                <span className="text-xl font-bold text-purple-400 font-mono">
                                                    {awardsData.filter(a => a.category === 'national' && (a.tags.includes('Research Grant') || a.tags.includes('Scholarship'))).length}
                                                </span>
                                            </div>
                                            <div className="h-1 w-full bg-[#1f2937] overflow-hidden rounded-l-full">
                                                <div
                                                    className="h-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)] float-right"
                                                    style={{ width: '40%' }} // Estimate
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Publications */}
                                        <div className="group w-full">
                                            <div className="flex justify-between items-end mb-1 pr-2">
                                                <span className="text-xs font-mono text-gray-400 group-hover:text-orange-300 transition-colors">PUBLICATIONS</span>
                                                <span className="text-xl font-bold text-orange-400 font-mono">{awardsData.filter(a => a.category === 'publications').length}</span>
                                            </div>
                                            <div className="h-1 w-full bg-[#1f2937] overflow-hidden rounded-l-full">
                                                <div
                                                    className="h-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)] float-right"
                                                    style={{ width: `${(awardsData.filter(a => a.category === 'publications').length / awardsData.length) * 100}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tech Decoration Bottom Right */}
                                    <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1 opacity-50">
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 bg-accent-emerald/50"></div>
                                            <div className="w-1 h-1 bg-accent-emerald/50"></div>
                                            <div className="w-1 h-1 bg-accent-emerald"></div>
                                        </div>
                                        <div className="text-[8px] font-mono text-accent-emerald">SYS.DIAGNOSTIC.OK</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-5 space-y-12 relative">
                            {/* Right Side Decoration */}
                            <div className="tech-decoration hidden xl:block z-0" style={{ right: '-40px' }}></div>
                            {/* Removed Old Constellation Stage */}

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#1f2937] pb-6 gap-4">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-accent-emerald">leaderboard</span>
                                        GENETIC MARKERS
                                    </h2>
                                    <div className="h-4 w-[1px] bg-[#333] hidden md:block"></div>
                                    <span className="text-xs font-mono text-gray-400 hidden md:block">Total Items: {awardsData.length}</span>
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {['all', 'national', 'international', 'publications'].map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`text-[10px] font-mono px-3 py-1 rounded border transition-colors ${activeCategory === cat
                                                ? 'border-accent-emerald text-accent-emerald bg-accent-emerald/10'
                                                : 'border-gray-800 text-gray-500 hover:border-gray-600'
                                                } uppercase`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="relative pl-8 space-y-8">
                                <div className="timeline-line"></div>

                                {filteredAwards.map((award) => (
                                    <div key={award.id} className="relative card-emerald-border bg-[#13161c] p-0 rounded-sm group overflow-hidden">
                                        <div className="gene-marker-icon"></div>
                                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                            <span className="material-symbols-outlined text-8xl text-accent-emerald">
                                                {award.category === 'publications' ? 'menu_book' : (award.highlight ? 'emoji_events' : 'workspace_premium')}
                                            </span>
                                        </div>
                                        <div className="p-6 relative z-10">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className={`px-1.5 py-0.5 text-[10px] font-bold font-mono rounded-sm uppercase ${award.category === 'international' ? 'bg-blue-900/50 text-blue-300' :
                                                            award.category === 'publications' ? 'bg-orange-900/50 text-orange-300' :
                                                                'bg-[#1f2937] text-gray-300'
                                                            }`}>
                                                            {award.category}
                                                        </span>
                                                        {award.highlight && (
                                                            <span className="text-[10px] font-mono text-accent-emerald tracking-widest flex items-center gap-1">
                                                                <span className="w-1 h-1 bg-accent-emerald rounded-full animate-pulse"></span> HIGHLIGHT
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-accent-emerald transition-colors leading-tight">
                                                        {award.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-500 font-mono mt-1">{award.issuer}</p>
                                                </div>
                                                <div className="text-right mt-4 md:mt-0 min-w-max">
                                                    <span className="block text-accent-emerald font-mono text-lg font-bold">{award.year}</span>
                                                </div>
                                            </div>

                                            <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mb-4 border-l-2 border-[#333] pl-3">
                                                {award.desc}
                                            </p>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {award.tags.map((tag, idx) => (
                                                    <div key={idx} className="bg-black/50 border border-gray-800 px-2 py-1 rounded text-[10px] font-mono text-gray-400 group-hover:border-accent-emerald/30 transition-colors">
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Third Column - Achievement Highlights */}
                        <div className="lg:col-span-3 hidden lg:block">
                            <div className="sticky top-32 space-y-6">
                                {/* Quick Stats Card */}
                                <div className="bg-[#13161c]/60 backdrop-blur-sm border border-[#1f2937] rounded-lg p-5 shadow-lg">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-2 w-2 bg-accent-emerald rounded-full animate-pulse"></div>
                                        <h3 className="text-[10px] font-mono text-accent-emerald uppercase tracking-widest">Quick Stats</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-black/30 rounded p-3 border border-gray-800/50">
                                            <div className="text-[9px] text-gray-500 font-mono mb-1">AWARDS THIS YEAR</div>
                                            <div className="text-2xl font-bold text-white font-mono">
                                                {awardsData.filter(a => a.year === 2025).length}
                                            </div>
                                        </div>
                                        <div className="bg-black/30 rounded p-3 border border-gray-800/50">
                                            <div className="text-[9px] text-gray-500 font-mono mb-1">GOLD RATE</div>
                                            <div className="text-2xl font-bold text-yellow-400 font-mono">
                                                {Math.round((awardsData.filter(a => a.tags.includes('Gold Medal')).length / awardsData.length) * 100)}%
                                            </div>
                                        </div>
                                        <div className="bg-black/30 rounded p-3 border border-gray-800/50">
                                            <div className="text-[9px] text-gray-500 font-mono mb-1">INTERNATIONAL</div>
                                            <div className="text-2xl font-bold text-blue-400 font-mono">
                                                {Math.round((awardsData.filter(a => a.category === 'international').length / awardsData.length) * 100)}%
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Performance Metrics */}
                                <div className="bg-[#13161c]/60 backdrop-blur-sm border border-[#1f2937] rounded-lg p-5 shadow-lg">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-2 w-2 bg-accent-emerald rounded-full animate-pulse"></div>
                                        <h3 className="text-[10px] font-mono text-accent-emerald uppercase tracking-widest">Performance</h3>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-[9px] font-mono mb-1">
                                                <span className="text-gray-400">Success Rate</span>
                                                <span className="text-white font-bold">
                                                    {Math.round((awardsData.filter(a => a.highlight).length / awardsData.length) * 100)}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-[#1f2937] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-accent-emerald to-cyan-400"
                                                    style={{ width: `${Math.round((awardsData.filter(a => a.highlight).length / awardsData.length) * 100)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-[9px] font-mono mb-1">
                                                <span className="text-gray-400">International</span>
                                                <span className="text-blue-400 font-bold">
                                                    {Math.round((awardsData.filter(a => a.category === 'international').length / awardsData.length) * 100)}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-[#1f2937] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                                    style={{ width: `${Math.round((awardsData.filter(a => a.category === 'international').length / awardsData.length) * 100)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-[9px] font-mono mb-1">
                                                <span className="text-gray-400">Publications</span>
                                                <span className="text-orange-400 font-bold">
                                                    {Math.round((awardsData.filter(a => a.category === 'publications').length / awardsData.length) * 100)}%
                                                </span>
                                            </div>
                                            <div className="h-1.5 bg-[#1f2937] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-gradient-to-r from-orange-500 to-yellow-400"
                                                    style={{ width: `${Math.round((awardsData.filter(a => a.category === 'publications').length / awardsData.length) * 100)}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer indicator */}
                                    <div className="mt-4 pt-3 border-t border-[#1f2937] flex justify-between items-center opacity-40">
                                        <div className="text-[8px] font-mono text-gray-600">LIVE_DATA</div>
                                        <div className="flex gap-1">
                                            <div className="w-1 h-1 bg-accent-emerald/50"></div>
                                            <div className="w-1 h-1 bg-accent-emerald/30"></div>
                                            <div className="w-1 h-1 bg-accent-emerald"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
            <Footer />
        </div>
    );
};

export default AwardsPage;
