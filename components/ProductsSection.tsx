import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

const placeholders = [
  { id: 'p1', name: 'NK HAND BAG CLASSIC', category: 'Tote' },
  { id: 'p2', name: 'NK SHOULDER BAG', category: 'Shoulder' },
  { id: 'p3', name: 'NK SLING PRO', category: 'Sling' },
  { id: 'p4', name: 'NK TOTE MINI', category: 'Tote' },
  { id: 'p5', name: 'NK CLUTCH LUXE', category: 'Clutch' },
];

export function ProductsSection() {
  const displayProducts = products.length > 0
    ? products.filter((p) => p.featured).slice(0, 5)
    : null;

  return (
    <section className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-12 lg:py-28">
      <div className="studio-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1600px]">

        {/* Header row */}
        <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-12 lg:grid-cols-2 lg:items-end lg:gap-10">
          <div>
            <div className="mb-4 flex items-center gap-2 lg:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" />
              <span className="font-mono text-xs tracking-widest-plus text-accent-warm">
                COLLECTION
              </span>
            </div>
            <h2 className="display text-[clamp(32px,7vw,80px)] leading-[0.9] text-fg">
              THE ESSENTIALS<br />COLLECTION
            </h2>
          </div>

          {/* Description — hidden on mobile, shown on desktop */}
          <p className="hidden max-w-md text-base leading-relaxed text-fg-muted lg:ml-auto lg:block lg:text-right">
            A curated collection of handcrafted bags that blend timeless design
            with everyday functionality. Made in Mumbai, built to last.
          </p>
        </div>

        {/* Product grid — 2 cols mobile, 3 tablet, 5 desktop */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-5 lg:gap-x-5 lg:gap-y-16">
          {displayProducts
            ? displayProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  image={product.images[0]}
                  name={product.name}
                  category={product.category}
                />
              ))
            : placeholders.map((p) => (
                <ProductCard
                  key={p.id}
                  href="/products"
                  image={null}
                  name={p.name}
                  category={p.category}
                />
              ))}
        </div>

        {/* View all */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <Link
            href="/products"
            className="group flex items-center gap-3 font-mono text-xs tracking-widest-plus text-fg-muted transition-colors hover:text-fg"
          >
            VIEW ALL PRODUCTS
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Card ────────────────────────────────────────────────────────────────────

type CardProps = {
  href: string;
  image: string | null;
  name: string;
  category: string;
};

function ProductCard({ href, image, name, category }: CardProps) {
  return (
    <Link href={href} className="group flex flex-col">

      {/* Image */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-bg-elev-2">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_35%,rgba(212,197,160,0.06),transparent_60%)]" />
          </div>
        )}

        {/* Category pill on hover — hidden on mobile (no hover) */}
        <div className="absolute left-2 top-2 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:left-3 lg:top-3">
          <span className="rounded-full bg-fg px-2 py-0.5 font-mono text-[9px] tracking-widest text-bg lg:px-3 lg:py-1 lg:text-[10px]">
            {category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1 lg:mt-4">
        <p className="font-mono text-[10px] tracking-widest-plus text-fg-muted lg:text-[11px]">
          {category.toUpperCase()}
        </p>
        <h3 className="font-sans text-xs font-semibold leading-snug text-fg transition-colors group-hover:text-accent-warm sm:text-sm lg:text-base">
          {name}
        </h3>
        <p className="mt-0.5 font-mono text-[10px] tracking-widest-plus text-fg-subtle lg:mt-1 lg:text-[11px]">
          PRICE ON INQUIRY
        </p>
      </div>
    </Link>
  );
}