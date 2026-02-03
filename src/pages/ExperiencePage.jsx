import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ExperiencePage.css';

const ExperiencePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const timelineData = [
        {
            role: "Founder",
            organization: "DAIVANLABS",
            location: "Remote / Global",
            period: "JUNE 2025 - PRESENT",
            description: "Founder of DaivanLabs, applying coding skills ('Code') to develop healthcare-related tools ('Cure') and build professional connections ('Connect'). Managing project development and operations.",
            outcomes: [
                "Developing 'Cure' healthcare tools",
                "Building 'Connect' professional network",
                "Managing full-stack development & operations"
            ],
            techStack: [
                { icon: "code", name: "Code", color: "text-accent-emerald" },
                { icon: "medical_services", name: "Cure", color: "text-blue-400" },
                { icon: "hub", name: "Connect", color: "text-purple-400" },
            ]
        },
        {
            role: "Speaker & Mentor",
            organization: "KAMPUSINOVATIF.ID",
            location: "Indonesia",
            period: "SEP 2024 - FEB 2025",
            description: "Served as a speaker and mentor through the KampusInovatif.id platform, sharing insights and guidance on successfully applying for the Beasiswa Unggulan scholarship.",
            outcomes: [
                "Mentored scholarship applicants",
                "Delivered public speaking sessions",
                "Shared Beasiswa Unggulan insights"
            ],
            techStack: [
                { icon: "school", name: "Teaching", color: "text-yellow-500" },
                { icon: "mic", name: "Speaking", color: "text-red-400" },
            ]
        },
        {
            role: "Awardee Beasiswa Unggulan",
            organization: "MINISTRY OF EDUCATION",
            location: "Indonesia",
            period: "OCT 2023 - PRESENT",
            description: "Recipient of the prestigious scholarship 'Beasiswa Unggulan' awarded by the Indonesian Ministry of Education, Culture, Research, and Technology for outstanding academic potential and achievement.",
            outcomes: [
                "Prestigious National Scholarship",
                "Academic Excellence Recognition",
                "Fully Funded Education"
            ],
            techStack: [
                { icon: "emoji_events", name: "Award", color: "text-yellow-400" },
                { icon: "local_library", name: "Academic", color: "text-blue-300" },
            ]
        },
        {
            role: "Active Member & Contributor",
            organization: "SMART FK UII",
            location: "UII Faculty of Medicine",
            period: "JULY 2023 - JUN 2024",
            description: "Actively involved in SMART FK UII, focused on promoting research, scientific activities, and technology alongside medical students. Roles included Scientific Division member, Event Coordinator, and Liaison Officer.",
            outcomes: [
                "SMART Of The Year - Best Staff (Scientific)",
                "Coordinated Scientific Fair 1 & 2",
                "Moderated Lab Class 2023",
                "Liaison Officer Temilnas X"
            ],
            techStack: [
                { icon: "science", name: "Research", color: "text-accent-emerald" },
                { icon: "event", name: "Events", color: "text-orange-400" },
                { icon: "group", name: "Team", color: "text-blue-400" },
            ]
        },
        {
            role: "Coordinator & Administrator",
            organization: "BAPIN-ISMKI",
            location: "National ISMKI",
            period: "FEB 2023 - MAY 2024",
            description: "Engaged with BAPIN-ISMKI (Assisting Body regarding International ISMKI). Led 'Jas Merah' initiative, managed internal division administration, and moderated national training sessions.",
            outcomes: [
                "Coordinator 'Jas Merah' Initiative",
                "National Daily Administrator (Internal)",
                "Staff Internal Division IMSS 2023"
            ],
            techStack: [
                { icon: "admin_panel_settings", name: "Admin", color: "text-gray-400" },
                { icon: "campaign", name: "Leadership", color: "text-red-500" },
            ]
        },
        {
            role: "Speaker - Public Speaking",
            organization: "SENI.BICARA",
            location: "Indonesia",
            period: "FEB 2023 - JUN 2023",
            description: "Delivered educational content and presentations on public speaking techniques as part of the program offered by Seni.Bicara.",
            outcomes: [
                "Public Speaking Education",
                "Content Delivery",
                "Skill Sharing"
            ],
            techStack: [
                { icon: "record_voice_over", name: "Speech", color: "text-green-400" },
                { icon: "cast_for_education", name: "Edu", color: "text-yellow-300" },
            ]
        },
        {
            role: "Master of Ceremony",
            organization: "UNIVERSITAS ISLAM INDONESIA",
            location: "Faculty of Medicine",
            period: "2023",
            description: "Served as the Master of Ceremony for the 16th General Assembly ('Sidang Umum XVI') of the Student Family of the Faculty of Medicine UII.",
            outcomes: [
                "Guided Formal Proceedings",
                "Host of General Assembly",
                "Professional Communication"
            ],
            techStack: [
                { icon: "mic_external_on", name: "MC", color: "text-purple-400" },
            ]
        },
        {
            role: "Guest Speaker",
            organization: "BLORA REGENCY GOV",
            location: "Blora, Indonesia",
            period: "2021",
            description: "Invited as a guest speaker for 'Ngobrol Bareng Bupati,' a dialogue event featuring the Regent of Blora Regency and local social media influencers/activists.",
            outcomes: [
                "Guest Speaker with Regent",
                "Community Engagement",
                "Social Dialogue"
            ],
            techStack: [
                { icon: "forum", name: "Dialogue", color: "text-blue-500" },
                { icon: "groups", name: "Community", color: "text-green-500" },
            ]
        }
    ];

    return (
        <div className="bg-[#0a0a0a] text-gray-300 min-h-screen relative overflow-x-hidden">
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
            <div className="w-full relative z-10">
                <div className="absolute inset-0 bg-grid-pattern bg-fixed pointer-events-none z-[-1]"></div>
                <Navbar />

                <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
                    <section className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 border border-accent-emerald/30 px-3 py-1 rounded bg-accent-emerald/10 backdrop-blur-sm w-fit animate-heartbeat-badge">
                            <span className="material-symbols-outlined text-accent-emerald text-[14px]">ecg_heart</span>
                            <span className="text-[10px] font-mono text-accent-emerald tracking-widest uppercase">Professional Timeline</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6 animate-header-blur">
                            ACADEMIC &<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600 animate-text-flicker">CAREER PATH</span>
                        </h1>

                        <div className="w-full h-24 sm:h-32 md:h-48 border-y border-[#1f2937] bg-[#13161c]/50 relative overflow-hidden mb-6 sm:mb-8 ecg-container bg-[image:linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] z-10"></div>
                            <svg className="w-full h-full absolute inset-0 z-0" preserveAspectRatio="none" viewBox="0 0 1000 100">
                                <path className="ecg-line-bg" d="M0,50 L100,50 L110,40 L120,60 L130,50 L200,50 L210,20 L220,80 L230,50 L300,50 L310,40 L320,60 L330,50 L400,50 L410,10 L425,90 L440,50 L500,50 L510,40 L520,60 L530,50 L600,50 L610,30 L620,70 L630,50 L700,50 L710,40 L720,60 L730,50 L800,50 L810,10 L825,90 L840,50 L900,50 L910,40 L920,60 L930,50 L1000,50"></path>
                                <path className="ecg-line-main" d="M0,50 L100,50 L110,40 L120,60 L130,50 L200,50 L210,20 L220,80 L230,50 L300,50 L310,40 L320,60 L330,50 L400,50 L410,10 L425,90 L440,50 L500,50 L510,40 L520,60 L530,50 L600,50 L610,30 L620,70 L630,50 L700,50 L710,40 L720,60 L730,50 L800,50 L810,10 L825,90 L840,50 L900,50 L910,40 L920,60 L930,50 L1000,50"></path>
                            </svg>
                            <div className="absolute top-2 left-2 flex flex-col gap-1 z-20">
                                <span className="text-[10px] font-mono text-accent-emerald animate-pulse">RECORDING...</span>
                                <span className="text-[10px] font-mono text-gray-500">LEAD II</span>
                            </div>
                        </div>

                        <p className="text-base sm:text-lg text-gray-400 max-w-2xl font-light leading-relaxed border-l-2 border-accent-emerald pl-4 sm:pl-6">
                            A chronological diagnostic of my contributions to healthcare, research, and education. From founding labs to national advocacy, tracking the pulse of innovation across my academic and professional journey.
                        </p>
                    </section>

                    {/* Mobile Stats - Career Vitals */}
                    <div className="lg:hidden mb-8 grid grid-cols-3 gap-3">
                        <div className="bg-[#13161c]/80 backdrop-blur-sm border border-[#1f2937] rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-white font-mono">2021 - NOW</div>
                            <div className="text-[9px] text-gray-400 font-mono uppercase">Experience</div>
                        </div>
                        <div className="bg-[#13161c]/80 backdrop-blur-sm border border-[#1f2937] rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-white font-mono">08</div>
                            <div className="text-[9px] text-gray-400 font-mono uppercase">Key Roles</div>
                        </div>
                        <div className="bg-[#13161c]/80 backdrop-blur-sm border border-[#1f2937] rounded-lg p-4 text-center">
                            <div className="text-xl font-bold text-accent-emerald font-mono">01</div>
                            <div className="text-[9px] text-gray-400 font-mono uppercase">Founding</div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-screen">
                        {/* Sidebar Stats */}
                        <div className="lg:col-span-3 hidden lg:block relative">
                            <div className="sticky top-32 w-full space-y-6">
                                <div className="border border-[#1f2937] bg-[#13161c]/80 p-4 rounded-sm backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-4 border-b border-[#333] pb-2">
                                        <span className="text-xs font-mono text-gray-400 uppercase">Career Vitals</span>
                                        <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse"></span>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Total Experience</div>
                                            <div className="text-2xl font-bold text-white font-mono">2021 <span className="text-sm text-gray-500">- NOW</span></div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Key Roles</div>
                                            <div className="text-2xl font-bold text-white font-mono">08</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Founding</div>
                                            <div className="text-2xl font-bold text-white font-mono">01</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-[#333]">
                                        <div className="text-[10px] text-gray-500 font-mono uppercase mb-2">Primary Focus</div>
                                        <div className="flex flex-wrap gap-1">
                                            <span className="px-1.5 py-0.5 bg-[#022c22] text-accent-emerald text-[9px] font-mono border border-accent-emerald/30">RESEARCH</span>
                                            <span className="px-1.5 py-0.5 bg-[#022c22] text-accent-emerald text-[9px] font-mono border border-accent-emerald/30">SKILLS</span>
                                            <span className="px-1.5 py-0.5 bg-[#022c22] text-accent-emerald text-[9px] font-mono border border-accent-emerald/30">LEADERSHIP</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-[#1f2937] p-4 bg-[#0a0a0a]">
                                    <div className="text-[10px] font-mono text-gray-500 mb-2">CURRENT STATUS</div>
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-accent-emerald">check_circle</span>
                                        <span className="text-sm font-bold text-white">Founder @ DaivanLabs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timeline Content */}
                        <div className="lg:col-span-9 relative">
                            {/* Timeline strip line */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 z-0 hidden md:block">
                                <div className="timeline-strip-ticks"></div>
                                <div className="timeline-strip left-[12px]"></div>
                            </div>

                            <div className="space-y-12 md:pl-12 relative z-10">
                                {timelineData.map((item, index) => (
                                    <div key={index} className="card-emerald-border bg-[#13161c] rounded-sm group p-4 sm:p-6 md:p-8 relative">
                                        <div className="hidden md:block role-node absolute -left-[54px] bg-black"></div>
                                        <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 border-b border-[#1f2937] pb-3 sm:pb-4">
                                            <div>
                                                <div className="flex items-center gap-2 sm:gap-3 mb-1">
                                                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-accent-emerald transition-colors">
                                                        {item.role}
                                                    </h2>
                                                </div>
                                                <div className="text-gray-400 font-mono text-sm flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm text-accent-emerald">apartment</span>
                                                    {item.organization}
                                                    <span className="w-1 h-1 bg-gray-600 rounded-full mx-1"></span>
                                                    {item.location}
                                                </div>
                                            </div>
                                            <div className="mt-4 md:mt-0 text-right">
                                                <div className={`text-gray-300 px-3 py-1 rounded text-xs font-mono font-bold border ${index === 0 ? 'bg-accent-emerald/10 text-accent-emerald border-accent-emerald/30' : 'bg-[#1f2937] border-gray-700'} inline-block`}>
                                                    {item.period}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                                            <div className="md:col-span-2">
                                                <div className="mb-6">
                                                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-sm">assignment</span> Role Overview
                                                    </h3>
                                                    <p className="text-gray-400 text-sm leading-relaxed font-light text-justify">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h3 className="text-xs font-mono text-accent-emerald uppercase tracking-widest mb-3 flex items-center gap-2">
                                                        <span className="material-symbols-outlined text-sm">vital_signs</span> Key Outcomes
                                                    </h3>
                                                    <ul className="space-y-3 text-sm text-gray-300">
                                                        {item.outcomes.map((outcome, i) => (
                                                            <li key={i} className="outcome-item">
                                                                {outcome}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="md:col-span-1 mt-4 md:mt-0 md:pr-6">
                                                <h3 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3 text-center md:text-left">Focus Area</h3>
                                                <div className="bento-grid">
                                                    {item.techStack.map((tech, i) => (
                                                        <div key={i} className="bento-item">
                                                            <span className={`material-symbols-outlined mb-1 ${tech.color}`}>{tech.icon}</span>
                                                            <span className="text-[10px] font-mono font-bold text-gray-300">{tech.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
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

export default ExperiencePage;
