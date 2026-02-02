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
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                            ACHIEVEMENT<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">HELIX</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-accent-emerald pl-6">
                            Mapping the genetic markers of success. A comprehensive chronological sequence of grants, competitions, and academic honors.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 lg:col-span-12 gap-16 min-h-screen">
                        {/* DNA Visual */}
                        <div className="lg:col-span-4 hidden lg:block relative">
                            <div className="sticky top-32 h-[600px] w-full border border-[#1f2937] bg-[#13161c]/50 rounded-lg backdrop-blur-sm overflow-hidden">
                                <div className="absolute top-4 left-4 z-20">
                                    <div className="text-[10px] font-mono text-accent-emerald mb-1">SEQUENCE_ACTIVE</div>
                                    <div className="h-0.5 w-8 bg-accent-emerald animate-pulse"></div>
                                </div>
                                <div className="dna-wrapper">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="base-pair">
                                            <div className="dot left"></div>
                                            <div className="dot right"></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute bottom-4 right-4 z-20 text-right">
                                    <div className="text-[10px] font-mono text-gray-500">GENE_ID: DV-2026</div>
                                    <div className="text-[10px] font-mono text-gray-500">STATUS: REPLICATING</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-8 space-y-12">
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
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default AwardsPage;
