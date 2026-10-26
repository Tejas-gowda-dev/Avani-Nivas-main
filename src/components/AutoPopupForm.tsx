import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Gift, Phone, MessageSquare, ArrowRight, Building, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
// import { BrandLogo } from './BrandLogo';

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
  const [budget, setBudget] = useState('₹40 Lakhs - ₹70 Lakhs');
  const [activeTab, setActiveTab] = useState<'interiors' | 'construction'>(
    serviceMode === 'construction' ? 'construction' : 'interiors'
  );

  // Update active tab when serviceMode changes
  useEffect(() => {
    setActiveTab(serviceMode === 'construction' ? 'construction' : 'interiors');
  }, [serviceMode]);

  // Auto-trigger popup after delay if not dismissed or submitted in this session
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

    // Format WhatsApp inquiry with festive promotional details
    const rawNum = COMPANY_INFO.contacts.whatsappNumber || '919916339333';
    const divisionTitle = activeTab === 'construction'
      ? 'Turnkey Residential Construction'
      : 'Bespoke Interior Design';

    const text =
      `*FESTIVE MEGA OFFER CLAIM - AVANI NIVAS*\n\n` +
      `🎉 *Offer:* 35% OFF + GST ON US + Free Gifts Worth ₹1 Lakh\n` +
      `👤 *Full Name:* ${cleanName}\n` +
      `📱 *Phone:* +91 ${cleanPhone.slice(-10)}\n` +
      `✉️ *Email:* ${cleanEmail || 'Not specified'}\n` +
      `🏢 *Experience Center:* ${experienceCenter}\n` +
      `💰 *Budget Range:* ${budget}\n` +
      `🏗️ *Division:* ${divisionTitle}\n\n` +
      `I would like to claim this festive promotional offer and book an architectural walkthrough with your team.`;

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
      {/* Floating Promotional Re-open Trigger Pill (When Modal is Closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-40 group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#153A66] from-[#D97706] via-[#B45309] to-[#92400E] text-white shadow-2xl border-2 border-amber-300/60 hover:scale-105 active:scale-95 transition-all duration-300 animate-bounce"
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
            {/* Top-Right Floating Circular Close Button (Matches reference image style) */}
            <button
              onClick={handleClose}
              aria-label="Close promotional popup"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 border-2 border-white/60 cursor-pointer"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Modal Body: 2 Columns Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
              {/* ========================================================
                  LEFT COLUMN: FESTIVE PROMOTIONAL BANNER
              ======================================================== */}
              <div className="lg:col-span-5 relative flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#E76F12] via-[#C94A05] to-[#8C1D04] text-white p-5 sm:p-6 select-none">
                {/* Traditional Festive Toran / Arch Pattern Overlay */}
                <div className="absolute top-0 inset-x-0 h-28 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-300 via-orange-400 to-transparent" />

                {/* Top Section: Brand Badge & Festival Headline */}
                <div className="relative z-10 text-center space-y-1">
                  {/* Brand Header */}
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/95 shadow-md border border-amber-200">
                    {/* <BrandLogo variant="horizontal" size="sm" /> */}
                  </div>

                  {/* Festival Eyebrow & Title */}
                  <div className="pt-2">
                    {/* <span className="block font-serif text-xs uppercase tracking-widest text-amber-200 font-bold drop-shadow">
                      Festive Special Celebration
                    </span> */}
                    <span className="block font-serif text-xs uppercase tracking-widest text-amber-200 font-bold drop-shadow">
                       Special Celebration
                    </span>
                    <h2
                      id="autopopup-title"
                      className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-white drop-shadow-md italic uppercase"
                    >
                      {activeTab === 'construction' ? 'Griha Pravesha' : 'Ganesh Chaturthi'}
                    </h2>
                    <span className="block font-serif text-lg sm:text-xl font-bold tracking-widest text-[#FDE68A] uppercase -mt-1 drop-shadow">
                      {activeTab === 'construction' ? 'Construction Offer' : 'Festive Mega Offer'}
                    </span>
                  </div>
                </div>

                {/* Central Visual: Indian Celebration / Home / Pooja Mandir Photo */}
                <div className="relative z-10 my-3 rounded-2xl overflow-hidden border-2 border-amber-200/60 shadow-xl bg-black/40">
                  <img
                    src={
                      activeTab === 'construction'
                        ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
                        : 'https://images.unsplash.com/photo-1607344645866-009c320b5ab8?auto=format&fit=crop&w=800&q=80'
                    }
                    alt="Avani Nivas Festive Home Celebration"
                    className="w-full h-48 sm:h-56 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Mega Offer Speech Bubble Badge (Faithful to Reference image) */}
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white text-[#991B1B] px-3.5 py-1.5 rounded-2xl shadow-2xl border-2 border-amber-300 flex flex-col items-center leading-none transform -rotate-3 hover:rotate-0 transition-transform">
                    <span className="text-sm font-black tracking-tight text-[#D97706] uppercase">
                      MEGA
                    </span>
                    <span className="text-base sm:text-lg font-black tracking-tighter text-[#1C1917] uppercase">
                      OFFER!
                    </span>
                  </div>
                </div>

                {/* Bottom Festive Highlight Strip */}
                <div className="relative z-10 space-y-2 text-center">
                  <p className="text-xs sm:text-[13px] font-sans font-medium text-amber-100 italic">
                    Celebrate the festival <strong className="text-white underline decoration-amber-300">with an offer worth bringing home.</strong>
                  </p>

                  {/* Main Banner Strip (Matches reference: "35% OFF + GST ON US") */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-[#4A0E08] via-[#6B140B] to-[#4A0E08] border-2 border-amber-300/80 shadow-lg text-amber-100">
                    <div className="font-serif text-lg sm:text-xl font-black tracking-wider text-yellow-300 uppercase drop-shadow">
                      {activeTab === 'construction' ? '₹200/SQ.FT OFF + FREE ELEVATION' : '35 % OFF + GST ON US'}
                    </div>
                    {/* <div className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-amber-200 mt-0.5">
                      + FREE GIFTS WORTH ₹1 LAKH (No Extra Tax or Loss!)
                    </div> */}
                    <div className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-amber-200 mt-0.5">
                      + FREE GIFTS [No Extra Tax or Loss!]
                    </div>
                  </div>

                  {/* Validity Tag */}
                  <div className="inline-block px-3 py-1 rounded-full bg-black/80 text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-amber-300/40">
                    Valid for Limited Bookings • Season 2026
                  </div>
                </div>
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
                      {/* <span className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
                        Congratulations!
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                        Festive Offer Claimed!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto leading-relaxed">
                        We have registered your details for the <strong>35% Off + GST Benefit</strong>. Our senior consultant is reaching out to you on WhatsApp.
                      </p> */}
                      <span className="text-xs font-bold uppercase tracking-widest text-[#D97706]">
                        Congratulations!
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F2937]">
                         Offer Claimed!
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto leading-relaxed">
                        We have registered your details for the <strong>5% Off </strong>. Our senior consultant is reaching out to you on WhatsApp.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Avani Nivas, I claimed the Festive Mega Offer on your website. My name is ${fullName}.`
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
                        {/* <h3 className="text-lg font-serif font-bold text-gray-900 leading-tight">
                          Claim Festive Package Offer
                        </h3>
                        <p className="text-xs text-gray-500">
                          Lock in festival discounts & free architectural passes
                        </p> */}
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

                    {/* Field 3: Select Experience Center */}
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
                        <option value="Bengaluru (Mallathahalli Flagship)">Bengaluru </option>
                        {/* <option value="Bengaluru (RR Nagar Experience Hub)">Bengaluru (RR Nagar Experience Hub)</option> */}
                        <option value="Tumkur Prime Hub">Tumkur</option>
                        <option value="Mysuru Regional Center">Mysuru</option>
                        <option value="Hassan Regional Center">Hassan </option>
                        {/* <option value="Online / Virtual 3D VR Consultation">Online / Virtual 3</option> */}
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
                        <option value="₹20 Lakhs – ₹35 Lakhs">₹20 Lakhs – ₹35 Lakhs</option>
                        <option value="₹35 Lakhs – ₹60 Lakhs">₹35 Lakhs – ₹60 Lakhs</option>
                        <option value="₹60 Lakhs – ₹1 Crore">₹60 Lakhs – ₹1 Crore</option>
                        <option value="₹1 Crore – ₹2 Crores">₹1 Crore – ₹2 Crores</option>
                        <option value="₹2 Crores+">₹2 Crores+ (Luxury Villa / Turnkey)</option>
                      </select>
                    </div>

                    {/* Error display */}
                    {error && (
                      <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                        {error}
                      </div>
                    )}

                    {/* Submit Button (Amber/Gold pill button styled like reference image) */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 px-6 rounded-2xl bg-[#153A66] from-[#F59E0B] via-[#EAB308] to-[#D97706] hover:from-[#EAB308] hover:to-[#B45309] text-white text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{submitting ? 'Claiming Offer...' : 'Submit & Claim Offer'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Disclaimer Authorization (Exact wording style as reference image) */}
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
