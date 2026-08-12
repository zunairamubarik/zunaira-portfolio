import React from 'react';
import { GraduationCap, Briefcase, Sparkles, CheckCircle, Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 bg-editorial-bg text-editorial-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 px-3.5 py-1 rounded-full bg-brand-100 border border-brand-200">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-editorial-text tracking-tight">
            {personalInfo.headlineAbout}
          </h2>
          <p className="max-w-2xl text-slate-600 text-sm sm:text-base leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        {/* 2-Column Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Academic Background & Qualifications */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-editorial-border shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-slate-900">
                    Academic Background & Experience
                  </h3>
                  <p className="text-xs text-brand-600 font-semibold uppercase tracking-wider">
                    Computer Science Graduate
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-base">
                    {personalInfo.education.degree}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-100 text-brand-700">
                    {personalInfo.education.year}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-600">
                  Institution: {personalInfo.education.institution}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Core Specializations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalInfo.strengths.map((strength, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                      <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Verified Experience: 3+ Years</span>
              <span>Degree: BSCS (2026)</span>
            </div>
          </div>

          {/* Primary Focus Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-obsidian via-obsidian-surface to-obsidian-card text-white p-8 sm:p-10 rounded-3xl border border-brand-900/50 shadow-xl flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-600/30 border border-brand-500/40 flex items-center justify-center text-brand-400">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Design-Led Professional Focus
                  </h3>
                  <p className="text-xs text-brand-300 font-semibold uppercase tracking-wider">
                    Core Capability Highlight
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
                <p>
                  While I hold extensive experience managing Meta Ads campaigns, SEO indexing, and GoHighLevel CRM workflows, my primary strength and passion is <strong className="text-brand-300">DESIGN</strong>.
                </p>
                <p>
                  I enjoy crafting visually compelling UI/UX mockups, brand identity packaging, social media graphics, and strategic advertising creatives that captivate audiences.
                </p>
                <div className="p-4 rounded-xl bg-obsidian-card border border-brand-900/40 space-y-1">
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Multidisciplinary Synergy</span>
                  <p className="text-[11px] text-slate-400">Combining strong design fundamentals with performance advertising ensures every visual asset is built to engage and convert.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-900/50">
              <a
                href="#services"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
              >
                <span>View Full Service Offerings</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
