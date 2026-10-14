import React from 'react';

// Optional referral array provided by user for external or college logo integration
export const collegeLogos = [
  "/tn-skill.png",
  "/IITK.png",
  "/SRMAP.png",
  "/NITS.png",
  "/bitslaw.png",
  "/iitm_logo.png",
  "/Jaipuria.png",
  "/IITGoa.png",
  "/Ashutosh.png",
 

];


interface PartnersSliderSectionProps {
  onOpenConsultation?: () => void;
}

export const PartnersSliderSection: React.FC<PartnersSliderSectionProps> = () => {
  return (
    <section className="py-10 bg-[#f4fcff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted by 40+ Industry-Leading Partners across India
          </h2>
          <p className="text-gray-700 max-w-7xl mx-auto font-normal">
            Avani Nivasa collaborates with certified structural, civil, electrical, plumbing, and interior manufacturers—guaranteeing 100% genuine specifications, milestone-tested compliance, and lifetime build resilience for every turnkey residence.
          </p>
        </div>

        {/* Continuous Logo Slider Track */}
        <div className="overflow-hidden relative">
          <div className="logo-slider group">
            <div className="flex w-max whitespace-nowrap animate-[scroll_150s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[...collegeLogos, ...collegeLogos].map((brand, i) => (
                
              

                <img key={i} src={brand} alt={`logo-${i}`} className="h-16 w-auto mx-8 inline-block" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
