import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ShieldAlert, Wrench, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  // Lock body scroll while modal is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto overflow-x-hidden animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#142F37] border border-[#7B7569]/40 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#7B7569]/25 flex items-center justify-between bg-[#1B3E48]">
          <div>
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#CD7E59]">
              {project.category}
            </span>
            <h2 id="modal-project-title" className="font-serif text-xl sm:text-2xl font-bold text-[#EFEADD] leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Close button with 48px tap target */}
          <button
            type="button"
            onClick={onClose}
            className="min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center rounded-xl text-[#EFEADD] hover:text-[#CD7E59] hover:bg-[#142F37] focus:outline-none focus:ring-2 focus:ring-[#CD7E59]/50 transition-colors shrink-0"
            aria-label="Close Project Details"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto overflow-x-hidden font-body text-sm sm:text-base text-[#EFEADD]/90">
          
          {/* Factual Role & Client */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#1B3E48]/60 border border-[#7B7569]/20 text-xs sm:text-sm">
            <div>
              <span className="text-[#7B7569] uppercase font-sans tracking-wider block mb-1">
                Factual Role
              </span>
              <span className="font-semibold text-[#EFEADD]">
                {project.role}
              </span>
            </div>
            <div>
              <span className="text-[#7B7569] uppercase font-sans tracking-wider block mb-1">
                Industry / Client
              </span>
              <span className="font-semibold text-[#EFEADD]">
                {project.industry} ({project.client})
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#EFEADD] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#CD7E59]" />
              Project Overview
            </h3>
            <p className="leading-relaxed text-[#EFEADD]/85">
              {project.shortDescription}
            </p>
          </div>

          {/* Mandatory Scope Notices (e.g. Elkhart UI only / Daha no ROAS) */}
          {project.scopeNotice && (
            <div className="p-4 rounded-xl bg-[#602E18]/40 border border-[#CD7E59]/40 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#CD7E59] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed text-[#EADFCD]">
                <strong className="font-semibold block text-[#EFEADD] mb-0.5">Verification Note:</strong>
                {project.scopeNotice}
              </div>
            </div>
          )}

          {/* Deliverables / Scope */}
          {project.deliverables && (
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#EFEADD] mb-3">
                Key Scope & Deliverables
              </h3>
              <div className="space-y-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#CD7E59] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Verified Sites (Specifically for Moorthix Automation) */}
          {project.verifiedWebsites && (
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-[#EFEADD] mb-2">
                Verified Sites Created Under Moorthix (15+ Total):
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {project.verifiedWebsites.map((site, sIdx) => (
                  <a
                    key={sIdx}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-[#1B3E48] border border-[#7B7569]/30 hover:border-[#CD7E59] flex items-center justify-between text-[#EADFCD] transition-colors"
                  >
                    <span>{site.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#CD7E59]" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Verified Results Pill */}
          <div className="p-4 rounded-xl bg-[#1B3E48] border border-[#7B7569]/30">
            <span className="text-xs uppercase font-sans tracking-wider text-[#CD7E59] font-semibold block mb-1">
              Verified Delivery & Results
            </span>
            <p className="text-sm font-body text-[#EFEADD] leading-relaxed">
              {project.resultsVerified}
            </p>
          </div>

          {/* Tools Used Chips */}
          <div>
            <h3 className="font-serif text-xs uppercase font-sans tracking-wider text-[#7B7569] font-medium mb-2 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-[#CD7E59]" />
              Tools Employed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs font-sans px-3 py-1 rounded-md bg-[#1B3E48] text-[#EFEADD]/90 border border-[#7B7569]/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Real Live Link (Strictly for Daha Fragrance only) */}
          {project.hasLiveLink && project.liveUrl && (
            <div className="pt-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-6 py-3 rounded-xl bg-[#CD7E59] hover:bg-[#BD6F4A] text-[#EFEADD] font-serif font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.99]"
              >
                <span>Visit Live Store (dahafragrance.com)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#1B3E48] border-t border-[#7B7569]/25 flex items-center justify-between text-xs text-[#7B7569]">
          <span>Zunaira Virtual Services • Verified Portfolio</span>
          <button
            type="button"
            onClick={onClose}
            className="text-[#EFEADD] hover:text-[#CD7E59] underline font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
