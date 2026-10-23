import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageSquare, User, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export type ServiceMode = 'construction' | 'interiors' | 'both';

interface ServiceExploreModalProps {
  isOpen: boolean;
  initialMode: ServiceMode;
  onClose: () => void;
  onProceed: (selectedMode: ServiceMode) => void;
}

const MODE_OPTIONS: { value: ServiceMode; label: string }[] = [
  { value: 'construction', label: 'Construction' },
  { value: 'interiors', label: 'Interior Design' },
  { value: 'both', label: 'Both' },
];

const getDivisionName = (mode: ServiceMode) => {
  switch (mode) {
    case 'construction':
      return 'Turnkey Residential Construction';
    case 'interiors':
      return 'Bespoke Interior Design & Modular Woodwork';
    default:
      return 'Turnkey Construction + Bespoke Interior Design';
  }
};

const getPortfolioName = (mode: ServiceMode) => {
  switch (mode) {
    case 'construction':
      return 'Construction';
    case 'interiors':
      return 'Interior Design';
    default:
      return 'Construction and Interior Design';
  }
};

const getHeadingTitle = (mode: ServiceMode) => {
  switch (mode) {
    case 'construction':
      return 'Construction Showcase';
    case 'interiors':
      return 'Interior Design Studio';
    default:
      return 'Construction & Interior Design';
  }
};

export const ServiceExploreModal: React.FC<ServiceExploreModalProps> = ({
  isOpen,
  initialMode,
  onClose,
  onProceed,
}) => {
  const [selectedMode, setSelectedMode] = useState<ServiceMode>(initialMode);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sendCatalog, setSendCatalog] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Sync mode whenever initialMode changes
  useEffect(() => {
    setSelectedMode(initialMode);
  }, [initialMode]);

  // Prepopulate saved details if available in localStorage
  useEffect(() => {
    if (isOpen) {
      setError(null);
      setSubmitting(false);
      try {
        const savedName = localStorage.getItem('avani_visitor_name');
        const savedPhone = localStorage.getItem('avani_visitor_phone');
        if (savedName && !name) setName(savedName);
        if (savedPhone && !phone) setPhone(savedPhone);
      } catch {
        // Ignore localStorage restrictions
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim().replace(/\D/g, '');

    if (!cleanName || cleanName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit WhatsApp phone number.');
      return;
    }

    setError(null);
    setSubmitting(true);

    // Save to localStorage for seamless browsing
    try {
      localStorage.setItem('avani_visitor_name', cleanName);
      localStorage.setItem('avani_visitor_phone', cleanPhone);
      localStorage.setItem('avani_visitor_service', selectedMode);
    } catch {
      // Ignore localStorage error
    }

    // Format WhatsApp message to Avani Nivas team
    const rawNum = COMPANY_INFO.contacts.whatsappNumber || '919916339333';
    const divisionName = getDivisionName(selectedMode);
    const portfolioName = getPortfolioName(selectedMode);

    const text =
      `*New Inquiry via Website Exploration - Avani Nivas*\n\n` +
      `👤 *Name:* ${cleanName}\n` +
      `📱 *WhatsApp:* +91 ${cleanPhone.slice(-10)}\n` +
      `🏗️ *Interested In:* ${divisionName}\n` +
      `💬 *Request:* Hello Avani Nivas, I am exploring your ${portfolioName} portfolio on the website and would like to receive your catalog, pricing packages, and consultation details.\n\n` +
      `📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}`;

    // Dispatch WhatsApp in a new tab
    const whatsappUrl = `https://wa.me/${rawNum}?text=${encodeURIComponent(text)}`;
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Smoothly route user directly into the website
    setTimeout(() => {
      setSubmitting(false);
      onProceed(selectedMode);
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="explore-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#E5DECE] overflow-hidden flex flex-col text-[#20251F]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Decorative Header */}
        <div className="bg-gradient-to-r from-[#0B2545] via-[#153A66] to-[#0B2545] text-white p-6 sm:p-7 relative border-b border-[#1E4B82]">
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#FDE68A] text-[10px] font-bold uppercase tracking-widest mb-2">
            <span>Avani Nivas by Gowdru Realcom PVT LTD®</span>
          </div>

          <h2
            id="explore-modal-title"
            className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight"
          >
            Explore {getHeadingTitle(selectedMode)}
          </h2>

          <p className="text-xs sm:text-sm text-slate-200/90 mt-1.5 leading-relaxed font-sans">
            Please share your name and WhatsApp number to access the full website and instantly
            receive our package catalog on WhatsApp.
          </p>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-5">
          {/* Service Selector Toggle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#545148] mb-2">
              Select division to explore
            </label>
            <div className="grid grid-cols-3 gap-2 p-1 bg-[#ECE6DA] rounded-2xl">
              {MODE_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setSelectedMode(option.value)}
                  aria-pressed={selectedMode === option.value}
                  className={`flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl text-xs font-bold tracking-wide transition-all ${
                    selectedMode === option.value
                      ? 'bg-[#153A66] text-white shadow-md'
                      : 'text-[#5C564E] hover:text-[#0B2545]'
                  }`}
                >
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label
              htmlFor="visitor-name"
              className="block text-xs font-bold uppercase tracking-wider text-[#35332E] mb-1.5"
            >
              Your Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7C7469]">
                <User className="w-4 h-4" />
              </div>
              <input
                id="visitor-name"
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="e.g. Rajesh Kumar"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-[#D5CDBC] text-[#20251F] text-sm placeholder:text-[#A0988A] focus:outline-none focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-all shadow-2xs"
              />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="visitor-phone"
              className="block text-xs font-bold uppercase tracking-wider text-[#35332E] mb-1.5"
            >
              WhatsApp Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative flex">
              <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#D5CDBC] bg-[#EFE9DF] text-[#4A453E] text-xs font-semibold">
                🇮🇳 +91
              </span>
              <input
                id="visitor-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="98765 43210"
                maxLength={14}
                className="w-full pl-3 pr-10 py-3 rounded-r-xl bg-white border border-[#D5CDBC] text-[#20251F] text-sm placeholder:text-[#A0988A] focus:outline-none focus:ring-2 focus:ring-[#0B2545] focus:border-transparent transition-all shadow-2xs"
              />
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#25D366]">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[11px] text-[#7C7469] mt-1">
              We'll send the package specifications and project walkthrough on WhatsApp.
            </p>
          </div>

          {/* Checkbox preference */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="catalog-pref"
              type="checkbox"
              checked={sendCatalog}
              onChange={(e) => setSendCatalog(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-[#C8BEAB] text-[#0B2545] focus:ring-[#0B2545] cursor-pointer"
            />
            <label htmlFor="catalog-pref" className="text-xs text-[#524E46] cursor-pointer select-none">
              Send me detailed pricing sheets, warranty cards, and 3D floor plan brochures via WhatsApp.
            </label>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium animate-in fade-in">
              {error}
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2 space-y-2.5">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#25D366] via-[#20ba59] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{submitting ? 'Connecting...' : 'Submit & Enter Website'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Privacy Note */}
          <div className="pt-2 border-t border-[#EAE3D5] flex items-center justify-center gap-2 text-[11px] text-[#7C7469]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0B2545]" />
            <span>100% Privacy Guaranteed • Zero spam • Direct architects only</span>
          </div>
        </form>
      </div>
    </div>
  );
};