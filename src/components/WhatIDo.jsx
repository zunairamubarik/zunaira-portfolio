import React, { useEffect, useRef, useState } from 'react';
import { Palette, TrendingUp, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhatIDo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'design',
      title: 'Design — UI & Brand',
      badge: 'Visual Focus',
      description: 'Clean desktop and mobile interfaces in Figma, cohesive brand identity systems, product packaging, and print collateral.',
      bgClass: 'bg-[#142F37]', // Deep teal tone
      borderClass: 'border-[#7B7569]/30 hover:border-[#CD7E59]/60',
      icon: Palette,
      deliverables: [
        'Desktop & Mobile UI Design in Figma',
        'Brand Identity Guidelines & Style Sheets',
        'Product Label & Bottle Packaging',
        'Marketing Collateral, Stationery & Post Creatives'
      ],
      verifiedWork: 'Verified in: Elkhart Ophthalmology UI, KOH Waters Branding, Spiral UAE Client Assets.',
      tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']
    },
    {
      id: 'marketing',
      title: 'Digital Marketing — Meta Ads & SEO',
      badge: 'Acquisition & Reach',
      description: 'Performance-driven Meta advertising campaigns for lead generation and e-commerce orders, backed by technical search optimization.',
      bgClass: 'bg-[#602E18]', // Deep brown tone
      borderClass: 'border-[#CD7E59]/40 hover:border-[#CD7E59]',
      icon: TrendingUp,
      deliverables: [
        'Meta Ads (Facebook & Instagram Campaigns)',
        'Real Estate & Service Lead Generation Funnels',
        'E-Commerce Fashion & Fragrance Sales Campaigns',
        'Keyword Research & On-Page SEO Architecture'
      ],
      verifiedWork: 'Verified in: Daha Fragrance, Redshift Online, Meqy Jewellers SEO, Academy Admissions, Clothing Brand.',
      tools: ['Meta Ads Manager', 'Meta Business Suite', 'Google Search Console']
    },
    {
      id: 'automation',
      title: 'Automation & Web — GHL & Funnels',
      badge: 'Systems & Conversions',
      description: 'End-to-end client acquisition pipelines, automated triggers, booking calendars, and high-converting landing pages.',
      bgClass: 'bg-[#142F37]', // Deep teal tone
      borderClass: 'border-[#7B7569]/30 hover:border-[#CD7E59]/60',
      icon: Cpu,
      deliverables: [
        'GoHighLevel Account Setup & Funnel Design',
        'Multi-Step Automated Follow-Up Triggers & Actions',
        'Embedded Booking Calendars & Form Workflows',
        'WordPress & Elementor E-Commerce Storefronts'
      ],
      verifiedWork: 'Verified in: Moorthix Automation Suite (15+ websites for HVAC & Med Spa clinics).',
      tools: ['GoHighLevel', 'GHL AI Studio', 'WordPress', 'Elementor']
    }
  ];

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className="relative bg-[#1B3E48] text-[#EFEADD] py-20 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-12 overflow-x-hidden border-t border-[#7B7569]/20"
    >
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#CD7E59]" />
            <span className="text-xs sm:text-sm font-sans tracking-widest uppercase text-[#CD7E59] font-semibold">
              Core Offerings
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#EFEADD] tracking-tight leading-tight">
            What I <span className="text-[#CD7E59] italic font-serif font-normal">Do</span>
          </h2>

          <p className="font-body text-base sm:text-lg text-[#EFEADD]/80 mt-4 leading-relaxed">
            Delivering thoughtful visual aesthetics, verified ad campaign execution, and automated client systems across three focused disciplines.
          </p>
        </div>

        {/* 3 Staggered Service Cards (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
                className={`relative rounded-2xl ${service.bgClass} border ${service.borderClass} p-7 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/25 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                } ${index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Top Section: Icon, Badge & Title */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#1B3E48] border border-[#CD7E59]/40 flex items-center justify-center text-[#CD7E59] shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#EFEADD]/10 text-[#EADFCD] border border-[#7B7569]/30">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#EFEADD] mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="font-body text-sm sm:text-base text-[#EFEADD]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bulleted Deliverables */}
                  <div className="space-y-2.5 mb-6">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EFEADD]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#CD7E59] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Verified Context & Tool Chips */}
                <div className="pt-6 border-t border-[#7B7569]/25 mt-4">
                  <p className="text-xs text-[#EADFCD] font-medium leading-relaxed mb-4 italic">
                    {service.verifiedWork}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-sans px-2.5 py-0.5 rounded-md bg-[#1B3E48]/80 text-[#EFEADD]/80 border border-[#7B7569]/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
