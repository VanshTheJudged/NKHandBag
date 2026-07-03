'use client';

import Link from 'next/link';
import Image from 'next/image';
import { products, type Product } from '@/data/products';

const CATEGORY_ORDER = ['Bags', 'Cap', 'Raw Materials', 'Customisable Pens', 'Jewellery Boxes'];

const placeholders = [
  { id: 'p1', name: 'NK BAGS CLASSIC', category: 'Bags' },
  { id: 'p2', name: 'NK WOVEN CAP', category: 'Cap' },
  { id: 'p3', name: 'NK RAW MATERIAL', category: 'Raw Materials' },
  { id: 'p4', name: 'NK CUSTOM PEN', category: 'Customisable Pens' },
  { id: 'p5', name: 'NK JEWELLERY BOX', category: 'Jewellery Boxes' },
];

// Picks one product per category, in CATEGORY_ORDER.
// Prefers a featured product within a category if one exists, else the first found.
// Skips a category entirely if there's no product for it yet.
function getOneProductPerCategory(allProducts: Product[]): Product[] {
  return CATEGORY_ORDER
    .map((cat) => {
      const inCategory = allProducts.filter((p) => p.category === cat);
      if (inCategory.length === 0) return null;
      return inCategory.find((p) => p.featured) || inCategory[0];
    })
    .filter((p): p is Product => p !== null);
}

export function ProductsSection() {
  const oneProductPerCategory = products.length > 0 ? getOneProductPerCategory(products) : [];
  const displayProducts = oneProductPerCategory.length > 0 ? oneProductPerCategory : null;

  return (
    <>
      <style>{`
        .nk-products-section {
          background-color: #F6EEE6;
          position: relative;
          overflow: hidden;
        }

        .nk-products-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .nk-products-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 70% center;
        }
        @media (min-width: 768px) {
          .nk-products-bg img {
            object-position: right center;
          }
        }

        .nk-products-bg::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(246,238,230,0.82) 0%,
            rgba(246,238,230,0.45) 50%,
            rgba(246,238,230,0.82) 100%
          );
        }
        @media (min-width: 768px) {
          .nk-products-bg::after {
            background: linear-gradient(
              to right,
              rgba(246,238,230,0.88) 0%,
              rgba(246,238,230,0.42) 45%,
              rgba(246,238,230,0.08) 100%
            );
          }
        }

        .nk-eyebrow-dot {
          background-color: #3D4A28;
        }
        .nk-eyebrow-text {
          color: #3D4A28;
          font-family: var(--font-jetbrains-mono), monospace;
          letter-spacing: 0.25em;
        }
        .nk-heading {
          color: #1C1410;
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 300;
          letter-spacing: -0.01em;
          line-height: 0.92;
        }
        .nk-heading-accent {
          color: #3D4A28;
        }
        .nk-description {
          color: #3D2E1E;
          font-family: var(--font-outfit), sans-serif;
          font-weight: 500;
        }

        /* ── Grid wrapper — no longer frosted, just spacing ── */
        .nk-grid-panel {
          padding: 1.5rem 1rem;
        }
        @media (min-width: 1024px) {
          .nk-grid-panel {
            padding: 3rem 2.5rem;
          }
        }

        .nk-card-bg {
          background-color: #E8E0D0;
        }

        .nk-pill {
          background-color: #1C1410;
          color: #F5EFE6;
          font-family: var(--font-jetbrains-mono), monospace;
        }

        /* ── Frosted chip — shared glass style for category / name / price ── */
        .nk-frost-chip {
          background-color: rgba(246,238,230,0.55);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.5);
          border-radius: 999px;
          box-shadow: 0 6px 16px -10px rgba(28,20,16,0.18);
          width: fit-content;
          transition: background-color 0.2s, border-color 0.2s;
        }
        .group:hover .nk-frost-chip {
          background-color: rgba(246,238,230,0.75);
        }

        .nk-category-label {
          color: #9A8A74;
          font-family: var(--font-jetbrains-mono), monospace;
          letter-spacing: 0.2em;
          padding: 0.3rem 0.7rem;
        }

        .nk-name-chip {
          padding: 0.4rem 0.85rem;
        }
        .group:hover .nk-name-chip {
          border-color: rgba(61,74,40,0.25);
        }
        .nk-product-name {
          color: #1C1410;
          font-family: var(--font-outfit), sans-serif;
          transition: color 0.2s;
        }
        .group:hover .nk-product-name {
          color: #3D4A28;
        }
        .nk-price {
          color: #9A8A74;
          font-family: var(--font-jetbrains-mono), monospace;
          letter-spacing: 0.15em;
          padding: 0.3rem 0.7rem;
        }
        .nk-view-all {
          color: #6B5B45;
          font-family: var(--font-jetbrains-mono), monospace;
          letter-spacing: 0.18em;
          transition: color 0.2s;
        }
        .nk-view-all:hover {
          color: #1C1410;
        }
      `}</style>

      <section className="nk-products-section px-4 py-14 sm:px-6 sm:py-16 lg:px-20 lg:py-28">

        {/* Background image */}
        <div className="nk-products-bg">
          <img
            src="/images/products-bg.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Grid overlay */}
        <div className="studio-grid pointer-events-none absolute inset-0 z-[1]" />

        <div className="relative z-[2] mx-auto max-w-[1600px]">

          {/* Header row */}
          <div className="mb-8 grid grid-cols-1 gap-4 lg:mb-12 lg:grid-cols-2 lg:items-end lg:gap-10">
            <div>
              <div className="mb-4 flex items-center gap-2 lg:mb-6">
                <span className="nk-eyebrow-dot h-1.5 w-1.5 rounded-full" />
                <span className="nk-eyebrow-text text-[10px] uppercase">
                  Collection
                </span>
              </div>
              <h2 className="nk-heading text-[clamp(32px,7vw,80px)]">
                THE ESSENTIALS<br />
                <span className="nk-heading-accent">COLLECTION</span>
              </h2>
            </div>

            <p className="nk-description hidden max-w-md text-[15px] leading-relaxed lg:ml-auto lg:block lg:text-right">
              A curated collection of handcrafted bags that blend timeless design
              with everyday functionality. Made in Mumbai, built to last.
            </p>
          </div>

          {/* Product grid — plain spacing wrapper; frost now lives on each text chip */}
          <div className="nk-grid-panel">
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-20">
              {displayProducts
                ? displayProducts.map((product) => (
                    <ProductCard
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      image={product.images[0] || null}
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
          </div>

          {/* View all */}
          <div className="mt-10 flex justify-center lg:mt-14">
            <Link
              href="/products"
              className="nk-view-all group flex items-center gap-3 text-[11px] uppercase"
            >
              View All Products
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

type CardProps = {
  href: string;
  image: string | null;
  name: string;
  category: string;
};

function ProductCard({ href, image, name, category }: CardProps) {
  return (
    <Link href={href} className="group flex flex-col">

      {/* Image / placeholder */}
      <div className="nk-card-bg relative aspect-[3/4] w-full overflow-hidden rounded-sm">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : null}

        {/* Category pill on hover */}
        <div className="absolute left-2 top-2 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:left-3 lg:top-3">
          <span className="nk-pill rounded-full px-2 py-0.5 text-[9px] lg:px-3 lg:py-1 lg:text-[10px]">
            {category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-3 flex flex-col gap-1.5 lg:mt-4">
        <p className="nk-category-label nk-frost-chip text-[10px] lg:text-[11px]">
          {category.toUpperCase()}
        </p>
        <div className="nk-name-chip nk-frost-chip">
          <h3 className="nk-product-name text-xs font-semibold leading-snug sm:text-sm lg:text-base">
            {name}
          </h3>
        </div>
        <p className="nk-price nk-frost-chip mt-0.5 text-[10px] lg:mt-1 lg:text-[11px]">
          PRICE ON INQUIRY
        </p>
      </div>
    </Link>
  );
}