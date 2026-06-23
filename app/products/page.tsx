import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { products, type Product } from '@/data/products';

// ── Placeholder products shown until real data is added ──
const placeholders: Product[] = [
  {
    slug: '#',
    name: 'CLASSIC TOTE',
    category: 'Tote',
    detail: 'Full-grain leather / Brass hardware',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    colors: ['#1A1A1A', '#8B7355'],
  },
  {
    slug: '#',
    name: 'SHOULDER BAG',
    category: 'Shoulder',
    detail: 'Pebbled leather / Gold plating',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    colors: ['#2C2C2C', '#D4C5A0', '#8B7355'],
  },
  {
    slug: '#',
    name: 'SLING PRO',
    category: 'Sling',
    detail: 'Nylon canvas / Silver hardware',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    colors: ['#1A1A1A'],
  },
  {
    slug: '#',
    name: 'MINI CLUTCH',
    category: 'Clutch',
    detail: 'Suede leather / Antique brass',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    colors: ['#6B4F3A', '#1A1A1A'],
  },
  {
    slug: '#',
    name: 'EVERYDAY WALLET',
    category: 'Wallet',
    detail: 'Smooth leather / Contrast stitching',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    colors: ['#8B7355', '#2C2C2C', '#D4C5A0'],
  },
];

const displayProducts = products.length > 0 ? products : placeholders;

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-bg">
      <Header />

      <section className="px-6 pb-24 pt-16 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-[1600px]">

          {/* Page header */}
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" />
                <span className="font-mono text-xs tracking-widest-plus text-accent-warm">
                  COLLECTION
                </span>
              </div>
              <h1 className="display text-[clamp(40px,6vw,96px)] leading-none text-fg">
                ALL PRODUCTS
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted lg:text-right">
              Every bag handcrafted in Mumbai. Built for the everyday, designed to last a lifetime.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-16">
            {displayProducts.map((product, i) => (
              <ProductCard key={`${product.slug}-${i}`} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.slug === '#' ? '#' : `/products/${product.slug}`}
      className="group flex flex-col"
    >
      {/* Image — full bleed, no border, neutral bg */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F0EDE8]">
        {product.images[0] ? (
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          // Placeholder until real images are added
          <div className="absolute inset-0 flex items-end justify-start bg-gradient-to-b from-[#E8E4DE] to-[#D4CFC8] p-4">
            <span className="font-mono text-[10px] tracking-widest text-[#8C7B6B] opacity-40">
              {product.category.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">

        {/* Name */}
        <h2 className="display text-[clamp(13px,1.2vw,17px)] leading-tight text-fg">
          {product.name}
        </h2>

        {/* Detail line */}
        {product.detail && (
          <p className="font-mono text-[10px] leading-relaxed tracking-wide text-fg-muted">
            {product.detail}
          </p>
        )}

        {/* Color swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="mt-2 flex items-center gap-1.5">
            {product.colors.map((color) => (
              <span
                key={color}
                className="h-3.5 w-3.5 rounded-full border border-white/10 ring-1 ring-transparent transition-all hover:ring-fg-muted"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}

        {/* Price on inquiry */}
        <p className="mt-2 font-mono text-[10px] tracking-widest-plus text-fg-subtle">
          PRICE ON INQUIRY
        </p>
      </div>
    </Link>
  );
}