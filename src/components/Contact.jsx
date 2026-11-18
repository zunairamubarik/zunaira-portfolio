import React, { useState } from 'react';
import { Copy, Check, Mail, Sparkles, Clock, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const emailPlaceholder = personalInfo.contact.emailPlaceholder; // "[your email]"

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(emailPlaceholder);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#1B3E48] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#7B7569]/20"
    >
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Main Editorial Card */}
        <div className="rounded-3xl bg-[#142F37] border border-[#7B7569]/30 p-8 sm:p-12 lg:p-14 shadow-2xl shadow-black/40 text-center relative overflow-hidden">
          
          {/* Subtle Corner Accents */}
          <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#CD7E59] rounded-tl-3xl" aria-hidden="true" />
          <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#CD7E59] rounded-br-3xl" aria-hidden="true" />

          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
              Get In Touch
            </span>
          </div>

          {/* Section Heading */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight mb-4">
            Let's Work <span className="text-[#CD7E59] italic font-serif font-normal">Together</span>
          </h2>

          {/* Truthful Subtext */}
          <p className="font-body text-base sm:text-lg text-[#EFEADD]/85 max-w-xl mx-auto leading-relaxed mb-8">
            I'm available for design, marketing and automation work for real businesses. Tell me about your project and I'll get back to you.
          </p>

          {/* Contact Interaction Area */}
          <div className="flex flex-col items-center justify-center gap-4 max-w-md mx-auto">
            
            {/* Display Box for Email Placeholder */}
            <div className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#1B3E48] border border-[#7B7569]/30">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#142F37] border border-[#CD7E59]/40 flex items-center justify-center text-[#CD7E59] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-serif font-medium text-sm sm:text-base text-[#EADFCD] tracking-wide">
                  {emailPlaceholder}
                </span>
              </div>

              {/* Status Indicator */}
              <span className="text-[11px] font-sans px-2.5 py-1 rounded-full bg-[#142F37] text-[#7B7569] border border-[#7B7569]/20 hidden sm:inline-block">
                Direct Contact
              </span>
            </div>

            {/* Terracotta "Copy Email" Button (Full-width on phone, min 48px tap target) */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full min-h-[48px] py-3.5 px-8 rounded-full bg-[#CD7E59] hover:bg-[#BD6F4A] text-[#EFEADD] font-serif font-semibold text-base sm:text-lg flex items-center justify-center gap-2.5 shadow-lg shadow-[#CD7E59]/25 hover:shadow-xl hover:shadow-[#CD7E59]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              aria-label="Copy contact email placeholder to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-[#EFEADD]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-[#EFEADD]" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Small Toast Notification */}
            {copied && (
              <div
                role="status"
                aria-live="polite"
                className="mt-2 text-xs font-sans text-[#EADFCD] bg-[#602E18] border border-[#CD7E59] px-4 py-2 rounded-full animate-fade-in flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5 text-[#CD7E59]" />
                <span>Email copied to clipboard ({emailPlaceholder})</span>
              </div>
            )}

          </div>

          {/* Socials Placeholder Block: Blank with "Socials — Coming Soon" */}
          <div className="mt-12 pt-8 border-t border-[#7B7569]/20 flex flex-col items-center">
            <span className="text-xs font-sans uppercase tracking-widest text-[#7B7569] font-medium mb-3">
              Socials — Coming Soon
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {['LinkedIn', 'Behance', 'Instagram'].map((platform) => (
                <div
                  key={platform}
                  className="px-4 py-1.5 rounded-full bg-[#1B3E48]/60 border border-[#7B7569]/25 text-xs font-sans text-[#7B7569]/80 cursor-not-allowed select-none"
                >
                  {platform}
                </div>
              ))}
            </div>
            <p className="text-[11px] font-sans text-[#7B7569]/70 mt-3">
              Verified public profiles will be linked here shortly.
            </p>
          </div>

          {/* Availability Details */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#7B7569]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#CD7E59]" />
              <span>{personalInfo.contact.availability}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#CD7E59]" />
              <span>{personalInfo.contact.location}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
