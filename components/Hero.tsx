'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useCallback } from 'react';
import { gsap } from '@/lib/design/motion';

const FRAME_IMAGES = [
  '/images/hero-bag-1.jpg',
  '/images/hero-bag-2.jpg',
  '/images/hero-bag-3.jpg',
  '/images/hero-bag-4.jpg',
  '/images/hero-bag-5.jpg',
];

const PLACEHOLDER_GRADIENTS = [
  'linear-gradient(145deg, #C9A07A 0%, #8B6347 50%, #5A3820 100%)',
  'linear-gradient(145deg, #A07850 0%, #6B4A30 50%, #3D2010 100%)',
  'linear-gradient(145deg, #B08860 0%, #7A5238 50%, #4A2818 100%)',
  'linear-gradient(145deg, #D4B080 0%, #9A7255 50%, #6A4228 100%)',
  'linear-gradient(145deg, #C29A6E 0%, #8A5F3E 50%, #52301A 100%)',
];

function randTilt(max = 7): number {
  const mag = Math.random() * (max - 1.5) + 1.5;
  return Math.random() > 0.5 ? mag : -mag;
}
function randXY(range = 6): { x: number; y: number } {
  return {
    x: (Math.random() - 0.5) * range,
    y: (Math.random() - 0.5) * range * 0.6,
  };
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const frameRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isAnimating = useRef(false);
  const topIndex = useRef(0);

  useEffect(() => {
    // h1 is the biggest text element and excluded from the fade — it needs
    // to be visible on first paint, not wait on GSAP.
    const copyEls = heroRef.current?.querySelectorAll('.hero-copy > *:not(h1)');
    if (copyEls) {
      gsap.set(copyEls, { opacity: 0, y: 24 });
      gsap.to(copyEls, {
        opacity: 1, y: 0,
        duration: 1.1, stagger: 0.1,
        ease: 'expo.out', delay: 0.15,
      });
    }

    frameRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i > 0) {
        const { x } = randXY(8);
        gsap.set(el, { rotation: randTilt(i * 2.5), x, y: 120, opacity: 0, scale: 0.93 });
      } else {
        // Frame 0 is the LCP element — keep it visible on first paint instead
        // of fading in from opacity:0, otherwise LCP waits on this animation
        // to run before it counts as "painted".
        gsap.set(el, { opacity: 1, y: 0, scale: 1 });
      }
    });

    frameRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === 0) return; // already visible, nothing to animate in
      gsap.to(el, {
        y: randXY(8).y,
        opacity: 1, scale: 1,
        duration: 1.1, delay: 0.4 + i * 0.09,
        ease: 'expo.out',
      });
    });
  }, []);

  const animateNextCard = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const total = FRAME_IMAGES.length;
    const topIdx = topIndex.current;
    const topEl = frameRefs.current[topIdx];
    if (!topEl) { isAnimating.current = false; return; }

    const landingTilt = randTilt(6);
    const landingOff = randXY(8);
    const tl = gsap.timeline();

    tl.to(topEl, {
      x: '-155%', y: 55, rotation: -24, scale: 0.86, opacity: 0,
      duration: 0.62, ease: 'power2.in',
    })
    .set(topEl, {
      x: landingOff.x, y: 130, rotation: landingTilt,
      scale: 0.94, opacity: 0, zIndex: 1,
    })
    .to(topEl, {
      y: landingOff.y, opacity: 1, duration: 0.65, ease: 'expo.out',
      onComplete: () => {
        topIndex.current = (topIdx + 1) % total;
        frameRefs.current.forEach((el, i) => {
          if (!el) return;
          const dist = (i - topIndex.current + total) % total;
          el.style.zIndex = String(total - dist);
          if (dist > 0 && dist < total - 1) {
            const { x, y } = randXY(6);
            gsap.to(el, {
              rotation: randTilt(dist * 2), x, y,
              duration: 0.45, ease: 'expo.out',
            });
          }
        });
        isAnimating.current = false;
      },
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(animateNextCard, 3200);
    return () => clearInterval(interval);
  }, [animateNextCard]);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden flex items-center"
      style={{
        background: '#C4A882',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      <style>{`
        .nk-hero-layout {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          min-height: calc(100vh - 64px);
        }
        @media (max-width: 1023px) {
          .nk-hero-layout { padding: 0 2rem; }
        }
        @media (max-width: 767px) {
          .nk-hero-layout {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2.5rem 1.25rem 3rem;
            gap: 2.5rem;
          }
        }

        .nk-text-side {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 3rem 4rem 0;
          max-width: 480px;
          position: relative;
          z-index: 2;
        }
        @media (max-width: 1023px) {
          .nk-text-side { max-width: 360px; padding: 3rem 2rem 3rem 0; }
        }
        @media (max-width: 767px) {
          .nk-text-side {
            max-width: 100%; width: 100%;
            padding: 0;
            align-items: flex-start;
            order: 1;
          }
        }

        .nk-divider {
          width: 1px;
          align-self: stretch;
          margin: 80px 0;
          flex-shrink: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(40,20,5,0.18) 20%,
            rgba(40,20,5,0.15) 50%,
            rgba(40,20,5,0.18) 80%,
            transparent 100%
          );
        }
        @media (max-width: 767px) { .nk-divider { display: none; } }

        .nk-card-side {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 0 4rem 3rem;
        }
        @media (max-width: 1023px) {
          .nk-card-side { padding: 3rem 0 3rem 2rem; }
        }
        @media (max-width: 767px) {
          .nk-card-side {
            width: 100%;
            padding: 0;
            flex: 0 0 auto;
            justify-content: center;
            order: 2;
          }
        }

        .nk-frames-wrap {
          position: relative;
          width: 340px; height: 415px;
        }
        @media (max-width: 1199px) {
          .nk-frames-wrap { width: 300px; height: 368px; }
        }
        @media (max-width: 1023px) {
          .nk-frames-wrap { width: 255px; height: 312px; }
        }
        @media (max-width: 767px) {
          .nk-frames-wrap { width: 240px; height: 294px; }
        }
        @media (max-width: 400px) {
          .nk-frames-wrap { width: 200px; height: 245px; }
        }

        .nk-frame {
          position: absolute; inset: 0;
          will-change: transform, opacity;
        }
        .nk-frame-inner {
          position: absolute; inset: 0; overflow: hidden;
        }
        .nk-frame-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }

        .nk-frame-border {
          position: absolute; pointer-events: none; z-index: 10; inset: -13px;
        }
        @media (max-width: 767px) {
          .nk-frame-border { inset: -10px; }
        }
        .nk-fb-h {
          position: absolute; left: 0; right: 0; height: 13px;
          background: linear-gradient(180deg,
            #F2E48A 0%, #C8920A 25%, #EAC840 50%, #A87010 75%, #D4A820 100%
          );
        }
        .nk-fb-v {
          position: absolute; top: 0; bottom: 0; width: 13px;
          background: linear-gradient(90deg,
            #F2E48A 0%, #C8920A 25%, #EAC840 50%, #A87010 75%, #D4A820 100%
          );
        }
        @media (max-width: 767px) {
          .nk-fb-h { height: 10px; }
          .nk-fb-v { width: 10px; }
        }
        .nk-fb-top    { top: 0; }
        .nk-fb-bottom { bottom: 0; }
        .nk-fb-left   { left: 0; }
        .nk-fb-right  { right: 0; }
        .nk-fb-corner { position: absolute; width: 13px; height: 13px; z-index: 2; }
        @media (max-width: 767px) { .nk-fb-corner { width: 10px; height: 10px; } }
        .nk-fb-corner-tl { top:0;    left:0;  background:#F2E48A; }
        .nk-fb-corner-tr { top:0;    right:0; background:#C8920A; }
        .nk-fb-corner-bl { bottom:0; left:0;  background:#C8920A; }
        .nk-fb-corner-br { bottom:0; right:0; background:#D4A820; }

        .nk-frame-outer-edge {
          position: absolute; inset: -14px;
          border: 1px solid rgba(60,35,5,0.35);
          pointer-events: none; z-index: 9;
        }
        .nk-frame-inner-edge {
          position: absolute; inset: -1px;
          border: 1px solid rgba(200,146,10,0.12);
          pointer-events: none; z-index: 12;
        }
        .nk-frame-bevel {
          position: absolute; inset: -1px;
          border: 1px solid rgba(60,35,5,0.25);
          pointer-events: none; z-index: 11;
        }
        .nk-frame-shadow {
          position: absolute; inset: -13px;
          box-shadow:
            0 0 0 1px rgba(100,60,10,0.12),
            0 20px 50px rgba(60,30,5,0.2),
            0 8px 20px rgba(60,30,5,0.14),
            0 3px 8px rgba(60,30,5,0.1);
          pointer-events: none; z-index: 0;
        }
        .nk-frame-sheen {
          position: absolute; inset: -13px;
          background: linear-gradient(
            130deg,
            rgba(255,245,160,0.1) 0%,
            rgba(255,245,160,0) 45%,
            rgba(255,245,160,0.04) 70%,
            rgba(255,245,160,0) 100%
          );
          pointer-events: none; z-index: 13;
        }
        .nk-frames-glow {
          position: absolute; inset: -80px;
          background: radial-gradient(
            ellipse at 50% 50%,
            rgba(180,130,10,0.08) 0%,
            transparent 65%
          );
          pointer-events: none; z-index: 0;
        }

        .hero-eyebrow-rule {
          display: block; width: 28px; height: 1px;
          background: rgba(80,45,10,0.35);
          margin-bottom: 12px;
        }
        .hero-eyebrow {
  color: #1A0D02 !important;
  font-weight: 600 !important;
  letter-spacing: 0.28em !important;
}
.hero-h1      { color: #1A0D02 !important; }
.hero-body    { color: #1A0D02 !important; font-weight: 400 !important; }
.hero-body-em { color: #1A0D02 !important; font-weight: 700 !important; }
.hero-email   { color: rgba(26,13,2,0.55) !important; }

.hero-trust {
  color: #1A0D02 !important;
  font-weight: 600 !important;
  letter-spacing: 0.14em !important;
}
.hero-trust-dot {
  display: inline-block;
  width: 3px; height: 3px;
  border-radius: 50%;
  background: rgba(26,13,2,0.5);
  margin: 0 8px;
  vertical-align: middle;
}

        .hero-cta {
          border: 1px solid rgba(40,20,5,0.22) !important;
          color: #2A1505 !important;
          background: rgba(40,20,5,0.04) !important;
          transition: all 0.3s ease !important;
        }
        .hero-cta:hover {
          border-color: rgba(40,20,5,0.4) !important;
          background: rgba(40,20,5,0.08) !important;
        }
        .hero-cta-arrow {
          background: rgba(40,20,5,0.08) !important;
          color: #5C3010 !important;
          border: 1px solid rgba(40,20,5,0.18) !important;
          transition: all 0.3s ease !important;
        }
        .hero-cta:hover .hero-cta-arrow {
          background: rgba(40,20,5,0.14) !important;
        }

        .nk-frame-dots {
          position: absolute; bottom: -28px; left: 50%;
          transform: translateX(-50%);
          display: flex; gap: 6px; z-index: 10;
        }
        .nk-frame-dot {
          width: 4px; height: 4px; border-radius: 50%;
          background: rgba(40,20,5,0.2);
          transition: background 0.4s, transform 0.4s;
        }
        .nk-frame-dot.active { background: #5C3010; transform: scale(1.5); }

        .nk-mobile-label {
          display: none;
          text-align: center;
          margin-top: 40px;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(60,30,8,0.35);
        }
        @media (max-width: 767px) { .nk-mobile-label { display: block; } }
      `}</style>

      <div className="nk-hero-layout">

        <div className="nk-text-side hero-copy">
          <span className="hero-eyebrow-rule" />
          <p
            className="hero-eyebrow mb-6 text-[10px] uppercase"
            style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
          >
            Custom made. Just for you.
          </p>

          <h1
            className="hero-h1 mb-7"
            style={{
              fontFamily: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(52px, 6.5vw, 108px)',
              lineHeight: 0.88,
              letterSpacing: '-0.015em',
            }}
          >
            NK<br />HAND<br />BAG
          </h1>

          <p
            className="hero-body mb-4 text-[13px] leading-relaxed"
            style={{ fontFamily: 'var(--font-outfit), sans-serif', maxWidth: '200px' }}
          >
            Bespoke designs and personalized perfection.{' '}
            <span className="hero-body-em" style={{ fontWeight: 500 }}>Mumbai, India.</span>
          </p>

          <p
            className="hero-trust mb-9 text-[10px] uppercase"
            style={{ fontFamily: 'var(--font-jetbrains-mono), monospace' }}
          >
            Trusted Craftsmanship<span className="hero-trust-dot" />Shipped Worldwide
          </p>

          <div className="mb-7">
            <Link
              href="/contact"
              className="hero-cta inline-flex items-center gap-3"
              style={{
                borderRadius: '100px',
                padding: '11px 20px 11px 24px',
                fontFamily: 'var(--font-jetbrains-mono), monospace',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Contact Us
              <span
                className="hero-cta-arrow inline-flex items-center justify-center rounded-full"
                style={{ width: '26px', height: '26px', fontSize: '12px', flexShrink: 0 }}
              >
                →
              </span>
            </Link>
          </div>

          <p
            className="hero-email"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), monospace',
              fontSize: '10px',
              letterSpacing: '0.12em',
            }}
          >
            nkhandbag@gmail.com
          </p>
        </div>

        <div className="nk-divider" />

        <div className="nk-card-side">
          <div style={{ position: 'relative' }}>
            <div className="nk-frames-wrap">
              <div className="nk-frames-glow" />
              {FRAME_IMAGES.map((src, i) => (
                <div
                  key={i}
                  ref={(el) => { frameRefs.current[i] = el; }}
                  className="nk-frame"
                  style={{ zIndex: FRAME_IMAGES.length - i }}
                >
                  <div className="nk-frame-shadow" />
                  <div className="nk-frame-inner">
                    {src ? (
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="nk-frame-img"
                        sizes="(max-width: 400px) 200px, (max-width: 767px) 240px, (max-width: 1023px) 255px, (max-width: 1199px) 300px, 340px"
                        priority={i === 0}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: PLACEHOLDER_GRADIENTS[i % PLACEHOLDER_GRADIENTS.length] }} />
                    )}
                  </div>
                  <div className="nk-frame-outer-edge" />
                  <div className="nk-frame-border">
                    <div className="nk-fb-h nk-fb-top" />
                    <div className="nk-fb-h nk-fb-bottom" />
                    <div className="nk-fb-v nk-fb-left" />
                    <div className="nk-fb-v nk-fb-right" />
                    <div className="nk-fb-corner nk-fb-corner-tl" />
                    <div className="nk-fb-corner nk-fb-corner-tr" />
                    <div className="nk-fb-corner nk-fb-corner-bl" />
                    <div className="nk-fb-corner nk-fb-corner-br" />
                  </div>
                  <div className="nk-frame-bevel" />
                  <div className="nk-frame-inner-edge" />
                  <div className="nk-frame-sheen" />
                </div>
              ))}
            </div>

            <DotsDisplay frameCount={FRAME_IMAGES.length} topIndexRef={topIndex} />
            <p className="nk-mobile-label">Handcrafted in Mumbai</p>
          </div>
        </div>

      </div>
    </section>
  );
}

function DotsDisplay({
  frameCount,
  topIndexRef,
}: {
  frameCount: number;
  topIndexRef: React.MutableRefObject<number>;
}) {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const update = () => {
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const active = i === topIndexRef.current;
        dot.style.background = active ? '#5C3010' : 'rgba(40,20,5,0.2)';
        dot.style.transform   = active ? 'scale(1.5)' : 'scale(1)';
      });
    };
    const interval = setInterval(update, 200);
    return () => clearInterval(interval);
  }, [topIndexRef]);

  return (
    <div className="nk-frame-dots">
      {Array.from({ length: frameCount }).map((_, i) => (
        <div key={i} ref={(el) => { dotsRef.current[i] = el; }} className="nk-frame-dot" />
      ))}
    </div>
  );
}