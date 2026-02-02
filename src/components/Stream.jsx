import React from 'react';

const Stream = () => {
    return (
        <div className="lg:col-span-4" id="stream">
            <div className="sticky top-32">
                <h2 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-6">The Noise</h2>
                <div className="relative border-l border-gray-300 dark:border-border-dark pl-6 space-y-10">

                    <div className="relative">
                        <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-background-light dark:border-background-dark"></div>
                        <p className="text-xs text-gray-500 mb-1 font-mono">10:30 AM · Today</p>
                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                            Deployed new experiment on edge compute. Seeing 40% latency reduction in APAC regions.
                            <span className="block mt-2 text-blue-500 text-xs hover:underline cursor-pointer">#performance #edge</span>
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-background-light dark:border-background-dark"></div>
                        <p className="text-xs text-gray-500 mb-1 font-mono">Yesterday</p>
                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                            Refactoring the data pipeline for faster inference. Sometimes the boring work is the most impactful.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-background-light dark:border-background-dark"></div>
                        <p className="text-xs text-gray-500 mb-1 font-mono">Oct 26</p>
                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed mb-3">
                            Explored generative models for audio synthesis. The texture of latent space noise is fascinating.
                        </p>
                        <div className="h-24 w-full bg-card-dark rounded border border-gray-200 dark:border-border-dark overflow-hidden">
                            <img
                                alt="Audio Waveform"
                                className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7F46LqVPFRp6ZyeaWv8dWcio4RpXtoQKwyGMb29HkQCBQeMQ-PoqZvos4ItKcU8TSuGSTqeh3DHNwGCoV2ttuJfqSiXAEZg2LVluvSQN4Qa2z_94AUuvxO0qWP1lz5CT4gVyuF0dM1yT4yYvIz6mPgNFn7XImB_7aKE5LyoNDD3fXecwxotlM4GKmGCFHikxcN4d_wGh4BBoHJ_h5AGBCZj8utotThrs1LOV7_FzvnAcd8_ArK7CFePqyVIDSmNBv-nHNqKeKexag"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-background-light dark:border-background-dark"></div>
                        <p className="text-xs text-gray-500 mb-1 font-mono">Oct 24</p>
                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                            Reading "The Design of Everyday Things" again. It hits differently after 5 years in the industry.
                        </p>
                        <div className="mt-2 flex items-center space-x-2 p-2 bg-gray-100 dark:bg-card-dark rounded border border-gray-200 dark:border-border-dark">
                            <span className="material-icons text-gray-400 text-sm">menu_book</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">Currently Reading</span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-background-light dark:border-background-dark"></div>
                        <p className="text-xs text-gray-500 mb-1 font-mono">Oct 20</p>
                        <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
                            Just pushed the initial commit for Project Aura. Let's see where this goes.
                        </p>
                    </div>
                </div>

                <div className="mt-12 p-4 rounded-xl border border-gray-200 dark:border-border-dark bg-gray-100/50 dark:bg-card-dark/50 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gray-800 rounded flex items-center justify-center">
                            <span className="material-icons text-white text-sm">equalizer</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">Listening To</p>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">Selected Ambient Works</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stream;
