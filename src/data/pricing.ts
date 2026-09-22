export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  subtitle: string;
  ratePerSqFt: number; // e.g. 2400 (0 for custom)
  rateDisplay: string; // "₹2,400 / sq.ft" or "Custom as per Client"
  pricingType: 'per_sqft' | 'package' | 'custom';
  minArea?: number;
  highlightText: string;
  image: string; // Curated architectural / pricing image
  deliverables: string[]; // INCLUDED SERVICES
  projectSummary: string[]; // Project summary points / material scope
  popular?: boolean;
  isCustom?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic-package',
    name: 'ESSENTIAL PACKAGE',
    badge: 'Essential Build',
    subtitle: 'Standard residential construction with high-strength RCC foundation & durable finishes',
    ratePerSqFt: 1998,
    rateDisplay: '₹1,998 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 800,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
    highlightText: '',
    deliverables: [
      'Soil Testing',
      'Plot Survey',
      'Review of the Clients Provided Floor Plan',
      'Framing Layout Design',
      'Structural Drawings',
      'Building Bylaws Submission (BBS)',
      'Construction Assignment and Agreement',
      '3D Elevations',
      'Final Contract Signing '
    ],
    projectSummary: [
      'Total Project Value',
      'Booking Amount Paid',
      'Remaning Booking Amount (5% of Total Project Value',
  
    ]
  },
  {
    id: 'premium-package',
  name: 'CLASSIC PACKAGE',
    badge: 'Quality Turnkey',
    subtitle: 'Elevated turnkey construction with premium brand fittings, teak accents & 3D elevation',
    ratePerSqFt: 2150,
    rateDisplay: '₹2,150 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 1000,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    highlightText: '',
   deliverables: [
      'Soil Testing',
      'Plot Survey',
      'Review of the Clients Provided Floor Plan',
      'Framing Layout Design',
      'Structural Drawings',
      'Building Bylaws Submission (BBS)',
      'Construction Assignment and Agreement',
      '3D Elevations',
      'Final Contract Signing '
    ],
    projectSummary: [
      'Total Project Value',
      'Booking Amount Paid',
      'Remaning Booking Amount (5% of Total Project Value',
  
    ]
  },
  {
    id: 'royal-package',
    name: 'PREMIUM PACKAGE',
    badge: 'Most Popular & Flagship',
    subtitle: 'Complete turnkey construction with full modular kitchen & designer bedroom wardrobes',
    ratePerSqFt: 2400,
    rateDisplay: '₹2,400 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 1000,
    popular: true,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    highlightText: '',
   deliverables: [
      'Soil Testing',
      'Plot Survey',
      'Review of the Clients Provided Floor Plan',
      'Framing Layout Design',
      'Structural Drawings',
      'Building Bylaws Submission (BBS)',
      'Construction Assignment and Agreement',
      '3D Elevations',
      'Final Contract Signing '
    ],
    projectSummary: [
      'Total Project Value',
      'Booking Amount Paid',
      'Remaning Booking Amount (5% of Total Project Value',
  
    ]
  },
  {
    id: 'luxury-package',
    name: 'ROYAL PACKAGE',
    badge: 'Ultra-Luxury Custom',
    subtitle: 'Architectural living with Italian marble, custom carpentry & smart home automation',
    ratePerSqFt: 2950,
    rateDisplay: '₹2,950 / sq.ft',
    pricingType: 'per_sqft',
    minArea: 1500,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
    highlightText: '',
   deliverables: [
      'Soil Testing',
      'Plot Survey',
      'Review of the Clients Provided Floor Plan',
      'Framing Layout Design',
      'Structural Drawings',
      'Building Bylaws Submission (BBS)',
      'Construction Assignment and Agreement',
      '3D Elevations',
      'Final Contract Signing '
    ],
    projectSummary: [
      'Total Project Value',
      'Booking Amount Paid',
      'Remaning Booking Amount (5% of Total Project Value',
  
    ]
  },
  {
    id: 'custom-package',
    name: 'CUSTOMIZED CLIENT PACKAGE',
    badge: '100% Client Tailored',
    subtitle: 'Fully customized civil construction & interior package crafted to your exact blueprint & budget',
    ratePerSqFt: 0,
    rateDisplay: 'Customized as per Client',
    pricingType: 'custom',
    isCustom: true,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    highlightText: '',
   deliverables: [
      'Soil Testing',
      'Plot Survey',
      'Review of the Clients Provided Floor Plan',
      'Framing Layout Design',
      'Structural Drawings',
      'Building Bylaws Submission (BBS)',
      'Construction Assignment and Agreement',
      '3D Elevations',
      'Final Contract Signing '
    ],
    projectSummary: [
      'Total Project Value',
      'Booking Amount Paid',
      'Remaning Booking Amount (5% of Total Project Value',
  
    ]
  }
];

export interface DimensionPreset {
  label: string;
  dimension: string;
  sqft: number;
  popularFor: string;
}

export const DIMENSION_PRESETS: DimensionPreset[] = [
  { label: '20 × 30 Standard', dimension: '20ft × 30ft', sqft: 600, popularFor: '2BHK / 3BHK Duplex' },
  { label: '30 × 40 Spacious', dimension: '30ft × 40ft', sqft: 1200, popularFor: '3BHK / 4BHK Duplex with Garden' },
  { label: '60 × 40 Premium', dimension: '60ft × 40ft', sqft: 2400, popularFor: 'Luxury Villa / G+2 House' },
  // { label: '50 × 80 Estate', dimension: '50ft × 80ft', sqft: 4000, popularFor: 'Bespoke Mansion / Multi-unit' }
];

export const SERVICE_OPTIONS = [
  { id: 'basic-package', label: 'BASIC PACKAGE (₹1,998 / sq.ft)', rate: 1998, type: 'per_sqft' },
  { id: 'premium-package', label: 'PREMIUM PACKAGE (₹2,150 / sq.ft)', rate: 2211, type: 'per_sqft' },
  { id: 'royal-package', label: 'ROYAL PACKAGE (₹2,400 / sq.ft)', rate: 2555, type: 'per_sqft' },
  { id: 'luxury-package', label: 'LUXURY PACKAGE (₹2,950 / sq.ft)', rate: 2950, type: 'per_sqft' },
  { id: 'custom-package', label: 'CUSTOMIZED CLIENT PACKAGE (Custom Quote)', rate: 0, type: 'custom' }
];

export const LOCATION_OPTIONS = [
  'Bengaluru – Mallathahalli / RR Nagar / West',
  'Bengaluru – North / Hebbal / Yelahanka',
  'Bengaluru – South / Jayanagar / JP Nagar',
  'Bengaluru – East / Whitefield / Sarjapur',
  'Tumkur (Prime Hub)',
  'Mysuru (Regional Hub)',
  'Hassan (Regional Hub)',
  'Balangir, Orissa',
  'Other Orissa Location',
  'Chhattisgarh Region',
  'Other Karnataka Location'
];

export function formatIndianCurrency(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `₹${crores.toFixed(2)} Crores`;
  }
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹${lakhs.toFixed(2)} Lakhs`;
  }
  return `₹${amount.toLocaleString('en-IN')}`;
}
