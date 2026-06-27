'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/design/motion';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.from('.hero-copy > *', { opacity: 0, y: 24, duration: 1.1, stagger: 0.1 }, 0.15);
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden flex items-center"
      style={{ background: '#F5EFE6', minHeight: 'calc(100vh - 64px)' }}
    >
      {/* ── BACKGROUND IMAGE ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <img
          src="/images/hero-bg.png"
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            /* mobile: center on the bag */
            objectPosition: '65% center',
          }}
        />
        {/* overlay: left opaque for text, right transparent to show bag */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(
              to right,
              rgba(245,239,230,0.95) 0%,
              rgba(245,239,230,0.75) 35%,
              rgba(245,239,230,0.15) 65%,
              rgba(245,239,230,0.05) 100%
            )`,
          }}
        />
      </div>

      {/* mobile overlay — keep text readable over the bag */}
      <style>{`
        @media (max-width: 767px) {
          .nk-hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(245,239,230,0.92) 0%,
              rgba(245,239,230,0.60) 50%,
              rgba(245,239,230,0.92) 100%
            ) !important;
          }
          .nk-hero-bg img {
            object-position: 75% center !important;
          }
        }
      `}</style>

      {/* ── CONTENT ── */}
      <div className="hero-copy relative z-10 flex flex-col justify-center px-8 py-16 lg:px-20 max-w-[600px]">

        <p
          className="mb-6 text-[10px] uppercase tracking-[0.25em]"
          style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', color: '#7A6A55' }}
        >
          Custom made. Just for you.
        </p>

        <h1
          className="mb-7"
          style={{
            fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
            fontWeight: 300,
            fontSize: 'clamp(68px, 9vw, 120px)',
            lineHeight: 0.92,
            color: '#1C1410',
            letterSpacing: '-0.01em',
          }}
        >
          NK HAND<br />BAG
        </h1>

        <p
          className="mb-10 text-[15px] leading-relaxed max-w-[240px]"
          style={{ color: '#6B5B45', fontFamily: 'var(--font-outfit), sans-serif' }}
        >
          Bespoke designs and personalized perfection.{' '}
          <span style={{ color: '#1C1410', fontWeight: 500 }}>Mumbai, India.</span>
        </p>

        <div className="mb-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]"
            style={{
              border: '1.5px solid #1C1410',
              borderRadius: '100px',
              padding: '12px 24px',
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#1C1410',
              textDecoration: 'none',
            }}
          >
            Contact Us
            <span
              className="inline-flex items-center justify-center rounded-full"
              style={{ width: '28px', height: '28px', background: '#1C1410', color: '#F5EFE6', fontSize: '13px' }}
            >
              →
            </span>
          </Link>
        </div>

        <p style={{ fontFamily: 'var(--font-jetbrains-mono), monospace', fontSize: '11px', letterSpacing: '0.1em', color: '#9A8A74' }}>
          nkhandbag@gmail.com
        </p>
      </div>
    </section>
  );
}