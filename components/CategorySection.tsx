'use client';

import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    label: 'BAGS',
    href: '/products?category=bags',
    image: '/images/categories/bags.jpg',
    hasSubcategories: true,
  },
  {
    label: 'CAP',
    href: '/products?category=cap',
    image: '/images/categories/cap.jpg',
  },
  {
    label: 'RAW MATERIALS',
    href: '/products?category=raw-materials',
    image: '/images/categories/raw-materials.jpg',
  },
  {
    label: 'CUSTOMISABLE PENS',
    href: '/products?category=customisable-pens',
    image: '/images/categories/customisable-pens.jpg',
  },
  {
    label: 'JEWELLERY BOXES',
    href: '/products?category=jewellery-boxes',
    image: '/images/categories/jewellery-boxes.jpg',
  },
];

const bagSubcategories = [
  { label: 'Shopping Bag', href: '/products?category=bags&type=shopping-bag' },
  { label: 'Office Bags', href: '/products?category=bags&type=office-bags' },
  { label: 'Laptop Bag', href: '/products?category=bags&type=laptop-bag' },
  { label: 'School Bags', href: '/products?category=bags&type=school-bags' },
  { label: 'Geometry Pouches', href: '/products?category=bags&type=geometry-pouches' },
  { label: 'Shagun/Potli', href: '/products?category=bags&type=shagun-potli' },
  { label: 'Gym Bags', href: '/products?category=bags&type=gym-bags' },
  { label: 'Waist Bags', href: '/products?category=bags&type=waist-bags' },
  { label: 'Ladies Bag', href: '/products?category=bags&type=ladies-bag' },
];

export function CategorySection() {
  const [bagsOpen, setBagsOpen] = useState(false);

  return (
    <>
      <style>{`
        .nk-cat-section {
          background-color: #FFFFFF;
        }
        .nk-cat-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          color: #9A8A74;
          letter-spacing: 0.25em;
          font-size: 10px;
          text-transform: uppercase;
        }
        .nk-cat-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 300;
          color: #1C1410;
          letter-spacing: -0.01em;
          line-height: 0.95;
        }
        .nk-cat-card {
          background-color: #F0EBE1;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2.5rem 1.5rem 2rem;
          gap: 1.25rem;
          transition: background-color 0.2s;
          text-decoration: none;
          min-height: 200px;
          position: relative;
          border: none;
          cursor: pointer;
          width: 100%;
        }
        .nk-cat-card:hover {
          background-color: #E8E0D0;
        }
        .nk-cat-card-active {
          background-color: #E8E0D0;
        }
        .nk-cat-icon-wrap {
          width: 180px;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nk-cat-icon-img {
          width: 180px;
          height: 180px;
          object-fit: contain;
        }
        .nk-cat-card-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: #1C1410;
          text-transform: uppercase;
          text-align: center;
        }
        .nk-cat-expand-indicator {
          position: absolute;
          top: 12px;
          right: 14px;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 14px;
          color: #9A8A74;
          transition: transform 0.3s ease;
        }
        .nk-cat-expand-indicator.rotated {
          transform: rotate(180deg);
        }
        .nk-view-all-card {
          background-color: #1C1410;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2.5rem 1.5rem;
          text-decoration: none;
          transition: background-color 0.2s;
          min-height: 200px;
        }
        .nk-view-all-card:hover {
          background-color: #2D2318;
        }
        .nk-view-all-text {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: #F5EFE6;
          text-transform: uppercase;
        }
        .nk-view-all-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(245,239,230,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5EFE6;
          font-size: 15px;
          flex-shrink: 0;
        }

        /* ── Sliding subcategory panel ── */
        .nk-subcat-outer {
          max-width: 56rem;
          margin: 0 auto;
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition: grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.35s ease,
                      margin-top 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nk-subcat-outer.open {
          grid-template-rows: 1fr;
          opacity: 1;
          margin-top: 1.25rem;
        }
        .nk-subcat-inner {
          overflow: hidden;
          min-height: 0;
        }
        .nk-subcat-panel {
          background-color: #F0EBE1;
          border-radius: 10px;
          padding: 1.75rem 1.5rem;
          transform: translateY(-8px);
          transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nk-subcat-outer.open .nk-subcat-panel {
          transform: translateY(0);
        }
        .nk-subcat-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
        }
        .nk-subcat-pill {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1C1410;
          background-color: #FFFFFF;
          border: 1px solid rgba(28,20,16,0.15);
          border-radius: 999px;
          padding: 0.6rem 1.1rem;
          text-decoration: none;
          transition: background-color 0.2s, border-color 0.2s, transform 0.2s;
          opacity: 0;
          transform: translateY(6px);
        }
        .nk-subcat-outer.open .nk-subcat-pill {
          opacity: 1;
          transform: translateY(0);
        }
        .nk-subcat-pill:hover {
          background-color: #1C1410;
          color: #F5EFE6;
          border-color: #1C1410;
        }
        .nk-subcat-viewall {
          display: block;
          text-align: center;
          margin-top: 1.25rem;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9A8A74;
          text-decoration: underline;
        }

        ${bagSubcategories.map((_, i) => `
        .nk-subcat-outer.open .nk-subcat-pill:nth-child(${i + 1}) {
          transition-delay: ${i * 0.035}s;
        }`).join('')}
      `}</style>

      <section className="nk-cat-section px-6 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-24">

        {/* Header — centered */}
        <div className="mb-10 flex flex-col items-center text-center lg:mb-14">
          <p className="nk-cat-eyebrow mb-4">Category</p>
          <h2 className="nk-cat-heading text-[clamp(36px,6vw,72px)]">
            FIND YOUR<br />PERFECT BAG
          </h2>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {categories.map((cat) =>
            cat.hasSubcategories ? (
              <button
                key={cat.label}
                type="button"
                onClick={() => setBagsOpen((open) => !open)}
                className={`nk-cat-card ${bagsOpen ? 'nk-cat-card-active' : ''}`}
              >
                <span className={`nk-cat-expand-indicator ${bagsOpen ? 'rotated' : ''}`}>+</span>
                <div className="nk-cat-icon-wrap">
                  <img src={cat.image} alt={cat.label} className="nk-cat-icon-img" />
                </div>
                <span className="nk-cat-card-label">{cat.label}</span>
              </button>
            ) : (
              <Link key={cat.label} href={cat.href} className="nk-cat-card">
                <div className="nk-cat-icon-wrap">
                  <img src={cat.image} alt={cat.label} className="nk-cat-icon-img" />
                </div>
                <span className="nk-cat-card-label">{cat.label}</span>
              </Link>
            )
          )}

          {/* VIEW ALL — dark card */}
          <Link href="/products" className="nk-view-all-card">
            <span className="nk-view-all-text">VIEW ALL</span>
            <span className="nk-view-all-arrow">→</span>
          </Link>
        </div>

        {/* Bags subcategory panel — animated slide */}
        <div className={`nk-subcat-outer ${bagsOpen ? 'open' : ''}`}>
          <div className="nk-subcat-inner">
            <div className="nk-subcat-panel">
              <div className="nk-subcat-grid">
                {bagSubcategories.map((sub) => (
                  <Link key={sub.label} href={sub.href} className="nk-subcat-pill">
                    {sub.label}
                  </Link>
                ))}
              </div>
              <Link href="/products?category=bags" className="nk-subcat-viewall">
                Shop all bags →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}