import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenMigrationGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenMigrationGuide
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-gradient-to-b from-[#0B2545] via-[#071E36] to-[#041222] text-[#F1F5F9] border-t border-[#15345E] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#15345E]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg"
            >
            </button>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-sm pt-1">
              Over 15 years of industry excellence, crafting bespoke private residences, turnkey architectural duplexes, and premium interior transformations across Karnataka, Orissa, and Chhattisgarh.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081B30] text-[11px] text-[#93C5FD] border border-[#173A66]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#93C5FD]" />
                <span>15+ Years Provenance</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081B30] text-[11px] text-[#E2E8F0] border border-[#173A66]">
                <span>200+ Satisfied Families</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left flex items-center gap-1.5 font-medium text-white">
                  <span>Pricing & Rate Cards</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#153A66] text-white font-bold border border-[#2B568E]">New</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors">
                  Architectural Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('partners')} className="hover:text-white transition-colors">
                  Partners & Materials
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Key Packages</h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Essential Package (₹1,999/sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Classic Package (₹2,199/sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Premium Package (₹2,549/sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Royal Package (₹2,749/sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Customized Client Package
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-white transition-colors text-left">
                  Commercial & Factory Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Head Office</h3>
            <div className="space-y-3 text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-[#CBD5E1]">
                  {COMPANY_INFO.address.street},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.pincode}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors text-xs font-medium"
                >
                  {COMPANY_INFO.contacts.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contacts.primaryEmail}`}
                  className="hover:text-white transition-colors text-xs"
                >
                  {COMPANY_INFO.contacts.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <span className="text-[11px] text-[#94A3B8]">{COMPANY_INFO.contacts.workingHours}</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full mt-2 py-3 px-4 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#153A66] hover:border-white/40 transition-all duration-200 border border-white/25 backdrop-blur-xs inline-flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Book Site Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            © {currentYear} {COMPANY_INFO.legalName} / {COMPANY_INFO.flagshipBrand}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-[#CBD5E1]">Active Hubs: Bengaluru • Tumkur • Mysuru • Hassan • All Over karnataka</span>
            <button
              id="wp-migration-guide-btn"
              onClick={onOpenMigrationGuide}
              className="inline-flex items-center gap-1 text-[#93C5FD] hover:underline"
            >
              {/* <FileText className="w-3.5 h-3.5" /> */}
              {/* <span>301 WordPress Migration Map</span> */}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
