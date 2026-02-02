import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Awards from './components/Awards';
import Research from './components/Research';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="grain-overlay opacity-30 dark:opacity-20 mix-blend-overlay"></div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />

        {/* Main Content Area */}
        <div className="space-y-0">
          <About />
          <Education />
          <Awards />
          <Research />
          <div className="py-20 border-t border-border-dark" id="experience">
            <Experience />
          </div>
          <Certifications />
          <Contact />
        </div>

        <Footer />
      </main>
    </>
  );
}

export default App;
