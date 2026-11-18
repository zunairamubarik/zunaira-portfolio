import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState({});
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            setVisibleItems((prev) => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="relative bg-[#602E18] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#CD7E59]/30"
    >
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
              Career History
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight">
            Work <span className="text-[#CD7E59] italic font-serif font-normal">Experience</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#EFEADD]/80 mt-3 leading-relaxed">
            3+ years executing design, advertising, and marketing automation for client agencies and e-commerce brands.
          </p>
        </div>

        {/* Timeline Container (Single column on mobile, elegant vertical line on desktop) */}
        <div className="relative border-l-2 border-[#CD7E59]/30 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-10 space-y-12 sm:space-y-14">
          {experienceTimeline.map((item, index) => {
            const isItemVisible = visibleItems[index];

            return (
              <div
                key={item.company}
                ref={(el) => (itemsRef.current[index] = el)}
                data-index={index}
                className={`relative transition-all duration-700 ease-out ${
                  isItemVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Timeline Node - Lights up in terracotta on scroll */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    isItemVisible
                      ? 'bg-[#CD7E59] border-[#EFEADD] shadow-md shadow-[#CD7E59]/40 scale-110'
                      : 'bg-[#602E18] border-[#7B7569] scale-100'
                  }`}
                  aria-hidden="true"
                >
                  <span className={`w-2 h-2 rounded-full ${isItemVisible ? 'bg-[#142F37]' : 'bg-[#7B7569]'}`} />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-[#142F37] border border-[#7B7569]/30 hover:border-[#CD7E59]/60 p-6 sm:p-8 shadow-xl shadow-black/25 transition-all duration-300">
                  
                  {/* Top Bar: Role & Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-3 pb-3 border-b border-[#7B7569]/20">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EFEADD] leading-tight">
                        {item.role}
                      </h3>
                      <div className="text-base sm:text-lg font-serif text-[#CD7E59] font-medium mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    {/* Period badge (Left blank for Spiral UAE as strictly instructed) */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-sans">
                      {item.period ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1B3E48] text-[#EADFCD] border border-[#7B7569]/30">
                          <Calendar className="w-3.5 h-3.5 text-[#CD7E59]" />
                          {item.period}
                        </span>
                      ) : null}

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#1B3E48]/80 text-[#7B7569] border border-[#7B7569]/20">
                        <MapPin className="w-3 h-3 text-[#CD7E59]" />
                        {item.type} {item.market ? `• ${item.market}` : ''}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="font-body text-sm sm:text-base text-[#EFEADD]/85 mb-5 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bulleted Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EFEADD]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#CD7E59] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified sites tags for Moorthix */}
                  {item.verifiedSites && (
                    <div className="pt-4 border-t border-[#7B7569]/20 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-[#7B7569] font-sans font-medium mr-1">Verified Sites:</span>
                      {item.verifiedSites.map((site, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-sans px-2.5 py-0.5 rounded-md bg-[#1B3E48] text-[#EADFCD] border border-[#7B7569]/30"
                        >
                          {site}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tools employed */}
                  <div className="pt-4 border-t border-[#7B7569]/20 flex flex-wrap gap-1.5 mt-4">
                    {item.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-sans px-2.5 py-0.5 rounded-md bg-[#1B3E48]/80 text-[#EFEADD]/80 border border-[#7B7569]/30"
                      >
                        {tool}
                      </span>
                    ))}
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
