import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[#602E18] text-[#EFEADD] py-14 sm:py-16 px-5 sm:px-8 lg:px-12 border-t border-[#CD7E59]/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Top Row: Brand & Navigation Anchors */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-[#CD7E59]/25">
          
          {/* Brand Identity: Terracotta Z Submark + Cream Typography */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#142F37] border border-[#CD7E59]/50 flex items-center justify-center shrink-0 shadow-sm">
              <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#CD7E59]" aria-hidden="true">
                <path d="M 26 30 L 74 30 C 75.1 30 76 30.9 76 32 C 76 32.7 75.6 33.3 75.1 33.7 L 38.5 67 L 74 67 C 75.1 67 76 67.9 76 69 L 76 71 C 76 72.1 75.1 73 74 73 L 26 73 C 24.9 73 24 72.1 24 71 C 24 70.3 24.4 69.7 24.9 69.3 L 61.5 36 L 26 36 C 24.9 36 24 35.1 24 34 L 24 32 C 24 30.9 24.9 30 26 30 Z" />
              </svg>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-[#EFEADD] tracking-tight leading-tight">
                Zunaira Virtual Services
              </span>
              <span className="text-xs font-sans text-[#EADFCD]/75">
                Creative Designer & Digital Marketing Specialist
              </span>
            </div>
          </div>

          {/* Navigation Anchors */}
          <nav className="flex flex-wrap items-center gap-5 sm:gap-7" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#EFEADD]/80 hover:text-[#CD7E59] tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back-To-Top Button with Smooth Scroll & Hover Bounce */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="group min-h-[44px] px-4 py-2 rounded-full bg-[#142F37] border border-[#CD7E59]/40 hover:border-[#CD7E59] text-xs font-serif font-semibold text-[#EFEADD] hover:text-[#CD7E59] flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-[#CD7E59] transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Row: Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#EADFCD]/70 font-sans">
          <p>
            © 2026 Zunaira Mubarik — Zunaira Virtual Services. All rights reserved.
          </p>
          <p className="text-[11px] text-[#EADFCD]/50">
            UI Design • Meta Ads • Web & Workflow Automations
          </p>
        </div>

      </div>
    </footer>
  );
}
