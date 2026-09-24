import React, { useState } from 'react';
import { PageId, ServiceItem, ProjectItem, ProjectCategory } from '../types';
import { COMPANY_INFO, TESTIMONIALS } from '../data/company';
import { SERVICES } from '../data/services';
import { PROJECTS } from '../data/projects';
import { ProcessSection } from '../components/ProcessSection';
import { PricingSection } from '../components/PricingSection';
import { PartnersSliderSection } from '../components/PartnersSliderSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { HeroSection } from '../components/HeroSection';

import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Star,
  Quote,
  Phone,
  Calendar,
  IndianRupee,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { TrustSection } from '../components/TrustSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectPricingPlan?: (tierId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService,
  onSelectProject,
  onSelectPricingPlan
}) => {
  const [projectFilter, setProjectFilter] = useState<ProjectCategory>('All');

  const filteredProjects = projectFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === projectFilter);

  return (
    <div id="home-page-root" className="pt-[74px] sm:pt-[82px] space-y-0 selection:bg-[#0B2545] selection:text-white">
      {/* ========================================================
          FULL IMAGE EDITORIAL HERO SECTION
      ======================================================== */}
      <HeroSection
        onOpenConsultation={onOpenConsultation}
        onNavigate={onNavigate}
        onSelectProject={onSelectProject}
      />

      {/* ========================================================
          TRUST SECTION
      ======================================================== */}
      <TrustSection />

      {/* ========================================================
          SERVICES SECTION: 8 Comprehensive Offerings
      ======================================================== */}
      <section id="featured-services-section" className="py-20 sm:py-28 bg-[#FAF8F5] border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Comprehensive Offerings
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#252525] cursor-crosshair">
              Our Specialized Services
            </h2>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#252525] cursor-crosshair">
              From gourmet kitchen redesigns and whole-home remodeling to high-efficiency additions and factory construction, our experienced cavalry executes every detail.
            </p>
          </ScrollReveal>

          {/* Services Grid (8 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <ScrollReveal
                key={service.id}
                delay={idx * 0.05}
                className="bg-white rounded-xl border border-[#E6E1D8] overflow-hidden flex flex-col justify-between group hover:shadow-xl hover:border-[#0B2545]/60 transition-all duration-300"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden bg-[#2A2724]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 right-3 px-2 py-0.5 bg-white/90 backdrop-blur-xs text-[#252525] text-[10px] font-bold rounded uppercase">
                      Verified
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#252525] group-hover:text-[#0B2545] transition-colors font-serif">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#5C564E] leading-relaxed line-clamp-3">
                      {service.shortDesc}
                    </p>

                    <div className="mt-3 pt-3 border-t border-[#F2ECE4] space-y-1">
                      {service.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#7C7469]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545] shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-[#F9F7F4] mt-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold uppercase tracking-wider text-[#0B2545] hover:text-[#153A66] transition-colors flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="text-xs text-[#7C7469] hover:text-[#0B2545] underline transition-colors"
                  >
                    Enquire
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B2545] hover:bg-[#153A66] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-sm"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          FEATURED PROJECTS: Single Floor Haven, Duplexes, Villas, Factory
      ======================================================== */}
      <section id="projects-showcase-section" className="py-20 sm:py-14 bg-[#F5F2EC] border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Portfolio of Distinction
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#252525] cursor-crosshair">
              Featured Architectural Works
            </h2>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#252525] cursor-crosshair">
              Single-floor individual homes in Balangir Orissa, duplex homes at ₹2,400/sq.ft. with interiors, opulent villas, and industrial factories.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal delay={0.1} className="flex justify-center mb-10">
            <div className="flex items-center gap-1 bg-[#EAE4D9] p-1.5 rounded-xl max-w-full overflow-x-auto">
              {(['All', 'Residential', 'Construction', 'Commercial', 'Interiors', 'Renovation'] as ProjectCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setProjectFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all shrink-0 ${
                    projectFilter === cat
                      ? 'bg-[#252525] text-white shadow-sm'
                      : 'text-[#655E55] hover:text-[#252525]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.id}
                delay={idx * 0.1}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E0D8CC] bg-[#FAF8F5] transition-all duration-300 hover:shadow-2xl hover:border-[#0B2545]/60 flex flex-col justify-between"
                onClick={() => onSelectProject(project)}
              >
                <div>
                  <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#2A2724]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0B2545] text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {project.category}
                      </span>
                      {project.pricing && (
                        <span className="px-3 py-1 bg-[#0B2545] text-white text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                          {project.pricing}
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-[#E6E1D8] mb-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#93C5FD]" />
                        <span>{project.location}</span>
                        {project.timeline && <span>• {project.timeline}</span>}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium group-hover:text-[#93C5FD] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#ECE5DA] grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[#252525]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B2545] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between bg-white/50 border-t border-[#ECE5DA]">
                  <span className="text-xs font-semibold text-[#7C7469]">
                    Scope: <span className="text-[#252525]">{project.scope}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0B2545] group-hover:translate-x-1 transition-transform">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2} className="mt-12 text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B2545] hover:bg-[#153A66] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm"
            >
              <span>View All Projects & Floor Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          PRICING PLANS SECTION (HOME VIEW: STEP 1 PACKAGES ONLY)
      ======================================================== */}
      <PricingSection 
        showStep2={false}
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
          3-PHASE PROCESS SECTION
      ======================================================== */}
      <ProcessSection onConsultationClick={onOpenConsultation} />

      {/* ========================================================
          CLIENT TESTIMONIALS SECTION
      ======================================================== */}
      <section id="testimonials-section" className="py-20 sm:py-14 bg-[#FAF8F5] border-t border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Uncompromising Transparency
            </span>
            <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#252525] cursor-crosshair">
              HERE’S WHAT OUR CLIENTS HAVE TO SAY
            </h2>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#252525] cursor-crosshair">
              Real testimonials from homeowners and clients who entrusted their spaces to Avani Nivasa and Gowdru Realcom.
            </p>
          </ScrollReveal>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal
                key={t.id}
                delay={idx * 0.08}
                className="bg-white p-7 rounded-2xl border border-[#E0D8CC] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

                <div className="pt-4 border-t border-[#F2ECE4]">
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
          FOUNDATION & CORE VALUES CALLOUT SECTION
      ======================================================== */}
      <section id="foundation-summary-section" className="py-20 bg-[#F4EFEA] border-t border-[#E2DAD0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <ScrollReveal className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
                {COMPANY_INFO.foundationHeadline}
              </span>
              <h3 className="block font-serif text-2xl sm:text-4xl text-[#252525]">
                15+ Years Proven Track Record in Karnataka, Orissa & Chhattisgarh
              </h3>
              <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed">
                {COMPANY_INFO.foundationStory}
              </p>
              <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed">
                {COMPANY_INFO.coreValuesStory}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B2545] text-xs font-bold uppercase tracking-wider rounded-lg border border-[#0B2545]/30 hover:bg-[#153A66] hover:text-white transition-colors shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('partners')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0B2545] text-xs font-bold uppercase tracking-wider rounded-lg border border-[#0B2545]/30 hover:bg-[#153A66] hover:text-white transition-colors group"
                >
                  <span>Industry Partners</span>
                  <ChevronRight className="w-4 h-4 text-[#0B2545] group-hover:text-white" />
                </button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E0D8CC] shadow-sm">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#252525] mb-4">
                Verified Service Hubs
              </h4>
              <div className="space-y-3">
                {COMPANY_INFO.areasWeServe.map((area) => (
                  <div key={area.name} className="flex items-center justify-center p-3 rounded-lg bg-[#FAF8F5] border border-[#ECE5DA]">
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-[#0B2545]" />
                      <span className="text-sm font-semibold text-[#252525]">{area.name}</span>
                      <span className="text-xs text-[#7C7469]">({area.state})</span>
                    </div>
                    {/* <span className="text-[11px] font-mono font-medium text-[#0B2545] bg-[#E9EFF7] px-2 py-0.5 rounded">
                      {area.type}
                    </span> */}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t border-[#ECE5DA] flex items-center justify-between text-xs text-[#7C7469]">
                <span>Regional operations also active in:</span>
                <span className="font-semibold text-[#252525]">All Over Karnataka</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          PARTNERS LOGO SLIDER MOTION
      ======================================================== */}
      <PartnersSliderSection onOpenConsultation={onOpenConsultation} />

      {/* ========================================================
          FINAL CALL TO ACTION: PLANNING YOUR NEXT PROJECT?
      ======================================================== */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
