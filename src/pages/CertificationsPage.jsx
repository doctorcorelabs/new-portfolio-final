import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CertificationsPage.css';

const certificationsData = [
    {
        id: "WHO-001",
        title: "Antimicrobial Resistance and Infection Prevention and Control",
        issuer: "World Health Organization (WHO)",
        date: "2024",
        validUntil: "LIFETIME",
        type: "CERTIFICATION",
        icon: "health_and_safety"
    },
    {
        id: "WHO-002",
        title: "Inequality Monitoring in Sexual Reproductive, Maternal, Newborn, Child, and Adolescent Health",
        issuer: "World Health Organization (WHO)",
        date: "2024",
        validUntil: "LIFETIME",
        type: "CERTIFICATION",
        icon: "monitor_heart"
    },
    {
        id: "UNITAR-001",
        title: "Gender Equality and Human Rights in Climate Action and Renewable Energy",
        issuer: "UNITAR",
        date: "2024",
        validUntil: "LIFETIME",
        type: "CERTIFICATION",
        icon: "public"
    },
    {
        id: "COURSERA-001",
        title: "Chemicals and Health",
        issuer: "The Johns Hopkins University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "science"
    },
    {
        id: "COURSERA-002",
        title: "Stanford Introduction to Food and Health",
        issuer: "Stanford University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "restaurant"
    },
    {
        id: "COURSERA-003",
        title: "Science of Exercise",
        issuer: "University of Colorado Boulder",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "fitness_center"
    },
    {
        id: "COURSERA-004",
        title: "Introduction to Psychology",
        issuer: "Yale University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "psychology"
    },
    {
        id: "COURSERA-005",
        title: "Psychological First Aid",
        issuer: "The Johns Hopkins University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "medical_services"
    },
    {
        id: "COURSERA-006",
        title: "Leading Healthcare Quality and Safety",
        issuer: "The George Washington University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "SPECIALIZATION",
        icon: "verified_user"
    },
    {
        id: "COURSERA-007",
        title: "Case Studies in Personalized Medicine",
        issuer: "Vanderbilt University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "medication"
    },
    {
        id: "COURSERA-008",
        title: "Understanding the Brain: The Neurobiology of Everyday Life",
        issuer: "The University Of Chicago",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "psychology_alt"
    },
    {
        id: "COURSERA-009",
        title: "COVID-19 Contact Tracing",
        issuer: "The Johns Hopkins University",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "coronavirus"
    },
    {
        id: "COURSERA-010",
        title: "Medical Technology and Evaluation",
        issuer: "University of Minnesota",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "biotech"
    },
    {
        id: "COURSERA-011",
        title: "Drug Discovery",
        issuer: "UCSD - School of Medicine",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "labs"
    },
    {
        id: "COURSERA-012",
        title: "Drug Development",
        issuer: "UCSD - School of Medicine",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "vaccines"
    },
    {
        id: "COURSERA-013",
        title: "Drug Commercialization",
        issuer: "UCSD - School of Medicine",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "sell"
    },
    {
        id: "COURSERA-014",
        title: "Healthcare Marketplace",
        issuer: "University of Minnesota",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "storefront"
    },
    {
        id: "COURSERA-015",
        title: "A Guide to Healthcare Innovation: Principles and Practice",
        issuer: "Imperial College London",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "lightbulb"
    },
    {
        id: "COURSERA-016",
        title: "Speaking to Persuade: Motivating Audiences",
        issuer: "University of Washington",
        date: "2024",
        validUntil: "LIFETIME",
        type: "COURSE",
        icon: "record_voice_over"
    },
    {
        id: "COURSERA-017",
        title: "Drug Development Product Management Specialization",
        issuer: "UCSD - School of Medicine",
        date: "2024",
        validUntil: "LIFETIME",
        type: "SPECIALIZATION",
        icon: "inventory_2"
    }

];

function CertificationsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background-dark text-gray-300 min-h-screen relative overflow-x-hidden">
            <Navbar />
            <div className="fixed inset-0 emerald-pulse-bg z-0 pointer-events-none"></div>
            <div className="w-full relative z-10 bg-grid-pattern bg-fixed">

                <main className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
                    <section className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 border border-accent-emerald/30 px-3 py-1 rounded bg-accent-emerald/10 backdrop-blur-sm w-fit">
                            <span className="material-symbols-outlined text-accent-emerald text-[14px]">verified_user</span>
                            <span className="text-[10px] font-mono text-accent-emerald tracking-widest uppercase">Certified Records</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] mb-6">
                            VERIFIED<br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-600">CERTIFICATIONS</span>
                        </h1>
                        <div className="w-full h-48 border-y border-[#1f2937] bg-[#13161c]/50 relative overflow-hidden mb-8 scanner-container flex items-center justify-center">
                            <div className="absolute inset-0 bg-[image:linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                            <div className="relative z-10">
                                <div className="w-24 h-24 md:w-32 md:h-32 border border-emerald-500/30 rounded-full flex items-center justify-center bg-gray-900/90 shadow-[0_0_50px_rgba(16,185,129,0.1)] relative overflow-hidden">
                                    <span className="material-symbols-outlined text-6xl md:text-7xl text-gray-700">security</span>
                                    <div className="absolute inset-2 rounded-full border border-dashed border-gray-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="scanner-line absolute top-0 left-0 w-full h-0.5 bg-accent-emerald shadow-[0_0_15px_2px_rgba(16,185,129,0.8)] z-20 animate-scan-move"></div>
                            <div className="scanner-overlay absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-transparent via-accent-emerald/15 to-transparent z-15 pointer-events-none animate-scan-overlay"></div>

                            <div className="hidden md:flex absolute top-4 left-4 font-mono text-[10px] text-emerald-500 flex-col gap-1 z-20">
                                <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> SCANNING DB...</span>
                                <span className="text-gray-500">TARGET: AUTH_BADGE_V1</span>
                            </div>
                            <div className="hidden md:block absolute bottom-4 right-4 font-mono text-[10px] text-gray-500 z-20 text-right">
                                <div>INTEGRITY CHECK: <span className="text-emerald-500">PASS</span></div>
                                <div>HASH: 0x4F...9A2</div>
                            </div>
                        </div>
                        <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed border-l-2 border-accent-emerald pl-6">
                            A secure ledger of professional accreditations and technical competencies. Each record is verified against industry standards, ensuring compliance, continuous learning, and specialized expertise.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 min-h-screen">
                        <div className="lg:col-span-3 hidden lg:block relative">
                            <div className="sticky top-32 w-full space-y-6">
                                <div className="border border-[#1f2937] bg-[#13161c]/80 p-4 rounded-sm backdrop-blur-sm">
                                    <div className="flex items-center justify-between mb-4 border-b border-[#333] pb-2">
                                        <span className="text-xs font-mono text-gray-400 uppercase">Credential Vitals</span>
                                        <span className="material-symbols-outlined text-accent-emerald text-sm animate-pulse">monitor_heart</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Total Records</div>
                                            <div className="text-2xl font-bold text-white font-mono">{certificationsData.length.toString().padStart(2, '0')}</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Issuing Bodies</div>
                                            <div className="text-2xl font-bold text-white font-mono">08</div>
                                        </div>
                                        <div>
                                            <div className="text-[10px] text-gray-500 font-mono uppercase mb-1">Last Update</div>
                                            <div className="text-sm font-bold text-accent-emerald font-mono">JAN 2025</div>
                                            <div className="text-[9px] text-gray-600 font-mono">DBS-SYNC-OK</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-[#333]">
                                        <div className="text-[10px] text-gray-500 font-mono uppercase mb-2">Completion Rate</div>
                                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-accent-emerald w-[100%] h-full"></div>
                                        </div>
                                        <div className="flex justify-between mt-1 text-[9px] font-mono text-gray-500">
                                            <span>LEVEL 5</span>
                                            <span className="text-accent-emerald">100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="border border-blue-900/30 p-4 bg-[#0a0a0a] relative overflow-hidden">
                                    <div className="absolute -right-4 -top-4 text-blue-900/20">
                                        <span className="material-symbols-outlined text-9xl">shield</span>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-[10px] font-mono text-blue-400 mb-2 uppercase">Verification Status</div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-blue-500">verified</span>
                                            <span className="text-sm font-bold text-white">Identity Verified</span>
                                        </div>
                                        <div className="text-[10px] text-gray-500 mt-2">Last Audit: Today, {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-9">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-xl font-bold text-white font-mono flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent-emerald"></span> Authenticated Records
                                </h2>
                                <div className="flex gap-2">
                                    <span className="text-[10px] font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded bg-[#13161c]">FILTER: ALL</span>
                                    <span className="text-[10px] font-mono text-gray-500 border border-gray-800 px-2 py-1 rounded bg-[#13161c]">SORT: DATE</span>
                                </div>
                            </div>
                            <div className="bento-grid">
                                {certificationsData.map((cert) => (
                                    <div key={cert.id} className="card-emerald-border bg-[#13161c] p-6 rounded-sm relative group h-full flex flex-col justify-between">
                                        <div className="absolute top-0 right-0 p-3">
                                            <div className="flex items-center gap-1 bg-[#022c22] border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono verified-badge animate-pulse-glow">
                                                <span className="material-symbols-outlined text-[10px]">verified</span> VERIFIED
                                            </div>
                                        </div>

                                        <div className="mb-6 mt-2">
                                            <div className="text-[9px] text-gray-500 font-mono mb-2 tracking-widest">ID: {cert.id}</div>
                                            <h3 className="text-lg font-bold text-white group-hover:text-accent-emerald transition-colors leading-tight mb-2">
                                                {cert.title}
                                            </h3>
                                            <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                                                <span className="material-symbols-outlined text-[14px] text-blue-400">{cert.icon}</span>
                                                {cert.issuer}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-4 mt-auto">
                                            <div>
                                                <div className="text-[9px] text-gray-600 uppercase font-mono mb-0.5">Issued</div>
                                                <div className="text-xs text-gray-300 font-mono">{cert.date}</div>
                                            </div>
                                            <div>
                                                <div className="text-[9px] text-gray-600 uppercase font-mono mb-0.5">Valid Until</div>
                                                <div className="text-xs text-emerald-400 font-mono">{cert.validUntil}</div>
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
}

export default CertificationsPage;
