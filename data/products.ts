export type Product = {
  slug: string;
  name: string;
  category: string;
  // Optional — only relevant when category is 'Bags', e.g. 'Laptop Bag', 'Gym Bags'
  subCategory?: string;
  description: string;
  howItsMade: string;
  materials: string[];
  images: string[];
  featured?: boolean;
  // Optional color swatches — hex values e.g. ['#1A1A1A', '#8B7355']
  colors?: string[];
  // Optional detail line shown under name on grid e.g. "Full-grain leather / Brass hardware"
  detail?: string;
};

// Category values must be one of: 'Bags' | 'Cap' | 'Raw Materials' | 'Customisable Pens' | 'Jewellery Boxes'
// If category is 'Bags', subCategory can be one of:
// 'Shopping Bag' | 'Office Bags' | 'Laptop Bag' | 'School Bags' | 'Geometry Pouches' |
// 'Shagun/Potli' | 'Gym Bags' | 'Waist Bags' | 'Ladies Bag'

export const products: Product[] = [
  {
    slug: 'marvel-jewellery-bag',
    name: 'Marvel Jewellery Bag',
    category: 'Bags',
    subCategory: 'Shopping Bag',
    detail: 'Water-resistant canvas / Padded interior',
    description: 'A slim, protective carry bag built for daily commutes.',
    howItsMade: 'Reinforced corners and a padded sleeve, sewn on heavy-duty canvas.',
    materials: ['Water-resistant canvas', 'Foam padding', 'YKK zippers'],
    images: ['/products/bags/shopping-bags/marvel.jpeg'],
    colors: ['#1A1A1A', '#2C2C2C'],
    featured: true,
  },
  {
    slug: 'summit-laptop-bag',
    name: 'Summit Laptop Bag',
    category: 'Bags',
    subCategory: 'Laptop Bag',
    detail: 'Water-resistant canvas / Padded interior',
    description: 'A slim, protective laptop bag built for daily commutes.',
    howItsMade: 'Reinforced corners and a padded 15" sleeve, sewn on heavy-duty canvas.',
    materials: ['Water-resistant canvas', 'Foam padding', 'YKK zippers'],
    images: [],
    colors: ['#1A1A1A', '#2C2C2C'],
  },
  {
    slug: 'classic-woven-cap',
    name: 'Classic Woven Cap',
    category: 'Cap',
    detail: 'Cotton twill / Adjustable strap',
    description: 'A timeless six-panel cap with a low profile fit.',
    howItsMade: 'Panels are cut and stitched by hand, with an embroidered eyelet finish.',
    materials: ['Cotton twill', 'Brass buckle'],
    images: [],
    colors: ['#1A1A1A', '#6B4F3A'],
    featured: true,
  },
  {
    slug: 'premium-leather-hide',
    name: 'Premium Leather Hide',
    category: 'Raw Materials',
    detail: 'Full-grain / Sold per metre',
    description: 'Ethically sourced full-grain leather, sold by the metre for custom projects.',
    howItsMade: 'Tanned using traditional vegetable-tanning methods before finishing.',
    materials: ['Full-grain leather'],
    images: [],
    colors: ['#1A1A1A', '#8B7355'],
    featured: true,
  },
  {
    slug: 'engraved-brass-pen',
    name: 'Engraved Brass Pen',
    category: 'Customisable Pens',
    detail: 'Solid brass / Custom engraving',
    description: 'A weighty brass pen, engraved with a name, initials, or short message.',
    howItsMade: 'CNC-turned brass body, hand-polished, then laser engraved to order.',
    materials: ['Solid brass', 'Refill: Parker-style'],
    images: [],
    colors: ['#8B7355'],
    featured: true,
  },
  {
    slug: 'velvet-jewellery-box',
    name: 'Velvet Jewellery Box',
    category: 'Jewellery Boxes',
    detail: 'Velvet-lined / Wooden frame',
    description: 'A compact jewellery box with a soft velvet interior and hinged lid.',
    howItsMade: 'Wooden frame wrapped in fabric, lined with velvet and finished with brass hinges.',
    materials: ['Wood', 'Velvet lining', 'Brass hinges'],
    images: [],
    colors: ['#6B4F3A', '#1A1A1A'],
    featured: true,
  },
];