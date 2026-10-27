import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { Menu, X, Phone, ArrowRight, Shield, Sparkles, Hammer, LayoutGrid } from 'lucide-react';
// @ts-ignore
import logo from '../assets/AVANI_NIVAS.webp';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  serviceMode?: 'construction' | 'interiors';
  onSwitchServiceMode?: (mode: 'construction' | 'interiors') => void;
  onReturnToLanding?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  serviceMode = 'construction',
  onSwitchServiceMode,
  onReturnToLanding
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'partners', label: 'Partners' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleLinkClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E6E1D8]/80 py-2.5 sm:py-3'
          : 'bg-[#FAF9F6] border-b border-[#E6E1D8]/80 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          {/* Brand Identity / Logo */}
          <div className="flex items-center gap-10">
            <button
              id="brand-logo-btn"
              onClick={() => handleLinkClick('home')}
              className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2545] rounded-lg p-0.5"
            >
              <img
              src={logo}
              alt={`${COMPANY_INFO.brandName} logo`}
              className="h-16 w-auto object-contain"  // h-9 when scrolled if you want it to shrink
            />
            </button>

            {/* Single Service Switcher CTA: If in Construction show Interiors; if in Interiors show Construction */}
            {onSwitchServiceMode && (
              <div className="hidden md:flex items-center gap-2">
                {serviceMode === 'construction' ? (
                  <button
                    id="nav-switch-to-interiors"
                    onClick={() => onSwitchServiceMode('interiors')}
                    className="px-3.5 py-1.5 rounded-xl bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm border border-[#3B82F6]/30 active:scale-95 group"
                    title="Switch to Interior Design"
                  >
                    <span>Interior </span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <button
                    id="nav-switch-to-construction"
                    onClick={() => onSwitchServiceMode('construction')}
                    className="px-3.5 py-1.5 rounded-xl bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm border border-[#3B82F6]/30 active:scale-95 group"
                    title="Switch to Construction"
                  >
                    <span>Construction</span>
                    <ArrowRight className="w-3 h-3 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}

                {onReturnToLanding && (
                  <button
                    id="nav-return-landing"
                    onClick={onReturnToLanding}
                    title="Return to Selection Screen"
                    className="p-1.5 rounded-lg text-[#7C7469] hover:text-[#0B2545] hover:bg-[#ECE5DA] transition-colors"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" aria-label="Main Navigation" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md relative ${
                    isActive
                      ? 'text-[#0B2545] font-semibold'
                      : 'text-[#5C564E] hover:text-[#0B2545] hover:bg-[#F2ECE4]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0B2545] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              id="desktop-phone-quicklink"
              href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-xs font-medium text-[#0B2545] hover:text-[#1A1918] transition-colors py-2 px-2.5 rounded-lg border border-[#E6E1D8] bg-[#F7F4EF]"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B2545]" />
              <span className="font-semibold">{COMPANY_INFO.contacts.primaryPhone}</span>
            </a>

            <button
              id="desktop-consultation-btn"
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-semibold tracking-wide uppercase rounded-xl active:scale-98 transition-all duration-200 shadow-sm"
            >
              <span>{serviceMode === 'interiors' ? 'Get a Consultation' : 'Get a Consultation'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Mode Switcher: Only show the other service to switch to */}
            {onSwitchServiceMode && (
              <>
                {serviceMode === 'construction' ? (
                  <button
                    id="mobile-switch-to-interiors"
                    onClick={() => onSwitchServiceMode('interiors')}
                    className="px-2.5 py-1.5 bg-[#153A66] hover:bg-[#0B2545] text-white rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-2xs border border-[#3B82F6]/30"
                    title="Switch to Interior Design"
                  >
                    {/* <Sparkles className="w-3 h-3 text-[#D4AF37]" /> */}
                    <span>Interiors</span>
                  </button>
                ) : (
                  <button
                    id="mobile-switch-to-construction"
                    onClick={() => onSwitchServiceMode('construction')}
                    className="px-2.5 py-1.5 bg-[#153A66] hover:bg-[#0B2545] text-white rounded-lg text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-2xs border border-[#3B82F6]/30"
                    title="Switch to Construction"
                  >
                    <Hammer className="w-3 h-3 text-[#D4AF37]" />
                    <span>Construction</span>
                  </button>
                )}
              </>
            )}

            <button
              id="mobile-consultation-quick-btn"
              onClick={onOpenConsultation}
              className="px-2.5 sm:px-3 py-1.5 bg-[#153A66] hover:bg-[#0B2545] text-white text-[10px] sm:text-[11px] font-bold uppercase rounded-lg tracking-wider whitespace-nowrap transition-colors"
            >
              Consult
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 sm:p-2.5 rounded-lg text-[#0B2545] hover:bg-[#EFEAE2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#E6E1D8] bg-[#FAF9F6] shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-4.5rem)] overflow-y-auto"
        >
          <div className="max-w-7xl mx-auto px-4 py-5 space-y-2">
            {/* Mobile Service Switcher: Only show the alternative service */}
            {onSwitchServiceMode && (
              <div className="mb-4">
                {serviceMode === 'construction' ? (
                  <button
                    onClick={() => {
                      onSwitchServiceMode('interiors');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs border border-[#3B82F6]/30"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Switch to Interior Design</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      onSwitchServiceMode('construction');
                      setMobileMenuOpen(false);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs border border-[#3B82F6]/30"
                  >
                    <Hammer className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Switch to Construction</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </button>
                )}
              </div>
            )}

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EAE4DC] text-[#0B2545] font-bold'
                      : 'text-[#252525] hover:bg-[#F2ECE4]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 text-[#0B2545]" />}
                </button>
              );
            })}

            <div className="pt-4 mt-3 border-t border-[#E6E1D8] space-y-3">
              {onReturnToLanding && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReturnToLanding();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-white border border-[#0B2545]/30 text-[#0B2545] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Return to Selection Screen</span>
                </button>
              )}

              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#EFEAE2] text-[#252525] text-sm font-medium rounded-lg"
              >
                <Phone className="w-4 h-4 text-[#0B2545]" />
                <span>Call: {COMPANY_INFO.contacts.primaryPhone}</span>
              </a>

              <button
                id="mobile-drawer-consult-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3.5 bg-[#153A66] hover:bg-[#0B2545] text-white text-sm font-bold tracking-wide uppercase rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <span>{serviceMode === 'interiors' ? 'Book Interior Consultation' : 'Get a Consultation'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2 text-xs text-[#7C7469] flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#0B2545]" />
                <span>Mallathahalli, Bengaluru • 15+ Yrs Industry Experience</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
