import { ServiceItem, ProjectItem, TestimonialItem, ProcessStep } from '../types';
import { PricingTier } from './pricing';

export interface InteriorAreaPreset {
  label: string;
  sqft: number;
  type: string;
}

export const INTERIOR_AREA_PRESETS: InteriorAreaPreset[] = [
  { label: '600 sq.ft', sqft: 600, type: 'Compact / 1BHK' },
  { label: '1,000 sq.ft', sqft: 1000, type: 'Standard / 2BHK' },
  { label: '1,200 sq.ft', sqft: 1200, type: 'Spacious / 2BHK' },
  { label: '1,500 sq.ft', sqft: 1500, type: 'Grand / 3BHK' },
  { label: '2,000 sq.ft', sqft: 2000, type: 'Duplex / Villa' },
  { label: '2,500 sq.ft', sqft: 2500, type: 'Luxury Villa' }
];

export const INTERIOR_SERVICES_INCLUDED = [
  'Puja Mane',
  'Foyer',
  'Kitchen',
  'TV Unit',
  'Bedroom',
  'W,R',
  'Partition',
  'Living Room',
  'utility'
];

export const INTERIOR_PROJECT_SUMMARY = [
  'Accessories are not included'
];

export const INTERIOR_PRICING_TIERS: PricingTier[] = [
  {
    id: 'cm-package',
    name: 'CM (Commercial Plywood)',
    badge: 'Commercial Plywood',
    subtitle: 'Standard interior woodwork with commercial plywood core & durable finish',
    ratePerSqFt: 1599,
    rateDisplay: '1599 / sq. ft.',
    pricingType: 'per_sqft',
    minArea: 500,
    image: 'https://www.centuryply.com/uploads/Plywood_Mobile_b412c7326c.jpg',
    highlightText: '1599 / sq. ft.',
    deliverables: [
      'Puja Mane',
      'Foyer',
      'Kitchen',
      'TV Unit',
      'Bedrooms',
      'W,R',
      'Partition',
      'Living Room',
      'utility',
      'Others'
    ],
    projectSummary: [
      'Accessories are not included'
    ]
  },
  {
    id: 'mr-package',
    name: 'MR (Moisture Resistant)',
    badge: 'Moisture Resistant',
    subtitle: 'Moisture-resistant interior woodwork ideal for humid zones and regular domestic use',
    ratePerSqFt: 1799,
    rateDisplay: '1799 / sq. ft.',
    pricingType: 'per_sqft',
    minArea: 500,
    image: 'https://cms-plywood.royaletouche.com/uploads/plywood_banner_img_987c9a2079.jpg',
    highlightText: '1799 / sq. ft.',
    deliverables: [
      'Puja Mane',
      'Foyer',
      'Kitchen',
      'TV Unit',
      'Bedrooms',
      'W,R',
      'Partition',
      'Living Room',
      'utility',
      'Others'
    ],
    projectSummary: [
      'Accessories are not included'
    ]
  },
  {
    id: 'bwr-package',
    name: 'BWR (Boiling Water Resistant)',
    badge: 'Boiling Water Resistant',
    subtitle: 'Boiling water-resistant plywood built for kitchen and heavy utility areas',
    ratePerSqFt: 1999,
    rateDisplay: '1999 / sq. ft.',
    pricingType: 'per_sqft',
    minArea: 500,
    image: 'https://img.magnific.com/premium-photo/wooden-table-with-water-drops-it-wooden-surface_1028899-1919.jpg?semt=ais_hybrid&w=740&q=80',
    highlightText: '1999 / sq. ft.',
    deliverables: [
      'Puja Mane',
      'Foyer',
      'Kitchen',
      'TV Unit',
      'Bedrooms',
      'W,R',
      'Partition',
      'Living Room',
      'utility',
      'Others'
    ],
    projectSummary: [
      'Accessories are not included'
    ]
  },
  {
    id: 'bwp-package',
    name: 'BWP (Boiling Water Proof)',
    badge: 'Boiling Water Proof',
    subtitle: '100% boiling water-proof marine grade plywood engineered for maximum longevity',
    ratePerSqFt: 2199,
    rateDisplay: '2199 / sq. ft.',
    pricingType: 'per_sqft',
    minArea: 500,
    popular: true,
    image: 'https://www.plyneer.com/cdn/shop/articles/48.png?v=1740461225&width=2048',
    highlightText: '2199 / sq. ft.',
    deliverables: [
      'Puja Mane',
      'Foyer',
      'Kitchen',
      'TV Unit',
      'Bedrooms',
      'W,R',
      'Partition',
      'Living Room',
      'utility',
      'Others'
    ],
    projectSummary: [
      'Accessories are not included'
    ]
  },
  {
    id: 'gurjan-package',
    name: 'Gurjan',
    badge: '100% Gurjan Core',
    subtitle: 'Premium imported Gurjan wood core plywood offering ultimate density and strength',
    ratePerSqFt: 2999,
    rateDisplay: '2999 / sq. ft.',
    pricingType: 'per_sqft',
    minArea: 500,
    image: 'https://khidkihomes.com/cdn/shop/articles/types-of-engineered-woods-for-home-interior.jpg?v=1761043164&width=1100',
    highlightText: '2999 / sq. ft.',
    deliverables: [
      'Puja Mane',
      'Foyer',
      'Kitchen',
      'TV Unit',
      'Bedrooms',
      'W,R',
      'Partition',
      'Living Room',
      'utility',
      'Others'
    ],
    projectSummary: [
      'Accessories are not included'
    ]
  },
  {
    id: 'custom-package',
    name: 'CUSTOMIZED CLIENT PACKAGE',
    badge: '100% Client Tailored',
    subtitle: 'Fully customized interior package crafted to your exact blueprint & budget',
    ratePerSqFt: 0,
    rateDisplay: 'Customized as per Client',
    pricingType: 'custom',
    isCustom: true,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    highlightText: 'Custom Quote',
    deliverables: [
      'Puja Mane',
      'Foyer',
      'Kitchen',
      'TV Unit',
      'Bedrooms',
      'W,R',
      'Partition',
      'Living Room',
      'utility',
      'Others'
    ],
    projectSummary: [
      'Accessories are not included'
    ]
  }
];

export const INTERIOR_SERVICES: ServiceItem[] = [
  {
    id: 'pooja-mandir',
    slug: 'pooja-mandir',
    title: 'Pooja Mandir',
    shortDesc: 'Sacred prayer sanctuaries crafted with auspicious teakwood veneers, CNC Acrylic and warm lighting.',
    fullDesc: 'Honor tradition with handcrafted pooja rooms. We incorporate auspicious Vastu alignments, intricate laser-cut CNC Acrylic, brass bells, ambient backlit panels, and dedicated storage for sacred rituals.',
    iconName: 'Sparkles',
    image: 'https://img.staticmb.com/mbimages/interiorDesignerCMS/decorPartner/4061/projectImage/20251125042229poojaidcdip69.jpg.webp',
    highlights: [
      'Vastu-compliant East/North-East orientation',
      'Teakwood timber frames & traditional brass bell mountings',
      'Intricate backlit Om/Gayatri/floral CNC Acrylic panels',
      'Deep pull-out diya drawers with heat-resistant stone tops'
    ],
    deliverables: [
      'Personalized sacred altar design & 3D visualization',
      'Fire-safe granite/quartz counter for oil lamps',
      
      
    ],
    idealFor: 'Families seeking an auspicious, peaceful sanctuary that blends heritage with modern aesthetics.'
  },
  {
    id: 'modular-kitchens',
    slug: 'modular-kitchens',
    title: 'Modular Kitchens ',
    shortDesc: 'Ergonomic, moisture-proof culinary spaces with German hardware and quartz countertops.',
    fullDesc: 'Transform cooking into a celebration with our custom modular kitchens. Engineered using 100% BWP boiling waterproof marine plywood, high-gloss acrylic or PU finishes, and Hafele/Hettich soft-close hardware.',
    iconName: 'UtensilsCrossed',
    image: 'https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/di-2026-1769081758-Ayx2Q/jas-1784534272-HKwmV/ki-1785991945-zVBcB/ki-7-1785991974-kaVuA.png',
    highlights: [
      '100% BWP Marine Ply with zero-edge banding',
      'Tandem box soft-close drawers & pantry pull-outs',
      'Quartz, granite & nano-white stain-proof countertops',
      
    ],
    deliverables: [
      '3D photo-realistic renders & ergonomic work triangle design',
      'Factory precision CNC cutting & On site edge-banded cabinetry',
      'Under-cabinet sensor LED illumination',
      'Appliance, hob & chimney integration testing'
    ],
    idealFor: 'Families wanting a sleek, smoke-free, durable culinary powerhouse designed for Indian cooking.'
  },
  {
    id: 'wardrobes-walkins',
    slug: 'wardrobes-walkins',
    title: 'Wardrobes & Walk-In Closets',
    shortDesc: 'Floor-to-ceiling sliding & hinged wardrobes with smart internal organizers and tinted glass.',
    fullDesc: 'Maximize vertical space with bespoke floor-to-ceiling wardrobes. Choose from sliding lacquered glass shutters, textured laminates, or natural veneers with integrated vanity mirrors and sensor lighting.',
    iconName: 'LayoutGrid',
    image: 'https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/ond-2024-1727950725-vfT46/wardrobe-1728925029-SF5tE/wr-o1-1729590320-wmfXM.jpg',
    highlights: [
      'Sliding profile glass & soft-close hinged doors',
      'Dedicated pull-out trouser racks, watch organizers & jewelry trays',
      'Warm automatic sensor LED lighting strips',
      
    ],
    deliverables: [
      'Custom internal compartment layout suited to your wardrobe needs',
      'Heavy-duty aluminum profile frame and lacquered glass shutters',
      'Full-height mirror and vanity dressing station',
      'Smooth whisper-quiet sliding track system'
    ],
    idealFor: 'Homeowners looking for clutter-free master bedrooms and high-capacity storage.'
  },
  {
    id: 'living-entertainment',
    slug: 'living-entertainment',
    title: 'Living & Entertainment Units',
    shortDesc: 'Architectural TV consoles, acoustic fluted wall louvers, and display shelving.',
    fullDesc: 'The focal point of family gatherings. We design striking TV feature walls incorporating fluted charcoal louvers, Italian stone veneers, hidden wire conduits, and floating audio-visual credenzas.',
    iconName: 'Maximize',
    image: 'https://viyomlifestyles.com/cdn/shop/files/Pignatvunit.png?v=1785568196&width=3840',
    highlights: [
      'Concealed wire raceways for 100% cable-free aesthetics',
      'Backlit stone veneer or charcoal rafter accent paneling',
      'Floating low-profile credenzas with soft-push latches',
      'Integrated home-theater surround sound housing'
    ],
    deliverables: [
      'CAD layout for TV screen, soundbar & game console sizing',
      'Wall load-bearing verification and reinforced anchoring',
      'Warm ambient LED perimeter backlighting',
      'Custom showcase display cubbies for souvenirs'
    ],
    idealFor: 'Entertaining guests with a high-end luxury lounge experience right at home.'
  },
  
  {
    id: 'false-ceiling-lighting',
    slug: 'false-ceiling-lighting',
    title: 'False Ceiling & Architectural Lighting',
    shortDesc: 'Multi-tiered gypsum false ceilings with magnetic track lights, cove lighting, and warm ambience.',
    fullDesc: 'Lighting defines emotion. We craft sleek Saint-Gobain Gyproc false ceilings paired with warm indirect cove lighting, magnetic track spotlights, and mood-setting automation to elevate ceiling height and elegance.',
    iconName: 'Zap',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReB8FJQ7jUCCz0yxagaG5g7fz7FgQIb4G-41tHdqSv8x69xLQRQSt06Wbl&s=10',
    highlights: [
      'Saint-Gobain Gyproc moisture-resistant boards',
      'Concealed warm 3000K LED strip cove lighting',
      'Magnetic low-voltage track spotlights for artwork focus',
      'Acoustic sound dampening & thermal heat insulation'
    ],
    deliverables: [
      'Reflected Ceiling Plan (RCP) with electrical switch mapping',
      'Anti-crack joint tape and level-4 smooth skim coating',
      'Premium Paints Royale matte ceiling finish',
      'Driver testing and uniform lumen distribution'
    ],
    idealFor: 'Rooms that deserve dramatic volume, warm hospitality, and contemporary ceiling architecture.'
  },
  {
    id: 'foyer-entryway',
    slug: 'foyer-entryway',
    title: 'Foyer & Entryway Design',
    shortDesc: 'Statement entrances featuring console tables, full-height mirrors, and ventilated shoe storage.',
    fullDesc: 'Create an unforgettable first impression the moment the door opens. Our foyer solutions combine ventilated shoe cabinets, key drop ledges, full-length dressing mirrors, and architectural partition screens.',
    iconName: 'Wrench',
    image: 'https://homebliss.in/wp-content/uploads/2024/03/Decoding-Your-Home-Understanding-The-Difference-Between-A-Foyer-And-An-Entryway.jpg',
    highlights: [
      'Ventilated shoe racks with odor-neutralizing louvers',
      'Full-height Saint-Gobain vanity mirrors with backlight',
      'Decorative partition screens separating foyer from living hall',
      'Integrated seating bench for wearing footwear comfortably'
    ],
    deliverables: [
      
      'Upholstered bench seating integration',
     
      'Durable scratch-proof surface finishes'
    ],
    idealFor: 'Creating a warm, organized, and majestic entrance to your home.'
  },
  {
    id: 'dining-bar',
    slug: 'dining-bar',
    title: 'Dining Suites & Bar Units',
    shortDesc: 'Custom crockery displays, suspended stemware racks, and bespoke dining accents.',
    fullDesc: 'Elevate intimate dinners and lively celebrations with custom-built crockery units featuring glass-tinted display cabinets, wine storage racks, and matching architectural wall paneling.',
    iconName: 'Droplets',
    image: 'https://images.livspace-cdn.com/w:3840/plain/https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/di-2026-1769081758-Ayx2Q/jas-1784534272-HKwmV/dining-room-1785936552-DObLO/dr-16-1789294734-lIwLw.png',
    highlights: [
      'Fluted glass shutters with profile aluminum frames',
      'Dedicated wine bottle racks & hanging stemware glass holders',
      'Buffet counter surface for hosting food warmers during parties',
      'Warm ambient interior lighting for crystal displays'
    ],
    deliverables: [
      'Custom crockery unit fabrication & glass installation',
      'Toughened glass shelves with polished pencil edges',
      'Electrical connection for bar fridge and coffee machine',
      'Soft-close pull-out cutlery organizers'
    ],
    idealFor: 'Entertaining family and friends with an elegant, functional dining space.'
  },
  {
    id: 'bathroom-vanities',
    slug: 'bathroom-vanities',
    title: 'Bathroom Vanities & Partitions',
    shortDesc: 'Waterproof under-counter vanities, LED defogger mirrors, and toughened glass shower cubicles.',
    fullDesc: 'Turn ordinary bathrooms into serene spa retreats. We build 100% boiling waterproof under-counter vanities, Saint-Gobain LED backlit mirrors, and frameless toughened glass shower enclosures.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      '100% Waterproof WPC / BWP marine-grade vanity carcasses',
      '10mm Saint-Gobain toughened glass shower partitions',
      'Smart LED mirrors with touch sensors and defogging pads',
      'Concealed laundry basket and toiletry storage'
    ],
    deliverables: [
      'Precision laser templating for glass cubicles',
      'Anti-corrosion SS 304 hardware & magnetic door seals',
      'Under-sink plumbing panels',
      'High-grade sanitaryware sealant and silicone protection'
    ],
    idealFor: 'Homeowners wanting clean dry-and-wet zones and effortless luxury every morning.'
  }
];

export const INTERIOR_PROJECTS: ProjectItem[] = [
  {
    id: 'nivas-penthouse-interiors',
    slug: 'nivas-penthouse-interiors',
    title: 'Nagarbhavi 3BHK Penthouse',
    category: 'Interiors',
    location: 'Nagarbhavi, Bengaluru',
    scope: 'Complete Turnkey 3BHK Luxury Interior Architecture',
    area: '1,850 sq.ft',
    completionYear: '2025',
    pricing: '₹14.5 Lakhs (Turnkey Interiors)',
    timeline: '60 Days Handover',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A breathtaking 3BHK penthouse renovation featuring high-gloss PU lacquered kitchen, Italian stone TV panelling, bespoke pooja room, and customized walk-in wardrobes.',
    features: [
      'Full BWP Marine Plywood construction with 10-year warranty',
      'High-gloss PU kitchen with nano-white quartz countertop',
      'Sliding lacquered glass wardrobes with sensor LED strips',
      'CNC laser-cut pooja unit with back-lit onyx stone',
      'Delivered in 60 days with zero mess on-site'
    ],
    isFeatured: true
  },
  {
    id: 'mallathahalli-duplex-interiors',
    slug: 'mallathahalli-duplex-interiors',
    title: 'Mallathahalli Villa Contemporary Interiors',
    category: 'Interiors',
    location: 'Mallathahalli, Bengaluru',
    scope: 'G+1 Villa Interior Woodwork & False Ceiling',
    area: '2,400 sq.ft',
    completionYear: '2025',
    pricing: '₹18.8 Lakhs (Full Home Interiors)',
    timeline: '55 Days Handover',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'Warm wooden aesthetic combining natural teak veneers, magnetic track lighting, breakfast bar counter, and expansive storage across 4 bedrooms.',
    features: [
      'Natural Burma teak veneers with polyurethane hand-rubbed polish',
      'Double-height living room acoustic louver panelling',
      'Breakfast island counter with concealed electrical pop-ups',
      'Hafele soft-close hardware throughout'
    ],
    isFeatured: true
  },
  {
    id: 'rrnagar-modern-interiors',
    slug: 'rrnagar-modern-interiors',
    title: 'RR Nagar 2BHK Scandinavian Minimalist',
    category: 'Interiors',
    location: 'Rajarajeshwari Nagar, Bengaluru',
    scope: '2BHK Apartment Complete Modular Interior',
    area: '1,150 sq.ft',
    completionYear: '2024',
    pricing: '₹6.2 Lakhs (Turnkey Interiors)',
    timeline: '48 Days Handover',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'
    ],
    summary: 'A light-filled Scandinavian inspired home designed for effortless modern living, featuring light oak laminates, fluted glass crockery, and space-saving wardrobes.',
    features: [
      'Space-maximizing modular layout with concealed storage',
      'Light oak & matte sage green color palette',
      'Full false ceiling with 3-step color temperature switching',
      'Fluted glass bar cabinet'
    ],
    isFeatured: true
  }
];

export const INTERIOR_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'int-test-1',
    clientName: 'Sanjay & Deepa Rao',
    location: 'Nagarbhavi, Bengaluru',
    projectType: '3BHK Penthouse Interiors',
    quote: 'Avani Nivas delivered our modular kitchen and wardrobes  The factory finish is so smooth with carpentry our apartment. Truly premium quality.',
    rating: 5
  },
  {
    id: 'int-test-2',
    clientName: 'Dr. Ramesh Kumar',
    location: 'Mallathahalli, Bengaluru',
    projectType: 'Villa Complete Interiors',
    quote: 'The teakwood pooja room and the living room rafter TV paneling came out better than the 3D renders. Gowdru Realcom’s craftsmanship and transparent pricing gave us complete peace of mind.',
    rating: 5
  },
  {
    id: 'int-test-3',
    clientName: 'Priya & Vignesh Iyer',
    location: 'RR Nagar, Bengaluru',
    projectType: '2BHK Modular Interior',
    quote: 'From Hafele soft-close drawers to the acrylic kitchen finish, everything feels luxurious and robust. Their design team listened to every small detail we wanted.',
    rating: 5
  }
];

export const INTERIOR_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Concept & 3D Spatial Visualization',
    subtitle: 'Space Analysis & Photorealistic Renders',
    description: 'We measure your residence with digital laser meters, understand your lifestyle and storage requirements, and present 3D photorealistic walkthroughs along with material touch-and-feel samples.',
    deliverables: [
      'Detailed site laser measurement',
      'Photorealistic 3D room-by-room renders',
      'Comprehensive material specification & itemized quote',
      'Color moodboards & finish selection'
    ]
  },
  {
    number: '02',
    title: 'Precision Factory Fabrication',
    subtitle: 'Machinery & Dust-Free Manufacturing',
    description: 'Your cabinetry, wardrobes, and modular units are precision-cut and edge-banded in our advanced factory using automated German machinery—ensuring zero carpenter mess, pristine edges, and millimeter accuracy.',
    deliverables: [
      '100% BWP boiling waterproof plywood inspection',
      'Automated CNC cutting & PUR zero-joint edge banding',
     
      'Safe bubble-wrapped packing and insured transit to site'
    ]
  },
  {
    number: '03',
    title: 'Seamless 45-60 Day On-Site Installation',
    subtitle: 'Clean Assembly, Testing & Handover',
    description: 'Our factory-trained technicians assemble the modules quietly and quickly on-site, integrate lighting, wire raceways, and sanitaryware, followed by formal handover with a 10-year warranty certificate.',
    deliverables: [
      'Quick, modular assembly within 15-20 days on-site',
      'Electrical, LED & appliance fit-out checks',
      
      '10-Year Warranty Card & Lifetime Support Guide'
    ]
  }
];

export const INTERIOR_PARTNERS = [
  { name: 'Häfele', role: 'Architectural Hardware & Hinges', origin: 'Germany' },
  { name: 'Hettich', role: 'Precision Soft-Close Drawers', origin: 'Germany' },
  { name: 'Saint-Gobain', role: 'Clear & Tinted Profile Glass', origin: 'France' },
  { name: 'Greenply', role: 'BWP Boiling Waterproof Marine Ply', origin: 'India' },
  { name: 'CenturyPly', role: 'Club Prime Termite-Proof Plywood', origin: 'India' },
  { name: 'Asian Paints', role: 'Royale Luxury PU & Emulsions', origin: 'India' },
  { name: 'KalingaStone', role: 'Engineered Quartz & Marble', origin: 'India' },
  { name: 'Merino Laminates', role: 'Ultra-Matte & Gloss Surfaces', origin: 'India' }
];
