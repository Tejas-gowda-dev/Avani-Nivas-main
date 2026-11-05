import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  Layers,
  MessageSquare,
} from "lucide-react";
import { COMPANY_INFO } from "../data/company";
import { ScrollReveal } from "./ScrollReveal";

interface InteriorHeroSectionProps {
  onOpenConsultation: () => void;
  onExplorePackages: () => void;
  onExploreFeatures: () => void;
}

export const InteriorHeroSection: React.FC<InteriorHeroSectionProps> = ({
  onOpenConsultation,
  onExplorePackages,
  onExploreFeatures,
}) => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
    "Hello Avani Nivas team! I am interested in Interior Design for my home. Please share your catalog and package details.",
  )}`;

  // Luxury interior images
  const interiorImages = [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2400&q=90",

    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=90",

    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2400&q=90",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90",
  ];

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % interiorImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#120F0D] text-white">
    <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#120F0D] text-white">
      {/* Background Interior Image Slider */}
      <div className="absolute inset-0">
        {interiorImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`Avani Nivas Luxury Interior Design ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center
              transition-all duration-[1500ms] ease-in-out
              ${
                currentSlide === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        ))}

        {/* Luxury Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-transparent" />

        {/* Bottom Cinematic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A] via-transparent to-black/40" />

        {/* Warm Luxury Overlay */}
        <div className="absolute inset-0 bg-[#2C1A0E]/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
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
              Bespoke residential interior architecture, modular woodwork, and
              turnkey styling crafted with German precision machinery, 100% BWP
              marine plywood, and 45-day guaranteed handover.
            </p>
          </ScrollReveal>

          {/* Key Value Metrics Strip */}
          <ScrollReveal delay={0.3}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15">
                <div className="flex items-center gap-2 text-[#FDE68A] text-xs font-bold uppercase tracking-wider mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>45-60 Days</span>
                </div>
                <div className="text-xs text-slate-200">
                  Guaranteed Handover
                </div>
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
                <div className="text-xs text-slate-200">
                  Zero Carpentry Mess
                </div>
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

          {/* Action Buttons */}
        </div>
      </div>

      {/* Slider Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {interiorImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to interior image ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              currentSlide === index
                ? "w-10 bg-[#E2D4BC]"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
