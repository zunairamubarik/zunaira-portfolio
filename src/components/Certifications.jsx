import React from 'react';
import { Award, CheckCircle2, Trophy, BookOpen, AlertCircle } from 'lucide-react';
import { certificationsList, personalInfo } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-[#1B3E48] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#7B7569]/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
              Qualifications & Honors
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight">
            Accredited <span className="text-[#CD7E59] italic font-serif font-normal">Certifications</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#EFEADD]/80 mt-3 leading-relaxed">
            Verified formal technical qualifications and merit awards achieved through structured programs.
          </p>
        </div>

        {/* Exactly 3 Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-10">
          {certificationsList.map((cert) => {
            const isAkhuwatMerit = cert.id === 'akhuwat-marketing';

            return (
              <div
                key={cert.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 ${
                  isAkhuwatMerit
                    ? 'bg-[#602E18] border-2 border-[#CD7E59] shadow-[#CD7E59]/20 md:-translate-y-2'
                    : 'bg-[#142F37] border border-[#7B7569]/30 hover:border-[#CD7E59]/60 shadow-black/25'
                }`}
              >
                {/* Prominent Badge for Akhuwat 3rd Position */}
                {isAkhuwatMerit && (
                  <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#CD7E59] text-[#142F37] font-sans font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 fill-[#142F37]" />
                    <span>Merit Award Winner</span>
                  </div>
                )}

                <div>
                  {/* Top Bar: Icon & Issuer */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        isAkhuwatMerit
                          ? 'bg-[#142F37] border border-[#CD7E59] text-[#CD7E59]'
                          : 'bg-[#1B3E48] border border-[#7B7569]/40 text-[#CD7E59]'
                      }`}
                    >
                      {isAkhuwatMerit ? (
                        <Trophy className="w-6 h-6 text-[#CD7E59]" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>

                    <span className="text-xs font-sans text-[#7B7569] uppercase tracking-wider font-semibold">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EFEADD] mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Type / Qualification */}
                  <div className="text-xs font-sans text-[#CD7E59] font-semibold tracking-wide uppercase mb-3">
                    {cert.type}
                  </div>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-[#EFEADD]/80 leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="pt-4 border-t border-[#7B7569]/25 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CD7E59] shrink-0" />
                  <span className="text-xs font-sans font-semibold text-[#EADFCD]">
                    {cert.statusBadge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* PSDF UI/UX Course: Separate "Additional Training" Note (NOT a 4th certification card) */}
        <div className="rounded-xl bg-[#142F37] border border-[#7B7569]/30 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#1B3E48] border border-[#7B7569]/30 flex items-center justify-center text-[#CD7E59] shrink-0 mt-0.5 sm:mt-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-sm sm:text-base text-[#EFEADD]">
                  PSDF — UI/UX Design Course
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#1B3E48] border border-[#7B7569]/30 text-[10px] uppercase tracking-wider font-sans text-[#7B7569]">
                  Additional Training
                </span>
              </div>
              <p className="text-xs text-[#7B7569] font-body mt-0.5">
                Professional skill development coursework (UI design focus, no certificate claimed).
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs text-[#7B7569] font-sans sm:text-right shrink-0">
            <AlertCircle className="w-3.5 h-3.5 text-[#CD7E59]/80" />
            <span>Non-credentialed coursework</span>
          </div>
        </div>

      </div>
    </section>
  );
}
