
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Nucleus from '../components/Nucleus';
import ScrollToHash from '../components/ScrollToHash';

const NucleusPage = () => {
    return (
        <div className="bg-background-dark min-h-screen">
            <div className="grain-overlay opacity-30 dark:opacity-20 mix-blend-overlay"></div>
            <ScrollToHash />
            <Navbar />
            <Nucleus />
            <Footer />
        </div>
    );
};

export default NucleusPage;
