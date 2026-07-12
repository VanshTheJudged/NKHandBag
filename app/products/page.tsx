'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  products,
  type Product,
  getMaterialType,
  MATERIAL_TYPES,
  type MaterialType,
} from '@/data/products';

const placeholders: Product[] = [
  {
    slug: '#',
    name: 'SAMPLE BAG',
    category: 'Bags',
    detail: 'Full-grain leather / Brass hardware',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    customisable: ['Colour', 'Handles'],
  },
  {
    slug: '#',
    name: 'SAMPLE CAP',
    category: 'Cap',
    detail: 'Cotton twill / Embroidered',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    customisable: ['Colour', 'Logo Print'],
  },
  {
    slug: '#',
    name: 'SAMPLE RAW MATERIAL',
    category: 'Raw Materials',
    detail: 'Sold by the metre',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    customisable: ['Colour'],
  },
  {
    slug: '#',
    name: 'SAMPLE PEN',
    category: 'Customisable Pens',
    detail: 'Engraved / Gift-ready',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    customisable: ['Engraving', 'Finish'],
  },
  {
    slug: '#',
    name: 'SAMPLE JEWELLERY BOX',
    category: 'Jewellery Boxes',
    detail: 'Velvet lined',
    description: '',
    howItsMade: '',
    materials: [],
    images: [],
    customisable: ['Colour', 'Lining'],
  },
];

const CATEGORIES = ['All', 'Bags', 'Cap', 'Raw Materials', 'Customisable Pens', 'Jewellery Boxes'];

// Maps the slug used in URLs (?category=cap) to the display/filter label
const SLUG_TO_LABEL: Record<string, string> = {
  bags: 'Bags',
  cap: 'Cap',
  'raw-materials': 'Raw Materials',
  'customisable-pens': 'Customisable Pens',
  'jewellery-boxes': 'Jewellery Boxes',
};

// Reverse of the above — display label back to URL slug
const LABEL_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SLUG_TO_LABEL).map(([slug, label]) => [label, slug])
);

// Maps the ?type= slug (from CategorySection's bag subcategory pills) to the
// subCategory label stored on each product in data/products.ts
const SUB_SLUG_TO_LABEL: Record<string, string> = {
  'shopping-bag': 'Shopping Bag',
  'office-bags': 'Office Bags',
  'laptop-bag': 'Laptop Bag',
  'school-bags': 'School Bags',
  'geometry-pouches': 'Geometry Pouches',
  'shagun-potli': 'Shagun/Potli',
  'gym-bags': 'Gym Bags',
  'waist-bags': 'Waist Bags',
  'ladies-bag': 'Ladies Bag',
};

const SUB_LABEL_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(SUB_SLUG_TO_LABEL).map(([slug, label]) => [label, slug])
);

// Maps the ?material= slug to the MaterialType label.
// 'nylon' and 'rexine' are kept as legacy aliases so old bookmarked/shared
// URLs still resolve — both now collapse into the single 'Synthetic' type.
const MATERIAL_SLUG_TO_LABEL: Record<string, MaterialType> = {
  synthetic: 'Synthetic',
  nylon: 'Synthetic',
  rexine: 'Synthetic',
  jute: 'Jute',
  'non-woven': 'Non-woven',
  woven: 'Woven',
  canvas: 'Canvas',
};

// Built explicitly (not derived by reversing the map above) since multiple
// slugs now point to the same label — this fixes the canonical slug used
// when writing the URL back out.
const MATERIAL_LABEL_TO_SLUG: Record<string, string> = {
  Synthetic: 'synthetic',
  Jute: 'jute',
  'Non-woven': 'non-woven',
  Woven: 'woven',
  Canvas: 'canvas',
};

// Used to render the bag subcategory filter pills, in display order
const BAG_SUBCATEGORIES = [
  'Shopping Bag',
  'Office Bags',
  'Laptop Bag',
  'School Bags',
  'Geometry Pouches',
  'Shagun/Potli',
  'Gym Bags',
  'Waist Bags',
  'Ladies Bag',
];

export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#F5EFE6' }} />}>
      <ProductsPageInner />
    </Suspense>
  );
}

function ProductsPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const typeSlug = searchParams.get('type');
  const materialSlug = searchParams.get('material');

  const initialActive = categorySlug && SLUG_TO_LABEL[categorySlug]
    ? SLUG_TO_LABEL[categorySlug]
    : 'All';

  const initialActiveSub = typeSlug && SUB_SLUG_TO_LABEL[typeSlug]
    ? SUB_SLUG_TO_LABEL[typeSlug]
    : 'All';

  const initialActiveMaterial: 'All' | MaterialType =
    materialSlug && MATERIAL_SLUG_TO_LABEL[materialSlug]
      ? MATERIAL_SLUG_TO_LABEL[materialSlug]
      : 'All';

  const allProducts = products.length > 0 ? products : placeholders;
  const [active, setActive] = useState(initialActive);
  const [activeSub, setActiveSub] = useState(initialActiveSub);
  const [activeMaterial, setActiveMaterial] = useState<'All' | MaterialType>(initialActiveMaterial);

  // Pushes the given filter combo into the URL (replace, so it doesn't pile
  // up browser history entries) — this is what makes filters survive
  // navigating to a product and back.
  function syncURL(nextActive: string, nextSub: string, nextMaterial: 'All' | MaterialType) {
    const params = new URLSearchParams();

    if (nextActive !== 'All' && LABEL_TO_SLUG[nextActive]) {
      params.set('category', LABEL_TO_SLUG[nextActive]);
    }
    if (nextActive === 'Bags' && nextSub !== 'All' && SUB_LABEL_TO_SLUG[nextSub]) {
      params.set('type', SUB_LABEL_TO_SLUG[nextSub]);
    }
    if (nextActive === 'Bags' && nextMaterial !== 'All' && MATERIAL_LABEL_TO_SLUG[nextMaterial]) {
      params.set('material', MATERIAL_LABEL_TO_SLUG[nextMaterial]);
    }

    const query = params.toString();
    router.replace(query ? `/products?${query}` : '/products', { scroll: false });
  }

  function handleCategoryClick(cat: string) {
    setActive(cat);
    setActiveSub('All');
    setActiveMaterial('All');
    syncURL(cat, 'All', 'All');
  }

  function handleSubClick(sub: string) {
    setActiveSub(sub);
    syncURL(active, sub, activeMaterial);
  }

  function handleMaterialClick(mat: 'All' | MaterialType) {
    setActiveMaterial(mat);
    syncURL(active, activeSub, mat);
  }

  const filtered = allProducts.filter((p) => {
    const matchesCategory = active === 'All' || p.category === active;
    const matchesSub =
      active !== 'Bags' || activeSub === 'All' || p.subCategory === activeSub;
    const matchesMaterial =
      active !== 'Bags' || activeMaterial === 'All' || getMaterialType(p) === activeMaterial;
    return matchesCategory && matchesSub && matchesMaterial;
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F5EFE6' }}>
      <style>{`
        /* ── HERO ── */
        .nk-pl-hero {
          background-color: #1E2318;
          padding: 2rem 1.25rem 2.5rem;
        }
        @media (min-width: 1024px) {
          .nk-pl-hero { padding: 3rem 3rem 4rem; }
        }
        .nk-pl-hero-inner {
          max-width: 1600px;
          margin: 1.5rem auto 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        @media (min-width: 1024px) {
          .nk-pl-hero-inner {
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
            margin-top: 2rem;
          }
        }
        .nk-pl-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(245,239,230,0.35);
          text-transform: uppercase;
          margin: 0 0 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .nk-pl-eyebrow-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: rgba(245,239,230,0.3);
          flex-shrink: 0;
        }
        .nk-pl-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 300;
          font-size: clamp(32px, 7vw, 96px);
          color: #F5EFE6;
          line-height: 0.92;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .nk-pl-tagline {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          line-height: 1.7;
          color: rgba(245,239,230,0.4);
          max-width: 300px;
          margin: 0;
        }
        @media (min-width: 1024px) {
          .nk-pl-tagline { text-align: right; }
        }

        /* ── FILTER BAR ── */
        .nk-pl-filter-bar {
          border-bottom: 1px solid rgba(30,35,24,0.08);
          padding: 0.875rem 1.25rem;
          background-color: #F5EFE6;
        }
        @media (min-width: 640px) {
          .nk-pl-filter-bar {
            overflow-x: auto;
            scrollbar-width: none;
            padding: 0.75rem 1.5rem;
          }
          .nk-pl-filter-bar::-webkit-scrollbar { display: none; }
        }
        @media (min-width: 1024px) {
          .nk-pl-filter-bar { padding: 0.75rem 3rem; }
        }
        .nk-pl-filter-inner {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }
        @media (min-width: 640px) {
          .nk-pl-filter-inner {
            flex-wrap: nowrap;
            min-width: max-content;
            gap: 0.25rem;
          }
        }
        .nk-pl-filter-btn {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6B5B45;
          background: rgba(30,35,24,0.06);
          border: none;
          padding: 0.45rem 0.85rem;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          border-radius: 100px;
          white-space: nowrap;
        }
        @media (min-width: 640px) {
          .nk-pl-filter-btn {
            font-size: 11px;
            letter-spacing: 0.14em;
            padding: 0.5rem 1rem;
          }
        }
        .nk-pl-filter-btn:hover { color: #1C1410; background: rgba(30,35,24,0.1); }
        .nk-pl-filter-btn.active {
          color: #F5EFE6 !important;
          background: #1E2318 !important;
        }

        /* ── SUB-FILTER BAR (bag subcategories / materials) — animated slide ── */
        .nk-pl-subfilter-outer {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.3s ease;
        }
        .nk-pl-subfilter-outer.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
        .nk-pl-subfilter-inner {
          overflow: hidden;
          min-height: 0;
        }
        .nk-pl-subfilter-bar {
          border-bottom: 1px solid rgba(30,35,24,0.06);
          padding: 0.6rem 1.25rem;
          background-color: #FAF7F1;
          transform: translateY(-6px);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nk-pl-subfilter-outer.open .nk-pl-subfilter-bar {
          transform: translateY(0);
        }
        @media (min-width: 640px) {
          .nk-pl-subfilter-bar {
            overflow-x: auto;
            scrollbar-width: none;
            padding: 0.55rem 1.5rem;
          }
          .nk-pl-subfilter-bar::-webkit-scrollbar { display: none; }
        }
        @media (min-width: 1024px) {
          .nk-pl-subfilter-bar { padding: 0.55rem 3rem; }
        }
        .nk-pl-subfilter-btn {
          font-size: 8px;
          color: #7A6A52;
          opacity: 1;
        }
        @media (min-width: 640px) {
          .nk-pl-subfilter-btn { font-size: 10px; }
        }

        /* ── GRID ── */
        .nk-pl-body {
          padding: 2rem 1.25rem 5rem;
          max-width: 1600px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .nk-pl-body { padding: 3.5rem 3rem 8rem; }
        }
        .nk-pl-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 0.75rem;
        }
        @media (min-width: 480px) {
          .nk-pl-grid { gap: 2.5rem 1rem; }
        }
        @media (min-width: 640px) {
          .nk-pl-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1024px) {
          .nk-pl-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 4rem 1.25rem;
          }
        }

        /* ── CARD ── */
        .nk-pl-card { display: flex; flex-direction: column; text-decoration: none; }
        .nk-pl-card-img {
          position: relative;
          aspect-ratio: 3/4;
          width: 100%;
          overflow: hidden;
          background-color: #FFFFFF;
        }
        .nk-pl-card-img-inner {
          position: absolute;
          inset: 0;
          transition: transform 0.7s ease;
        }
        .nk-pl-card:hover .nk-pl-card-img-inner { transform: scale(1.05); }
        .nk-pl-card-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(160deg, #E8E4DE 0%, #D4CFC8 100%);
          display: flex;
          align-items: flex-end;
          padding: 0.75rem;
        }
        .nk-pl-card-placeholder-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          letter-spacing: 0.2em;
          color: rgba(154,138,116,0.5);
          text-transform: uppercase;
        }
        .nk-pl-card-pill {
          position: absolute;
          top: 0.5rem;
          left: 0.5rem;
          background: #1E2318;
          color: #F5EFE6;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.2rem 0.5rem;
          border-radius: 100px;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .nk-pl-card:hover .nk-pl-card-pill { opacity: 1; transform: translateY(0); }
        .nk-pl-card-info {
          margin-top: 0.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .nk-pl-card-category {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          letter-spacing: 0.2em;
          color: #9A8A74;
          text-transform: uppercase;
          margin: 0;
        }
        .nk-pl-card-name {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: clamp(13px, 1.4vw, 19px);
          font-weight: 400;
          color: #1C1410;
          margin: 0;
          line-height: 1.15;
          transition: color 0.2s;
        }
        .nk-pl-card:hover .nk-pl-card-name { color: #3D4A28; }
        .nk-pl-card-detail {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          letter-spacing: 0.12em;
          color: rgba(154,138,116,0.7);
          text-transform: uppercase;
          margin: 0;
          line-height: 1.6;
        }
        .nk-pl-card-custom {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          letter-spacing: 0.14em;
          color: #3D4A28;
          text-transform: uppercase;
          margin: 0.35rem 0 0;
        }
        .nk-pl-card-price {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 8px;
          letter-spacing: 0.18em;
          color: rgba(154,138,116,0.55);
          text-transform: uppercase;
          margin: 0.25rem 0 0;
        }

        /* ── EMPTY STATE ── */
        .nk-pl-empty {
          grid-column: 1 / -1;
          padding: 4rem 0;
          text-align: center;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: rgba(30,35,24,0.3);
          text-transform: uppercase;
        }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ backgroundColor: '#1E2318' }}>
        <Header />
      </div>

      {/* ── HERO ── */}
      <div className="nk-pl-hero">
        <div className="nk-pl-hero-inner">
          <div>
            <p className="nk-pl-eyebrow">
              <span className="nk-pl-eyebrow-dot" />
              Collection
            </p>
            <h1 className="nk-pl-heading">All Products</h1>
          </div>
          <p className="nk-pl-tagline">
            Every piece handcrafted in Mumbai. Built for the everyday,
            designed to last a lifetime.
          </p>
        </div>
      </div>

      {/* ── FILTER BAR ── */}
      <div className="nk-pl-filter-bar">
        <div className="nk-pl-filter-inner">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`nk-pl-filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── SUB-FILTER BAR (animated slide, only meaningful content when Bags active) ── */}
      <div className={`nk-pl-subfilter-outer ${active === 'Bags' ? 'open' : ''}`}>
        <div className="nk-pl-subfilter-inner">
          <div className="nk-pl-subfilter-bar">
            <div className="nk-pl-filter-inner">
              <button
                className={`nk-pl-filter-btn nk-pl-subfilter-btn ${activeSub === 'All' ? 'active' : ''}`}
                onClick={() => handleSubClick('All')}
              >
                All Bags
              </button>
              {BAG_SUBCATEGORIES.map((sub) => (
                <button
                  key={sub}
                  className={`nk-pl-filter-btn nk-pl-subfilter-btn ${activeSub === sub ? 'active' : ''}`}
                  onClick={() => handleSubClick(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SUB-FILTER BAR (material types, animated slide, only when Bags active) ── */}
      <div className={`nk-pl-subfilter-outer ${active === 'Bags' ? 'open' : ''}`}>
        <div className="nk-pl-subfilter-inner">
          <div className="nk-pl-subfilter-bar">
            <div className="nk-pl-filter-inner">
              <button
                className={`nk-pl-filter-btn nk-pl-subfilter-btn ${activeMaterial === 'All' ? 'active' : ''}`}
                onClick={() => handleMaterialClick('All')}
              >
                All Materials
              </button>
              {MATERIAL_TYPES.map((mat) => (
                <button
                  key={mat}
                  className={`nk-pl-filter-btn nk-pl-subfilter-btn ${activeMaterial === mat ? 'active' : ''}`}
                  onClick={() => handleMaterialClick(mat)}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="nk-pl-body">
        <div className="nk-pl-grid">
          {filtered.length > 0 ? (
            filtered.map((product, i) => (
              <ProductCard key={`${product.slug}-${i}`} product={product} />
            ))
          ) : (
            <p className="nk-pl-empty">No products in this category yet</p>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}

function ProductCard({ product }: { product: Product }) {
  const materialType = getMaterialType(product);

  return (
    <Link
      href={product.slug === '#' ? '#' : `/products/${product.slug}`}
      className="nk-pl-card"
    >
      <div className="nk-pl-card-img">
        {product.images[0] ? (
          <div className="nk-pl-card-img-inner">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
          </div>
        ) : (
          <div className="nk-pl-card-placeholder">
            <span className="nk-pl-card-placeholder-label">{product.category}</span>
          </div>
        )}
        <span className="nk-pl-card-pill">{product.category}</span>
      </div>

      <div className="nk-pl-card-info">
        <p className="nk-pl-card-category">{product.category}</p>
        <h2 className="nk-pl-card-name">{product.name}</h2>
        {product.detail && (
          <p className="nk-pl-card-detail">{product.detail}</p>
        )}
        {!product.detail && materialType && (
          <p className="nk-pl-card-detail">{materialType}</p>
        )}
        {product.customisable && product.customisable.length > 0 && (
          <p className="nk-pl-card-custom">Fully Customisable</p>
        )}
        <p className="nk-pl-card-price">Price on Inquiry</p>
      </div>
    </Link>
  );
}