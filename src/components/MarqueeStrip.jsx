import React from 'react';

export default function MarqueeStrip() {
  const marqueeItems = [
    'UI Design',
    'WordPress Websites',
    'Meta Advertising',
    'GoHighLevel Automation',
    'SEO',
    'Brand Identity'
  ];

  return (
    <section
      aria-label="Core Services Marquee"
      className="relative w-full bg-[#602E18] border-y border-[#CD7E59]/30 overflow-hidden marquee-container select-none z-20"
    >
      {/* Outer scrolling wrapper */}
      <div className="flex w-max animate-marquee marquee-content py-3.5 sm:py-4.5 md:py-5">
        
        {/* First Sequence */}
        <div className="flex items-center shrink-0" aria-hidden="false">
          {marqueeItems.map((item, idx) => (
            <div key={`seq1-${idx}`} className="flex items-center">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#EFEADD] whitespace-nowrap">
                {item}
              </span>
              <span 
                className="text-[#CD7E59] text-xl sm:text-2xl md:text-3xl mx-4 sm:mx-6 md:mx-8 select-none font-bold"
                aria-hidden="true"
              >
                •
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate Sequence for continuous seamless looping */}
        <div className="flex items-center shrink-0" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <div key={`seq2-${idx}`} className="flex items-center">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-[#EFEADD] whitespace-nowrap">
                {item}
              </span>
              <span 
                className="text-[#CD7E59] text-xl sm:text-2xl md:text-3xl mx-4 sm:mx-6 md:mx-8 select-none font-bold"
                aria-hidden="true"
              >
                •
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
