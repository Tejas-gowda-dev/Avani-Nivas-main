import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { CTASection } from '../components/CTASection';
import { ScrollReveal } from '../components/ScrollReveal';
import {
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle,
  MapPin,
  HeartHandshake,
  Trophy,
  Award,
  Medal,
  Clock
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div id="about-page-root" className="pt-28 pb-0 bg-[#FAF8F5]">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#F5F2EC] border-b border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal className="max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              {COMPANY_INFO.foundationHeadline}
            </span>
            <h1 className="mt-4 block font-serif text-3xl sm:text-4xl lg:text-[54.0633px] leading-none text-center text-[#252525] cursor-crosshair">
              Built on Trust and Excellence
            </h1>
            <p className="mt-4 inline font-sans text-base sm:text-lg leading-snug text-center text-[#252525] cursor-crosshair">
              Avani Nivas by Gowdru Realcom private limited® — 15+ years of industry experience and 300+ satisfied clients across Karnataka, Orissa, and Chhattisgarh.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Our Heritage & Vision
            </span>
            <h2 className="block font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252525] leading-tight">
              Redefining the Construction Landscape
            </h2>
            <p className="text-base text-[#5C564E] leading-relaxed">
              {COMPANY_INFO.foundationStory}
            </p>
            <div className="p-6 rounded-2xl bg-[#F0ECE3] border border-[#E0D8CC]">
              <div className="flex items-center gap-2 text-sm font-bold text-[#252525] mb-2">
                {/* <Sparkles className="w-4 h-4 text-[#0B2545]" /> */}
                <span>Our Core Values: Elegance, Care & Customization</span>
              </div>
              <p className="text-sm text-[#4A453E] leading-relaxed">
                {COMPANY_INFO.coreValuesStory}
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5F2EC] border border-[#E0D8CC]">
                <div className="text-2xl font-bold text-[#252525] font-serif">15+</div>
                <div className="text-xs text-[#7C7469] mt-0.5">Years of Industry Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-[#F5F2EC] border border-[#E0D8CC]">
                <div className="text-2xl font-bold text-[#252525] font-serif">300+</div>
                <div className="text-xs text-[#7C7469] mt-0.5">Satisfied Clients Across Karnataka</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-[#E0D8CC] bg-[#2A2724]">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Excellence by Avani Nivas Gowdru Realcom"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 right-6 sm:bottom-6 sm:right-6 bg-white p-5 rounded-xl border border-[#E0D8CC] shadow-lg max-w-xs">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0B2545] block mb-1">
                  Our Uncompromising Promise
                </span>
                <p className="text-xs text-[#4A453E] leading-snug">
                  "Transparent breakdown of project costs, strict safety protocols, and millimeter-precision craftsmanship."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          AWARDS & RECOGNITION: BIG IMPACT AWARD 2026 (BENGALURU)
      ======================================================== */}
      <section id="awards-recognition" className="py-20 sm:py-14 bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#FAF8F5] border-y border-[#EAE4DC] relative overflow-hidden">
        {/* Decorative golden ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0B2545]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/30 text-[#92400E] text-xs font-bold uppercase tracking-widest mb-3 shadow-xs">
              <Trophy className="w-4 h-4 text-[#D97706]" />
              <span>Industry Recognition • Big Impact Awards 2026</span>
            </div>
            
            <h2 className="block font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] leading-tight">
              Award for Excellence in Construction &amp; Interiors
            </h2>
            
            <p className="mt-4 font-sans text-base sm:text-lg text-[#5C564E] leading-relaxed">
              Proudly conferred at the <strong>Big Impact Awards 2026 in Bengaluru</strong>, honoring Avani Nivas by Gowdru Realcom for industry-leading construction craftsmanship, bespoke interior transformations, and record fast-track execution speed.
            </p>
          </ScrollReveal>

          {/* Main Award Feature Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#E5DECE] shadow-xl relative overflow-hidden">
            {/* Top decorative badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#D4AF37] to-[#B38F24] text-[#0B1528] px-6 py-1.5 rounded-bl-2xl text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm hidden sm:block">
              Bengaluru Winner 2026
            </div>

            {/* Left Column: Ceremony Photo & Laurels Showcase */}
            <ScrollReveal className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-[#E0D8CC] shadow-lg group bg-[#1A1816]">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
                  alt="Avani Nivas Big Impact Award 2026 Ceremony - Excellence in Construction and Interiors"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Floating Award Trophy Badge */}
                {/* <div className="absolute top-4 left-4 p-3 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-300/40 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-[#0B1528] flex items-center justify-center font-bold shadow-md">
                    <Award className="w-6 h-6 text-[#0B1528]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-200">Official Honor</div>
                    <div className="text-sm font-serif font-bold text-white">Big Impact Award 2026</div>
                  </div>
                </div> */}

                {/* Bottom Caption on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-amber-300/50 text-[#0B1528] text-[10px] font-bold uppercase tracking-wider mb-2">
                    Speed Work &amp; Execution Milestone
                  </span>
                  <h4 className="text-lg font-serif font-bold text-white leading-tight">
                    Celebrating Rapid Project Handover &amp; Masterful Engineering
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Honoring Founder Sharath Kumar A N for elevating residential living in Karnataka.
                  </p>
                </div>
              </div>

              {/* Ceremony Venue & City Tag */}
              <div className="flex items-center justify-between text-xs text-[#0B2545] px-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0B2545]" />
                  <span>Grand Ceremony: Bengaluru, Karnataka</span>
                </span>
                <span className="font-mono font-semibold text-[#0B2545]">Year: 2026</span>
              </div>
            </ScrollReveal>

            {/* Right Column: Award Details & Fast-Track Speed Work Highlights */}
            <ScrollReveal delay={0.2} className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] block mb-1">
                  Award Citation &amp; Categories
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#252525] leading-tight">
                  Excellence in Construction, Interior Design &amp; Rapid Execution
                </h3>
                <p className="text-sm sm:text-base text-[#5C564E] leading-relaxed mt-3">
                  The <strong>Big Impact Award 2026</strong> recognizes companies that demonstrate exemplary design standards and solve industry-wide project delays. Avani Nivas was uniquely honored for combining heavy civil structural integrity with rapid, guaranteed turnaround times.
                </p>
              </div>

            

              {/* Founder quote banner */}
              <div className="p-4 rounded-2xl bg-[#F4EFE6] border-l-4 border-[#0B2545] text-xs text-[#4A453E] leading-relaxed">
                <span className="font-bold text-[#0B2545] block mb-0.5">
                  Leadership • Founder Sharath Kumar A N
                </span>
                "This 2026 Big Impact Award is a testament to our dedicated workforce and our promise to deliver exceptional homes with speed, precision, and zero compromises."
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Leadership & Visionary Founders */}
      <section className="py-20 bg-[#F5F2EC] border-y border-[#EAE4DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              Executive Leadership
            </span>
            <h2 className="block font-serif text-3xl sm:text-4xl text-[#252525] mt-2">
              Visionary Leaders Behind Avani Nivas
            </h2>
            <p className="mt-3 text-base text-[#5C564E]">
              Dedicated professionals who bring a wealth of experience, passion, and direct on-site accountability to every project.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.founders.map((founder, i) => (
              <ScrollReveal
                key={i}
                delay={i * 0.1}
                className="bg-white p-8 rounded-2xl border border-[#E0D8CC] shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5F2EC] text-[#0B2545] flex items-center justify-center font-bold text-lg border border-[#E0D8CC]">
                    {founder.name[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#252525] font-serif">{founder.name}</h3>
                    <p className="text-xs font-semibold text-[#0B2545] uppercase tracking-wider">{founder.role}</p>
                  </div>
                  <p className="text-sm text-[#5C564E] leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F2ECE4] flex items-center justify-between text-xs text-[#252525]">
                  <span>Gowdru Realcom Private Limited®</span>
                  <span>15+ Yrs Industry Leadership</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve: Tumkur, Bengaluru, Mysuru, Hassan */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
              AREAS WE SERVE
            </span>
            {/* <h2 className="block font-serif text-3xl sm:text-4xl text-[#252525] leading-tight">
              Active Regional Hubs
            </h2> */}
            <p className="text-base text-[#5C564E] leading-relaxed">
              We provide turnkey construction, architectural design, and personalized interior redesign services with dedicated site teams in:
            </p>

            <div className="space-y-3">
              {COMPANY_INFO.areasWeServe.map((hub, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E0D8CC] shadow-xs">
                  <div className="flex items-center gap-3 text-sm text-[#252525] font-semibold">
                    <div className="w-6 h-6 rounded-full bg-[#0B2545]/10 text-[#0B2545] flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <span>{hub.name}, {hub.state}</span>
                  </div>
                  {/* <span className="text-xs font-mono text-[#0B2545] bg-[#0B2545]/10 px-2.5 py-1 rounded">
                    {hub.type}
                  </span> */}
                </div>
              ))}
            </div>


            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs transition-colors"
              >
                <span>Schedule a Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-7 bg-[#F5F2EC] rounded-2xl p-8 sm:p-10 border border-[#E0D8CC]">
            <h3 className="text-xl font-bold text-[#252525] font-serif mb-4">
              Corporate Headquarters & Design Studio
            </h3>
            <p className="text-sm text-[#5C564E] leading-relaxed mb-6">
              Stationed in Mallathahalli, West Bengaluru, our headquarters houses our architectural drafting studio, 3D walkthrough rendering suites, and sample material library.
            </p>

            <div className="space-y-3 text-xs text-[#3E3A34] pb-6 border-b border-[#D8D1C5]">
              <div><strong>Company Name:</strong> {COMPANY_INFO.legalName}®</div>
              <div><strong>Brand:</strong> {COMPANY_INFO.flagshipBrand}</div>
              <div><strong>Address:</strong> {COMPANY_INFO.address.street}, {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} - {COMPANY_INFO.address.pincode}</div>
              <div><strong>Direct Contact:</strong> {COMPANY_INFO.contacts.primaryPhone} / {COMPANY_INFO.contacts.secondaryPhone}</div>
              <div><strong>Email:</strong> {COMPANY_INFO.contacts.primaryEmail}</div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-[#0B2545] font-semibold">
              <CheckCircle className="w-4 h-4" />
              <span>Registered & Active Private Limited Company (MCA India)</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        onConsultationClick={onOpenConsultation}
        onContactClick={() => onNavigate('contact')}
      />
    </div>
  );
};
