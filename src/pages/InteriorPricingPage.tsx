import React from 'react';
import { PageId } from '../types';
import { InteriorPricingSection } from '../components/InteriorPricingSection';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import { ShieldCheck, HelpCircle, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface InteriorPricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  initialTierId?: string;
}

export const InteriorPricingPage: React.FC<InteriorPricingPageProps> = ({
  onNavigate,
  onOpenConsultation,
  initialTierId
}) => {
  const faqs = [
    {
      q: 'How does the 45-day handover guarantee work?',
      a: 'Once the final 3D designs and material specifications are approved and signed off, your modular units are fabricated off-site in our automated German factory. We deliver and install all modules on-site within 60 days, or we compensate you for every day of delay.'
    },
    {
      q: 'What type of plywood is used in Avani Nivas Interiors?',
      a: 'We exclusively use 100% Boiling Waterproof (BWP/BWR) marine-grade plywood certified to IS:710 standards from top manufacturers like Greenply and CenturyPly. All core panels are calibrated and treated with anti-termite and anti-borer chemicals.'
    },
    {
      q: 'Are hardware fittings and soft-close channels covered by warranty?',
      a: 'Yes. We partner with Häfele Hettich and Ebco . All soft-close hinges, tandem box drawer runners, and lift-up hydraulic systems carry up to a 10-year manufacturer warranty.'
    },
    {
      q: 'Can I choose custom finishes like natural veneer or PU lacquer?',
      a: 'Absolutely. We offer complete custom finishes including 1mm matte/textured laminates, glass-like high gloss acrylics, natural hand-rubbed timber veneers (Teak, Walnut, Oak), and seamless dust-free PU lacquer.'
    },
    {
      q: 'How are payments scheduled during the project?',
      a: 'Payments are linked to production milestones: 10% token advance upon booking, 50% upon 3D sign-off and start of factory precision cutting, 35% on delivery of modules to site before assembly, and the final 5% upon post-installation and sign-off.'
    }
  ];

  return (
    <div id="interior-pricing-page-root" className="pt-28 pb-0 bg-[#FAF9F6]">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2545]/10 text-[#0B2545] text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0B2545]" />
              <span>VERIFIED MODULAR PACKAGES.</span>
            </div> */}
            <h1 className="block font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight">
             Interior Design Pricing Plans & Packages..1
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5C564E] leading-relaxed">
              Transparent per-sq.ft and room-wise modular packages. Select your BHK configuration, customize finishes, and calculate your exact turnkey budget with zero surprise costs.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Interior Pricing & Interactive Estimator */}
      <InteriorPricingSection 
        showEstimator={true} 
        initialSelectedTierId={initialTierId}
        onOpenConsultation={onOpenConsultation} 
      />

      {/* Interior FAQs Section */}
      <section className="py-20 bg-white border-t border-[#EAE4DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Clear Answers
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif text-[#252525]">
              Frequently Asked Questions About Interior Packages
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal
                key={index}
                delay={index * 0.05}
                className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E0D8CC]"
              >
                <h3 className="text-base font-serif font-bold text-[#252525] flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-[#0B2545] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5C564E] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
