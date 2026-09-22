import React, { useState, useEffect, useRef } from 'react';
import { PageId, ProjectItem } from '../types';
import { ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
  onNavigate?: (page: PageId) => void;
  onSelectProject?: (project: ProjectItem) => void;
}

interface HeroSlide {
  id: string;
  title: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-duplex',
    title: 'Luxury Duplex Homes',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'slide-villa',
    title: 'Opulent Architectural Villas',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'slide-single-floor',
    title: 'Single Floor Haven',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85'
  },
  {
    id: 'slide-interiors',
    title: 'Artisanal Teak & Veneer Suites',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance slides every 2s unless hovered/paused
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 2000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] lg:min-h-[88vh] flex flex-col justify-center py-14 sm:py-18 lg:py-20 overflow-hidden bg-[#121212] text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Avani Nivas Architectural Showcase Hero"
    >
      {/* ========================================================
          BACKGROUND IMAGE STACK WITH DISSOLVE & KEN BURNS ZOOM
      ======================================================== */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === activeSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Sophisticated Architectural Scrim & Vignette */}
        {/* Top/Bottom Shading for Header Integration & Bottom Dock */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/40 to-black/60" />

        {/* Blueprint Architectural Grid Dot Texture */}
        <div className="absolute inset-0 z-20 opacity-15" />
      </div>

      {/* ========================================================
          MAIN EDITORIAL CONTENT & INTERACTIVE UI LAYER
      ======================================================== */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Headline, Value Proposition & Actions */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-7 text-left">
            {/* Trust Pill Badge */}
            {/* <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 shadow-lg text-white">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-5" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[#F3E5AB]">
                15+ Years Excellence • 200+ Completed Projects
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/40" />
              <span className="hidden sm:inline-block text-[11px] font-mono text-white/80">
                Karnataka 
              </span>
            </div> */}

            {/* Editorial Title */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] leading-[1.08] text-white tracking-tight">
               Building the Home of Your Dreams,Today and Tomorrow:{' '}
               
              </h1>
            </div>

            {/* Subtitle with High-Contrast Legibility */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-[#FAF8F5]/90 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              Avani Nivas by Gowdru Realcom brings visionary architectural brilliance, reinforced civil engineering, and exquisite customized interiors to your dream spaces. Experience turnkey delivery with locked-in budgets and zero cost surprises.
            </p>

           

            {/* Quick Micro-Trust Guarantee List */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#DDD5C7]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F6E27A]" />
                <span>10-Year Structural Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F6E27A]" />
                <span>Fixed Milestone Stage Billing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F6E27A]" />
                <span>On-Time Handover Penalty Clause</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
