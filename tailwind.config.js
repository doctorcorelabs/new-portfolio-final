/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#FFFFFF",
                "background-light": "#F5F5F5",
                "background-dark": "#050505", // Deeper black
                "background-emerald-dark": "#022c22",
                "card-dark": "rgba(20, 20, 20, 0.6)", // Glassy semi-transparent default
                "border-dark": "rgba(255, 255, 255, 0.1)", // Glassy border
                "border-emerald": "#059669",
                "accent-green": "#ffffff", // Changed to white for monochrome, keeping key to avoid breaking refs
                "glass-surface": "rgba(255, 255, 255, 0.05)",
                "accent-cyan": "#06b6d4",
                "accent-emerald": "#10b981",
                "accent-emerald-dim": "rgba(16, 185, 129, 0.1)",
                "accent-blue": "#3b82f6",
            },
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
            backgroundImage: {
                'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.05%22/%3E%3C/svg%3E')",
                'grid-pattern': "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 0h40v40H0V0zm1 1h38v38H1V1z\\' fill=\\'%2310b981\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')",
                'medical-grid': "linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)"
            },
            backdropBlur: {
                xs: '2px',
            },
            keyframes: {
                scanMove: {
                    '0%': { top: '-10%', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { top: '110%', opacity: '0' },
                },
                scanOverlay: {
                    '0%': { top: '-10%', opacity: '0' },
                    '10%': { opacity: '1' },
                    '90%': { opacity: '1' },
                    '100%': { top: '110%', opacity: '0' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.7' },
                }
            },
            animation: {
                'scan-move': 'scanMove 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                'scan-overlay': 'scanOverlay 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                'pulse-glow': 'pulse-glow 2s infinite',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
}
