import React from 'react';
import { Calendar, MapPin, Building2, CheckCircle, ExternalLink, Globe } from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-editorial-bg text-editorial-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 px-3.5 py-1 rounded-full bg-brand-100 border border-brand-200">
            Career Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-editorial-text tracking-tight">
            Professional Experience
          </h2>
          <p className="max-w-xl text-slate-600 text-sm sm:text-base">
            Verified timeline detailing agency and client engagements across design, advertising, and automation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-brand-200 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-brand-600 shadow-md group-hover:scale-125 transition-transform"></div>

              {/* Card Container */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-editorial-border shadow-sm hover:shadow-md transition-all space-y-6">
                
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                        {item.role}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-brand-100 text-brand-700">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
                      <span className="flex items-center gap-1 font-semibold text-slate-800">
                        <Building2 className="w-3.5 h-3.5 text-brand-600" />
                        {item.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200/80 self-start md:self-auto">
                    <Calendar className="w-4 h-4 text-brand-600" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  {item.description}
                </p>

                {/* Key Work Highlights */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key Scope & Work Performed:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Links if available (Moorthix Automation) */}
                {item.verifiedWebsites && (
                  <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200 space-y-2">
                    <span className="text-xs font-bold text-brand-900 uppercase tracking-wider flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-brand-600" />
                      Verified Sample Websites Created (15+ Total):
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.verifiedWebsites.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-brand-300 text-xs font-semibold text-brand-900 hover:bg-brand-600 hover:text-white transition-colors shadow-2xs"
                        >
                          <span>{site.name}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Client Portfolio breakdown if available (Spiral UAE) */}
                {item.clientPortfolio && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Client Brands & Visual Scope:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
                      {item.clientPortfolio.map((cp, cpIdx) => (
                        <div key={cpIdx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs">
                          <span className="font-bold text-slate-900 block">{cp.name}</span>
                          <span className="text-slate-500 text-[11px]">{cp.work}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
