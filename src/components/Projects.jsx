import React from 'react';

const Projects = () => {
    return (
        <div id="projects">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest">The Signal</h2>
                <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                    View All <span className="material-icons text-sm">arrow_forward</span>
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Aura - Featured */}
                <div className="group relative md:col-span-2 aspect-[2/1] bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-500 hover-lift">
                    <img
                        alt="Project Aura Abstract Sphere"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCIV7NWf0cp6jO962wTzTHgYTgw8PPYAHAzfVb76JqsXMdhtNGU92mHlPQFw9CbIpAtoTiEzQC4PoFzr0ikN90h6uvE2sw8WkuTTz1h_MZR_F_X_qIeFBhwCOVOD4AaTUqdwaNqp6Qzcl6yzn71dRJOStlJUnlJmfs0haw1z7T2j1wGzr_qLK9Arh1kU2591uB_ANP-NOTNetX7crUXRLWB-6hTH6KGqpLJyOBuJZixm5gD4QznGYTUmoJ2NMsXQyeQMnUrO4MDu6J"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-accent-green/20 text-accent-green text-xs font-medium rounded-full border border-accent-green/30">
                            Featured
                        </span>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Project Aura</h3>
                        <p className="text-gray-300 text-sm md:text-base max-w-md">Real-time visualization of neural network activation patterns using WebGL.</p>
                        <div className="flex gap-2 mt-4">
                            <span className="text-xs border border-white/20 text-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/5">WebGL</span>
                            <span className="text-xs border border-white/20 text-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/5">React</span>
                            <span className="text-xs border border-white/20 text-white/80 px-3 py-1.5 rounded-full backdrop-blur-sm bg-white/5">Three.js</span>
                        </div>
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-icons text-white text-3xl">arrow_outward</span>
                    </div>
                </div>

                {/* Neural Synth */}
                <div className="group relative aspect-square bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-500 hover-lift">
                    <img
                        alt="Neural Synth Waveform"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbcQuM_ucM_-5y8_4Kb-HbdSZ9ASenWGgYs2_TqX5gkafWfZZFhIjytQfdYw7BITHgcFxQiUe6rcecx4RR15L0UvxHc8r0fTbI34dkY6IKjzpv7H-xA1JW0FFIvv47i_eqp0W7FSowaW3NVd0QBpcA2_1JKPlA4V0hXr0m58PZPmd1brwzXeq-FVhzDahw9Y642f3bkOWIGqIRNwY3rPGTx1jLhK9_Rl7nCaqv2JcHtZ-H8d-nTjf-1V-hJtsfsWyoMdKmaYI0JTu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Neural Synth</h3>
                        <p className="text-gray-400 text-sm">Generative audio synthesis powered by transformers.</p>
                        <div className="flex gap-2 mt-3">
                            <span className="text-xs border border-white/20 text-white/60 px-2 py-1 rounded-full">Audio</span>
                            <span className="text-xs border border-white/20 text-white/60 px-2 py-1 rounded-full">AI</span>
                        </div>
                    </div>
                </div>

                {/* Quantum Canvas */}
                <div className="group relative aspect-square bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-500 hover-lift">
                    <img
                        alt="Quantum Canvas Generative Art"
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMLQNZIBFTJJnZVvQGbkJ4soF1q6KKeLv1BWCY_aud9Ie8LjLkd9qqhnO9HERdkB6UofOsJZJAIdR0p_kh3JjHlJMA-ZXI4Py6YYsnHAXPdJ4MArZqy4znum0nXRk29YpSWfsBfGmZubSLkPPNoR2us6DYf8vt67tfHBfwA3mWmA-CFtu9cPnlFnda8mRnmTve22MJ8avKH-CrbOZsaEiUTycbwjsxUreIVcmKuUVwg_gXXHMG1W1ti3eHshE76Gz4Gs53GcspXldx"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Quantum Canvas</h3>
                        <p className="text-gray-400 text-sm">Collaborative AI drawing interface.</p>
                        <div className="flex gap-2 mt-3">
                            <span className="text-xs border border-white/20 text-white/60 px-2 py-1 rounded-full">Creative</span>
                            <span className="text-xs border border-white/20 text-white/60 px-2 py-1 rounded-full">Canvas</span>
                        </div>
                    </div>
                </div>

                {/* Sentinel Core */}
                <div className="group relative md:col-span-2 aspect-[2.5/1] bg-gray-100 dark:bg-card-dark rounded-2xl border border-gray-200 dark:border-border-dark overflow-hidden hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-500 hover-lift">
                    <img
                        alt="Cybersecurity Dashboard Interface"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjHHrylKZyHQFhBrBPKwpA_bZGISL9knHBbwFZ8pVOl0d4cKaD8h54kIBf7QpnekYxEwoJBVMKTCGrgyiSt75joVEdZPAujket2OYdkZ0zDILvLAetzU4yealPZnssTN-OY0jomytbd6mxk64nN2cai3t2RWe0jmMuq9xmYTsn85igIww-TvHKEOGHhxoOPtD39m4syFQtnLX7iDIBCtunYNxoLKv-r5DPiqsCvT6ElZUq11JeRh_-Y6_kCSF1eiSBYNgmhppELLwd"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 flex justify-between items-end w-full">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Sentinel Core</h3>
                            <p className="text-gray-300 text-sm max-w-md">Enterprise design system for data-heavy dashboard applications.</p>
                            <div className="flex gap-2 mt-3">
                                <span className="text-xs border border-white/20 text-white/60 px-2 py-1 rounded-full">Design System</span>
                                <span className="text-xs border border-white/20 text-white/60 px-2 py-1 rounded-full">Enterprise</span>
                            </div>
                        </div>
                        <div className="hidden md:block opacity-50 group-hover:opacity-100 transition-opacity">
                            <span className="material-icons text-white text-4xl">arrow_outward</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
