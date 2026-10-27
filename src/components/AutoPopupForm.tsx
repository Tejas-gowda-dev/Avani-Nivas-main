import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Gift, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

// Put your poster in /public/images/ (served from the site root)
  const POSTER_SRC = '/diwali-offer-poster.webp';

interface AutoPopupFormProps {
  serviceMode: 'construction' | 'interiors';
  delayMs?: number; // Delay before auto-opening (default: 3500ms)
}

export const AutoPopupForm: React.FC<AutoPopupFormProps> = ({
  serviceMode,
  delayMs = 3500
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [experienceCenter, setExperienceCenter] = useState('Bengaluru (Mallathahalli Flagship)');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [budget, setBudget] = useState('₹20 Lakhs – ₹35 Lakhs');
  const [activeTab, setActiveTab] = useState<'interiors' | 'construction'>(
    serviceMode === 'construction' ? 'construction' : 'interiors'
  );

  // Update active tab when serviceMode changes
  useEffect(() => {
    setActiveTab(serviceMode === 'construction' ? 'construction' : 'interiors');
  }, [serviceMode]);

  // Auto-trigger popup after delay if not dismissed or submitted
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('avani_autopopup_dismissed');
    const isAlreadySubmitted = localStorage.getItem('avani_autopopup_submitted');

    if (isDismissed || isAlreadySubmitted) {
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem('avani_autopopup_shown', 'true');
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  // Autofill if visitor info is previously saved
  useEffect(() => {
    try {
      const savedName = localStorage.getItem('avani_visitor_name');
      const savedPhone = localStorage.getItem('avani_visitor_phone');
      if (savedName && !fullName) setFullName(savedName);
      if (savedPhone && !phoneNumber) setPhoneNumber(savedPhone);
    } catch {
      // Ignore storage restrictions
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('avani_autopopup_dismissed', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanName = fullName.trim();
    const cleanPhone = phoneNumber.trim().replace(/\D/g, '');
    const cleanEmail = email.trim();

    if (!cleanName || cleanName.length < 2) {
      setError('Please enter your full name.');
      return;
    }

    if (!cleanPhone || cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError(null);
    setSubmitting(true);

    // Save lead locally
    try {
      localStorage.setItem('avani_autopopup_submitted', 'true');
      localStorage.setItem('avani_visitor_name', cleanName);
      localStorage.setItem('avani_visitor_phone', cleanPhone);
      if (cleanEmail) localStorage.setItem('avani_visitor_email', cleanEmail);
    } catch {
      // Ignore storage errors
    }

    // Format WhatsApp inquiry
    const rawNum = COMPANY_INFO.contacts.whatsappNumber || '919916339333';
    const divisionTitle =
      activeTab === 'construction'
        ? 'Turnkey Residential Construction'
        : 'Bespoke Interior Design';

    const text =
      `*DUSSEHRA OFFER CLAIM - AVANI NIVAS*\n\n` +
      `🎉 *Offer:* 5% OFF\n` +
      `👤 *Full Name:* ${cleanName}\n` +
      `📱 *Phone:* +91 ${cleanPhone.slice(-10)}\n` +
      `✉️ *Email:* ${cleanEmail || 'Not specified'}\n` +
      `🏢 *Experience Center:* ${experienceCenter}\n` +
      `💰 *Budget Range:* ${budget}\n` +
      `🏗️ *Division:* ${divisionTitle}\n\n` +
      `I would like to claim this promotional offer and book an architectural walkthrough with your team.`;

    // Dispatch WhatsApp in new tab
    const whatsappUrl = `https://wa.me/${rawNum}?text=${encodeURIComponent(text)}`;
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <>
      {/* Floating Re-open Trigger Pill (When Modal is Closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#153A66] text-white shadow-2xl border-2 border-amber-300/60 hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce"
          aria-label="Open Festive Mega Offer always offer new offer full details and claim offer"
        >
          <Gift className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold tracking-wide uppercase drop-shadow-sm">
            Limited-Time Only Get • 5% Off
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-200" />
          </span>
        </button>
      )}

      {/* Auto Popup Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="autopopup-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto"
          onClick={handleClose}
        >
          {/* Main Modal Container */}
          <div
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] border border-amber-200/50 overflow-hidden my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close promotional popup"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 border-2 border-white/60 cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Modal Body: 2 Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[580px]">
              {/* ========================================================
                  LEFT COLUMN:  POSTER
              ======================================================== */}
              <div className="lg:col-span-5 relative bg-[#F6EDE4] select-none">
                {/* Hidden heading keeps the dialog accessible */}
                <h2 id="autopopup-title" className="sr-only">
                  Happy Diwali – 5% Off – Avani Nivas
                </h2>

                <img
                  src={POSTER_SRC}
                  alt="Happy Diwali – 5% off on construction and interiors by Avani Nivas"
                  draggable={false}
                  className="block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-center"
                />
              </div>

              {/* ========================================================
                  RIGHT COLUMN: LEAD CAPTURE FORM
              ======================================================== */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                {isSubmitted ? (
                  // Success State
                  <div className="my-auto py-8 text-center space-y-4 animate-in fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
                        Congratulations!
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                        Offer Claimed!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto leading-relaxed">
                        We have registered your details for the <strong>5% Off</strong>. Our senior consultant is reaching out to you on WhatsApp.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Avani Nivas, I claimed the Diwali Offer on your website. My name is ${fullName}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        onClick={handleClose}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        Explore Website
                      </button>
                    </div>
                  </div>
                ) : (
                  // Active Form State
                  <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                    {/* Division Switcher */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight">
                          Claim Special Package Offer
                        </h3>
                        <p className="text-xs text-gray-500">
                          Lock the discounts & free architectural passes
                        </p>
                      </div>

                      {/* Division Pill Buttons */}
                      <div className="inline-flex p-1 rounded-xl bg-gray-100 text-[11px] font-bold">
                        <button
                          type="button"
                          onClick={() => setActiveTab('interiors')}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            activeTab === 'interiors'
                              ? 'bg-white text-[#92400E] shadow-sm font-semibold'
                              : 'text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          Interiors
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveTab('construction')}
                          className={`px-3 py-1 rounded-lg transition-all ${
                            activeTab === 'construction'
                              ? 'bg-white text-[#0B2545] shadow-sm font-semibold'
                              : 'text-gray-500 hover:text-gray-900'
                          }`}
                        >
                          Construction
                        </button>
                      </div>
                    </div>

                    {/* Field 1: Full Name */}
                    <div>
                      <label htmlFor="autopopup-fullname" className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="autopopup-fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (error) setError(null);
                        }}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>

                    {/* Field 2: Email Address */}
                    <div>
                      <label htmlFor="autopopup-email" className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        id="autopopup-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all shadow-2xs"
                      />
                    </div>

                    {/* Field 3: Experience Center */}
                    <div>
                      <label htmlFor="autopopup-experience-center" className="block text-xs font-semibold text-gray-700 mb-1">
                        Select Experience Center <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="autopopup-experience-center"
                        value={experienceCenter}
                        onChange={(e) => setExperienceCenter(e.target.value)}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all shadow-2xs cursor-pointer"
                      >
                        <option value="Bengaluru (Mallathahalli Flagship)">Bengaluru</option>
                        <option value="Tumkur Prime Hub">Tumkur</option>
                        <option value="Mysuru Regional Center">Mysuru</option>
                        <option value="Hassan Regional Center">Hassan</option>
                      </select>
                    </div>

                    {/* Field 4: Phone Number */}
                    <div>
                      <label htmlFor="autopopup-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative flex">
                        <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-xs font-semibold">
                          🇮🇳 +91
                        </span>
                        <input
                          id="autopopup-phone"
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => {
                            setPhoneNumber(e.target.value);
                            if (error) setError(null);
                          }}
                          placeholder="98765 43210"
                          maxLength={14}
                          className="w-full px-4 py-2.5 sm:py-3 rounded-r-xl border border-gray-300 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Field 5: Budget Range */}
                    <div>
                      <label htmlFor="autopopup-budget" className="block text-xs font-semibold text-gray-700 mb-1">
                        Budget
                      </label>
                      <select
                        id="autopopup-budget"
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-gray-300 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:border-transparent transition-all shadow-2xs cursor-pointer"
                      >
                          <option value="₹20 Lakhs – ₹35 Lakhs">₹7 Lakhs – ₹12 Lakhs</option>
                        <option value="₹20 Lakhs – ₹35 Lakhs">₹15 Lakhs – ₹35 Lakhs</option>
                        <option value="₹35 Lakhs – ₹60 Lakhs">₹35 Lakhs – ₹60 Lakhs</option>
                        <option value="₹60 Lakhs – ₹1 Crore">₹60 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Crore – ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                      
                      </select>
                    </div>

                    {/* Error display */}
                    {error && (
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                        {error}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 px-6 rounded-2xl bg-[#153A66] hover:bg-[#0F2C4E] text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        <span>{submitting ? 'Claiming Offer...' : 'Submit & Claim Offer'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Disclaimer */}
                    <p className="text-[11px] text-gray-500 text-center leading-normal pt-1">
                      I authorise Avani Nivas by Gowdru Realcom Pvt Ltd and its representatives to contact me via Call and WhatsApp.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};