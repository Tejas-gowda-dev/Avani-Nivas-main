import React, { useState } from 'react';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
// import { BrandLogo } from './BrandLogo';
import { COMPANY_INFO } from '../data/company';
// @ts-ignore
import logo from '../assets/Companylogo.png';

interface ServiceLandingPageProps {
  onSelectService: (mode: 'construction' | 'interiors') => void;
  onOpenConsultation?: () => void;
}

/* Shared glass recipes (Tailwind utility strings) */
const GLASS_CARD =
  'relative z-20 w-full max-w-xl rounded-[28px] border border-white/20 backdrop-blur-2xl ' +
  'p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(255,255,255,0.05)] ' +
  'transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/35';

const GLASS_CHIP =
  'flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.08] px-3 py-2.5 ' +
  'backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-colors duration-300 ' +
  'group-hover:bg-white/[0.14]';

const GLASS_PILL =
  'rounded-full border border-white/25 bg-white/10 backdrop-blur-xl ' +
  'shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:bg-white/20 hover:border-white/40';

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [hoveredSide, setHoveredSide] = useState<'construction' | 'interiors' | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-[#0B1528] text-white flex flex-col justify-between overflow-x-hidden selection:bg-[#D4AF37] selection:text-[#0B1528]">
      {/* Floating Glass Header */}
      <header className="absolute top-3 sm:top-5 left-3 sm:left-6 right-3 sm:right-6 z-30 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl px-3 sm:px-5 py-2.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)]">
        <div className="flex items-center gap-3">
          <div className="rounded-xl border border-white/25 bg-white/10 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
            <img
                src={logo}
              alt={`${COMPANY_INFO.brandName} logo`}
              className="h-7 sm:h-8 w-auto"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className={`hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-white ${GLASS_PILL}`}
          >
            <Phone className="w-3.5 h-3.5 text-[#153A66]" />
            <span>{COMPANY_INFO.contacts.primaryPhone}</span>
          </a>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="rounded-full border border-[#D4AF37]/60 bg-white/20 px-4 sm:px-5 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.35)] transition-all duration-300 hover:bg-white/10 hover:text-white hover:shadow-[0_0_30px_rgba(212,175,55,0.45)]"
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
          className={`group relative flex-1 min-h-[50vh] lg:min-h-full flex flex-col justify-end p-4 pt-28 sm:p-10 sm:pt-28 lg:p-14 cursor-pointer overflow-hidden transition-all duration-700 ease-out border-b lg:border-b-0 lg:border-r border-white/10 ${
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
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-105 group-hover:brightness-105"
            />
            {/* Overlays: depth + cool tint so the glass reads clearly */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-[#071322]/90 via-[#0B2545]/40 to-black/30 transition-colors duration-500" /> */}
            {/* <div className="absolute inset-0 bg-[#00142B]/30 mix-blend-multiply" /> */}
          </div>

          {/* Colored light orbs (give the glass something to refract) */}
          {/* <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl transition-all duration-700 group-hover:bg-blue-400/35" /> */}
          {/* <div className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" /> */}

          {/* Construction Glass Card */}
          <div className={`${GLASS_CARD} bg-gradient-to-br from-white/[0.16] to-sky-200/[0.05] group-hover:from-white/[0.2]`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide text-[#BFDBFE] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#93C5FD] shadow-[0_0_8px_#93C5FD]" />
              <span>Civil & Architectural Build</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 drop-shadow-lg">
              Construction
            </h2>

            <p className="font-sans text-base sm:text-lg text-slate-100/90 font-normal leading-relaxed mb-6 max-w-md">
              Building Your Vision, Creating Your Future.
            </p>

            {/* Value bullets */}
            <div className="grid-cols-2 gap-2 text-xs text-slate-100 mb-7 hidden sm:grid">
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>15+ Years Track Record</span>
              </div>
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>200+ Homes Built</span>
              </div>
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>₹1,999/sq.ft Turnkey Packages</span>
              </div>
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>Foundation to Handover</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              id="btn-explore-construction"
              onClick={(e) => {
                e.stopPropagation();
                onSelectService('construction');
              }}
              className="group/btn inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4 rounded-2xl border border-white/30 bg-white/15 pl-6 pr-2 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:bg-white/25 hover:border-sky-200/60 hover:shadow-[0_0_35px_rgba(147,197,253,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <span>Explore Construction</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#0B1528] transition-transform duration-300 group-hover/btn:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </section>

        {/* Center Glass Divider Badge (Desktop only) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex-col items-center">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xs font-bold tracking-widest text-[#D4AF37] backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.45)]">
            <span className="absolute inset-1 rounded-full border border-[#153A66]/30" />
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
          className={`group relative flex-1 min-h-[50vh] lg:min-h-full flex flex-col justify-end p-4 sm:p-10 lg:p-14 cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
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
              className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-105 group-hover:brightness-105"
            />
            {/* Overlays: warm depth so the glass reads clearly */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#15100B]/90 via-[#2A1E17]/40 to-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#35251B]/25 mix-blend-multiply" />
          </div>

          {/* Colored light orbs */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-amber-500/25 blur-3xl transition-all duration-700 group-hover:bg-amber-400/35" />
          <div className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 rounded-full bg-rose-400/10 blur-3xl" />

          {/* Interior Glass Card */}
          <div className={`${GLASS_CARD} bg-gradient-to-br from-white/[0.16] to-amber-200/[0.06] group-hover:from-white/[0.2]`}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-wide text-[#153A66] backdrop-blur-md mb-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#153A66] shadow-[0_0_8px_#FDE68A]" />
              <span>Interior Architecture</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-3 drop-shadow-lg">
              Interior Design
            </h2>

            <p className="font-sans text-base sm:text-lg text-amber-50/90 font-normal leading-relaxed mb-6 max-w-md">
              Thoughtfully Designed Spaces, Beautifully Lived.
            </p>

            {/* Value bullets */}
            <div className="grid-cols-2 gap-2 text-xs text-amber-50 mb-7 hidden sm:grid">
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>45-Day Handover Guarantee</span>
              </div>
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>10-Year Material Warranty</span>
              </div>
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>100% Factory Finished</span>
              </div>
              <div className={GLASS_CHIP}>
                <CheckCircle2 className="w-4 h-4 text-[#153A66] shrink-0" />
                <span>BWP Termite-Proof Ply</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <button
              id="btn-explore-interiors"
              onClick={(e) => {
                e.stopPropagation();
                onSelectService('interiors');
              }}
              className="group/btn inline-flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4 rounded-2xl border border-white/30 bg-white/15 pl-6 pr-2 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 hover:bg-white/25 hover:border-amber-200/60 hover:shadow-[0_0_35px_rgba(253,230,138,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <span>Explore Interiors</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#0B1528] transition-transform duration-300 group-hover/btn:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};