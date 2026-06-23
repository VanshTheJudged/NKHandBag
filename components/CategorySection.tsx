'use client';

import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { label: 'TOTES', href: '/products?category=tote' },
  { label: 'SHOULDER BAGS', href: '/products?category=shoulder' },
  { label: 'SLING BAGS', href: '/products?category=sling' },
  { label: 'CLUTCHES', href: '/products?category=clutch' },
  { label: 'WALLETS', href: '/products?category=wallet' },
];

export function CategorySection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT — white bg, dark text */}
      <div className="relative flex flex-col justify-between bg-white px-6 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-20">

        <div className="relative">
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-2 lg:mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
            <span className="font-mono text-xs tracking-widest-plus text-red-600">
              CATEGORY
            </span>
          </div>

          {/* Title */}
          <h2 className="display mb-8 text-[clamp(36px,8vw,72px)] leading-[0.9] text-black lg:mb-14">
            FIND YOUR<br />PERFECT BAG
          </h2>

          {/* Category list */}
          <ul className="flex flex-col">
            {categories.map((cat, i) => (
              <li key={cat.label}>
                <Link
                  href={cat.href}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex items-center justify-between border-t border-neutral-200 py-4 transition-colors hover:border-neutral-400 lg:py-6"
                >
                  <span
                    className={`display text-[clamp(24px,6vw,56px)] leading-none transition-colors duration-200 ${
                      hovered === null || hovered === i
                        ? 'text-black'
                        : 'text-neutral-300'
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span className="translate-x-2 font-mono text-sm text-neutral-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              </li>
            ))}
            <li className="border-t border-neutral-200" />
          </ul>
        </div>

        {/* VIEW MORE — smaller on mobile */}
        <div className="mt-10 lg:mt-14">
          <Link
            href="/products"
            className="group flex h-16 w-16 items-center justify-center rounded-full bg-black transition-transform duration-300 hover:scale-110 lg:h-20 lg:w-20"
          >
            <span className="text-center font-mono text-[9px] leading-tight tracking-widest text-white lg:text-[10px]">
              VIEW<br />MORE
            </span>
          </Link>
        </div>
      </div>

      {/* RIGHT — image placeholder, hidden on mobile */}
      <div className="relative hidden items-center justify-center bg-neutral-100 lg:flex lg:min-h-full">
        {/*
          TODO: Replace with real image:
          <Image src="/category-hero.jpg" alt="Category" fill className="object-cover" />
        */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#D1D5DB" strokeWidth="1.5" />
              <path d="M3 9l4-4 4 4 4-6 4 6" stroke="#D1D5DB" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="8.5" cy="6.5" r="1.5" fill="#D1D5DB" />
            </svg>
          </div>
          <p className="font-mono text-xs tracking-widest text-neutral-400">
            IMAGE COMING SOON
          </p>
        </div>
      </div>

    </section>
  );
}