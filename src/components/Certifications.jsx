import React from 'react';

const Certifications = () => {
    const certs = [
        { name: "Advanced Life Support", issuer: "Indonesian Heart Association", year: "2023" },
        { name: "Medical Research Methodology", issuer: "Harvard Medical School Online", year: "2022" },
        { name: "Public Health Fundamental", issuer: "Coursera", year: "2022" },
        { name: "Data Analysis for Healthcare", issuer: "Google", year: "2023" },
    ];

    return (
        <div id="certifications" className="py-20 border-t border-white/5">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white"></span> Certifications
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {certs.map((cert, index) => (
                    <div key={index} className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-center group backdrop-blur-sm">
                        <div className="w-12 h-12 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                            <span className="material-icons text-lg">verified</span>
                        </div>
                        <h3 className="text-white font-medium text-sm mb-1">{cert.name}</h3>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                        <p className="text-[10px] text-gray-600 mt-2 font-mono">{cert.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
