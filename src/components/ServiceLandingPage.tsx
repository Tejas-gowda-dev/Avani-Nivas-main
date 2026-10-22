import React, { useState } from 'react';
import { ArrowRight, Hammer, Sparkles, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
// @ts-ignore
import logo from '../assets/Companylogo.png';
import { COMPANY_INFO } from '../data/company';

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
    <div className="relative flex min-h-screen w-full flex-col justify-between overflow-x-hidden bg-[#0B1528] text-white selection:bg-[#D4AF37] selection:text-[#0B1528]">
      {/* Top Floating Branding Header */}
      <header className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between px-3 py-2.5 sm:top-5 sm:left-6 sm:right-6 sm:px-5">
        {/* Logo without background */}
        <div className="flex items-center gap-3">
          <div className="p-1.5">
            <img
              src={logo}
              alt={`${COMPANY_INFO.brandName} logo`}
              className="h-18 w-auto object-contain sm:h-11"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs font-medium tracking-wide text-white border border-white/20 transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-[#153A66]" />
            <span>{COMPANY_INFO.contacts.primaryPhone}</span>
          </a>

          {onOpenConsultation && (
           <button
              onClick={onOpenConsultation}
              className="rounded-full border border-white/20 bg-white/20 px-4 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-300 hover:bg-white/20 hover:text-white sm:px-5"
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
              src=  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=85'
              alt="Avani Nivas Turnkey Residential Construction Architecture"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-108 group-hover:brightness-105"
            />
            {/* Multi-layer Gradient Overlay for crisp text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#0B2545]/20 to-black/40 group-hover:via-[#0B2545]/60 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#00142B]/30 mix-blend-multiply" />
          </div>

          {/* Construction Content */}
          <div className="relative z-20 max-w-xl transition-transform duration-500 group-hover:-translate-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#93C5FD] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
              <span>Civil & Architectural Build</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md">
              {/* Construction */}
              CONSTRUCTION
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-4 sm:mb-6 max-w-md drop-shadow">
              Building Your Vision, Creating Your Future.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 gap-2 text-xs text-slate-300 mb-6 max-w-md hidden sm:grid">
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
              src=  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=85'

              alt="Avani Nivas Luxury Residential Interior Architecture & Living Room"
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-108 group-hover:brightness-105"
            />
            {/* Multi-layer Gradient Overlay for rich warm luxury contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15100B] via-[#2A1E17]/20 to-black/40 group-hover:via-[#2A1E17]/60 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#35251B]/25 mix-blend-multiply" />
          </div>

          {/* Interior Design Content */}
          <div className="relative z-20 max-w-xl transition-transform duration-500 group-hover:-translate-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#FDE68A] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
              <span>Interior Architecture</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-2 sm:mb-3 drop-shadow-md">
              {/* Interior Design */}
              INTERIOR DESIGN
            </h2>

            <p className="font-sans text-base sm:text-lg text-amber-100 font-normal leading-relaxed mb-4 sm:mb-6 max-w-md drop-shadow">
              Thoughtfully Designed Spaces, Beautifully Lived.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 gap-2 text-xs text-amber-200/90 mb-6 max-w-md hidden sm:grid">
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
    </div>
  );
};
