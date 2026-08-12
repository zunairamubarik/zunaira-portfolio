import React, { useEffect } from 'react';
import { X, CheckCircle, Wrench, Globe, Info, Sparkles, Layers, ArrowUpRight } from 'lucide-react';
import ProjectPlaceholderCard from './ProjectPlaceholderCard';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Drawer Box */}
      <div className="relative w-full max-w-3xl bg-obsidian-surface border border-brand-500/30 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-obsidian-card to-obsidian-surface border-b border-brand-900/40 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-950 border border-brand-500/30 text-brand-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Industry: {project.industry}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="text-xs text-brand-400 font-medium mt-1">
              Role: {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-obsidian border border-brand-900/50 text-slate-400 hover:text-white hover:border-brand-500/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Visual Card Header */}
          <ProjectPlaceholderCard project={project} />

          {/* Overview & Description */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-400" />
              Project Overview & Context
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-obsidian/60 p-4 rounded-2xl border border-brand-900/30">
              {project.details || project.shortDescription}
            </p>
          </div>

          {/* Deliverables List */}
          {project.deliverables && (
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                Key Scope & Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-200 p-2.5 rounded-xl bg-obsidian-card border border-brand-900/30">
                    <CheckCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Sub-websites if available */}
          {project.websitesCreated && (
            <div className="space-y-3 p-4 rounded-2xl bg-brand-950/60 border border-brand-500/30">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-brand-400" />
                Featured Websites & Landing Pages Built (15+ Total)
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.websitesCreated.map((site, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 rounded-lg bg-obsidian border border-brand-900 text-xs font-semibold text-white">
                    {site}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Client portfolio items if available */}
          {project.clientPortfolio && (
            <div className="space-y-3 p-4 rounded-2xl bg-obsidian/80 border border-brand-900/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300">
                Client Brand Breakdowns
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.clientPortfolio.map((cp, cIdx) => (
                  <div key={cIdx} className="p-2.5 rounded-xl bg-obsidian-card border border-brand-900/30 text-xs">
                    <span className="font-bold text-white block">{cp.name}</span>
                    <span className="text-slate-400 text-[11px]">{cp.work}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Historical Note / Verified Result Banner */}
          {project.note && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 text-amber-200 text-xs leading-relaxed">
              <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Historical Design Context</span>
                {project.note}
              </div>
            </div>
          )}

          {project.resultsVerified && (
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-950/60 border border-brand-500/40 text-brand-200 text-xs leading-relaxed">
              <Sparkles className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Verified Work Results</span>
                {project.resultsVerified}
              </div>
            </div>
          )}

          {/* Placeholder Disclaimer */}
          {project.isPlaceholder && (
            <div className="p-4 rounded-2xl bg-obsidian border border-brand-900/40 text-slate-400 text-xs space-y-1">
              <span className="font-semibold text-brand-300 block">Project Structure & Ready Placeholder</span>
              <p>This project is configured in the portfolio structure. No unverified metrics or figures have been added in strict accordance with content rules.</p>
            </div>
          )}

          {/* Tools Used */}
          {project.tools && (
            <div className="pt-2 border-t border-brand-900/30 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                <Wrench className="w-4 h-4 text-brand-400" />
                <span>Primary Tools:</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 rounded bg-brand-950 text-brand-300 text-[11px] font-mono border border-brand-900/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-obsidian-card border-t border-brand-900/40 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Portfolio Case Study Structure
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
