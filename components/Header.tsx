'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'PRODUCTS', href: '/products' },
  { label: 'REVIEWS', href: '/reviews' },
  { label: 'CONTACT', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* bg-[#2C3324] = deep olive, text-[#F0EBE1] = cream */}
      <header className="relative z-50 bg-[#2C3324] px-6 py-5 lg:px-12 lg:py-6">

        {/* Mobile */}
        <div className="mx-auto flex max-w-[1600px] items-center justify-between lg:hidden">
          <Link href="/" className="font-display text-xl tracking-wider text-[#F0EBE1]">
            NKHANDBAG
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className={clsx('h-px w-6 bg-[#F0EBE1] transition-transform duration-300', open && 'translate-y-2 rotate-45')} />
            <span className={clsx('h-px w-6 bg-[#F0EBE1] transition-opacity duration-200', open && 'opacity-0')} />
            <span className={clsx('h-px w-6 bg-[#F0EBE1] transition-transform duration-300', open && '-translate-y-2 -rotate-45')} />
          </button>
        </div>

        {/* Desktop — layout unchanged, colors swapped */}
        <div className="mx-auto hidden max-w-[1600px] grid-cols-3 items-center lg:grid">
          <Link
            href="/"
            className="justify-self-start font-display text-2xl tracking-wider text-[#F0EBE1] transition-colors hover:text-[#C49A6C]"
          >
            NKHANDBAG
          </Link>

          <nav className="flex justify-self-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-widest-plus text-[#A8A090] transition-colors hover:text-[#F0EBE1]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span className="justify-self-end font-mono text-xs tracking-widest-plus text-[#A8A090]">
            MUMBAI · INDIA
          </span>
        </div>
      </header>

      {/* Mobile nav overlay — cream bg with olive text */}
      <div
        className={clsx(
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#F0EBE1] transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl tracking-wider text-[#2C3324] transition-colors hover:text-[#C49A6C]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="mt-16 font-mono text-xs tracking-widest-plus text-[#7A7260]">
          MUMBAI · INDIA
        </span>
      </div>
    </>
  );
}