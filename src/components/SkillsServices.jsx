import React from 'react';
import { Palette, Megaphone, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
import { servicesCategories } from '../data/portfolioData';

const categoryIcons = {
  design: Palette,
  marketing: Megaphone,
  automation: Cpu,
};

export default function SkillsServices() {
  return (
    <section id="services" className="py-24 bg-obsidian text-white relative overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3.5 py-1 rounded-full bg-brand-950/80 border border-brand-500/30">
            What I Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Services
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Structured creative solutions across visual design, digital marketing campaigns, and workflow automation.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesCategories.map((category) => {
            const IconComponent = categoryIcons[category.id] || Palette;
            return (
              <div
                key={category.id}
                className="group relative bg-obsidian-surface hover:bg-obsidian-card p-8 rounded-3xl border border-brand-900/40 hover:border-brand-500/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-brand-950 border border-brand-500/30 flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:text-brand-300 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest px-2.5 py-1 rounded-md bg-brand-900/30 border border-brand-900/50">
                      Core Service
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Bullet Checklist */}
                  <div className="space-y-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-obsidian/70 border border-brand-900/20">
                        <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />
                        <span className="text-xs font-semibold text-slate-200">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software Tools Footer */}
                <div className="pt-6 mt-6 border-t border-brand-900/30 space-y-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    <Wrench className="w-3.5 h-3.5 text-brand-400" />
                    <span>Tools & Platforms</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-brand-950/80 border border-brand-900/50 text-brand-200"
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
