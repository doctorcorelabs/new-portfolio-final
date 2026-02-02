import React from 'react';

const TrustedBy = () => {
    const companies = [
        { name: 'Google', logo: 'G' },
        { name: 'Microsoft', logo: 'M' },
        { name: 'Stripe', logo: 'S' },
        { name: 'Amazon', logo: 'A' },
    ];

    return (
        <div className="mt-16">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">
                Trusted by experts at
            </p>
            <div className="flex items-center justify-center gap-8 md:gap-12">
                {companies.map((company) => (
                    <div
                        key={company.name}
                        className="group flex items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                        <span className="text-xl font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                            {company.logo}
                        </span>
                        <span className="text-sm font-medium tracking-wide opacity-50 group-hover:opacity-100 transition-opacity">
                            {company.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustedBy;
