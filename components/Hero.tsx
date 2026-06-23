'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/design/motion';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.from(
        '.hero-left > *',
        { opacity: 0, y: 32, duration: 1, stagger: 0.08 },
        0.2
      )
        .from(
          '.hero-card',
          { opacity: 0, y: 24, scale: 0.92, duration: 0.85, stagger: 0.1 },
          0.3
        )
        .from(
          '.hero-right > *',
          { opacity: 0, y: 32, duration: 1, stagger: 0.08 },
          0.4
        )
        .from(
          '.hero-sparkle',
          { opacity: 0, scale: 0, duration: 0.6, ease: 'back.out(2)' },
          1
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-12 lg:py-16"
    >
      {/* Subtle grid lines */}
      <div className="studio-grid pointer-events-none absolute inset-0" />

      {/* ── MOBILE LAYOUT ── */}
      <div className="relative mx-auto max-w-[1600px] lg:hidden">

        {/* Brand name — top */}
        <div className="hero-right mb-8">
          <h2 className="display text-[clamp(40px,12vw,68px)] leading-[0.88] text-fg">
            NK HAND BAG
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Bespoke designs and personal design curation.{' '}
            <span className="text-fg">Mumbai, India.</span>
          </p>
        </div>

        {/* Polaroid stack — center */}
        <div className="flex justify-center">
          <div className="relative aspect-[3/4] w-[200px] sm:w-[240px]">
            <div className="hero-card absolute inset-0 -translate-x-[4%] -rotate-[8deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="h-full w-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800" />
            </div>
            <div className="hero-card absolute inset-0 translate-x-[4%] rotate-[6deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="h-full w-full bg-gradient-to-br from-neutral-700 to-neutral-900" />
            </div>
            <div className="hero-card absolute inset-0 -translate-x-[2%] -rotate-[3deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="h-full w-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
            </div>
            <div className="hero-card absolute inset-0 rotate-[1deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="relative h-full w-full bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(212,197,160,0.12),transparent_60%)]" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA — bottom */}
        <div className="hero-left mt-8">
          <h1 className="display text-[clamp(40px,12vw,68px)] leading-[0.88] text-fg">
            CONTACT
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-fg-muted">
            Get in touch for inquiries, bulk orders, and collaborations. Email us at{' '}
            <span className="font-medium text-fg">hello@nkhandbag.com</span>.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-fg px-6 py-3 font-mono text-[10px] tracking-widest-plus text-bg transition-all duration-300 hover:bg-accent-warm"
            >
              SUBMIT INQUIRY
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 font-mono text-[10px] tracking-widest-plus text-fg-muted transition-colors hover:text-fg"
            >
              CONTACT US
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="relative mx-auto hidden max-w-[1600px] items-center gap-10 lg:grid lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)_minmax(0,1fr)]">

        {/* LEFT — CONTACT */}
        <div className="hero-left flex h-full flex-col justify-end pb-[calc(12%+8px)]">
          <h1 className="display whitespace-nowrap text-[clamp(62px,7.2vw,122px)] text-fg">
            CONTACT
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-fg-muted">
            Get in touch with the NKHandBag team for inquiries, bulk orders, and collaboration requests. Or email us directly at{' '}
            <span className="font-medium text-fg">hello@nkhandbag.com</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-fg px-8 py-3.5 font-mono text-xs tracking-widest-plus text-bg transition-all duration-300 hover:scale-[1.02] hover:bg-accent-warm"
            >
              SUBMIT INQUIRY
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 font-mono text-xs tracking-widest-plus text-fg-muted transition-colors hover:text-fg"
            >
              CONTACT US
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* CENTER — POLAROID STACK */}
        <div className="flex h-full items-start justify-center pt-12">
          <div className="relative aspect-[3/4] w-[300px] lg:w-[420px] xl:w-[460px]">
            <div className="hero-card absolute inset-0 -translate-x-[4%] -translate-y-[1%] -rotate-[8deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="polaroid-photo h-full w-full bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800" />
            </div>
            <div className="hero-card absolute inset-0 translate-x-[4%] translate-y-[1%] rotate-[6deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="polaroid-photo h-full w-full bg-gradient-to-br from-neutral-700 to-neutral-900" />
            </div>
            <div className="hero-card absolute inset-0 -translate-x-[2%] -rotate-[3deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="polaroid-photo h-full w-full bg-gradient-to-br from-neutral-800 via-neutral-700 to-neutral-900" />
            </div>
            <div className="hero-card absolute inset-0 rotate-[1deg] rounded-sm bg-fg p-1.5 shadow-luxe-2">
              <div className="polaroid-photo relative h-full w-full bg-gradient-to-br from-neutral-600 via-neutral-800 to-neutral-900">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(212,197,160,0.12),transparent_60%)]" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — BRAND */}
        <div className="hero-right flex h-full flex-col items-end justify-end pb-[calc(12%+5px)] text-right">
          <h2 className="display whitespace-nowrap text-[clamp(54px,6.2vw,104px)] text-fg">
            NK HAND BAG
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-fg-muted">
            Bespoke designs and personal design curation. Learn about our legacy.{' '}
            <span className="text-fg">NK Hand Bag — Mumbai, India.</span>
          </p>
        </div>

        {/* Sparkle */}
        <div className="hero-sparkle pointer-events-none absolute bottom-4 right-4">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 0 L12 10 L22 11 L12 12 L11 22 L10 12 L0 11 L10 10 Z"
              fill="var(--accent-warm)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}