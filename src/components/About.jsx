import React from 'react';
import { GraduationCap, Globe, Compass, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const industries = [
    'HVAC',
    'Med Spa',
    'Real Estate',
    'E-Commerce',
    'Healthcare',
    'Beauty',
    'Fine Jewelry',
    'Education',
    'Fashion Apparel'
  ];

  const facts = [
    {
      icon: GraduationCap,
      label: 'Education',
      value: `${personalInfo.education.degree}`,
      detail: `${personalInfo.education.institution} (${personalInfo.education.year})`
    },
    {
      icon: Globe,
      label: 'Active Markets',
      value: 'Pakistan • Canada • UAE • USA',
      detail: 'Delivering remote client solutions globally'
    },
    {
      icon: Compass,
      label: 'Professional Focus',
      value: 'Design, Marketing & Automation',
      detail: 'UI Design (Figma), Meta Ads, GHL Pipelines'
    }
  ];

  return (
    <section
      id="about"
      className="relative bg-[#1B3E48] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#7B7569]/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Grid: Left Portrait Slot, Right Narrative Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (Col 5): Portrait Placeholder Frame */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-2xl bg-[#142F37] border border-[#7B7569]/30 shadow-2xl shadow-black/40 flex flex-col items-center justify-center p-6 text-center group">
              
              {/* Terracotta Corner Accent Borders */}
              <span className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#CD7E59] rounded-tl" aria-hidden="true" />
              <span className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#CD7E59] rounded-tr" aria-hidden="true" />
              <span className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#CD7E59] rounded-bl" aria-hidden="true" />
              <span className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#CD7E59] rounded-br" aria-hidden="true" />

              {/* Inner Frame */}
              <div className="w-full h-full rounded-xl border border-dashed border-[#7B7569]/40 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1B3E48]/40 to-[#142F37]/90">
                
                {/* Terracotta Z Submark */}
                <div className="w-20 h-20 rounded-2xl bg-[#1B3E48] border-2 border-[#CD7E59]/70 flex items-center justify-center shadow-lg mb-5 group-hover:scale-105 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" className="w-12 h-12 fill-[#CD7E59]" aria-hidden="true">
                    <path d="M 26 30 L 74 30 C 75.1 30 76 30.9 76 32 C 76 32.7 75.6 33.3 75.1 33.7 L 38.5 67 L 74 67 C 75.1 67 76 67.9 76 69 L 76 71 C 76 72.1 75.1 73 74 73 L 26 73 C 24.9 73 24 72.1 24 71 C 24 70.3 24.4 69.7 24.9 69.3 L 61.5 36 L 26 36 C 24.9 36 24 35.1 24 34 L 24 32 C 24 30.9 24.9 30 26 30 Z" />
                  </svg>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#EFEADD] mb-1">
                  Your photo here
                </h3>
                
                <p className="text-xs sm:text-sm text-[#7B7569] font-body max-w-[210px] leading-relaxed mb-4">
                  Reserved frame for your profile portrait.
                </p>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B3E48] border border-[#CD7E59]/40 text-[11px] text-[#EADFCD] font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CD7E59]" />
                  Zunaira Mubarik
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Col 7): Factual Narrative & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
              <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
                Background & Foundation
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight mb-6">
              About <span className="text-[#CD7E59] italic font-serif font-normal">Me</span>
            </h2>

            {/* Factual Biography */}
            <div className="space-y-4 font-body text-base sm:text-lg text-[#EFEADD]/85 leading-relaxed">
              <p>
                I am a <strong className="text-[#EFEADD] font-semibold">Creative Designer & Digital Marketing Specialist</strong> with 3+ years of hands-on professional experience, holding a Bachelor of Science in Computer Science (BSCS) from Virtual University (completed in 2026).
              </p>
              <p>
                My approach is <strong className="text-[#EADFCD] font-semibold">design-first</strong>. I focus on developing clean desktop and mobile visual interfaces in Figma, cohesive brand identities, and practical digital assets. Alongside design, I manage targeted Meta advertising campaigns and configure GoHighLevel automated client acquisition funnels that support real business operations.
              </p>
              <p className="text-sm sm:text-base text-[#EFEADD]/80">
                Over the past 3+ years, I have executed projects for clients and agencies across <strong className="text-[#EFEADD]">Pakistan, Canada, the United Arab Emirates, and the United States</strong>.
              </p>
            </div>

            {/* Industries Served */}
            <div className="mt-6 pt-5 border-t border-[#7B7569]/20">
              <span className="text-xs font-sans uppercase tracking-wider text-[#7B7569] block mb-3 font-semibold">
                Industries Worked In:
              </span>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans px-3 py-1 rounded-full bg-[#142F37] border border-[#7B7569]/30 text-[#EFEADD]/90"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Facts Row / Highlight Cards (3 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-14 sm:mt-16 pt-10 border-t border-[#7B7569]/25">
          {facts.map((fact, index) => {
            const Icon = fact.icon;
            return (
              <div
                key={index}
                className="rounded-xl bg-[#142F37] border border-[#7B7569]/30 p-5 sm:p-6 flex items-start gap-4 shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1B3E48] border border-[#CD7E59]/40 flex items-center justify-center text-[#CD7E59] shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-sans uppercase tracking-wider text-[#7B7569] font-medium block mb-1">
                    {fact.label}
                  </span>
                  <div className="font-serif text-base sm:text-lg font-bold text-[#EFEADD] leading-snug">
                    {fact.value}
                  </div>
                  <div className="text-xs text-[#EFEADD]/70 font-body mt-1">
                    {fact.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
