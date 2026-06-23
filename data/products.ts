export type Product = {
  slug: string;
  name: string;
  category: string;
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

export const products: Product[] = [
  //Example — uncomment and fill with real data
  {
    slug: 'midnight-tote',
    name: 'Midnight Tote',
    category: 'Tote',
    detail: 'Full-grain leather / Brass hardware',
    description: 'A structured everyday tote, hand-finished in Mumbai.',
    howItsMade: 'Cut from full-grain leather, hand-stitched over four days...',
    materials: ['Full-grain leather', 'Brass hardware', 'Cotton lining'],
    images: ['/products/midnight-tote-1.jpg'],
    colors: ['#1A1A1A', '#8B7355', '#D4C5A0'],
    featured: true,
  },
];