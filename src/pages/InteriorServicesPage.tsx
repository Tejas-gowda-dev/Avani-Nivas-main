import React from 'react';
import { PageId, ServiceItem } from '../types';
import { INTERIOR_SERVICES } from '../data/interiorData';
import { InteriorFeaturesSection } from '../components/InteriorFeaturesSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

interface InteriorServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
}

export const InteriorServicesPage: React.FC<InteriorServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService
}) => {
  return (
    <div id="interior-services-page-root" className="pt-28 pb-0 bg-[#FAF9F6]">
      {/* Header */}
      <section className="py-16 sm:py-20 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2545]/10 text-[#0B2545] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>Modular Engineering • Handcrafted Finishes</span>
            </div>
            <h1 className="block font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
              Specialized Interior Architecture Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              Every detail engineered for durability, ergonomics, and aesthetic serenity. Explore our specialized interior offerings fabricated using precision German machinery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid (8 Detailed Items) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTERIOR_SERVICES.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                delay={idx * 0.08}
                className="bg-[#FAF8F5] rounded-3xl border border-[#E0D8CC] overflow-hidden flex flex-col md:flex-row group hover:shadow-xl hover:border-[#0B2545]/60 transition-all duration-300"
              >
                <div className="relative md:w-5/12 h-56 md:h-auto overflow-hidden bg-[#241F1C] shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 text-[#0B2545] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                    Verified
                  </span>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#252525] group-hover:text-[#0B2545] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed mt-2">
                      {service.fullDesc}
                    </p>

                    <div className="mt-4 space-y-2 pt-3 border-t border-[#ECE5DA]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#252525]">
                        Key Highlights:
                      </div>
                      {service.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4A453E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2545] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#ECE5DA] flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                    >
                      <span>Full Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-bold text-[#0B2545] hover:underline"
                    >
                      Enquire Quote
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Moved Interior Features Section: 7 Key Zones */}
      <InteriorFeaturesSection onOpenConsultation={onOpenConsultation} />

      {/* Final CTA */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
