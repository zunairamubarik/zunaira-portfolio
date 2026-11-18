import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import SelectedWork from './components/SelectedWork';
import WhatIDo from './components/WhatIDo';
import About from './components/About';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1B3E48] text-[#EFEADD] font-body selection:bg-[#CD7E59] selection:text-[#1B3E48] overflow-x-hidden">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Sections */}
      <main>
        {/* Visual-First Animated Hero */}
        <Hero />

        {/* Slow Scrolling Infinite Services Marquee */}
        <MarqueeStrip />

        {/* Selected Work (All 10 Verified Projects & Filters) */}
        <SelectedWork />

        {/* What I Do (3 Core Service Pillars) */}
        <WhatIDo />

        {/* About Me (Factual Background & Education) */}
        <About />

        {/* Career Experience Timeline */}
        <Experience />

        {/* Tools I Use */}
        <Tools />

        {/* Accredited Certifications */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}
