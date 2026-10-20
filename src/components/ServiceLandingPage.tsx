import React, { useState } from 'react';
import { ArrowRight, Hammer, Sparkles, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
// import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';
// @ts-ignore
import logo from '../assets/Companylogo.png';

interface ServiceLandingPageProps {
  onSelectService: (mode: 'construction' | 'interiors') => void;
  onOpenConsultation?: () => void;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [hoveredSide, setHoveredSide] = useState<'construction' | 'interiors' | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-[#0B1528] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0B1528]">
      {/* Top Floating Branding Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between bg-gradient-to-b from-black/90 via-black/50 to-transparent">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-xl bg-white/10 shadow-sm border border-white/20">
             <img
            //   src={logo}
              alt={`${COMPANY_INFO.brandName} logo`}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-medium tracking-wide text-white border border-white/20 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{COMPANY_INFO.contacts.primaryPhone}</span>
          </a>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-medium tracking-wide text-white border border-white/20 transition-all"
            >
              Free Consultation
            </button>
          )}
        </div>
      </header>

      {/* Main 50/50 Split Screen Panels */}
      <main className="relative flex-1 w-full flex flex-col lg:flex-row min-h-screen">
        {/* ========================================================
            LEFT PANEL: CONSTRUCTION
        ======================================================== */}
        <section
          id="select-construction-panel"
          onMouseEnter={() => setHoveredSide('construction')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onSelectService('construction')}
          className={`group relative flex-1 min-h-[50vh] lg:min-h-full flex flex-col justify-end p-6 sm:p-12 lg:p-16 cursor-pointer overflow-hidden transition-all duration-700 ease-out border-b lg:border-b-0 lg:border-r border-white/10 ${
            hoveredSide === 'construction'
              ? 'lg:flex-[1.12]'
              : hoveredSide === 'interiors'
              ? 'lg:flex-[0.88] opacity-90'
              : 'lg:flex-1'
          }`}
          aria-label="Explore Civil & Turnkey Construction"
        >
          {/* Background Architectural Photo */}
          <div className="absolute inset-0 bg-[#0B2545] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
              alt="Avani Nivas Turnkey Residential Construction Architecture"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-108 group-hover:brightness-105"
            />
            {/* Multi-layer Gradient Overlay for crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#0B2545]/75 to-black/40 group-hover:via-[#0B2545]/60 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#00142B]/30 mix-blend-multiply" />
          </div>

          {/* Construction Content */}
          <div className="relative z-20 max-w-xl transition-transform duration-500 group-hover:-translate-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#93C5FD] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
              <span>Civil & Architectural Build</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md">
              Construction
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-4 sm:mb-6 max-w-md drop-shadow">
              Building Your Vision, Creating Your Future.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 mb-6 max-w-md hidden sm:grid">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>15+ Years Track Record</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>200+ Homes Built</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>₹1,999/sq.ft Turnkey Packages</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Foundation to Handover</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                id="btn-explore-construction"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService('construction');
                }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0B2545] hover:bg-[#153A66] text-white border border-[#3B82F6]/40 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group-hover:shadow-blue-900/50 group-hover:border-[#93C5FD] group-hover:gap-4 active:scale-98"
              >
                <span>Explore Construction</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Subtle Ambient Hover Glow */}
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-all duration-700" />
        </section>

        {/* Center Ornate Divider Badge (Desktop only) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-[#0B1528] border-2 border-[#D4AF37]/60 shadow-2xl flex items-center justify-center text-xs font-bold text-[#D4AF37] tracking-widest backdrop-blur-md">
            OR
          </div>
        </div>

        {/* ========================================================
            RIGHT PANEL: INTERIOR DESIGN
        ======================================================== */}
        <section
          id="select-interiors-panel"
          onMouseEnter={() => setHoveredSide('interiors')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => onSelectService('interiors')}
          className={`group relative flex-1 min-h-[50vh] lg:min-h-full flex flex-col justify-end p-6 sm:p-12 lg:p-16 cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
            hoveredSide === 'interiors'
              ? 'lg:flex-[1.12]'
              : hoveredSide === 'construction'
              ? 'lg:flex-[0.88] opacity-90'
              : 'lg:flex-1'
          }`}
          aria-label="Explore Bespoke Interior Architecture"
        >
          {/* Background Interior Photography */}
          <div className="absolute inset-0 bg-[#1D1714] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=85"
              alt="Avani Nivas Luxury Residential Interior Architecture & Living Room"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-108 group-hover:brightness-105"
            />
            {/* Multi-layer Gradient Overlay for rich warm luxury contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15100B] via-[#2A1E17]/75 to-black/40 group-hover:via-[#2A1E17]/60 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#35251B]/25 mix-blend-multiply" />
          </div>

          {/* Interior Design Content */}
          <div className="relative z-20 max-w-xl transition-transform duration-500 group-hover:-translate-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#FDE68A] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
              <span>Interior Architecture</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md">
              Interior Design
            </h2>

            <p className="font-sans text-base sm:text-lg text-amber-100 font-normal leading-relaxed mb-4 sm:mb-6 max-w-md drop-shadow">
              Thoughtfully Designed Spaces, Beautifully Lived.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-2 gap-2 text-xs text-amber-200/90 mb-6 max-w-md hidden sm:grid">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>45-Day Handover Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>10-Year Material Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>100% Factory Finished</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>BWP Termite-Proof Ply</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <button
                id="btn-explore-interiors"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectService('interiors');
                }}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#0B2545] hover:bg-[#153A66] text-white border border-[#D4AF37]/40 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl group-hover:shadow-amber-900/50 group-hover:border-[#FDE68A] group-hover:gap-4 active:scale-98"
              >
                <span>Explore Interiors</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Subtle Ambient Hover Glow */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-amber-600/20 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/30 transition-all duration-700" />
        </section>
      </main>

      {/* Bottom Subtle Trust Strip */}
      <footer className="relative z-30 px-4 sm:px-8 py-3 bg-[#07101D]/90 backdrop-blur-md border-t border-white/10 text-[11px] sm:text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>
            <strong className="text-white">Avani Nivas by Gowdru Realcom Pvt. Ltd.</strong> • Bengaluru, Karnataka •
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-300 text-[11px]">
          <span>Corporate Studio: Mallathahalli, Bengaluru</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Mon – Sat: 9:30 AM – 7:00 PM</span>
        </div>
      </footer>
    </div>
  );
};
