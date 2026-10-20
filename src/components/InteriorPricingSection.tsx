import React, { useState } from 'react';
import { 
  INTERIOR_PRICING_TIERS, 
  INTERIOR_AREA_PRESETS,
  InteriorAreaPreset
} from '../data/interiorData';
import { PricingTier, formatIndianCurrency } from '../data/pricing';
import { COMPANY_INFO } from '../data/company';
import { ScrollReveal } from './ScrollReveal';
import { 
  Check, 
  ArrowRight, 
  Calculator, 
  Send, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

interface InteriorPricingSectionProps {
  onOpenConsultation?: () => void;
  showEstimatorOnly?: boolean;
}

export const InteriorPricingSection: React.FC<InteriorPricingSectionProps> = ({
  onOpenConsultation,
  showEstimatorOnly = false
}) => {
  const [selectedTierId, setSelectedTierId] = useState<string>('bwp-package');
  const [customSqFt, setCustomSqFt] = useState<number>(1000);

  // Form states for WhatsApp quotation
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientLocation, setClientLocation] = useState('Bengaluru');

  const activeTier = INTERIOR_PRICING_TIERS.find((t) => t.id === selectedTierId) || INTERIOR_PRICING_TIERS[3];

  // Calculate base price: Area * rate
  const totalEstimate = activeTier.isCustom ? 0 : Math.round(customSqFt * activeTier.ratePerSqFt);

  const handleSelectAreaPreset = (preset: InteriorAreaPreset) => {
    setCustomSqFt(preset.sqft);
  };

  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const packageName = activeTier.name;
    const estDisplay = activeTier.isCustom ? 'Custom Quote Requested' : formatIndianCurrency(totalEstimate);

    const message = `*Avani Nivas Interior Design Enquiry*%0A` +
      `*Client Name:* ${encodeURIComponent(clientName || 'Valued Client')}%0A` +
      `*Phone:* ${encodeURIComponent(clientPhone || 'Not provided')}%0A` +
      `*Location:* ${encodeURIComponent(clientLocation)}%0A` +
      `*Selected Package:* ${encodeURIComponent(packageName)} (${activeTier.rateDisplay})%0A` +
      `*Project Area:* ${encodeURIComponent(customSqFt)} sq.ft%0A` +
      `*Calculated Estimate:* ${encodeURIComponent(estDisplay)}%0A` +
      `*Project Summary:* Accessories are not included%0A%0A` +
      `_I would like to receive the complete specification sheet and schedule an interior consultation._`;

    const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="interior-pricing-section" className="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#EAE4DC] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0B2545]">
            Verified Modular Packages
          </span>
          <h2 className="mt-3 block font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#252525]">
            Interior Design Pricing Plans & Packages
          </h2>
          <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-[#5C564E]">
            Transparent per-sq.ft woodwork pricing tailored by core plywood grade. Select a package to calculate your project value.
          </p>
        </ScrollReveal>

        {/* 6 Interior Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INTERIOR_PRICING_TIERS.map((tier, idx) => {
            const isSelected = selectedTierId === tier.id;

            return (
              <ScrollReveal
                key={tier.id}
                delay={idx * 0.06}
                className={`relative rounded-2xl bg-white border flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  isSelected
                    ? 'border-[#0B2545] ring-2 ring-[#0B2545]/20 shadow-xl -translate-y-1'
                    : 'border-[#E0D8CC] hover:border-[#0B2545]/60 hover:shadow-lg'
                }`}
              >
                {/* Popular Ribbon for BWP */}
                {tier.popular && (
                  <div className="bg-[#0B2545] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 text-center shadow-xs">
                    ★ Most Recommended Choice
                  </div>
                )}

                <div>
                  {/* Card Visual Header */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#1E1B18]">
                    <img
                      src={tier.image}
                      alt={tier.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[#0B2545] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {tier.badge}
                    </span>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="text-[11px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                        Package {idx + 1} of 6
                      </div>
                      <h3 className="text-xl font-serif font-bold leading-tight mt-0.5">
                        {tier.name}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Rate Display */}
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#ECE5DA] mb-4">
                      <div className="text-[10px] uppercase font-bold text-[#7C7469] tracking-wider">
                        Price
                      </div>
                      <div className="text-2xl font-bold font-serif text-[#0B2545] mt-0.5">
                        {tier.rateDisplay}
                      </div>
                      <div className="text-[11px] text-[#7C7469] mt-0.5">
                        {tier.subtitle}
                      </div>
                    </div>

                    {/* INCLUDED SERVICES */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B2545] flex items-center justify-between border-b border-[#ECE5DA] pb-1.5">
                        <span>INCLUDED SERVICES:</span>
                        <span className="text-[10px] text-[#7C7469] font-normal">9 Services</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                        {tier.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-[#332F2A]">
                            <Check className="w-3.5 h-3.5 text-[#0B2545] shrink-0" />
                            <span className="font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project summary */}
                    <div className="mt-5 p-3 rounded-xl bg-[#FFFBF5] border border-[#F3E5D8]">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#A16207] mb-1">
                        Project summary:
                      </div>
                      <div className="text-xs text-[#78350F] flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                        <span>Accessories are not included</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      document.getElementById('interior-calculator-box')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isSelected
                        ? 'bg-[#153A66] hover:bg-[#0B2545] text-white shadow'
                        : 'bg-white hover:bg-[#FAF8F5] text-[#0B2545] border border-[#0B2545]/30'
                    }`}
                  >
                    <span>{isSelected ? 'Selected Package' : 'Calculate Estimate'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ========================================================
            INSTANT ESTIMATOR & WHATSAPP QUOTATION GENERATOR
        ======================================================== */}
        <div id="interior-calculator-box" className="mt-16 bg-white rounded-3xl border border-[#E0D8CC] p-6 sm:p-10 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ECE5DA]">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                  <Calculator className="w-4 h-4" />
                  <span>Instant Interior Cost Estimator</span>
                </div>
                <h3 className="text-2xl font-serif text-[#252525]">
                  Calculate Your Modular Woodwork Budget
                </h3>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-xs text-[#7C7469]">Selected Package:</span>
                <div className="text-sm font-bold text-[#0B2545]">{activeTier.name}</div>
                <div className="text-xs text-[#7C7469]">{activeTier.rateDisplay}</div>
              </div>
            </div>

            {/* Quick Area Presets */}
            <div className="pt-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#252525] block mb-3">
                Select Built-up Area Preset:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {INTERIOR_AREA_PRESETS.map((preset) => {
                  const isPresetActive = customSqFt === preset.sqft;
                  return (
                    <button
                      key={preset.sqft}
                      onClick={() => handleSelectAreaPreset(preset)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isPresetActive
                          ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-sm'
                          : 'bg-[#FAF8F5] text-[#332F2A] border-[#E0D8CC] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      <div className="text-xs font-bold">{preset.label}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{preset.type}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Area Slider & Quotation Form */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              <div className="lg:col-span-7 space-y-6">
                {/* Area Input & Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#252525]">
                      Project Carpet / Built-Up Area (sq.ft)
                    </label>
                    <span className="text-base font-bold text-[#0B2545] bg-[#FAF8F5] px-3.5 py-1 rounded-lg border border-[#E0D8CC]">
                      {customSqFt} sq.ft
                    </span>
                  </div>
                  <input
                    type="range"
                    min="300"
                    max="4000"
                    step="50"
                    value={customSqFt}
                    onChange={(e) => setCustomSqFt(Number(e.target.value))}
                    className="w-full h-2 bg-[#EAE4DC] rounded-lg appearance-none cursor-pointer accent-[#0B2545]"
                  />
                  <div className="flex justify-between text-[11px] text-[#7C7469]">
                    <span>300 sq.ft</span>
                    <span>1,500 sq.ft</span>
                    <span>4,000 sq.ft</span>
                  </div>
                </div>

                {/* Scope Confirmation Box */}
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#ECE5DA] space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0B2545]">
                    Included Services in this Estimate:
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-[#4A453E]">
                    {activeTier.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#0B2545] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-[#EAE4DC] flex items-center gap-2 text-xs text-[#78350F] font-semibold bg-[#FFFBF5] -mx-5 -mb-5 p-4 rounded-b-2xl">
                    <AlertCircle className="w-4 h-4 text-[#D97706] shrink-0" />
                    <span>Project summary: Accessories are not included</span>
                  </div>
                </div>

                {/* Assurance Badges */}
                <div className="p-4 rounded-xl bg-[#F5F2EC] border border-[#E2DAD0] flex flex-wrap items-center justify-between gap-4 text-xs text-[#5C564E]">
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#0B2545]" />
                    <span>Factory Precision Joinery</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#0B2545]" />
                    <span>Zero Carpentry Mess On-Site</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#0B2545]" />
                    <span>Direct WhatsApp Channel</span>
                  </div>
                </div>
              </div>

              {/* Estimate Summary & Direct WhatsApp Lead Box */}
              <div className="lg:col-span-5 bg-[#FAF8F5] p-6 rounded-2xl border border-[#E0D8CC] flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C7469] block">
                    Calculated Project Estimate
                  </span>
                  
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-[#0B2545]">
                    {activeTier.isCustom ? 'Custom Quote' : formatIndianCurrency(totalEstimate)}
                  </div>
                  
                  <div className="space-y-2 pt-2 border-t border-[#ECE5DA] text-xs">
                    <div className="flex justify-between text-[#5C564E]">
                      <span>Selected Package:</span>
                      <span className="font-semibold">{activeTier.name}</span>
                    </div>
                    <div className="flex justify-between text-[#5C564E]">
                      <span>Rate per sq.ft:</span>
                      <span className="font-semibold">{activeTier.rateDisplay}</span>
                    </div>
                    <div className="flex justify-between text-[#5C564E]">
                      <span>Calculated Area:</span>
                      <span className="font-semibold">{customSqFt} sq.ft</span>
                    </div>
                    <div className="flex justify-between text-[#78350F] pt-1 border-t border-[#ECE5DA] font-medium">
                      <span>Project summary:</span>
                      <span>Accessories are not included</span>
                    </div>
                  </div>
                </div>

                {/* Instant WhatsApp Lead Submission Form */}
                <form onSubmit={handleWhatsAppEnquiry} className="space-y-3 pt-6 border-t border-[#ECE5DA] mt-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D1C5] bg-white text-xs text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="WhatsApp Mobile Number"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D1C5] bg-white text-xs text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Property Location (e.g. Mallathahalli, Bengaluru)"
                      value={clientLocation}
                      onChange={(e) => setClientLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#D8D1C5] bg-white text-xs text-[#252525] focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#153A66] hover:bg-[#0B2545] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Estimate on WhatsApp</span>
                  </button>

                  <p className="text-[10px] text-center text-[#7C7469]">
                    Direct enquiry to Avani Nivas • +91 99163 39333
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
