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
  "/IITM.png",
  "/pesmandya.svg",
  "/acu.webp",
  "/NaanMudhalvan.webp",
  "/jssacademy.webp",
  "/Guru_Nanak_Dev_Engineering_College,_Bidar.webp",
  "/Govt-Tool-Room.webp",
  "/Ramanagara-Govt.webp",
  "/GsssMysuru.webp",
  "/DayanadaSagar.webp",
  "/Jawaharlal-Nehru-Technological-University.webp",
  "/GovermmentArts.webp",
  "/VIVEKANANDHACOLLEGE FORWOMEN.webp",
  "/DonBosc.webp",
  "/Eriyur.webp",
  "/SriKrishna.webp ",
  "/ssmlogo.webp",
  "/Excel.webp",
  "/Sri-venkateshwaraa.webp",
  "/Gonzaga.webp",
  "/Thangavel.webp",
  "/Jairam.webp",
  "/KUMARAGURU.webp",
  "/ARIGNAR.webp",
  "/UDHAGAMANDALAM.webp",
  "/Sathyamangalam.webp",
  "/MGR.webp",
  "/SRIrAMALINGA.webp",
  "/nyruth.webp",
  "/jayam.webp",
  "/BHARATRATNA.webp",
  "/sss.webp",
  "/dhivya.webp",
  "/THONDAMUTHUR.webp",
  "/arakkomam.webp",
  "/krishna.webp",
  "/cambride.webp",
  "/basaveshwar.webp",
  "/KLE.webp",
  "/KLS.webp",
  "/Sir-M.webp",
  "/RV.webp",
  "/BIOT.webp",
  "/SGBIOT.webp",
  "/BMS.webp",
  "/vvce.webp",
  "/SCCOA.webp",
  "/ERK.webp",
  "/TUemblem.webp",
  "/St-Joseph.webp",
  "/kcas.webp",
  "/sunramaniyam.webp",
  "/VVIT.webp",
  "/MJCOA.webp",
  "/Dr-PG.webp",
];

// Verified 40 Industry Construction & Architectural Partner Brands
// interface PartnerBrand {
//   id: string;
//   name: string;
//   category: string;
//   tag: string;
//   brandColor: string;
//   accentColor: string;
// }

// const PARTNER_BRANDS: PartnerBrand[] = [
//   { id: '1', name: 'Tata Tiscon', category: 'Structural Steel', tag: 'Fe 550D TMT', brandColor: '#004B87', accentColor: '#E8F1F8' },
//   { id: '2', name: 'UltraTech Cement', category: 'Cement & RMC', tag: 'Grade 53 OPC', brandColor: '#D97706', accentColor: '#FEF3C7' },
//   { id: '3', name: 'Saint-Gobain', category: 'Architectural Glass', tag: 'Double Glazing', brandColor: '#0369A1', accentColor: '#E0F2FE' },
//   { id: '4', name: 'Häfele', category: 'Precision Hardware', tag: 'German Systems', brandColor: '#DC2626', accentColor: '#FEE2E2' },
//   { id: '5', name: 'Asian Paints', category: 'Luxury Finishes', tag: 'Royale & Ultima', brandColor: '#991B1B', accentColor: '#FFE4E6' },
//   { id: '6', name: 'Kajaria', category: 'Vitrified Surfaces', tag: 'Large Porcelain', brandColor: '#B91C1C', accentColor: '#FEE2E2' },
//   { id: '7', name: 'Jaquar Artize', category: 'Luxury Bathware', tag: 'Forged Brass', brandColor: '#0F172A', accentColor: '#F1F5F9' },
//   { id: '8', name: 'Schneider Electric', category: 'Power & IoT', tag: 'European MCBs', brandColor: '#059669', accentColor: '#D1FAE5' },
//   { id: '9', name: 'Dr. Fixit', category: 'Waterproofing', tag: 'Silicone Polymers', brandColor: '#CA8A04', accentColor: '#FEF9C3' },
//   { id: '10', name: 'Astral Pipes', category: 'Plumbing Networks', tag: 'CPVC Pro', brandColor: '#0284C7', accentColor: '#E0F2FE' },
//   { id: '11', name: 'Polycab', category: 'Concealed Wiring', tag: 'FRLS Copper', brandColor: '#DC2626', accentColor: '#FEE2E2' },
//   { id: '12', name: 'CenturyPly', category: 'Engineered Wood', tag: 'Club Prime BWP', brandColor: '#15803D', accentColor: '#DCFCE7' },
//   { id: '13', name: 'Greenlam', category: 'Interior Laminates', tag: 'Anti-Bacterial', brandColor: '#047857', accentColor: '#D1FAE5' },
//   { id: '14', name: 'Blum', category: 'Cabinet Hardware', tag: 'Aventos Systems', brandColor: '#EA580C', accentColor: '#FFEDD5' },
//   { id: '15', name: 'Kohler', category: 'Sanitary & Wellness', tag: 'Air Showers', brandColor: '#18181B', accentColor: '#F4F4F5' },
//   { id: '16', name: 'Godrej', category: 'Smart Security', tag: 'Biometric Access', brandColor: '#831843', accentColor: '#FCE7F3' },
//   { id: '17', name: 'Fenesta', category: 'UPVC Windows', tag: 'Soundproof Double', brandColor: '#166534', accentColor: '#DCFCE7' },
//   { id: '18', name: 'Philips Signify', category: 'Smart Lighting', tag: 'CRI 90+ LEDs', brandColor: '#1D4ED8', accentColor: '#DBEAFE' },
//   { id: '19', name: 'Legrand', category: 'Switches & Plates', tag: 'Arteor IoT', brandColor: '#B91C1C', accentColor: '#FEE2E2' },
//   { id: '20', name: 'Supreme', category: 'Drainage Systems', tag: 'SWR Rubber Ring', brandColor: '#DC2626', accentColor: '#FEE2E2' },
//   { id: '21', name: 'Fosroc Chemicals', category: 'Admixtures', tag: 'Structural Grouts', brandColor: '#0369A1', accentColor: '#E0F2FE' },
//   { id: '22', name: 'Simpolo', category: 'Ceramic Slabs', tag: 'Seamless Stone', brandColor: '#374151', accentColor: '#F3F4F6' },
//   { id: '23', name: 'Havells', category: 'Electrical & Fans', tag: 'Premium IoT', brandColor: '#DC2626', accentColor: '#FEE2E2' },
//   { id: '24', name: 'Grohe', category: 'Luxury Fittings', tag: 'Thermostatics', brandColor: '#0284C7', accentColor: '#E0F2FE' },
//   { id: '25', name: 'Bosch', category: 'Built-in Kitchen', tag: 'Series 8 Ovens', brandColor: '#B91C1C', accentColor: '#FEE2E2' },
//   { id: '26', name: 'Franke', category: 'Granite Sinks', tag: 'Fragranite Tech', brandColor: '#BE123C', accentColor: '#FFE4E6' },
//   { id: '27', name: 'Siemens Home', category: 'Home Appliances', tag: 'iQ700 Induction', brandColor: '#0F766E', accentColor: '#CCFBF1' },
//   { id: '28', name: 'Somany', category: 'Ceramic Tiles', tag: 'Slip Shield', brandColor: '#991B1B', accentColor: '#FFE4E6' },
//   { id: '29', name: 'Nitco Tiles', category: 'Natural Marble', tag: 'Precision Cut', brandColor: '#1E3A8A', accentColor: '#DBEAFE' },
//   { id: '30', name: 'Cera', category: 'Sanitaryware', tag: 'Rimless Italian', brandColor: '#BE123C', accentColor: '#FFE4E6' },
//   { id: '31', name: 'Dorset', category: 'Locks & Hinges', tag: 'Architectural', brandColor: '#1E293B', accentColor: '#F1F5F9' },
//   { id: '32', name: 'Ebco', category: 'Furniture Fittings', tag: 'Pro Runners', brandColor: '#0369A1', accentColor: '#E0F2FE' },
//   { id: '33', name: 'Dormakaba', category: 'Glass Hardware', tag: 'Automatic Entry', brandColor: '#1E293B', accentColor: '#F1F5F9' },
//   { id: '34', name: 'Supreme Solar', category: 'Solar Heating', tag: 'Glass Lined ETC', brandColor: '#EA580C', accentColor: '#FFEDD5' },
//   { id: '35', name: 'Anchor Panasonic', category: 'Modular Devices', tag: 'Roma Switches', brandColor: '#1D4ED8', accentColor: '#DBEAFE' },
//   { id: '36', name: 'Finolex', category: 'Underground Power', tag: 'Armoured Cables', brandColor: '#0284C7', accentColor: '#E0F2FE' },
//   { id: '37', name: 'Nerolac', category: 'Waterproof Paints', tag: 'Excel Mica Marble', brandColor: '#B91C1C', accentColor: '#FEE2E2' },
//   { id: '38', name: 'Dulux', category: 'Exterior Polymers', tag: 'Weathershield', brandColor: '#0284C7', accentColor: '#E0F2FE' },
//   { id: '39', name: 'Berger Paints', category: 'Interior Emulsion', tag: 'Silk Glamor', brandColor: '#1E40AF', accentColor: '#DBEAFE' },
//   { id: '40', name: 'Faber Hoods', category: 'Kitchen Chimneys', tag: 'Auto-Clean Baffle', brandColor: '#EA580C', accentColor: '#FFEDD5' },
// ];

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
                // <div
                //   key={`${brand.id}-${i}`}
                //   className="h-16 mx-4 px-5 bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:border-[#0078D4] hover:shadow-xs inline-flex items-center gap-3.5 select-none transition-all duration-200 shrink-0 cursor-default"
                // >
                //   {/* Brand Monogram Badge */}
                //   <div
                //     className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 tracking-tight shadow-2xs"
                //     style={{ backgroundColor: brand.accentColor, color: brand.brandColor }}
                //   >
                //     {brand.name
                //       .split(' ')
                //       .map((word) => word[0])
                //       .slice(0, 2)
                //       .join('')}
                //   </div>

                //   {/* Brand Details */}
                //   <div className="text-left">
                //     <div className="text-sm font-bold text-gray-900 leading-tight">
                //       {brand.name}
                //     </div>
                //     <div className="flex items-center gap-1.5 mt-0.5">
                //       <span className="text-[11px] text-gray-600 font-medium">
                //         {brand.category}
                //       </span>
                //       <span className="text-[10px] text-gray-400">•</span>
                //       <span className="text-[10px] font-semibold text-[#0078D4]">
                //         {brand.tag}
                //       </span>
                //     </div>
                //   </div>
                // </div>

                <img key={i} src={brand} alt={`logo-${i}`} className="h-16 w-auto mx-8 inline-block" />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
