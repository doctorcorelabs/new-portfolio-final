import React from 'react';

const Awards = () => {
    // Placeholder data
    const awards = [
        { title: "Beasiswa Unggulan Awardee", organization: "Ministry of Education, Culture, Research, and Technology", year: "2022" },
        { title: "1st Place National Essay Competition", organization: "Medical Faculty Association", year: "2023" },
        // Add more items
    ];

    return (
        <div id="awards" className="py-20 border-t border-white/5 relative">
            <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-12 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white"></span> Honors & Awards
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm group">
                        <div className="w-12 h-12 rounded-lg bg-white/5 text-gray-300 flex items-center justify-center flex-shrink-0 group-hover:text-white transition-colors">
                            <span className="material-icons">emoji_events</span>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg hover:text-gray-300 transition-colors cursor-pointer">
                                {award.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{award.organization} • {award.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Awards;
