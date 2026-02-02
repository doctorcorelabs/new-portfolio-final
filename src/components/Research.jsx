import React from 'react';

const Research = () => {
    return (
        <div id="research" className="py-20 border-t border-white/5 relative">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-white"></span> Research
                </h2>
                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1 group">
                    View All <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder Research Items */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-all hover:-translate-y-1 hover:shadow-2xl">
                        <div className="h-40 bg-black/40 relative overflow-hidden">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-xs text-gray-300 border border-white/10">
                                Published
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-300 transition-colors">
                                Public Health Impact Analysis
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3 font-light">
                                A comprehensive study on the effects of recent health policies on rural communities in Indonesia. Focus on sustainable medical practices.
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-white/5 pt-4">
                                <span className="material-icons text-sm">article</span>
                                <span>International Journal of Medicine</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Research;
