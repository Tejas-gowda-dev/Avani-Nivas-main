export interface FinishOption {
  id: string;
  name: string;
  description: string;
  tag?: string;
}

export interface InteriorSubcategory {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  finishes: FinishOption[];
}

export interface InteriorCategory {
  id: string;
  title: string;
  subtitle: string;
  shortDesc: string;
  image: string;
  badge?: string;
  subcategories?: InteriorSubcategory[];
  finishes?: FinishOption[];
}

export const INTERIOR_CATEGORIES: InteriorCategory[] = [
  {
    id: 'foyer',
    title: 'Foyer',
    subtitle: 'Grand Entrance & Welcoming Foyer',
    shortDesc: 'Create an unforgettable first impression with architectural console units, mirror wall panelling, and integrated shoe storage.',
    image: 'https://homzinterio.in/wp-content/uploads/2026/07/Stylish-apartment-entryway-entrance-foyer-design-with-wooden-finishes-and-LED-lightin-webp.jpg',
    badge: 'Entrance Design',
    finishes: [
      {
        id: 'laminate',
        name: 'Laminate Finish',
        description: 'Durable, scratch-resistant matte, metallic & textured laminates suited for high-traffic entryways.',
        tag: 'Durable & Easy Care'
      },
      {
        id: 'veneer',
        name: 'Veneer Finish',
        description: 'Hand-selected natural timber veneers with clear protective polyurethane polish for timeless warmth.',
        tag: 'Natural Woodgrain'
      },
      {
        id: 'pu',
        name: 'PU Finish',
        description: 'Ultra-smooth polyurethane lacquer in high-gloss or satin finishes with seamless jointless edges.',
        tag: 'Seamless Luxury'
      }
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    subtitle: 'Modular Gourmet Kitchen & Pantry',
    shortDesc: 'Ergonomic kitchen layouts featuring seamless cabinetry, soft-close hardware, quartz worktops, and dedicated pantry zones.',
    image: 'https://img.magnific.com/free-photo/3d-rendering-modern-kitchen-counter-with-white-biege-design_105762-2228.jpg?semt=ais_hybrid&w=740&q=80',
    badge: 'Heart of the Home',
    finishes: [
      {
        id: 'acrylic-laminate',
        name: 'Acrylic & High-Gloss Laminate',
        description: 'Glass-like reflective sheen, waterproof edging, and high resistance to daily culinary stains.',
        tag: 'Moisture Resistant'
      },
      {
        id: 'pu-lacquer',
        name: 'High-Gloss PU Lacquer Finish',
        description: 'Polyurethane baked lacquer providing zero-edge joint seams and exquisite architectural elegance.',
        tag: 'Jointless Perfection'
      },
      {
        id: 'ceramic-profile',
        name: 'Ceramic & Glass Profile Finish',
        description: 'Scratch-proof ultra-slim ceramic surfaces with tinted glass shutters and aluminum profiles.',
        tag: 'Contemporary Elite'
      }
    ]
  },
  {
    id: 'pooja-mane',
    title: 'Pooja Mane (Pooja Room)',
    subtitle: 'Sanctuary of Devotion & Sacred Serenity',
    shortDesc: 'Bespoke sacred mandirs with intricate CNC Acrylic carving, brass accents, bell mountings, and dedicated ambient backlit panels.',
    image: 'https://i.pinimg.com/236x/71/2a/d9/712ad9e076a96c0234af1d39a9dc93a2.jpg',
    badge: 'Traditional & Sacred',
    finishes: [
      {
        id: 'teak-veneer',
        name: 'Teakwood Veneer Finish',
        description: 'Auspicious Burma grain with hand-rubbed melamine polish and warm wood warmth.',
        tag: 'Auspicious Timber'
      },
      {
        id: 'cnc-jali',
        name: 'CNC Intricate Acrylic Finish',
        description: 'Laser-cut architectural Acrylic screens with warm concealed LED backlighting and decorative motifs.',
        tag: 'Backlit Artistry'
      },
      {
        id: 'solid-brass',
        name: 'Solid Wood & Brass Accent Finish',
        description: 'Artisan carved solid timber door shutters adorned with solid brass inlays and acoustic bells.',
        tag: 'Artisan Heritage'
      }
    ]
  },
  {
    id: 'living-room',
    title: 'Living Room',
    subtitle: 'Sophisticated Entertaining & Lounge Living',
    shortDesc: 'Curated social living spaces with custom accent walls, fluted rafters, integrated cove lighting, and tailored furniture balance.',
    image: 'https://media.istockphoto.com/id/2093684615/photo/digitally-created-spacious-modern-living-room.jpg?s=612x612&w=0&k=20&c=nMASk6C34x5Y-hr6d0vIUuUBvBkwA98XiUJm1cOheK4=',
    badge: 'Signature Lounge',
    finishes: [
      {
        id: 'fluted-veneer',
        name: 'Veneer & Fluted Rafter Finish',
        description: 'Linear architectural wall rafters combined with premium smoked oak or walnut wood veneers.',
        tag: 'Architectural Depth'
      },
      {
        id: 'textured-pu',
        name: 'Textured PU/Duco Finish',
        description: 'Sophisticated matte polyurethane coatings with subtle stucco or velvet tactile textures.',
        tag: 'Designer Texture'
      },
      {
        id: 'marble-metal',
        name: ' Marble & Metal Trims',
        description: 'Full-slab Italian Statuario or Portoro marble feature walls with PVD titanium gold profiles.',
        tag: 'Opulent Masterpiece'
      }
    ]
  },
  {
    id: 'tv-unit',
    title: 'TV Unit',
    subtitle: 'Media Wall & Floating Entertainment Console',
    shortDesc: 'Contemporary entertainment hubs with concealed wire conduits, floating storage consoles, and backlit stone or acoustic backdrops.',
    image: 'https://i.pinimg.com/736x/20/b2/3c/20b23cffa929121391e51b9c3653fba0.jpg',
    badge: 'Entertainment Focal',
    finishes: [
      {
        id: 'charcoal-louvers',
        name: 'Charcoal Louvers & Laminate',
        description: 'Lightweight charcoal acoustic louvers with contrasting matte laminate floating ledges.',
        tag: 'Modern Linear'
      },
      {
        id: 'bookmatch-veneer',
        name: 'Bookmatch Veneer Finish',
        description: 'Symmetrically mirrored natural veneer leaves with hidden perimeter LED lighting channels.',
        tag: 'Organic Harmony'
      },
      {
        id: 'pu-quartz',
        name: 'High-Gloss PU & Floating Quartz',
        description: 'Seamless white or champagne PU wall backdrop complemented by a floating quartz stone deck.',
        tag: 'Floating Elegance'
      }
    ]
  },
  {
    id: 'wall-partition',
    title: 'Wall Partition',
    subtitle: 'Zoning Dividers & Architectural Room Screens',
    shortDesc: 'Gracefully demarcate living, dining, and foyer zones without blocking natural sunlight or spatial flow.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6v_woypnpOQq0LfeF15Bn8QDdhmcORtb5wjJ7lB-sxfOCCYgiLpBFgE&s=10',
    badge: 'Spatial Divider',
    finishes: [
      {
        id: 'metal-cnc',
        name: 'Metal CNC & Profile',
        description: 'Laser-cut electroplated mild steel or aluminum partitions with champagne gold satin finish.',
        tag: 'Contemporary Metal'
      },
      {
        id: 'wood-fluted-glass',
        name: 'Wooden Rafters & Fluted Glass',
        description: 'Solid teak or oak vertical battens housing frosted or fluted privacy glass inserts.',
        tag: 'Translucent Privacy'
      },
      {
        id: 'veneer-acoustic',
        name: 'Veneer & Acoustic Fabric Panels',
        description: 'Dual-sided sound-absorbing designer divider upholstered with luxury woven fabrics and veneer borders.',
        tag: 'Acoustic Comfort'
      }
    ]
  },
  {
    id: 'bedroom',
    title: 'Bedrooms',
    subtitle: 'Sanctuary of Rest, Wardrobes & Custom Headboards',
    shortDesc: 'Personal private sanctuaries featuring master wardrobes, bedroom entertainment units, and bespoke upholstered headboards.',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    badge: 'Master Suite',
    subcategories: [
      {
        id: 'wardrobe',
        name: 'Wardrobe',
        shortDesc: 'Floor-to-ceiling floor wardrobes with internal organizers, soft-close hardware, and ambient sensor lighting.',
        image: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
        finishes: [
          {
            id: 'matte-laminate',
            name: 'Anti-Fingerprint Matte Laminate',
            description: 'Ultra-matte velvety surface that repels smudges, engineered for everyday family durability.',
            tag: 'Low-Maintenance'
          },
          {
            id: 'tinted-glass',
            name: 'Tinted Glass & Aluminum Profile',
            description: 'Boutique walk-in closet look with bronze/grey toughened glass shutters and integrated vertical LED strips.',
            tag: 'Walk-In Boutique'
          },
          {
            id: 'natural-veneer-pu',
            name: 'Natural Veneer with PU Polish',
            description: 'Exotic architectural veneers finished with multiple coats of satin polyurethane sealant.',
            tag: 'Handcrafted Luxury'
          }
        ]
      },
      {
        id: 'bedroom-tv-unit',
        name: 'Bedroom TV Unit',
        shortDesc: 'Compact, streamlined bedroom media units that maximize walking space while maintaining clean cable management.',
        image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
        finishes: [
          {
            id: 'minimal-fluted',
            name: 'Minimalist Fluted Panel & Laminate',
            description: 'Slender vertical flutes with integrated floating drawer unit in moisture-resistant HDHMR.',
            tag: 'Space-Saving'
          },
          {
            id: 'exotic-veneer-backlit',
            name: 'Exotic Veneer & Concealed LED Backlit',
            description: 'Continuous vertical wood grain with soft perimeter halo illumination for calming night ambiance.',
            tag: 'Ambient Warmth'
          },
          {
            id: 'seamless-pu-quartz',
            name: 'Seamless PU Lacquer & Quartz Ledge',
            description: 'Monochromatic satin lacquer console topped with durable stain-proof slim quartz surface.',
            tag: 'Refined Modern'
          }
        ]
      },
      {
        id: 'headboard',
        name: 'Headboard',
        shortDesc: 'Statement bed backdrop featuring custom acoustic cushioning, wooden panelling, and integrated floating bedside ledges.',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
        finishes: [
          {
            id: 'acoustic-fabric',
            name: 'Acoustic Fabric & Velvet Upholstered',
            description: 'Plush high-density foam panels wrapped in stain-resistant Belgian velvet or woven linen.',
            tag: 'Acoustic Comfort'
          },
          {
            id: 'fluted-leatherette',
            name: 'Fluted Wooden Panel & Leatherette',
            description: 'Horizontal or vertical solid wooden battens paired with supple padded leatherette center cushions.',
            tag: 'Textured Harmony'
          },
          {
            id: 'veneer-floating',
            name: 'Veneer Wall Panel with Integrated Nightstands',
            description: 'Full-wall architectural wood cladding featuring cantilevered floating nightstands and brass reading sconces.',
            tag: 'Full-Wall Grandeur'
          }
        ]
      }
    ]
  }
];
