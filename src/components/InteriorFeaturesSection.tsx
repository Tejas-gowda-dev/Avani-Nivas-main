import React, { useState } from 'react';
import { INTERIOR_CATEGORIES, InteriorCategory } from '../data/interiorFeatures';
import { InteriorSelectionModal } from './InteriorSelectionModal';
import { ScrollReveal } from './ScrollReveal';
import { ArrowRight, Sparkles, Layers, Eye } from 'lucide-react';

interface InteriorFeaturesSectionProps {
  onOpenConsultation?: () => void;
}

export const InteriorFeaturesSection: React.FC<InteriorFeaturesSectionProps> = ({
  onOpenConsultation
}) => {
  const [selectedCategory, setSelectedCategory] = useState<InteriorCategory | null>(null);

  return (
    <section
      id="interior-features-section"
      className="py-20 sm:py-14 bg-[#FAF8F5] border-t border-[#EAE4DC] relative scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
    

          <h2 className="block font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-center text-[#252525]">
            INTERIOR FEATURES
          </h2>

          <p className="mt-4 font-sans text-base sm:text-lg leading-relaxed text-center text-[#5C564E]">
            Explore thoughtfully designed interiors and choose the perfect finish for your home.
          </p>

          {/* Quick Filter / Jump Badge Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="text-[#7C7469] font-medium mr-1">7 Key Zones:</span>
            {INTERIOR_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat)}
                className="px-3 py-1 rounded-full bg-white border border-[#E0D8CC] text-[#252525] hover:bg-[#0B2545] hover:text-white hover:border-[#0B2545] transition-all text-[11px] font-semibold"
              >
                {cat.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Categories Grid (Responsive: 1 col on mobile, 2 on tablet, 3/4 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INTERIOR_CATEGORIES.map((category, idx) => {
            const hasSubcategories = Boolean(category.subcategories && category.subcategories.length > 0);

            return (
              <ScrollReveal
                key={category.id}
                delay={idx * 0.06}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-[#E0D8CC] bg-white transition-all duration-300 hover:shadow-2xl hover:border-[#0B2545]/60 flex flex-col justify-between"
                onClick={() => setSelectedCategory(category)}
              >
                <div>
                  {/* High Quality Interior Image with Subtle Gradient & Badges */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#2A2724]">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                    {/* Category Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[#0B2545] text-[11px] font-bold rounded-full uppercase tracking-wider shadow-sm">
                        {category.badge || 'Interior Feature'}
                      </span>
                      {hasSubcategories && (
                        <span className="px-2.5 py-1 bg-[#0B2545] text-white text-[11px] font-semibold rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          <span>3 Subcategories</span>
                        </span>
                      )}
                    </div>

                    {/* Image Footer Info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-[11px] text-[#93C5FD] font-semibold uppercase tracking-wider mb-1">
                        Category {idx + 1} of 7
                      </div>
                      <h3 className="text-xl sm:text-2xl font-serif font-medium group-hover:text-[#93C5FD] transition-colors leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#E6E1D8] line-clamp-1 mt-0.5 opacity-90">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content & Description */}
                  <div className="p-6">
                    <p className="text-xs sm:text-sm text-[#5C564E] leading-relaxed line-clamp-3">
                      {category.shortDesc}
                    </p>

                    {/* If Bedroom, show subcategories clearly */}
                    {hasSubcategories && category.subcategories && (
                      <div className="mt-4 pt-3 border-t border-[#ECE5DA]">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#0B2545] mb-1.5">
                          Included Subcategories:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {category.subcategories.map((sub) => (
                            <span
                              key={sub.id}
                              className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FAF8F5] text-[#252525] border border-[#E0D8CC]"
                            >
                              {sub.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Finishes Preview Tags */}
                    {category.finishes && (
                      <div className="mt-4 pt-3 border-t border-[#ECE5DA]">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#7C7469] mb-1.5">
                          Selectable Finishes:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {category.finishes.map((f) => (
                            <span
                              key={f.id}
                              className="text-[10px] px-2 py-0.5 rounded bg-[#F5F2EC] text-[#5C564E] border border-[#EAE4DC]"
                            >
                              {f.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Button Bar */}
                <div className="p-6 pt-0 flex items-center justify-between bg-white border-t border-[#ECE5DA] mt-2">
                  <span className="text-xs font-semibold text-[#7C7469] flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5 text-[#0B2545]" />
                    <span>3 Custom Finishes</span>
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCategory(category);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0B2545] hover:bg-[#153A66] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all group-hover:translate-x-0.5 shadow-sm"
                  >
                    <span>View Designs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Showcase Strip */}
        <ScrollReveal delay={0.2} className="mt-14 bg-white p-6 sm:p-8 rounded-2xl border border-[#E0D8CC] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-serif font-bold text-[#252525]">
              Looking for a custom turnkey interior package for your home?
            </h4>
            <p className="text-xs sm:text-sm text-[#5C564E] max-w-2xl">
              We design, manufacture, and install turnkey interiors with factory-finished precision, 10-year warranty, and 3D architectural renders.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenConsultation && (
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 bg-[#0B2545] hover:bg-[#153A66] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Book Interior Consultation
              </button>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Interactive Selection Modal */}
      {selectedCategory && (
        <InteriorSelectionModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
          onOpenConsultation={onOpenConsultation}
        />
      )}
    </section>
  );
};
