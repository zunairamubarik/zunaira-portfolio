import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll position to shrink header from 84px to 64px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-[400ms] ease-in-out ${
          isScrolled
            ? 'h-16 bg-[#1B3E48]/95 backdrop-blur-md shadow-lg shadow-black/25 border-b border-[#7B7569]/20'
            : 'h-[84px] bg-[#1B3E48]/80 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo: Terracotta Z in deep teal frame + cream brand text */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#CD7E59]/50 rounded-lg p-1 -ml-1 transition-transform active:scale-95"
            aria-label="Zunaira Virtual Services - Home"
          >
            {/* Framed Monogram Z */}
            <div className="w-10 h-10 rounded-xl bg-[#142F37] border border-[#CD7E59]/50 group-hover:border-[#CD7E59] flex items-center justify-center shadow-sm shrink-0 transition-colors">
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6 fill-[#CD7E59] group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                <path d="M 26 30 L 74 30 C 75.1 30 76 30.9 76 32 C 76 32.7 75.6 33.3 75.1 33.7 L 38.5 67 L 74 67 C 75.1 67 76 67.9 76 69 L 76 71 C 76 72.1 75.1 73 74 73 L 26 73 C 24.9 73 24 72.1 24 71 C 24 70.3 24.4 69.7 24.9 69.3 L 61.5 36 L 26 36 C 24.9 36 24 35.1 24 34 L 24 32 C 24 30.9 24.9 30 26 30 Z" />
              </svg>
            </div>

            {/* Brand Wordmark */}
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg tracking-tight text-[#EFEADD] group-hover:text-[#EADFCD] transition-colors leading-tight">
                Zunaira Virtual Services
              </span>
              <span className="text-[10px] sm:text-xs tracking-wider uppercase text-[#7B7569] font-sans">
                Creative Design & Marketing
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-sm lg:text-[15px] font-medium text-[#EFEADD]/90 hover:text-[#EFEADD] tracking-wide transition-colors group"
              >
                <span>{link.name}</span>
                {/* Terracotta hover underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#CD7E59] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CD7E59] hover:bg-[#BD6F4A] text-[#EFEADD] font-serif font-semibold text-sm tracking-wide shadow-md shadow-[#CD7E59]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#CD7E59]/30 hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Hamburger Button (Min 48px tap target) */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center rounded-xl text-[#EFEADD] hover:text-[#CD7E59] hover:bg-[#142F37]/80 focus:outline-none focus:ring-2 focus:ring-[#CD7E59]/60 transition-colors"
              aria-label="Open Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-[#1B3E48] transition-all duration-[350ms] ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="h-full flex flex-col justify-between px-6 py-6 overflow-y-auto overflow-x-hidden">
          {/* Top Bar with Brand & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-[#7B7569]/25">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#142F37] border border-[#CD7E59]/50 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-[#CD7E59]" aria-hidden="true">
                  <path d="M 26 30 L 74 30 C 75.1 30 76 30.9 76 32 C 76 32.7 75.6 33.3 75.1 33.7 L 38.5 67 L 74 67 C 75.1 67 76 67.9 76 69 L 76 71 C 76 72.1 75.1 73 74 73 L 26 73 C 24.9 73 24 72.1 24 71 C 24 70.3 24.4 69.7 24.9 69.3 L 61.5 36 L 26 36 C 24.9 36 24 35.1 24 34 L 24 32 C 24 30.9 24.9 30 26 30 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base text-[#EFEADD]">
                  Zunaira Virtual Services
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#7B7569]">
                  Navigation
                </span>
              </div>
            </div>

            {/* Clear Close Button (48px tap target) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center rounded-xl text-[#EFEADD] hover:text-[#CD7E59] hover:bg-[#142F37]/80 focus:outline-none focus:ring-2 focus:ring-[#CD7E59]/60 transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="flex flex-col justify-center my-auto py-8 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 60 + 100}ms` : '0ms'
                }}
                className={`text-2xl sm:text-3xl font-serif font-medium text-[#EFEADD] hover:text-[#CD7E59] py-2 border-b border-[#7B7569]/15 flex items-center justify-between transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-5 h-5 text-[#CD7E59]/60 group-hover:text-[#CD7E59]" />
              </a>
            ))}
          </nav>

          {/* Full-width Terracotta CTA Button in Mobile Drawer */}
          <div className="pt-6 border-t border-[#7B7569]/25 pb-2">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-[#CD7E59] hover:bg-[#BD6F4A] text-[#EFEADD] font-serif font-semibold text-base text-center flex items-center justify-center gap-2 shadow-lg shadow-[#CD7E59]/25 transition-all active:scale-[0.99]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-center text-xs text-[#7B7569] mt-3">
              Available for select contracts & remote roles
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
