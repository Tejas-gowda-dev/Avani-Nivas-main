import React, { useState, useEffect } from 'react';
import { InteriorCategory, InteriorSubcategory, FinishOption } from '../data/interiorFeatures';
import { COMPANY_INFO } from '../data/company';
import { X, Check, MessageCircle, Sparkles, ChevronRight, Phone } from 'lucide-react';

interface InteriorSelectionModalProps {
  category: InteriorCategory | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export const InteriorSelectionModal: React.FC<InteriorSelectionModalProps> = ({
  category,
  onClose,
  onOpenConsultation
}) => {
  // If no category selected, return null
  if (!category) return null;

  // Selected subcategory state (only relevant for categories with subcategories, like Bedroom)
  const hasSubcategories = Boolean(category.subcategories && category.subcategories.length > 0);
  const [selectedSubcategoryIndex, setSelectedSubcategoryIndex] = useState<number>(0);

  const activeSubcategory: InteriorSubcategory | null = hasSubcategories && category.subcategories
    ? category.subcategories[selectedSubcategoryIndex]
    : null;

  // Available finishes based on subcategory or category
  const availableFinishes: FinishOption[] = activeSubcategory
    ? activeSubcategory.finishes
    : (category.finishes || []);

  // Currently selected finish ID (defaults to the first finish option)
  const [selectedFinishId, setSelectedFinishId] = useState<string>('');

  // Synchronize default finish selection when category or subcategory changes
  useEffect(() => {
    if (availableFinishes.length > 0) {
      setSelectedFinishId(availableFinishes[0].id);
    }
  }, [category.id, selectedSubcategoryIndex]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const selectedFinish = availableFinishes.find((f) => f.id === selectedFinishId) || availableFinishes[0];

  // Current display image & description
  const activeImage = activeSubcategory ? activeSubcategory.image : category.image;
  const activeTitle = activeSubcategory
    ? `${category.title} – ${activeSubcategory.name}`
    : category.title;
  const activeDescription = activeSubcategory
    ? activeSubcategory.shortDesc
    : category.shortDesc;

  // WhatsApp click handler with prefilled details
  const handleWhatsAppEnquiry = () => {
    const sanitizedNumber = COMPANY_INFO.contacts.whatsappNumber.replace(/[^0-9]/g, '');
    const finishLabel = selectedFinish ? selectedFinish.name : 'Custom Finish';
    const message = `Hello Avani Nivasa / Gowdru Realcom team, I am interested in Interior Features: ${activeTitle} with ${finishLabel} for my home. Please share the design catalogue, pricing details, and schedule a consultation.`;
    const url = `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="interior-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-[#E0D8CC] overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#252525] hover:text-black shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#0B2545]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Image Showcase */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#201D1A]">
          <img
            src={activeImage}
            alt={activeTitle}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Breadcrumb & Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0B2545] text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
              Interior Features
            </span>
            <span className="px-3 py-1 bg-[#0B2545] text-white text-xs font-semibold rounded-full uppercase tracking-wider shadow-sm">
              Portfolio of Distinction
            </span>
            {category.badge && (
              <span className="px-3 py-1 bg-black/60 text-[#F5F2EC] text-xs font-medium rounded-full backdrop-blur-xs">
                {category.badge}
              </span>
            )}
          </div>

          {/* Image Overlay Title */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs text-[#93C5FD] font-semibold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#93C5FD]" />
              <span>Step: Select Finish & Enquire</span>
            </div>
            <h2 id="interior-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {activeTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#E2DCD5] line-clamp-2 mt-1 max-w-2xl">
              {category.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Subcategories Selector (specifically for Bedroom: Wardrobe, Bedroom TV Unit, Headboard) */}
          {hasSubcategories && category.subcategories && (
            <div className="bg-[#FAF8F5] p-4 rounded-xl border border-[#E8E2D8]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0B2545] mb-2 flex items-center gap-1.5">
                <span>Select Bedroom Subcategory</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {category.subcategories.map((subcat, idx) => {
                  const isSubSelected = selectedSubcategoryIndex === idx;
                  return (
                    <button
                      key={subcat.id}
                      onClick={() => setSelectedSubcategoryIndex(idx)}
                      className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                        isSubSelected
                          ? 'bg-[#0B2545] text-white border-[#0B2545] shadow-xs ring-1 ring-[#0B2545]'
                          : 'bg-white text-[#252525] border-[#DED7CB] hover:border-[#0B2545]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold">{subcat.name}</div>
                        <div className={`text-[10px] line-clamp-1 ${isSubSelected ? 'text-[#CBD5E1]' : 'text-[#7C7469]'}`}>
                          {subcat.shortDesc}
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 ml-1 ${isSubSelected ? 'text-white' : 'text-[#A8A196]'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Description Overview */}
          <div className="space-y-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#7C7469]">Design Overview</h3>
            <p className="text-sm text-[#4A453E] leading-relaxed">
              {activeDescription}
            </p>
          </div>

          {/* Selectable Finish Options (3 options) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B2545] flex items-center gap-1.5">
                <span>Choose Finish Option (Select One)</span>
              </h3>
              <span className="text-[11px] text-[#7C7469]">3 Premium Finishes Available</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {availableFinishes.map((finish) => {
                const isSelected = selectedFinishId === finish.id;
                return (
                  <div
                    key={finish.id}
                    onClick={() => setSelectedFinishId(finish.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 relative flex flex-col justify-between group ${
                      isSelected
                        ? 'bg-[#0B2545]/5 border-[#0B2545] ring-2 ring-[#0B2545] shadow-sm'
                        : 'bg-[#FAF8F5] border-[#E2DBD0] hover:border-[#0B2545]/60 hover:bg-white'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSelected
                            ? 'bg-[#0B2545] text-white'
                            : 'bg-[#EAE4DC] text-[#5C564E]'
                        }`}>
                          {finish.tag || 'Architectural'}
                        </span>

                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          isSelected
                            ? 'bg-[#0B2545] border-[#0B2545] text-white'
                            : 'border-[#B8AF9F] group-hover:border-[#0B2545]'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-[#252525] group-hover:text-[#0B2545] transition-colors">
                        {finish.name}
                      </h4>
                      <p className="text-xs text-[#5C564E] leading-relaxed mt-1.5">
                        {finish.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-[#ECE5DA]/80 flex items-center justify-between text-[11px]">
                      <span className={`font-semibold ${isSelected ? 'text-[#0B2545]' : 'text-[#7C7469]'}`}>
                        {isSelected ? 'Selected Finish' : 'Click to Select'}
                      </span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-[#0B2545] animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Selection Feedback & WhatsApp Action Bar */}
          <div className="bg-[#F4EFEA] p-4 sm:p-5 rounded-2xl border border-[#E0D8CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs text-[#7C7469] font-medium">Selected Specification:</div>
              <div className="text-base font-bold text-[#252525] font-serif">
                {activeTitle} — <span className="text-[#0B2545] underline underline-offset-2">{selectedFinish?.name}</span>
              </div>
              <p className="text-[11px] text-[#6B6359]">
                Click below to get a dedicated WhatsApp quotation & 3D finish catalogue. No spam guaranteed.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
              <button
                id="interior-whatsapp-enquire-btn"
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:w-auto px-5 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                <span>WhatsApp Enquiry</span>
              </button>

              {onOpenConsultation && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-4 py-3 bg-white hover:bg-[#FAF8F5] text-[#0B2545] border border-[#0B2545]/30 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0B2545]" />
                  <span>Consultation</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 bg-[#FAF8F5] border-t border-[#EAE4DC] flex items-center justify-between text-xs text-[#7C7469]">
          <span>Gowdru Realcom • Avani Nivasa Architectural Interiors</span>
          <button
            onClick={onClose}
            className="text-xs font-medium text-[#0B2545] hover:underline"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
