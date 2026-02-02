import React from 'react';
import AuroraWave from './AuroraWave';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 justify-center overflow-hidden">
            {/* Aurora Wave Background */}
            <AuroraWave />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                                Daivan Febri <br /> <span className="text-gray-500">Juan Setiya</span>
                            </h1>
                            <div className="h-[2px] w-24 bg-white/50 rounded-full mb-8 mx-auto lg:mx-0"></div>
                            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
                                Most Outstanding Student UII <span className="text-white/30 mx-3 font-thin">|</span> Researcher <span className="text-white/30 mx-3 font-thin">|</span> Unggulan Scholarship Awardee
                            </p>
                        </div>

                        <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-2xl mx-auto lg:mx-0 font-light">
                                "A fourth year undergraduate student majoring in Medicine at Islamic University of Indonesia.
                                Deeply passionate about acquiring new knowledge and having diverse experiences.
                                Aiming to enhance the health standards in Indonesia, bring about sustainable change,
                                and create lasting positive impacts."
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <a
                                href="#about"
                                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 hover-lift"
                            >
                                View Full Profile <span className="material-icons text-sm">arrow_forward</span>
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 backdrop-blur-sm transition-colors"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Photo with Animated Glass Frame */}
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem]">

                            {/* Outer Glow / Star Dissolve Effect */}
                            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-110 animate-pulse"></div>

                            {/* Layer 1: Outer Liquid Glass Ring - Slow Wave */}
                            <div className="absolute -inset-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-[1px] shadow-xl z-0 animate-liquid transition-all duration-1000 opacity-60"></div>

                            {/* Layer 2: Inner Rotating Shimmer Ring */}
                            <div className="absolute -inset-4 rounded-full border border-white/20 border-t-white/40 border-l-transparent bg-transparent backdrop-blur-[2px] z-10 animate-star-shimmer shadow-[0_0_15px_rgba(255,255,255,0.05)]"></div>

                            {/* Star Particle Effect (Pseudo representation) */}
                            <div className="absolute -inset-10 rounded-full border-2 border-dashed border-white/5 animate-spin-slow opacity-30 pointer-events-none" style={{ animationDuration: '30s' }}></div>

                            {/* Main Image Container - Thick Glass Bezel */}
                            <div className="w-full h-full rounded-full overflow-hidden shadow-2xl relative z-20 bg-black border-[6px] border-white/20 ring-1 ring-white/30 backdrop-blur-3xl">
                                {/* Daivan's Photo */}
                                <img
                                    src="/profile.png"
                                    alt="Daivan Febri Juan Setiya"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                                />

                                {/* Glossy Overlay/Sheen */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none opacity-50 mix-blend-overlay"></div>
                            </div>

                            {/* Floating Glass Badge */}
                            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl border border-white/20 py-3 px-6 rounded-2xl shadow-2xl flex items-center gap-3 z-30 animate-float w-max hover:scale-105 transition-transform duration-300">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                                    <span className="material-icons text-white text-sm">school</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Status</span>
                                    <span className="text-sm font-bold text-white">Medical Student</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
