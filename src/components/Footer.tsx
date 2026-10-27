import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ShieldCheck, Sparkles, Hammer } from 'lucide-react';
// @ts-ignore
import Gowdru from "../assets/Gowdru.webp";



interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenMigrationGuide: () => void;
  serviceMode?: 'construction' | 'interiors';
  onSwitchServiceMode?: (mode: 'construction' | 'interiors') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenMigrationGuide,
  serviceMode = 'construction',
  onSwitchServiceMode
}) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkBtn = 'hover:text-white transition-colors text-left';

  return (
    <footer
      id="main-footer"
      className="bg-gradient-to-b from-[#0B2545] via-[#071E36] to-[#041222] text-[#F1F5F9] border-t border-[#15345E] pt-12 pb-8 sm:pt-16 sm:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10 sm:pb-2 border-b border-[#15345E]">
          {/* Brand Col */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => handleNav('home')}
              aria-label="Avani Nivas – Home"
              className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-lg group"
            >
              {/* Logo */}


              <span className="min-w-0">
                <span className="font-serif font-extrabold tracking-wide text-lg sm:text-xl uppercase text-white block leading-tight">
                  AVANI NIVAS
                </span>
                <span className="text-[10px] font-semibold tracking-wider uppercase text-[#CBD5E1] block mt-0.5">
                  Builders • Developers • Interiors
                </span>
              </span>
            </button>

            <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-md pt-1">
              Over 15 years of industry excellence, crafting bespoke private residences, turnkey architectural duplexes, and premium modular interior transformations across Karnataka, Orissa, and Chhattisgarh.
            </p>

            {/* Quick Experience Switcher */}
            {onSwitchServiceMode && (
              <div className="pt-2">
                {serviceMode === 'construction' ? (
                  <button
                    type="button"
                    id="footer-switch-to-interiors"
                    onClick={() => onSwitchServiceMode('interiors')}
                    className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all bg-[#153A66] hover:bg-[#0B2545] text-white border border-[#D4AF37]/50 shadow-md group"
                    title="Switch to Interior Design"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                    <span>Explore Interior Design</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                ) : (
                  <button
                    type="button"
                    id="footer-switch-to-construction"
                    onClick={() => onSwitchServiceMode('construction')}
                    className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all bg-[#153A66] hover:bg-[#0B2545] text-white border border-[#3B82F6]/50 shadow-md group"
                    title="Switch to Construction"
                  >
                    {/* <Hammer className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-110 transition-transform" /> */}
                    <span>Explore Construction</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                )}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081B30] text-[11px] text-[#93C5FD] border border-[#173A66]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#93C5FD]" />
                <span>15+ Years Provenance</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#081B30] text-[11px] text-[#E2E8F0] border border-[#173A66]">
                <span>300+ Satisfied Families</span>
              </div>

              <span className="h-28 w-28 sm:h-32 sm:w-32">
                <img
                  src={Gowdru}
                  alt="Avani Nivas logo"
                  width={250}
                  height={250}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </span>
            </div>
          </div>


          {/* Quick Links Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              <li>
                <button type="button" onClick={() => handleNav('home')} className={linkBtn}>
                  {serviceMode === 'interiors' ? 'Interiors Home' : 'Construction Home'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('pricing')}
                  className="hover:text-white transition-colors text-left flex flex-wrap items-center gap-1.5 font-medium text-white"
                >
                  <span>{serviceMode === 'interiors' ? 'Interior Packages & Rates' : 'Construction Pricing'}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#153A66] text-white font-bold border border-[#2B568E]">
                    Active
                  </span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('services')} className={linkBtn}>
                  {serviceMode === 'interiors' ? 'Interior Services' : 'Architectural Services'}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('projects')} className={linkBtn}>
                  Featured Projects
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('about')} className={linkBtn}>
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('partners')} className={linkBtn}>
                  Partners & Materials
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNav('contact')} className={linkBtn}>
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Services & Packages Col */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              {serviceMode === 'interiors' ? 'Interior Offerings' : 'Construction Packages'}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#CBD5E1]">
              {(serviceMode === 'interiors'
                ? [
                  'CM (Commercial Plywood) (₹1,599/sq.ft)',
                  'MR (Moisture Resistant) (₹1,799/sq.ft)',
                  'BWR (Boiling Water Resistant) (₹1,999/sq.ft)',
                  'BWP (Boiling Water Proof) (₹2,199/sq.ft)',
                  'Gurjan (₹2,999/sq.ft)',
                  'Customized Client Package'
                ]
                : [
                  'Essential Package (₹1,999/sq.ft)',
                  'Classic Package (₹2,199/sq.ft)',
                  'Premium Package (₹2,549/sq.ft)',
                  'Royal Package (₹2,749/sq.ft)',
                  'Customized Client Package',
                  'Commercial & Factory Setup'
                ]
              ).map((label) => (
                <li key={label}>
                  <button type="button" onClick={() => handleNav('pricing')} className={linkBtn}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Head Office</h3>
            <div className="space-y-3 text-sm text-[#CBD5E1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                <address className="not-italic text-xs leading-relaxed text-[#CBD5E1] min-w-0">
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

              <div className="flex items-center gap-2.5 min-w-0">
                <Mail className="w-4 h-4 text-[#93C5FD] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.contacts.primaryEmail}`}
                  className="hover:text-white transition-colors text-xs break-all min-w-0"
                >
                  {COMPANY_INFO.contacts.primaryEmail}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#93C5FD] shrink-0 mt-0.5" />
                <span className="text-[11px] text-[#94A3B8]">{COMPANY_INFO.contacts.workingHours}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="w-full mt-2 py-3 px-4 bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 border border-white/20 inline-flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>{serviceMode === 'interiors' ? 'Book Interior Visit' : 'Book Site Visit'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-xs text-[#94A3B8] text-center md:text-left">
          <p>
            © {currentYear} {COMPANY_INFO.legalName} / {COMPANY_INFO.flagshipBrand}. All rights reserved.
          </p>
          <span className="text-[#CBD5E1] leading-relaxed">
            Active Hubs: Bengaluru • Tumkur • Mysuru • Hassan • All Over Karnataka
          </span>
        </div>
      </div>
    </footer>
  );
};