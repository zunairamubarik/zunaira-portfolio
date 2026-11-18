import React from 'react';
import { ArrowRight, CornerDownRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const headlineWords = [
    'Creative',
    'Designer',
    '&',
    'Digital',
    'Marketing',
    'Specialist'
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] bg-[#1B3E48] text-[#EFEADD] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-8 lg:px-12 flex items-center overflow-x-hidden"
    >
      {/* Subtle architectural background texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#EFEADD_1px,transparent_1px)] [background-size:24px_24px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Kinetic Typography & Call-To-Actions (Col 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Small Terracotta Eyebrow Label */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#CD7E59] animate-pulse" />
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
              {personalInfo.name} — {personalInfo.brandName}
            </span>
          </div>

          {/* Kinetic Headline: Words slide up one by one */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] font-bold text-[#EFEADD] leading-[1.12] tracking-tight mb-6 sm:mb-8">
            {headlineWords.map((word, index) => (
              <span
                key={index}
                className="overflow-hidden inline-block mr-2 sm:mr-3 pb-1 align-bottom"
              >
                <span
                  className="inline-block animate-word-slide-up opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {word === '&' ? (
                    <span className="text-[#CD7E59] font-serif font-normal italic">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              </span>
            ))}
          </h1>

          {/* Truthful Subtext */}
          <p className="font-body text-base sm:text-lg lg:text-xl text-[#EFEADD]/85 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
            3+ years designing brands, websites and Meta ad campaigns across Pakistan, Canada, UAE and USA. BSCS, Virtual University.
          </p>

          {/* Responsive Action Buttons (Full width on mobile, inline on tablet/desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* Terracotta Primary CTA with moving arrow on hover */}
            <a
              href="#work"
              className="group min-h-[48px] px-8 py-3.5 rounded-full bg-[#CD7E59] hover:bg-[#BD6F4A] text-[#EFEADD] font-serif font-semibold text-base sm:text-lg text-center flex items-center justify-center gap-3 shadow-lg shadow-[#CD7E59]/25 hover:shadow-xl hover:shadow-[#CD7E59]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>View Selected Work</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>

            {/* Outline Cream Secondary CTA */}
            <a
              href="#contact"
              className="min-h-[48px] px-8 py-3.5 rounded-full border border-[#EFEADD]/40 hover:border-[#CD7E59] text-[#EFEADD] hover:text-[#CD7E59] font-serif font-semibold text-base sm:text-lg text-center flex items-center justify-center transition-all duration-300 hover:bg-[#142F37]/40 active:translate-y-0"
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Honest Specialization Micro-Pills */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#7B7569]/20 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[#7B7569]">
            <span className="text-[#EFEADD]/70 font-medium">Core Focus:</span>
            <span className="px-2.5 py-1 rounded-md bg-[#142F37] border border-[#7B7569]/25 text-[#EFEADD]/90">UI Design</span>
            <span className="px-2.5 py-1 rounded-md bg-[#142F37] border border-[#7B7569]/25 text-[#EFEADD]/90">Brand Identity</span>
            <span className="px-2.5 py-1 rounded-md bg-[#142F37] border border-[#7B7569]/25 text-[#EFEADD]/90">Meta Ads</span>
            <span className="px-2.5 py-1 rounded-md bg-[#142F37] border border-[#7B7569]/25 text-[#EFEADD]/90">GHL Automation</span>
          </div>

        </div>

        {/* Right Column: Editorial Portrait Placeholder Frame (Col 5) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] aspect-[4/5] rounded-2xl bg-[#142F37] border border-[#7B7569]/30 shadow-2xl shadow-black/40 flex flex-col items-center justify-center p-6 text-center group">
            
            {/* Terracotta Corner Accent Borders */}
            <span className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#CD7E59] rounded-tl" aria-hidden="true" />
            <span className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#CD7E59] rounded-tr" aria-hidden="true" />
            <span className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#CD7E59] rounded-bl" aria-hidden="true" />
            <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#CD7E59] rounded-br" aria-hidden="true" />

            {/* Inner Dashed Framing */}
            <div className="w-full h-full rounded-xl border border-dashed border-[#7B7569]/40 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1B3E48]/40 to-[#142F37]/90">
              
              {/* Terracotta Z Submark Monogram */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#1B3E48] border-2 border-[#CD7E59]/70 flex items-center justify-center shadow-lg shadow-black/30 mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg
                  viewBox="0 0 100 100"
                  className="w-12 h-12 fill-[#CD7E59]"
                  aria-hidden="true"
                >
                  <path d="M 26 30 L 74 30 C 75.1 30 76 30.9 76 32 C 76 32.7 75.6 33.3 75.1 33.7 L 38.5 67 L 74 67 C 75.1 67 76 67.9 76 69 L 76 71 C 76 72.1 75.1 73 74 73 L 26 73 C 24.9 73 24 72.1 24 71 C 24 70.3 24.4 69.7 24.9 69.3 L 61.5 36 L 26 36 C 24.9 36 24 35.1 24 34 L 24 32 C 24 30.9 24.9 30 26 30 Z" />
                </svg>
              </div>

              {/* Placeholder Notice */}
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#EFEADD] mb-1">
                Your photo here
              </h2>
              
              <p className="text-xs sm:text-sm text-[#7B7569] font-body max-w-[220px] leading-relaxed mb-4">
                Framed slot reserved for your professional portrait.
              </p>

              {/* Editorial Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B3E48] border border-[#CD7E59]/40 text-[11px] text-[#EADFCD] font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CD7E59]" />
                Zunaira Virtual Services
              </div>
            </div>

            {/* Corner Year / Location Tag */}
            <div className="absolute bottom-3 right-4 text-[10px] text-[#7B7569]/80 font-sans tracking-wider uppercase">
              PK • CA • UAE • USA
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
