import React from 'react';

const Education = () => {
    const educationData = [
        {
            university: "Islamic University of Indonesia",
            degree: "Bachelor of Medicine",
            year: "2021 - Present",
            description: "Active student with a focus on medical research and public health advancement.",
            logo: "school"
        },
        // Add more if needed
    ];

    return (
        <div id="education" className="py-20 border-t border-white/5 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white"></span> Education
            </h2>

            <div className="space-y-8 relative pl-8 border-l border-white/10 ml-4">
                {educationData.map((edu, index) => (
                    <div key={index} className="relative group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-background-dark border-2 border-gray-600 group-hover:border-white transition-colors flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-white transition-colors"></div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:border-white/30 transition-all hover:bg-white/10 shadow-lg hover:shadow-2xl">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                                        {edu.university}
                                    </h3>
                                    <p className="text-gray-400 font-medium">{edu.degree}</p>
                                </div>
                                <span className="mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-400 border border-white/10">
                                    {edu.year}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
