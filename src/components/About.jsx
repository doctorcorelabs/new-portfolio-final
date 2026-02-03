import React from 'react';

const About = () => {
    return (
        <div id="about" className="py-20 border-t border-border-dark">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-accent-green"></span> About Me
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg max-w-2xl font-light text-justify">
                        Guided by the principle <span className="text-white font-normal italic">'Ad maiora natus sum'</span> (born for greater things), I view medicine as a pathway to transformative service. My goal is to move beyond immediate solutions and create sustainable health systems for Indonesia. This drive for excellence motivates me to absorb every piece of knowledge during my undergraduate years, knowing that 'greater things' are achieved through relentless preparation and a commitment to lasting impact.
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
                            <span className="text-white">Research, Public Health, Cancer</span>
                        </li>
                        <li className="flex justify-between pt-2">
                            <span>Email</span>
                            <span className="text-white">daivanfebrijuansetiya@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
