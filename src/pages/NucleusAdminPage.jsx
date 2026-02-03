
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NucleusAdmin from '../components/NucleusAdmin';
import ScrollToHash from '../components/ScrollToHash';

const NucleusAdminPage = () => {
    return (
        <div className="bg-background-dark min-h-screen">
            <div className="grain-overlay opacity-30 dark:opacity-20 mix-blend-overlay"></div>
            <ScrollToHash />
            <Navbar />
            <NucleusAdmin />
            <Footer />
        </div>
    );
};

export default NucleusAdminPage;
