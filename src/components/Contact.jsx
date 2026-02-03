import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="py-24 border-t border-white/5 relative overflow-hidden">
            {/* Background Gradient - Monochrome */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-50 pointer-events-none"></div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's Collaborate</h2>
                <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
                    Interested in research collaboration or have a question? <br />
                    Feel free to reach out. I'm always open to discussing new projects and ideas.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="mailto:daivanfebrijuansetiya@gmail.com"
                        className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 hover-lift"
                    >
                        <span className="material-icons text-sm">email</span> Email Me
                    </a>
                </div>

                <div className="mt-16 flex justify-center gap-8 text-gray-500">
                    <a href="https://www.linkedin.com/in/daivan-febri-juan-setiya/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="https://orcid.org/0009-0000-2528-8459" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ORCID</a>
                    <a href="https://www.instagram.com/ddaiivan/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
