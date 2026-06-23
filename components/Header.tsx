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
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="relative z-50 bg-bg px-6 py-6 lg:px-12 lg:py-8">
        {/* Mobile: simple flex (logo + hamburger) */}
        <div className="mx-auto flex max-w-[1600px] items-center justify-between lg:hidden">
          <Link href="/" className="font-display text-xl tracking-wider">
            NKHANDBAG
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className={clsx(
                'h-px w-6 bg-fg transition-transform duration-300',
                open && 'translate-y-2 rotate-45'
              )}
            />
            <span
              className={clsx(
                'h-px w-6 bg-fg transition-opacity duration-200',
                open && 'opacity-0'
              )}
            />
            <span
              className={clsx(
                'h-px w-6 bg-fg transition-transform duration-300',
                open && '-translate-y-2 -rotate-45'
              )}
            />
          </button>
        </div>

        {/* Desktop: 3-column grid for true center alignment */}
        <div className="mx-auto hidden max-w-[1600px] grid-cols-3 items-center lg:grid">
          <Link
            href="/"
            className="justify-self-start font-display text-2xl tracking-wider transition-colors hover:text-accent-warm"
          >
            NKHANDBAG
          </Link>

          <nav className="flex justify-self-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-widest-plus text-fg-muted transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span className="justify-self-end font-mono text-xs tracking-widest-plus text-fg-muted">
            MUMBAI · INDIA
          </span>
        </div>
      </header>

      {/* Mobile nav overlay */}
      <div
        className={clsx(
          'fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        )}
      >
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-5xl tracking-wider text-fg transition-colors hover:text-accent-warm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <span className="mt-16 font-mono text-xs tracking-widest-plus text-fg-muted">
          MUMBAI · INDIA
        </span>
      </div>
    </>
  );
}
