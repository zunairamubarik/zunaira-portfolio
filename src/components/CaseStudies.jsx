import React, { useState } from 'react';
import { Sparkles, CheckCircle, ExternalLink, Globe, Layers, ArrowUpRight, Wrench, ShieldCheck, Info } from 'lucide-react';
import { caseStudiesList } from '../data/portfolioData';

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(caseStudiesList[0].id);

  const activeStudy = caseStudiesList.find(c => c.id === activeTab) || caseStudiesList[0];

  return (
    <section id="case-studies" className="py-24 bg-obsidian text-white relative overflow-hidden">
      {/* Radial Glow Ambient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 px-3.5 py-1 rounded-full bg-brand-950/80 border border-brand-500/30">
            In-Depth Analysis
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Detailed Case Studies
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            In-depth breakdowns of strategy, technical implementation, and scope for key initiatives.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {caseStudiesList.map((study) => (
            <button
              key={study.id}
              onClick={() => setActiveTab(study.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 ${
                activeTab === study.id
                  ? 'bg-brand-600 text-white shadow-glow-sm scale-105'
                  : 'bg-obsidian-surface text-slate-300 hover:text-white border border-brand-900/40'
              }`}
            >
              {study.title}
            </button>
          ))}
        </div>

        {/* Selected Active Case Study Panel */}
        <div className="bg-obsidian-surface rounded-3xl border border-brand-900/40 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-brand-900/40 pb-6">
            <div>
              <span className="text-xs font-mono font-semibold text-brand-400 uppercase tracking-widest block mb-1">
                Industry: {activeStudy.industry}
              </span>
              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                {activeStudy.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {activeStudy.subtitle}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-obsidian-card border border-brand-900/40 text-xs self-start md:self-auto">
              <span className="text-slate-400 block text-[10px] uppercase font-mono">Assigned Role</span>
              <span className="font-semibold text-brand-300">{activeStudy.role}</span>
            </div>
          </div>

          {/* Overview & Challenge Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-obsidian/70 border border-brand-900/30 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400" />
                Project Overview
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {activeStudy.overview}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-obsidian/70 border border-brand-900/30 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-400" />
                Core Challenge & Objective
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                {activeStudy.challenge}
              </p>
            </div>
          </div>

          {/* Scope Delivered / What I Did */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Technical Execution & Scope Delivered:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeStudy.whatIDid.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-obsidian-card border border-brand-900/30 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Links if available (Moorthix Automation) */}
          {activeStudy.verifiedLinks && (
            <div className="p-5 rounded-2xl bg-brand-950/70 border border-brand-500/30 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-400" />
                Verified Live Website Portals Created:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {activeStudy.verifiedLinks.map((site, sIdx) => (
                  <a
                    key={sIdx}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-obsidian border border-brand-500/40 text-xs font-semibold text-white hover:bg-brand-600 transition-colors shadow-glow-sm"
                  >
                    <span>{site.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-brand-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Verified Results / Outcome Notice */}
          {activeStudy.results && (
            <div className="p-5 rounded-2xl bg-brand-950/40 border border-brand-500/30 text-brand-200 text-xs space-y-1">
              <span className="font-bold text-white text-xs block flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                Verified Project Results & Accomplishments
              </span>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {activeStudy.results}
              </p>
            </div>
          )}

          {activeStudy.metricsNotice && (
            <div className="p-4 rounded-2xl bg-obsidian border border-brand-900/40 text-slate-400 text-xs flex items-center gap-2">
              <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{activeStudy.metricsNotice}</span>
            </div>
          )}

          {/* Tools & Technologies */}
          <div className="pt-4 border-t border-brand-900/30 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <Wrench className="w-4 h-4 text-brand-400" />
              <span className="font-bold">Technologies Used:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeStudy.tools.map((t, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-brand-950 border border-brand-900/50 text-brand-200 font-mono text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
