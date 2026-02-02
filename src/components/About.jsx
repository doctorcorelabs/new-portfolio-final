import React from 'react';

const About = () => {
    return (
        <div id="about" className="py-20 border-t border-border-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-accent-green"></span> About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        My journey in medicine involves a deep commitment to understanding the complexities of human health.
                        Beyond the clinic, I advocate for health equity and engage in rigorous research to find data-driven solutions for public health challenges.
                    </p>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        When I'm not studying or conducting research, I enjoy [Hobbies Placeholder: e.g., reading classic literature, hiking, or photography].
                        I believe that maintaining a balanced life is crucial for long-term success.
                    </p>
                </div>
                <div className="bg-card-dark p-8 rounded-2xl border border-border-dark">
                    <h3 className="text-white font-bold mb-4">Personal Details</h3>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex justify-between border-b border-border-dark pb-2">
                            <span>Location</span>
                            <span className="text-white">Indonesia</span>
                        </li>
                        <li className="flex justify-between border-b border-border-dark pb-2">
                            <span>University</span>
                            <span className="text-white">Islamic University of Indonesia</span>
                        </li>
                        <li className="flex justify-between border-b border-border-dark pb-2">
                            <span>Interests</span>
                            <span className="text-white">Research, Public Health, Surgery</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span>Email</span>
                            <span className="text-white">contact@daivan.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
