import React from 'react';

const AuroraWave = () => {
    return (
        <div className="absolute bottom-0 left-0 right-0 h-96 overflow-hidden pointer-events-none">
            {/* Wave layers - Colorful Restoration */}
            <div className="absolute inset-0">
                {/* Layer 1 - Cyan/Blue */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-48 opacity-60"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #06b6d4, #3b82f6, transparent)',
                        filter: 'blur(60px)',
                        animation: 'waveFlow 12s ease-in-out infinite',
                    }}
                />
                {/* Layer 2 - Magenta/Pink */}
                <div
                    className="absolute bottom-12 left-0 right-0 h-32 opacity-50"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #ec4899, #a855f7, transparent)',
                        filter: 'blur(50px)',
                        animation: 'waveFlow 15s ease-in-out infinite reverse',
                    }}
                />
                {/* Layer 3 - Orange/Amber */}
                <div
                    className="absolute bottom-8 left-0 right-0 h-24 opacity-40"
                    style={{
                        background: 'linear-gradient(90deg, transparent, #f97316, #eab308, transparent)',
                        filter: 'blur(60px)',
                        animation: 'waveFlow 10s ease-in-out infinite',
                    }}
                />
            </div>

            {/* SVG Wave Shape - Colorful Gradients */}
            <svg
                className="absolute bottom-0 w-full h-48"
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#a855f7" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#eab308" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
                    fill="url(#waveGradient1)"
                    style={{ animation: 'wavePath 18s ease-in-out infinite' }}
                />
                <path
                    d="M0,80 C240,40 480,100 720,80 C960,60 1200,100 1440,80 L1440,120 L0,120 Z"
                    fill="url(#waveGradient2)"
                    style={{ animation: 'wavePath 12s ease-in-out infinite reverse' }}
                />
            </svg>

            {/* Gradient fade to background */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-dark to-transparent" />
        </div>
    );
};

export default AuroraWave;
