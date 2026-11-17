import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function Footer({ onSelectCategory }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-emerald-deep text-ivory border-t border-emerald-forest/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-champagne flex items-center justify-center text-emerald-deep font-heading font-extrabold text-2xl shadow-md border border-white">
                M
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                MEQY<span className="text-gold-champagne">.pk</span>
              </span>
            </div>

            <p className="text-xs text-ivory-soft/80 leading-relaxed font-sans max-w-sm">
              MEQY.pk is Pakistan’s premier multi-category store selling fashion, beauty, tech, home, kitchen, kids and lifestyle essentials with 100% Cash on Delivery & 5-point quality inspection guarantee.
            </p>

            <div className="pt-2 space-y-2 text-xs text-ivory-soft/90 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-champagne shrink-0" />
                <span>Gulberg III, Main Boulevard, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-champagne shrink-0" />
                <span>Helpline / WhatsApp: +92 300 8452900</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-champagne shrink-0" />
                <span>support@meqy.pk</span>
              </div>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="font-heading font-bold text-sm text-gold-champagne uppercase tracking-wider mb-4">
              Top Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-soft/80 font-medium">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const trending = document.getElementById('trending');
                      if (trending) trending.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-gold-champagne transition text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Service */}
          <div>
            <h4 className="font-heading font-bold text-sm text-gold-champagne uppercase tracking-wider mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-ivory-soft/80 font-medium">
              <li><a href="#" className="hover:text-gold-champagne transition">Track Parcel Order</a></li>
              <li><a href="#" className="hover:text-gold-champagne transition">Cash on Delivery Policy</a></li>
              <li><a href="#" className="hover:text-gold-champagne transition">7-Day Easy Return Policy</a></li>
              <li><a href="#" className="hover:text-gold-champagne transition">Quality Check Guarantee</a></li>
              <li><a href="#" className="hover:text-gold-champagne transition">Pakistani Shipping Rates</a></li>
              <li><a href="#" className="hover:text-gold-champagne transition">WhatsApp Support 24/7</a></li>
            </ul>
          </div>

          {/* Col 4: Pakistan Delivery & Payments */}
          <div>
            <h4 className="font-heading font-bold text-sm text-gold-champagne uppercase tracking-wider mb-4">
              Payment & Courier
            </h4>
            
            <p className="text-[11px] text-ivory-soft/75 mb-3">
              We support all major Pakistani payment channels:
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-emerald-forest border border-gold-champagne/30 text-gold-champagne font-extrabold text-[10px] px-2.5 py-1 rounded">
                Cash On Delivery 🇵🇰
              </span>
              <span className="bg-emerald-forest border border-emerald-100/20 text-white font-bold text-[10px] px-2 py-1 rounded">
                JazzCash
              </span>
              <span className="bg-emerald-forest border border-emerald-100/20 text-white font-bold text-[10px] px-2 py-1 rounded">
                EasyPaisa
              </span>
              <span className="bg-emerald-forest border border-emerald-100/20 text-white font-bold text-[10px] px-2 py-1 rounded">
                Visa / MasterCard
              </span>
            </div>

            <p className="text-[11px] text-ivory-soft/75 mb-2">
              Delivery Logistics Partners:
            </p>
            <div className="text-[11px] font-bold text-emerald-100/90 space-x-2">
              <span>TCS Express</span> • <span>Leopards Courier</span> • <span>M&P</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-emerald-forest/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-soft/60">
          <p>© {new Date().getFullYear()} MEQY.pk — All rights reserved. Registered Ecommerce Marketplace Pakistan.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="bg-emerald-forest hover:bg-gold-champagne hover:text-emerald-deep text-ivory p-2.5 rounded-xl transition shadow-sm flex items-center gap-1.5 font-bold"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
