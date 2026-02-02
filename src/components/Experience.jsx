import React from 'react';

const Experience = () => {
    const experiences = [
        {
            year: "2023 — Present",
            role: "Research Assistant",
            company: "Public Health Department, Islamic University of Indonesia",
            description: "Assisting in data collection and analysis for community health projects. Contributing to papers regarding epidemiology and preventative medicine."
        },
        {
            year: "2022 — 2023",
            role: "Medical Volunteer",
            company: "Red Cross Indonesia",
            description: "Participated in various health campaigns and emergency response simulations. Provided basic life support training to local communities."
        }
    ];

    return (
        <div id="experience" className="py-20 border-t border-white/5">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white"></span> Experience
            </h2>
            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="group grid grid-cols-1 md:grid-cols-4 gap-4 p-6 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                        <div className="text-gray-500 font-mono text-sm pt-1">{exp.year}</div>
                        <div className="md:col-span-3">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                                {exp.role} · <span className="text-gray-400 font-normal">{exp.company}</span>
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm font-light">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
