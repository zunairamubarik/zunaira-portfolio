import React from 'react';
import { Wrench, Palette, Cpu, Search } from 'lucide-react';
import { toolsCatalog } from '../data/portfolioData';

export default function Tools() {
  const getCategoryIcon = (category) => {
    if (category.includes('Design')) return Palette;
    if (category.includes('Automation')) return Cpu;
    return Search;
  };

  return (
    <section
      id="tools"
      className="relative bg-[#1B3E48] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#7B7569]/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
              Technical Stack
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight">
            Tools I <span className="text-[#CD7E59] italic font-serif font-normal">Use</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#EFEADD]/80 mt-3 leading-relaxed">
            The dedicated software platforms, design applications, and automation tools utilized in verified client work.
          </p>
        </div>

        {/* 3 Grouped Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {toolsCatalog.map((group, index) => {
            const Icon = getCategoryIcon(group.category);

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#142F37] border border-[#7B7569]/30 p-6 sm:p-7 flex flex-col justify-between shadow-lg shadow-black/20"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#7B7569]/25">
                    <div className="w-10 h-10 rounded-xl bg-[#1B3E48] border border-[#CD7E59]/40 flex items-center justify-center text-[#CD7E59] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#EFEADD]">
                      {group.category}
                    </h3>
                  </div>

                  {/* Tool Chips with Terracotta Hover Micro-Glow */}
                  <div className="space-y-3">
                    {group.tools.map((tool, tIdx) => (
                      <div
                        key={tIdx}
                        className="group p-3 rounded-xl bg-[#1B3E48]/80 border border-[#7B7569]/30 hover:border-[#CD7E59] hover:shadow-md hover:shadow-[#CD7E59]/20 transition-all duration-300 flex items-center justify-between"
                      >
                        <span className="font-serif font-semibold text-sm sm:text-base text-[#EFEADD] group-hover:text-[#EADFCD] transition-colors">
                          {tool.name}
                        </span>
                        <span className="text-[11px] font-sans text-[#7B7569] group-hover:text-[#CD7E59] transition-colors text-right">
                          {tool.note}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#7B7569]/20 text-[11px] font-sans text-[#7B7569]">
                  Verified in active production
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
