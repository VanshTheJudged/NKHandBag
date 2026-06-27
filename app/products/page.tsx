'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { products, type Product } from '@/data/products';

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

const CATEGORIES = ['All', 'Tote', 'Shoulder', 'Sling', 'Clutch', 'Wallet'];

export default function ProductsPage() {
  const allProducts = products.length > 0 ? products : placeholders;
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? allProducts
    : allProducts.filter((p) => p.category === active);

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

        /* ── FILTER BAR ──
           Mobile: wrap into a neat pill-grid, no overflow
           Desktop: single scrollable row
        */
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
          /* mobile: wrap pills */
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
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(30,35,24,0.45);
          background: rgba(30,35,24,0.05);
          border: none;
          /* larger tap target on mobile */
          padding: 0.5rem 0.9rem;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          border-radius: 100px;
          white-space: nowrap;
        }
        @media (min-width: 640px) {
          .nk-pl-filter-btn {
            background: none;
            padding: 0.4rem 0.9rem;
          }
        }
        .nk-pl-filter-btn:hover { color: #1C1410; background: rgba(30,35,24,0.08); }
        .nk-pl-filter-btn.active {
          color: #F5EFE6 !important;
          background: #1E2318 !important;
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
          background-color: #E8E0D0;
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
        .nk-pl-card-swatches {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.35rem;
        }
        .nk-pl-card-swatch {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.15);
          outline: 1px solid transparent;
          transition: outline-color 0.2s;
        }
        @media (min-width: 1024px) {
          .nk-pl-card-swatch { width: 12px; height: 12px; }
        }
        .nk-pl-card-swatch:hover { outline-color: rgba(30,35,24,0.4); }
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
            Every bag handcrafted in Mumbai. Built for the everyday,
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
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
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
              className="object-cover"
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
        {product.colors && product.colors.length > 0 && (
          <div className="nk-pl-card-swatches">
            {product.colors.map((color) => (
              <span
                key={color}
                className="nk-pl-card-swatch"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
        <p className="nk-pl-card-price">Price on Inquiry</p>
      </div>
    </Link>
  );
}