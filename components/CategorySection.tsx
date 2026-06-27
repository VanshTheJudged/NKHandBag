'use client';

import Link from 'next/link';

const categories = [
  {
    label: 'TOTES',
    href: '/products?category=tote',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
        {/* handles */}
        <path d="M42 52 Q42 30 60 30 Q78 30 78 52" stroke="#1C1410" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        {/* body */}
        <path d="M28 52 L32 92 Q32 96 36 96 L84 96 Q88 96 88 92 L92 52 Z" stroke="#1C1410" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
        {/* top rim line */}
        <line x1="28" y1="52" x2="92" y2="52" stroke="#1C1410" strokeWidth="1.4" strokeLinecap="round"/>
        {/* subtle center seam */}
        <line x1="60" y1="52" x2="60" y2="96" stroke="#1C1410" strokeWidth="0.7" opacity="0.3"/>
        {/* bottom panel line */}
        <line x1="32" y1="84" x2="88" y2="84" stroke="#1C1410" strokeWidth="0.8" opacity="0.35"/>
        {/* small clasp */}
        <rect x="54" y="58" width="12" height="7" rx="1" stroke="#1C1410" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'SHOULDER BAGS',
    href: '/products?category=shoulder',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
        {/* strap */}
        <path d="M44 46 Q38 24 52 22 Q66 20 68 36" stroke="#1C1410" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        {/* body — hobo rounded shape */}
        <path d="M26 56 Q22 88 60 94 Q98 88 94 56 Q90 38 60 38 Q30 38 26 56Z" stroke="#1C1410" strokeWidth="1.4" fill="none"/>
        {/* front pocket */}
        <path d="M38 64 Q38 80 60 82 Q82 80 82 64 Q82 56 60 56 Q38 56 38 64Z" stroke="#1C1410" strokeWidth="0.9" fill="none" opacity="0.5"/>
        {/* clasp circle */}
        <circle cx="60" cy="62" r="5" stroke="#1C1410" strokeWidth="1.2" fill="none"/>
        <circle cx="60" cy="62" r="2" fill="#1C1410" opacity="0.3"/>
        {/* stitching top curve */}
        <path d="M34 54 Q34 44 60 44 Q86 44 86 54" stroke="#1C1410" strokeWidth="0.7" fill="none" opacity="0.3" strokeDasharray="2 3"/>
      </svg>
    ),
  },
  {
    label: 'SLING BAGS',
    href: '/products?category=sling',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
        {/* strap going over shoulder */}
        <path d="M72 30 Q84 22 88 34 Q90 42 84 46" stroke="#1C1410" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        {/* body — slightly asymmetric crescent */}
        <path d="M30 58 Q26 84 50 94 Q74 100 86 80 Q96 62 82 46 Q70 34 52 38 Q32 44 30 58Z" stroke="#1C1410" strokeWidth="1.4" fill="none"/>
        {/* front zip line */}
        <path d="M40 68 Q46 84 62 88 Q78 84 82 70" stroke="#1C1410" strokeWidth="0.9" fill="none" opacity="0.45"/>
        {/* zip pull */}
        <circle cx="62" cy="88" r="3" stroke="#1C1410" strokeWidth="1" fill="none"/>
        {/* strap connector */}
        <rect x="78" y="42" width="8" height="6" rx="1.5" stroke="#1C1410" strokeWidth="1" fill="none"/>
        {/* buckle detail */}
        <rect x="46" y="54" width="14" height="9" rx="1.5" stroke="#1C1410" strokeWidth="1" fill="none"/>
        <line x1="46" y1="58.5" x2="60" y2="58.5" stroke="#1C1410" strokeWidth="0.8"/>
      </svg>
    ),
  },
  {
    label: 'CLUTCHES',
    href: '/products?category=clutch',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
        {/* main body */}
        <rect x="18" y="38" width="84" height="52" rx="5" stroke="#1C1410" strokeWidth="1.4" fill="none"/>
        {/* flap fold line */}
        <path d="M18 56 Q60 70 102 56" stroke="#1C1410" strokeWidth="1" fill="none" opacity="0.5"/>
        {/* clasp hardware */}
        <rect x="50" y="50" width="20" height="12" rx="2" stroke="#1C1410" strokeWidth="1.2" fill="none"/>
        <rect x="55" y="54" width="10" height="4" rx="1" stroke="#1C1410" strokeWidth="0.9" fill="none"/>
        {/* stitching border */}
        <rect x="22" y="42" width="76" height="44" rx="3" stroke="#1C1410" strokeWidth="0.6" fill="none" opacity="0.25" strokeDasharray="2 3"/>
        {/* bottom panel */}
        <line x1="18" y1="78" x2="102" y2="78" stroke="#1C1410" strokeWidth="0.8" opacity="0.3"/>
        {/* wrist loop */}
        <path d="M70 38 Q70 28 78 28 Q86 28 86 38" stroke="#1C1410" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: 'WALLETS',
    href: '/products?category=wallet',
    icon: (
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
        {/* outer body */}
        <rect x="16" y="34" width="88" height="56" rx="5" stroke="#1C1410" strokeWidth="1.4" fill="none"/>
        {/* fold line — bifold */}
        <line x1="60" y1="34" x2="60" y2="90" stroke="#1C1410" strokeWidth="1" opacity="0.35"/>
        {/* card slots left */}
        <rect x="22" y="44" width="32" height="10" rx="2" stroke="#1C1410" strokeWidth="0.9" fill="none" opacity="0.6"/>
        <rect x="22" y="58" width="32" height="10" rx="2" stroke="#1C1410" strokeWidth="0.9" fill="none" opacity="0.4"/>
        <rect x="22" y="72" width="32" height="10" rx="2" stroke="#1C1410" strokeWidth="0.9" fill="none" opacity="0.25"/>
        {/* coin pocket right */}
        <rect x="66" y="44" width="32" height="38" rx="3" stroke="#1C1410" strokeWidth="1" fill="none" opacity="0.5"/>
        {/* coin pocket clasp */}
        <path d="M76 44 Q82 38 88 44" stroke="#1C1410" strokeWidth="1" fill="none" strokeLinecap="round"/>
        {/* press stud */}
        <circle cx="82" cy="63" r="4" stroke="#1C1410" strokeWidth="1" fill="none"/>
        <circle cx="82" cy="63" r="1.5" fill="#1C1410" opacity="0.4"/>
        {/* stitching */}
        <rect x="20" y="38" width="80" height="48" rx="3" stroke="#1C1410" strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="2 3"/>
      </svg>
    ),
  },
];

export function CategorySection() {
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
        }
        .nk-cat-card:hover {
          background-color: #E8E0D0;
        }
        .nk-cat-card-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: #1C1410;
          text-transform: uppercase;
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
          {categories.map((cat) => (
            <Link key={cat.label} href={cat.href} className="nk-cat-card">
              {cat.icon}
              <span className="nk-cat-card-label">{cat.label}</span>
            </Link>
          ))}

          {/* VIEW ALL — dark card */}
          <Link href="/products" className="nk-view-all-card">
            <span className="nk-view-all-text">VIEW ALL</span>
            <span className="nk-view-all-arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}