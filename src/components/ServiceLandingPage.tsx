import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Phone,
  Twitter,
} from 'lucide-react';

// @ts-ignore
import logo from '../assets/Companylogo.png';
import { COMPANY_INFO } from '../data/company';

interface ServiceLandingPageProps {
  onSelectService: (mode: 'construction' | 'interiors') => void;
  onOpenConsultation?: () => void;
}

export const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  onSelectService,
  onOpenConsultation,
}) => {
  const phone = COMPANY_INFO?.contacts?.primaryPhone;
  const phoneHref = phone?.replace(/\s+/g, '') || '';
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Entrance animation for the service cards.
    const node = sectionRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#F7F5F0] font-sans text-[#20251F] antialiased selection:bg-[#C8A96A] selection:text-white">
      {/* Navigation */}
      <header className="animate-nav-drop absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8 sm:pt-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/50 bg-[#FBFAF7]/90 px-4 py-3 shadow-[0_12px_40px_rgba(20,25,20,0.08)] backdrop-blur-xl sm:px-6">
          <a aria-label="Avani Nivas home" className="group flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt={`${COMPANY_INFO?.brandName || 'Avani Nivas'} Logo`}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-1 md:flex">
              <a href="https://www.instagram.com/avaninivas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full p-2 text-[#62665B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EEE9DE] hover:text-[#9A793C]">
                <Instagram className="h-4 w-4" />
              </a>
              {COMPANY_INFO?.socialLinks?.facebook && (
                <a href={COMPANY_INFO.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-2 text-[#62665B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EEE9DE] hover:text-[#9A793C]">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              <a href="https://twitter.com/avaninivas" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-full p-2 text-[#62665B] transition duration-300 hover:-translate-y-0.5 hover:bg-[#EEE9DE] hover:text-[#9A793C]">
                <Twitter className="h-4 w-4" />
              </a>
            </div>

            {phoneHref && (
              <a href={`tel:${phoneHref}`} className="hidden items-center gap-2 text-sm font-medium text-[#42473E] transition-colors hover:text-[#9A793C] sm:flex">
                <Phone className="h-4 w-4" />
                <span>{phone}</span>
              </a>
            )}

            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 rounded-full bg-[#153A66] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-[#0B2545] hover:shadow-xl sm:px-5 sm:text-xs"
              >
                <span>Book a consultation</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            )}
          </div>
        </nav>
      </header>

      <main>
        {/* Services */}
        <section
          id="services"
          ref={sectionRef}
          className="mx-auto mt-4 max-w-7xl px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          <div
            className={`mx-auto mb-4 max-w-5xl text-center transition-all duration-700 sm:mb-6 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
          >
            <p className="mx-auto mt-4 max-w-5xl text-sm leading-7 text-[#686B61] sm:text-base sm:leading-8">
              Discover construction and interior solutions designed around your vision, your lifestyle, and the way you want to feel at home.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <article
              className={`group relative min-h-[540px] overflow-hidden rounded-[1.75rem] bg-[#26352C] shadow-[0_20px_60px_rgba(38,53,44,0.12)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(38,53,44,0.2)] sm:min-h-[600px] ${visible ? 'animate-card-left' : 'translate-y-8 opacity-0'}`}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                alt="Modern residential architecture with clean lines and natural materials"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
               {/* <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#0B2545]/5 to-black/5 group-hover:via-[#0B2545]/20 transition-colors duration-500" /> */}
            {/* <div className="absolute inset-0 bg-[#00142B]/30 mix-blend-multiply" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101811]/95 via-[#101811]/35 to-transparent transition-opacity duration-500 group-hover:via-[#101811]/25" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <h2 className="font-serif text-4xl text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">CONSTRUCTION</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/75">From foundations to finishing, create a home shaped around your plans, priorities, and way of living.</p>
                <div className="mt-6 space-y-3 text-xs text-white/90 sm:text-sm">
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#D9C49A]" /> Residential construction</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#D9C49A]" /> Quality-focused execution</p>
                </div>
                <div className="mt-5 flex w-full justify-center">
                  <button
                    onClick={() => onSelectService('construction')}
                    className="group/button inline-flex items-center justify-center gap-3 rounded-full border border-white/60 bg-white/15 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:gap-4 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[#D9C49A] focus:ring-offset-2 focus:ring-offset-[#26352C]"
                  >
                    Explore construction <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>

            <article
              className={`group relative min-h-[540px] overflow-hidden rounded-[1.75rem] bg-[#46382C] shadow-[0_20px_60px_rgba(38,53,44,0.12)] transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(38,53,44,0.2)] sm:min-h-[600px] ${visible ? 'animate-card-right' : 'translate-y-8 opacity-0'}`}
            >
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                alt="Warm, refined contemporary living room interior"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#0B2545]/5 to-black/5 group-hover:via-[#0B2545]/20 transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#00142B]/30 mix-blend-multiply" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17120E]/95 via-[#17120E]/35 to-transparent transition-opacity duration-500 group-hover:via-[#17120E]/25" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <h2 className="font-serif text-4xl text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-5xl">INTERIORS</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/75">Layered textures, purposeful layouts, and considered finishes come together to make every room feel personal.</p>
                <div className="mt-6 space-y-3 text-xs text-white/90 sm:text-sm">
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#D9C49A]" />interior design</p>
                  <p className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 shrink-0 text-[#D9C49A]" /> Kitchens, storage &amp; finishes</p>
                </div>
                <div className="mt-5 flex w-full justify-center">
                  <button
                    onClick={() => onSelectService('interiors')}
                    className="group/button inline-flex items-center justify-center gap-3 rounded-full border border-white/60 bg-white/15 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-all duration-300 hover:gap-4 hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-[#D9C49A] focus:ring-offset-2 focus:ring-offset-[#46382C]"
                  >
                    Explore interiors <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#E5E0D6] bg-[#F7F5F0]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-16">
          <div className="flex items-center gap-3">
            <img src={logo} alt={`${COMPANY_INFO?.brandName || 'Avani Nivas'} Logo`} className="h-9 w-auto object-contain" />
            <span className="text-xs text-[#73756C]">Thoughtful spaces. Lasting impressions.</span>
          </div>
          <div className="flex items-center gap-4 text-[#73756C]">
            <a href="https://www.instagram.com/avaninivas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition duration-300 hover:-translate-y-0.5 hover:text-[#9A793C]"><Instagram className="h-4 w-4" /></a>
            {COMPANY_INFO?.socialLinks?.facebook && <a href={COMPANY_INFO.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition duration-300 hover:-translate-y-0.5 hover:text-[#9A793C]"><Facebook className="h-4 w-4" /></a>}
            <a href="https://twitter.com/avaninivas" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="transition duration-300 hover:-translate-y-0.5 hover:text-[#9A793C]"><Twitter className="h-4 w-4" /></a>
            <span className="ml-2 text-[10px] uppercase tracking-[0.16em]">© {new Date().getFullYear()} {COMPANY_INFO?.brandName || 'Avani Nivas'}</span>
          </div>
        </div>
      </footer>

      {/* Component-scoped animations; no extra animation package needed. */}
      <style>{`
        @keyframes navDrop {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes cardLeft {
          from { opacity: 0; transform: translate(-24px, 24px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        @keyframes cardRight {
          from { opacity: 0; transform: translate(24px, 24px); }
          to { opacity: 1; transform: translate(0, 0); }
        }
        .animate-nav-drop { animation: navDrop 700ms cubic-bezier(.2,.75,.25,1) both; }
        .animate-card-left { animation: cardLeft 800ms cubic-bezier(.2,.75,.25,1) 120ms both; }
        .animate-card-right { animation: cardRight 800ms cubic-bezier(.2,.75,.25,1) 260ms both; }
        @media (prefers-reduced-motion: reduce) {
          .animate-nav-drop, .animate-card-left, .animate-card-right {
            animation: none !important;
          }
          *, *::before, *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};
