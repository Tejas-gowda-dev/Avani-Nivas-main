import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Clock, Layers, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { ScrollReveal } from './ScrollReveal';

interface InteriorHeroSectionProps {
  onOpenConsultation: () => void;
  onExplorePackages: () => void;
  onExploreFeatures: () => void;
}

export const InteriorHeroSection: React.FC<InteriorHeroSectionProps> = ({
  onOpenConsultation,
  onExplorePackages,
  onExploreFeatures
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
    'Hello Avani Nivas team! I am interested in Interior Design for my home. Please share your catalog and package details.'
  )}`;

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#120F0D] text-white">
      {/* Background Photography with Warm Luxury Tone */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="Avani Nivas Bespoke Luxury Interior Living Room"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in duration-1000"
        />
        {/* Editorial Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A] via-transparent to-black/60" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          {/* Eyebrow Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#FDE68A] text-xs font-bold uppercase tracking-widest shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Avani Nivas • Bespoke Residential Interiors</span>
            </div>
          </ScrollReveal>

          {/* Main Hero Headline */}
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-white drop-shadow-lg">
              Thoughtfully Designed Spaces, <br className="hidden sm:inline" />
              <span className="italic text-[#E2D4BC]">Beautifully Lived.</span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.2}>
            <p className="font-sans text-base sm:text-xl text-[#E8DFD5] leading-relaxed max-w-2xl font-normal drop-shadow">
              Bespoke residential interior architecture, modular woodwork, and turnkey styling crafted with German precision machinery, 100% BWP marine plywood, and 45-day guaranteed handover.
            </p>
          </ScrollReveal>

          {/* Key Value Metrics Strip */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-2 text-[#FDE68A] text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>45 Days</span>
                </div>
                <div className="text-xs text-slate-200">Guaranteed Handover</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-2 text-[#FDE68A] text-xs font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>10 Years</span>
                </div>
                <div className="text-xs text-slate-200">Material Warranty</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-2 text-[#FDE68A] text-xs font-bold uppercase tracking-wider mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>100% Factory</span>
                </div>
                <div className="text-xs text-slate-200">Zero Carpentry Mess</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-2 text-[#FDE68A] text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>₹1,599/sq.ft</span>
                </div>
                <div className="text-xs text-slate-200">6 Modular Packages</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-4">
              <button
                id="hero-explore-interior-packages"
                onClick={onExplorePackages}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0B2545] hover:bg-[#153A66] text-white border border-[#3B82F6]/50 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl active:scale-98"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <button
                id="hero-book-interior-consultation"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-98"
              >
                <span>Book Consultation</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Designer</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
