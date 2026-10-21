import React, { useState } from 'react';
import { PageId, ServiceItem, ProjectItem } from '../types';
import { 
  INTERIOR_SERVICES, 
  INTERIOR_PROJECTS, 
  INTERIOR_TESTIMONIALS, 
  INTERIOR_PROCESS_STEPS,
  INTERIOR_PARTNERS 
} from '../data/interiorData';
import { COMPANY_INFO } from '../data/company';
import { InteriorHeroSection } from '../components/InteriorHeroSection';
import { InteriorPricingSection } from '../components/InteriorPricingSection';
import { InteriorFeaturesSection } from '../components/InteriorFeaturesSection';
import { PartnersSliderSection } from '../components/PartnersSliderSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Layers, 
  Check, 
  Star, 
  Quote, 
  MapPin, 
  CheckCircle2, 
  ChevronRight,
  Eye
} from 'lucide-react';

interface InteriorHomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectPricingPlan?: (tierId: string) => void;
  onSwitchToConstruction: () => void;
}

export const InteriorHomePage: React.FC<InteriorHomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService,
  onSelectProject,
  onSelectPricingPlan,
  onSwitchToConstruction
}) => {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  return (
    <div id="interior-home-root" className="pt-[74px] sm:pt-[82px] space-y-0 selection:bg-[#0B2545] selection:text-white">
      {/* ========================================================
          1. INTERIOR HERO SECTION
      ======================================================== */}
      <InteriorHeroSection
        onOpenConsultation={onOpenConsultation}
        onExplorePackages={() => {
          document.getElementById('interior-pricing-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onExploreFeatures={() => {
          document.getElementById('interior-features-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* ========================================================
          2. INTRODUCTORY & VALUE PROPOSITION BANNER
      ======================================================== */}
      <section className="py-12 bg-white border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA]">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#252525]">45-Day Delivery</h4>
                <p className="text-xs text-[#5C564E]">Guaranteed move-in handover or we pay penalty</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA]">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#252525]">10-Year Warranty</h4>
                <p className="text-xs text-[#5C564E]">On all BWP plywood and German hardware</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA]">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Layers className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#252525]">100% Factory Finish</h4>
                <p className="text-xs text-[#5C564E]">Precision German CNC with zero dust on-site</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA]">
              <div className="w-12 h-12 rounded-xl bg-[#0B2545] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#252525]">3D VR Renders</h4>
                <p className="text-xs text-[#5C564E]">Experience photorealistic walkthrough before build</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ABOUT & PHILOSOPHY: AVANI NIVAS INTERIORS
      ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
                Master Artisans • Engineered Perfection
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#252525]">
                Where Architecture Meets Bespoke Interior Living
              </h2>

              <p className="font-sans text-base text-[#5C564E] leading-relaxed">
                At <strong>Avani Nivas by Gowdru Realcom Pvt. Ltd.</strong>, we treat interior design as an exact science and a high art. Backed by 15+ years of architectural excellence, our interior division delivers end-to-end turnkey homes with zero compromise on materials.
              </p>

              <p className="font-sans text-base text-[#5C564E] leading-relaxed">
                Every cabinet carcass is fabricated using 100% boiling waterproof (BWP/BWR) calibrated marine-grade plywood, cut on precision German CNC edge-banders, and fitted with certified Häfele and Hettich hardware. You get pristine, jointless finishes without the dust, noise, and delays of traditional carpenters.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E0D8CC]">
                  <div className="text-2xl font-bold font-serif text-[#0B2545]">200+</div>
                  <div className="text-xs text-[#7C7469] mt-0.5">Turnkey Homes Transformed</div>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E0D8CC]">
                  <div className="text-2xl font-bold font-serif text-[#0B2545]">100%</div>
                  <div className="text-xs text-[#7C7469] mt-0.5">In-House Manufacturing</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
                >
                  <span>Explore Our Heritage</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onSwitchToConstruction}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B2545] border border-[#0B2545]/30 hover:bg-[#FAF8F5] text-xs font-bold uppercase tracking-wider rounded-xl transition-colors"
                >
                  <span>View Construction Services</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#E0D8CC] shadow-2xl bg-[#1E1A17]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                  alt="Avani Nivas Interior Design Studio Craftsmanship"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#FDE68A] text-[11px] font-bold uppercase tracking-wider">
                    German Automated Production
                  </span>
                  <h4 className="text-xl font-serif font-bold mt-2">
                    Zero On-Site Carpentry Dust & Pure Ergonomic Perfection
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Modules arrive pre-finished and assembled in days by certified technicians.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SPECIALIZED INTERIOR SERVICES (8 OFFERINGS)
      ======================================================== */}
      <section id="interior-services-section" className="py-20 bg-white border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Full-Spectrum Capabilities
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#252525]">
              Comprehensive Interior Offerings
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-[#5C564E]">
              From gourmet modular kitchens and custom walk-in closets to sacred mandirs and architectural false ceilings.
            </p>
          </ScrollReveal>

          {/* 8 Interior Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTERIOR_SERVICES.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                delay={idx * 0.05}
                className="bg-[#FAF8F5] rounded-2xl border border-[#E0D8CC] overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#0B2545]/60 transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#241F1C]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 text-[#0B2545] text-[10px] font-bold rounded uppercase">
                      Modular Craft
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#252525] group-hover:text-[#0B2545] transition-colors font-serif">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#5C564E] leading-relaxed mt-2 line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3 border-t border-[#ECE5DA]">
                      {service.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#4A453E]">
                          <Check className="w-3 h-3 text-[#0B2545] shrink-0" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-white hover:bg-[#0B2545] hover:text-white text-[#0B2545] border border-[#0B2545]/30 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. MOVED INTERIOR FEATURES: 7 KEY ZONES & FINISH SELECTOR
      ======================================================== */}
      <InteriorFeaturesSection onOpenConsultation={onOpenConsultation} />

      {/* ========================================================
          6. INTERIOR DESIGN PRICING PLANS (HOME VIEW: PACKAGES ONLY)
      ======================================================== */}
      <InteriorPricingSection 
        showEstimator={false}
        onSelectPlanForPricingPage={(tierId) => {
          if (onSelectPricingPlan) {
            onSelectPricingPlan(tierId);
          } else {
            onNavigate('pricing');
          }
        }}
        onOpenConsultation={onOpenConsultation} 
      />

      {/* ========================================================
          7. CURATED INTERIOR PORTFOLIO / GALLERY
      ======================================================== */}
      <section id="interior-portfolio-section" className="py-20 sm:py-24 bg-white border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <ScrollReveal className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
                Curated Craftsmanship
              </span>
              <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#252525]">
                Featured Interior Portfolios
              </h2>
              <p className="mt-4 font-sans text-base text-[#5C564E]">
                Explore actual residential interiors designed, manufactured, and handed over across Bengaluru.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INTERIOR_PROJECTS.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                delay={idx * 0.1}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E0D8CC] bg-[#FAF8F5] transition-all duration-300 hover:shadow-xl hover:border-[#0B2545]/60 flex flex-col justify-between"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden bg-[#241F1C]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/95 text-[#0B2545] text-[10px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                      {project.timeline}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-xs text-[#E2D4BC] font-medium flex items-center gap-1 mb-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-xl font-serif font-bold group-hover:text-[#FDE68A] transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs text-[#5C564E] leading-relaxed mb-4">
                      {project.summary}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-[#ECE5DA]">
                      {project.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4A453E]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0B2545] shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-[#ECE5DA] flex items-center justify-between text-xs font-bold text-[#0B2545]">
                    <span>{project.pricing}</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Gallery</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          8. 3-PHASE INTERIOR EXECUTION PROCESS
      ======================================================== */}
      <section className="py-20 sm:py-24 bg-[#F5F2EC] border-t border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Seamless Methodology
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#252525]">
              Our 3-Phase Interior Journey
            </h2>
            <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-[#5C564E]">
              From photorealistic 3D visualization to German automated factory fabrication and clean 45-day on-site delivery.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INTERIOR_PROCESS_STEPS.map((step, idx) => (
              <ScrollReveal
                key={step.number}
                delay={idx * 0.1}
                className="bg-white rounded-2xl p-8 border border-[#E0D8CC] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif font-bold text-[#0B2545]">
                      {step.number}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#ECE5DA] text-[11px] font-bold text-[#7C7469] uppercase tracking-wider">
                      Phase {idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#252525] mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#0B2545] uppercase tracking-wider mb-4">
                    {step.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#F2ECE4]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#252525] mb-2">
                      Key Deliverables:
                    </div>
                    {step.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#4A453E]">
                        <Check className="w-3.5 h-3.5 text-[#0B2545] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE4]">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#0B2545] hover:text-white text-[#0B2545] border border-[#0B2545]/20 text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Schedule Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. CLIENT TESTIMONIALS
      ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Real Client Trust
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#252525]">
              What Homeowners Say About Avani Nivas Interiors
            </h2>
            <p className="mt-4 font-sans text-base text-[#5C564E]">
              Authentic reviews from Bengaluru families who entrusted their spaces to our interior division.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERIOR_TESTIMONIALS.map((t, idx) => (
              <ScrollReveal
                key={t.id}
                delay={idx * 0.08}
                className="bg-[#FAF8F5] p-7 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#D97706]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D97706]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#E0D8CC]" />
                  </div>

                  <p className="text-sm text-[#4A453E] leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE5DA]">
                  <h4 className="text-sm font-bold text-[#252525] font-sans">
                    - {t.clientName}
                  </h4>
                  <p className="text-xs text-[#0B2545] font-medium mt-0.5">
                    {t.projectType}
                  </p>
                  <p className="text-xs text-[#7C7469] flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#0B2545]" />
                    <span>{t.location}</span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          10. PARTNERS LOGO SLIDER
      ======================================================== */}
      <PartnersSliderSection onOpenConsultation={onOpenConsultation} />

      {/* ========================================================
          11. FINAL INTERIOR CTA SECTION
      ======================================================== */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
