import React from 'react';
import { ExternalLink, ArrowUpRight, CheckCircle2 } from 'lucide-react';

/**
 * Editorial Branded CSS/SVG Placeholder Mockup Generator
 * Generates distinct visual previews for each of the 10 projects strictly within brand palette.
 */
function ProjectVisualPlaceholder({ project }) {
  const { id, title, category } = project;

  // Render dedicated SVG mockups based on project id
  const renderMockup = () => {
    switch (id) {
      case 'elkhart-ophthalmology':
        // Figma UI Layout Frame
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#142F37"/>
            {/* Window Header */}
            <rect x="20" y="16" width="360" height="22" rx="4" fill="#1B3E48"/>
            <circle cx="34" cy="27" r="3.5" fill="#CD7E59"/>
            <circle cx="46" cy="27" r="3.5" fill="#7B7569"/>
            <circle cx="58" cy="27" r="3.5" fill="#7B7569" fillOpacity="0.5"/>
            <text x="200" y="31" fill="#EFEADD" opacity="0.6" fontSize="9" fontFamily="sans-serif" textAnchor="middle">elkhart-eyecare-ui.figma</text>
            {/* Canvas Area */}
            <rect x="20" y="44" width="360" height="190" fill="#1B3E48" fillOpacity="0.5"/>
            {/* Nav & Hero in wireframe */}
            <rect x="36" y="58" width="60" height="10" rx="2" fill="#CD7E59"/>
            <rect x="280" y="58" width="84" height="10" rx="3" fill="#CD7E59" fillOpacity="0.4"/>
            {/* Headline and CTAs */}
            <rect x="36" y="82" width="160" height="16" rx="3" fill="#EFEADD"/>
            <rect x="36" y="104" width="120" height="8" rx="2" fill="#7B7569"/>
            <rect x="36" y="118" width="80" height="18" rx="9" fill="#CD7E59"/>
            {/* Eye Care Clinic Visual Box */}
            <rect x="220" y="80" width="144" height="96" rx="8" fill="#142F37" stroke="#CD7E59" strokeOpacity="0.4" strokeWidth="1.5"/>
            <path d="M 252 128 C 272 108 312 108 332 128 C 312 148 272 148 252 128 Z" stroke="#CD7E59" strokeWidth="2" fill="none"/>
            <circle cx="292" cy="128" r="8" fill="#CD7E59"/>
            {/* UI Component cards below */}
            <rect x="36" y="152" width="48" height="42" rx="4" fill="#142F37" stroke="#7B7569" strokeOpacity="0.3"/>
            <rect x="92" y="152" width="48" height="42" rx="4" fill="#142F37" stroke="#7B7569" strokeOpacity="0.3"/>
            <rect x="148" y="152" width="48" height="42" rx="4" fill="#142F37" stroke="#7B7569" strokeOpacity="0.3"/>
          </svg>
        );

      case 'daha-fragrance':
        // Luxury Perfume E-Commerce Layout
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#602E18"/>
            <rect x="20" y="16" width="360" height="218" rx="8" fill="#142F37" stroke="#CD7E59" strokeOpacity="0.3" strokeWidth="1"/>
            {/* Store Bar */}
            <rect x="20" y="16" width="360" height="28" fill="#1B3E48"/>
            <text x="40" y="34" fill="#EFEADD" fontSize="11" fontFamily="serif" fontWeight="bold" letterSpacing="1">DAHA FRAGRANCE</text>
            <text x="350" y="34" fill="#CD7E59" fontSize="10" fontFamily="sans-serif">SHOP</text>
            {/* Perfume Bottle Silhouette */}
            <rect x="50" y="66" width="120" height="144" rx="8" fill="#1B3E48" stroke="#CD7E59" strokeOpacity="0.5"/>
            <rect x="94" y="80" width="32" height="16" rx="2" fill="#CD7E59"/>
            <rect x="80" y="96" width="60" height="90" rx="4" fill="#602E18" stroke="#CD7E59" strokeWidth="1.5"/>
            <text x="110" y="145" fill="#EFEADD" fontSize="8" fontFamily="serif" textAnchor="middle">EAU DE</text>
            <text x="110" y="156" fill="#CD7E59" fontSize="9" fontFamily="serif" fontWeight="bold" textAnchor="middle">PARFUM</text>
            {/* Campaign Metrics & Store Details */}
            <rect x="190" y="70" width="170" height="14" rx="3" fill="#EFEADD"/>
            <rect x="190" y="92" width="130" height="8" rx="2" fill="#7B7569"/>
            <rect x="190" y="108" width="150" height="8" rx="2" fill="#7B7569"/>
            {/* Verified Orders Pill */}
            <rect x="190" y="132" width="160" height="32" rx="6" fill="#1B3E48" stroke="#CD7E59" strokeWidth="1"/>
            <text x="202" y="146" fill="#CD7E59" fontSize="9" fontFamily="sans-serif" fontWeight="bold">VERIFIED ORDERS</text>
            <text x="202" y="157" fill="#EFEADD" fontSize="8" fontFamily="sans-serif">~20–30 perfume orders generated</text>
            {/* WooCommerce Pill */}
            <rect x="190" y="176" width="90" height="20" rx="10" fill="#CD7E59"/>
            <text x="235" y="189" fill="#EFEADD" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">WooCommerce</text>
          </svg>
        );

      case 'moorthix-automation':
        // GoHighLevel Workflow & Pipeline Nodes
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#142F37"/>
            {/* Pipeline Workflow Track */}
            <text x="30" y="32" fill="#CD7E59" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">GHL AUTOMATION PIPELINE</text>
            {/* Trigger Node */}
            <rect x="30" y="50" width="100" height="50" rx="8" fill="#1B3E48" stroke="#CD7E59" strokeWidth="1.5"/>
            <text x="80" y="72" fill="#CD7E59" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">1. Form Submit</text>
            <text x="80" y="86" fill="#EFEADD" fontSize="8" fontFamily="sans-serif" textAnchor="middle">HVAC / Med Spa</text>
            {/* Connecting line */}
            <path d="M 130 75 L 160 75" stroke="#CD7E59" strokeWidth="2" strokeDasharray="3 3"/>
            {/* Action Node */}
            <rect x="160" y="50" width="100" height="50" rx="8" fill="#1B3E48" stroke="#7B7569" strokeWidth="1.5"/>
            <text x="210" y="72" fill="#EFEADD" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">2. Auto Follow-up</text>
            <text x="210" y="86" fill="#7B7569" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Email & SMS Sequence</text>
            {/* Connecting line */}
            <path d="M 260 75 L 290 75" stroke="#CD7E59" strokeWidth="2" strokeDasharray="3 3"/>
            {/* Calendar Node */}
            <rect x="290" y="50" width="80" height="50" rx="8" fill="#602E18" stroke="#CD7E59" strokeWidth="1.5"/>
            <text x="330" y="72" fill="#EFEADD" fontSize="9" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">3. Booking</text>
            <text x="330" y="86" fill="#CD7E59" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Live Calendar</text>
            {/* Sites Grid Box */}
            <rect x="30" y="120" width="340" height="106" rx="8" fill="#1B3E48" stroke="#7B7569" strokeOpacity="0.3"/>
            <text x="45" y="142" fill="#EADFCD" fontSize="10" fontFamily="serif" fontWeight="bold">15+ GHL Websites & Landing Pages</text>
            <text x="45" y="160" fill="#7B7569" fontSize="9" fontFamily="sans-serif">• On-Time HVAC (Canada)</text>
            <text x="45" y="176" fill="#7B7569" fontSize="9" fontFamily="sans-serif">• Divine Spa • Gupta Aesthetic</text>
            <text x="45" y="192" fill="#7B7569" fontSize="9" fontFamily="sans-serif">• Aesthetic Med Spa • GTA Thrive</text>
            {/* Terracotta Badge */}
            <rect x="250" y="160" width="105" height="46" rx="6" fill="#602E18" stroke="#CD7E59" strokeWidth="1"/>
            <text x="302" y="180" fill="#CD7E59" fontSize="13" fontFamily="serif" fontWeight="bold" textAnchor="middle">15+ SITES</text>
            <text x="302" y="194" fill="#EFEADD" fontSize="8" fontFamily="sans-serif" textAnchor="middle">Delivered & Live</text>
          </svg>
        );

      case 'redshift-online':
        // Real Estate Meta Lead Campaign Card
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#1B3E48"/>
            <rect x="70" y="20" width="260" height="210" rx="10" fill="#142F37" stroke="#CD7E59" strokeWidth="1"/>
            {/* Ad Header */}
            <circle cx="95" cy="42" r="12" fill="#CD7E59"/>
            <text x="95" y="46" fill="#EFEADD" fontSize="10" fontWeight="bold" textAnchor="middle">R</text>
            <text x="115" y="40" fill="#EFEADD" fontSize="10" fontWeight="bold">Canadian Realtor Hub</text>
            <text x="115" y="52" fill="#7B7569" fontSize="8">Sponsored • Meta Ads</text>
            {/* Property Graphic Frame */}
            <rect x="85" y="64" width="230" height="96" rx="6" fill="#1B3E48" stroke="#7B7569" strokeOpacity="0.4"/>
            <path d="M 120 120 L 200 80 L 280 120 L 280 150 L 120 150 Z" fill="#602E18" stroke="#CD7E59" strokeWidth="1.5"/>
            <text x="200" y="116" fill="#EADFCD" fontSize="11" fontFamily="serif" fontWeight="bold" textAnchor="middle">CANADIAN REAL ESTATE</text>
            <text x="200" y="132" fill="#EFEADD" fontSize="9" fontFamily="sans-serif" textAnchor="middle">Targeted Buyer & Seller Lead Ads</text>
            {/* Call To Action Button */}
            <rect x="85" y="172" width="230" height="28" rx="4" fill="#CD7E59"/>
            <text x="200" y="190" fill="#EFEADD" fontSize="10" fontWeight="bold" textAnchor="middle">Book A Property Consultation</text>
            <text x="200" y="218" fill="#7B7569" fontSize="8" textAnchor="middle">Leads qualified by appointment setters</text>
          </svg>
        );

      case 'meqy-jewellers':
        // SEO Analytics & Keyword SERP Trend
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#142F37"/>
            <text x="30" y="32" fill="#CD7E59" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">SEARCH ENGINE OPTIMIZATION</text>
            <text x="30" y="48" fill="#EFEADD" fontSize="14" fontFamily="serif" fontWeight="bold">Meqy Jewellers On-Page & Technical SEO</text>
            {/* Chart Area */}
            <rect x="30" y="66" width="340" height="150" rx="8" fill="#1B3E48" stroke="#7B7569" strokeOpacity="0.3"/>
            {/* Graph Grid */}
            <line x1="50" y1="186" x2="350" y2="186" stroke="#7B7569" strokeOpacity="0.2"/>
            <line x1="50" y1="146" x2="350" y2="146" stroke="#7B7569" strokeOpacity="0.2"/>
            <line x1="50" y1="106" x2="350" y2="106" stroke="#7B7569" strokeOpacity="0.2"/>
            {/* SEO Growth Trendline */}
            <path d="M 50 176 Q 120 160 190 130 T 290 90 L 350 140" fill="none" stroke="#CD7E59" strokeWidth="3"/>
            {/* Key data markers */}
            <circle cx="190" cy="130" r="4" fill="#EFEADD"/>
            <circle cx="290" cy="90" r="5" fill="#CD7E59"/>
            <text x="290" y="78" fill="#CD7E59" fontSize="8" fontWeight="bold" textAnchor="middle">Organic Peak</text>
            {/* Metric Boxes */}
            <rect x="50" y="196" width="130" height="14" rx="2" fill="#142F37"/>
            <text x="56" y="206" fill="#EADFCD" fontSize="8">✓ Organic Rankings Rose</text>
            <rect x="210" y="196" width="140" height="14" rx="2" fill="#142F37"/>
            <text x="216" y="206" fill="#EADFCD" fontSize="8">✓ Organic Orders Increased</text>
          </svg>
        );

      case 'spiral-uae':
        // Dubai Client Assets Specimen
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#602E18"/>
            <text x="30" y="32" fill="#CD7E59" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">DUBAI CLIENT ASSETS</text>
            <text x="30" y="48" fill="#EFEADD" fontSize="14" fontFamily="serif" fontWeight="bold">Spiral UAE Graphic Collateral</text>
            {/* Client Cards Grid */}
            <g transform="translate(30, 68)">
              {/* DU Telecom */}
              <rect x="0" y="0" width="104" height="66" rx="6" fill="#142F37" stroke="#CD7E59" strokeWidth="1"/>
              <text x="52" y="28" fill="#CD7E59" fontSize="12" fontWeight="bold" textAnchor="middle">DU</text>
              <text x="52" y="46" fill="#EFEADD" fontSize="8" textAnchor="middle">Ad Creatives</text>

              {/* Sheraki */}
              <rect x="116" y="0" width="104" height="66" rx="6" fill="#142F37" stroke="#7B7569" strokeWidth="1"/>
              <text x="168" y="28" fill="#EADFCD" fontSize="11" fontWeight="bold" textAnchor="middle">Sheraki</text>
              <text x="168" y="46" fill="#EFEADD" fontSize="8" textAnchor="middle">Social Assets</text>

              {/* Royal Blizz */}
              <rect x="232" y="0" width="104" height="66" rx="6" fill="#142F37" stroke="#7B7569" strokeWidth="1"/>
              <text x="284" y="28" fill="#EADFCD" fontSize="10" fontWeight="bold" textAnchor="middle">Royal Blizz</text>
              <text x="284" y="46" fill="#EFEADD" fontSize="8" textAnchor="middle">Featured Blog</text>

              {/* Nikki's Salon */}
              <rect x="40" y="78" width="120" height="54" rx="6" fill="#1B3E48" stroke="#7B7569" strokeWidth="1"/>
              <text x="100" y="104" fill="#EFEADD" fontSize="10" fontWeight="bold" textAnchor="middle">Nikki's Salon</text>
              <text x="100" y="118" fill="#7B7569" fontSize="8" textAnchor="middle">Beauty Post Designs</text>

              {/* Broadband */}
              <rect x="180" y="78" width="120" height="54" rx="6" fill="#1B3E48" stroke="#7B7569" strokeWidth="1"/>
              <text x="240" y="104" fill="#EFEADD" fontSize="10" fontWeight="bold" textAnchor="middle">Broadband</text>
              <text x="240" y="118" fill="#7B7569" fontSize="8" textAnchor="middle">Website Imagery</text>
            </g>
          </svg>
        );

      case 'koh-waters':
        // Packaging & Bottle Label Design
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#142F37"/>
            <text x="30" y="32" fill="#CD7E59" fontSize="10" fontFamily="sans-serif" fontWeight="bold" letterSpacing="1">BRAND IDENTITY & PACKAGING</text>
            {/* Water Bottle & Label Mockup */}
            <g transform="translate(60, 50)">
              {/* Bottle silhouette */}
              <rect x="20" y="20" width="60" height="150" rx="10" fill="#1B3E48" stroke="#CD7E59" strokeWidth="1.5"/>
              <rect x="38" y="6" width="24" height="14" rx="2" fill="#CD7E59"/>
              {/* Label */}
              <rect x="22" y="60" width="56" height="70" fill="#602E18" stroke="#CD7E59" strokeWidth="1"/>
              <text x="50" y="90" fill="#EFEADD" fontSize="10" fontFamily="serif" fontWeight="bold" textAnchor="middle">KOH</text>
              <text x="50" y="102" fill="#CD7E59" fontSize="7" fontFamily="sans-serif" letterSpacing="1" textAnchor="middle">WATERS</text>
            </g>
            {/* Stationery Cards */}
            <g transform="translate(180, 60)">
              {/* Business card */}
              <rect x="0" y="0" width="150" height="84" rx="6" fill="#1B3E48" stroke="#7B7569" strokeWidth="1"/>
              <rect x="14" y="16" width="24" height="24" rx="4" fill="#CD7E59"/>
              <text x="26" y="32" fill="#142F37" fontSize="11" fontWeight="bold" textAnchor="middle">K</text>
              <text x="46" y="26" fill="#EFEADD" fontSize="10" fontFamily="serif" fontWeight="bold">KOH Waters</text>
              <text x="46" y="38" fill="#7B7569" fontSize="7">Brand Identity Guidelines</text>
              <line x1="14" y1="52" x2="136" y2="52" stroke="#7B7569" strokeOpacity="0.3"/>
              <rect x="14" y="60" width="60" height="6" rx="2" fill="#CD7E59" fillOpacity="0.5"/>
              {/* Letterhead Preview */}
              <rect x="16" y="96" width="120" height="64" rx="4" fill="#142F37" stroke="#7B7569" strokeWidth="1"/>
              <text x="28" y="116" fill="#EADFCD" fontSize="8" fontWeight="bold">Corporate Stationery</text>
              <line x1="28" y1="124" x2="116" y2="124" stroke="#7B7569" strokeOpacity="0.3"/>
              <line x1="28" y1="132" x2="100" y2="132" stroke="#7B7569" strokeOpacity="0.3"/>
            </g>
          </svg>
        );

      case 'meqy-dispatch':
        // Recruitment Meta Ad Mockup
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#1B3E48"/>
            <rect x="70" y="20" width="260" height="210" rx="10" fill="#142F37" stroke="#CD7E59" strokeWidth="1"/>
            <circle cx="95" cy="42" r="12" fill="#CD7E59"/>
            <text x="95" y="46" fill="#EFEADD" fontSize="10" fontWeight="bold" textAnchor="middle">M</text>
            <text x="115" y="40" fill="#EFEADD" fontSize="10" fontWeight="bold">MEQY Dispatch LLC</text>
            <text x="115" y="52" fill="#7B7569" fontSize="8">USA • Hiring Campaign</text>
            <rect x="85" y="64" width="230" height="96" rx="6" fill="#602E18" stroke="#CD7E59" strokeOpacity="0.5"/>
            <text x="200" y="98" fill="#EADFCD" fontSize="12" fontFamily="serif" fontWeight="bold" textAnchor="middle">NOW HIRING TRUCK DISPATCHERS</text>
            <text x="200" y="114" fill="#EFEADD" fontSize="9" textAnchor="middle">Targeted 1-Week USA Recruitment Ad</text>
            <rect x="130" y="126" width="140" height="20" rx="4" fill="#CD7E59"/>
            <text x="200" y="140" fill="#EFEADD" fontSize="9" fontWeight="bold" textAnchor="middle">1 Verified Conversion</text>
            <rect x="85" y="172" width="230" height="28" rx="4" fill="#1B3E48" stroke="#7B7569" strokeWidth="1"/>
            <text x="200" y="190" fill="#EFEADD" fontSize="9" textAnchor="middle">Apply Now • Fast Application Form</text>
          </svg>
        );

      case 'academy-admissions':
        // Student Admissions Ad Creative
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#142F37"/>
            <rect x="70" y="20" width="260" height="210" rx="10" fill="#1B3E48" stroke="#7B7569" strokeWidth="1"/>
            <circle cx="95" cy="42" r="12" fill="#142F37" stroke="#CD7E59" strokeWidth="1"/>
            <text x="95" y="46" fill="#CD7E59" fontSize="10" fontWeight="bold" textAnchor="middle">A</text>
            <text x="115" y="40" fill="#EFEADD" fontSize="10" fontWeight="bold">Academy Admissions</text>
            <text x="115" y="52" fill="#7B7569" fontSize="8">Meta Advertising Campaign</text>
            <rect x="85" y="64" width="230" height="96" rx="6" fill="#142F37" stroke="#CD7E59" strokeOpacity="0.4"/>
            <text x="200" y="100" fill="#EFEADD" fontSize="13" fontFamily="serif" fontWeight="bold" textAnchor="middle">ADMISSIONS OPEN 2026</text>
            <text x="200" y="118" fill="#CD7E59" fontSize="9" textAnchor="middle">Student Enrollment Ad Strategy</text>
            <rect x="85" y="172" width="230" height="28" rx="4" fill="#CD7E59"/>
            <text x="200" y="190" fill="#EFEADD" fontSize="10" fontWeight="bold" textAnchor="middle">Enroll Today • Inquiry Form</text>
            <text x="200" y="218" fill="#7B7569" fontSize="8" textAnchor="middle">Targeted local student & parent audiences</text>
          </svg>
        );

      case 'clothing-brand':
      default:
        // Fashion Apparel Order Ad Carousel
        return (
          <svg viewBox="0 0 400 250" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="250" fill="#602E18"/>
            <rect x="70" y="20" width="260" height="210" rx="10" fill="#142F37" stroke="#CD7E59" strokeWidth="1"/>
            <circle cx="95" cy="42" r="12" fill="#CD7E59"/>
            <text x="95" y="46" fill="#142F37" fontSize="10" fontWeight="bold" textAnchor="middle">F</text>
            <text x="115" y="40" fill="#EFEADD" fontSize="10" fontWeight="bold">Fashion Brand Order Ads</text>
            <text x="115" y="52" fill="#7B7569" fontSize="8">D2C Meta Catalog Campaigns</text>
            <rect x="85" y="64" width="230" height="96" rx="6" fill="#1B3E48" stroke="#7B7569" strokeOpacity="0.3"/>
            <text x="200" y="98" fill="#EADFCD" fontSize="12" fontFamily="serif" fontWeight="bold" textAnchor="middle">SEASONAL APPAREL COLLECTION</text>
            <text x="200" y="114" fill="#EFEADD" fontSize="9" textAnchor="middle">Direct-To-Consumer Order Campaign</text>
            <rect x="140" y="126" width="120" height="20" rx="10" fill="#CD7E59"/>
            <text x="200" y="140" fill="#EFEADD" fontSize="9" fontWeight="bold" textAnchor="middle">Shop New Arrivals</text>
            <rect x="85" y="172" width="230" height="28" rx="4" fill="#142F37" stroke="#CD7E59" strokeWidth="1"/>
            <text x="200" y="190" fill="#EFEADD" fontSize="9" textAnchor="middle">Targeted Interest & Lookalike Sets</text>
          </svg>
        );
    }
  };

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#142F37] border-b border-[#7B7569]/20">
      {renderMockup()}
      
      {/* Editorial Watermark Overlay */}
      <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#1B3E48]/90 border border-[#7B7569]/30 text-[10px] font-sans text-[#EADFCD] backdrop-blur-sm pointer-events-none">
        {category}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, onClick }) {
  // Determine the verified result pill text strictly from data
  const getResultPill = () => {
    if (project.id === 'daha-fragrance') {
      return '~20–30 perfume orders generated';
    }
    if (project.id === 'moorthix-automation') {
      return '15+ GHL sites launched';
    }
    if (project.id === 'meqy-dispatch') {
      return '1 verified conversion (1-wk campaign)';
    }
    if (project.id === 'meqy-jewellers') {
      return 'Verified organic ranking & order growth';
    }
    if (project.id === 'elkhart-ophthalmology') {
      return 'Figma UI design delivered (no UX research)';
    }
    if (project.id === 'spiral-uae') {
      return 'Visual assets for 5 Dubai brands';
    }
    if (project.id === 'koh-waters') {
      return 'Complete identity & label suite';
    }
    // For projects without explicit volume stats, show verified scope
    return project.role.split('(')[0].trim();
  };

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer rounded-2xl bg-[#142F37] border border-[#7B7569]/30 hover:border-[#CD7E59]/70 overflow-hidden shadow-lg shadow-black/25 flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#CD7E59]/10"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`View details for ${project.title}`}
    >
      {/* Top Section: Visual Preview Frame with 0.5s zoom on hover */}
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 ease-out group-hover:scale-105">
          <ProjectVisualPlaceholder project={project} />
        </div>
      </div>

      {/* Middle & Bottom Section: Card Content */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        
        {/* Title & Role */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#CD7E59]">
              {project.category}
            </span>
            <div className="w-7 h-7 rounded-full bg-[#1B3E48] border border-[#7B7569]/30 flex items-center justify-center text-[#EFEADD] group-hover:bg-[#CD7E59] group-hover:text-[#142F37] transition-colors shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#EFEADD] group-hover:text-[#EADFCD] transition-colors mb-2 leading-snug">
            {project.title}
          </h3>

          <p className="font-body text-xs sm:text-sm text-[#7B7569] mb-4 line-clamp-2">
            {project.role}
          </p>
        </div>

        {/* Verified Result Pill */}
        <div className="pt-4 border-t border-[#7B7569]/20 flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#CD7E59] shrink-0" />
          <span className="text-xs font-sans text-[#EADFCD] truncate font-medium">
            {getResultPill()}
          </span>
        </div>

      </div>
    </div>
  );
}
