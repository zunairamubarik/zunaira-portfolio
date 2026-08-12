import React from 'react';
import { Award, CheckCircle2, Trophy, FileCheck } from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-editorial-bg text-editorial-text relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 px-3.5 py-1 rounded-full bg-brand-100 border border-brand-200">
            Real Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-editorial-text tracking-tight">
            Certifications & Awards
          </h2>
          <p className="max-w-xl text-slate-600 text-sm sm:text-base">
            Verified qualifications and academic distinctions earned in digital skills and marketing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificationsList.map((item, idx) => {
            const isAward = item.type === 'Award Winner';

            return (
              <div
                key={idx}
                className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isAward
                    ? 'bg-gradient-to-br from-amber-500/10 via-white to-brand-50 border-amber-300 shadow-md'
                    : 'bg-white border-editorial-border shadow-sm hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Card Header Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      isAward
                        ? 'bg-amber-100 text-amber-700 border border-amber-300'
                        : 'bg-brand-100 text-brand-700 border border-brand-200'
                    }`}>
                      {isAward ? <Trophy className="w-6 h-6" /> : <FileCheck className="w-6 h-6" />}
                    </div>

                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isAward
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}>
                      {item.statusText}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-wider mt-0.5">
                      Issuing Body: {item.issuer}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <CheckCircle2 className="w-4 h-4" />
                    Verified Qualification
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Verified</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
