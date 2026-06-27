'use client';

import { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    id: 1,
    name: 'HANIFA MAULINA',
    label: 'Customer 01',
    title: 'Inside The Creator Series: A Journey Unfolds',
    text: 'Local creators efficiently organize their equipment to maximize productivity and creativity throughout their busy workdays. The NKHANDBAG tote has been my daily companion for over a year now.',
    image: null,
  },
  {
    id: 2,
    name: 'PRIYA SHARMA',
    label: 'Customer 02',
    title: 'Craftsmanship That Speaks For Itself',
    text: 'I have been searching for a bag that is both functional and elegant. NKHANDBAG delivered exactly that. The stitching, the leather, the hardware — every detail is intentional and beautifully executed.',
    image: null,
  },
  {
    id: 3,
    name: 'ARJUN MEHTA',
    label: 'Customer 03',
    title: 'Mumbai Made, World Ready',
    text: 'What surprised me most was how well the bag holds its shape even after months of daily use. It still looks brand new. I get compliments everywhere I take it — from office meetings to weekend trips.',
    image: null,
  },
  {
    id: 4,
    name: 'SARA KHAN',
    label: 'Customer 04',
    title: 'Worth Every Rupee And Then Some',
    text: 'The shoulder bag I ordered exceeded every expectation. The leather has a warmth and texture that you cannot find in mass-produced bags. This is what genuine craftsmanship feels like.',
    image: null,
  },
];

const looped = [...reviews, ...reviews];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = reviews.length;

  // touch tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const goTo = (index: number) => {
    const next = ((index % total) + total) % total;
    setCurrent(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.scrollWidth / looped.length;
    track.scrollTo({ left: cardWidth * current, behavior: 'smooth' });
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      // swipe left → next, swipe right → prev
      goTo(diff > 0 ? current + 1 : current - 1);
    }
  };

  return (
    <>
      <style>{`
        .nk-testimonials-section {
          background: radial-gradient(ellipse at 70% 35%, #C4A48A 0%, #AA8A70 45%, #8A6A50 100%);
          position: relative;
          overflow: hidden;
        }
        .nk-test-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          color: rgba(245,239,230,0.45);
          letter-spacing: 0.25em;
          font-size: 10px;
          text-transform: uppercase;
        }
        .nk-test-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 300;
          color: #F5EFE6;
          letter-spacing: -0.01em;
          line-height: 0.92;
        }
        .nk-test-subtext {
          font-family: var(--font-outfit), sans-serif;
          color: rgba(245,239,230,0.5);
          font-size: 15px;
          line-height: 1.6;
        }
        .nk-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(245,239,230,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F5EFE6;
          font-size: 16px;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .nk-nav-btn:hover {
          background: rgba(245,239,230,0.08);
          border-color: rgba(245,239,230,0.5);
        }
        .nk-dot {
          height: 4px;
          border-radius: 9999px;
          background: rgba(245,239,230,0.25);
          transition: all 0.3s;
          cursor: pointer;
          border: none;
          padding: 0;
          width: 8px;
        }
        .nk-dot.active {
          width: 32px;
          background: #F5EFE6;
        }
        .nk-counter {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: rgba(245,239,230,0.3);
        }
        .nk-review-card {
          background: #FFFFFF;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          height: 100%;
        }
        .nk-card-img-placeholder {
          background: linear-gradient(160deg, #C4A882 0%, #9A7455 60%, #7A5538 100%);
          width: 38%;
          flex-shrink: 0;
          min-height: 280px;
        }
        .nk-card-content {
          padding: 2rem 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .nk-card-quote {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
          color: #1C1410;
          margin-bottom: 0.75rem;
        }
        .nk-card-title {
          font-family: var(--font-outfit), sans-serif;
          font-weight: 600;
          font-size: clamp(14px, 1.6vw, 20px);
          line-height: 1.25;
          color: #1C1410;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .nk-card-text {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          line-height: 1.65;
          color: #6B5B45;
        }
        .nk-card-author-name {
          font-family: var(--font-outfit), sans-serif;
          font-weight: 600;
          font-size: 13px;
          color: #1C1410;
          letter-spacing: 0.05em;
        }
        .nk-card-author-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #9A8A74;
          margin-top: 2px;
        }
        .nk-card-divider {
          border: none;
          border-top: 1px solid #F0EBE1;
          margin: 1.25rem 0 1rem;
        }
      `}</style>

      <section className="nk-testimonials-section px-6 py-20 lg:px-12 lg:py-28">
        <div className="relative mx-auto max-w-[1600px]">

          {/* Header — no buttons here anymore */}
          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: 'rgba(245,239,230,0.35)' }} />
                <span className="nk-test-eyebrow">Testimonial</span>
              </div>
              <h2 className="nk-test-heading text-[clamp(32px,5vw,80px)]">
                WHAT THEY CARRY<br />
                <span className="inline-flex items-center gap-4">
                  <span className="hidden h-[2px] w-16 lg:inline-block" style={{ backgroundColor: 'rgba(245,239,230,0.25)' }} />
                  AND WHY
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <p className="nk-test-subtext max-w-sm lg:text-right">
                Explore what our customers say — honest stories from people who carry NKHANDBAG every day.
              </p>
            </div>
          </div>

          {/* Slider — touch events for mobile swipe */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-hidden"
            style={{ scrollSnapType: 'x mandatory' }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {looped.map((review, i) => (
              <div
                key={`${review.id}-${i}`}
                className="flex-shrink-0"
                style={{ width: '75%', scrollSnapAlign: 'start' }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Controls — dots + prev/next only on desktop */}
          <div className="mt-10 flex items-center gap-4">

            {/* prev/next — desktop only */}
            <button
              className="nk-nav-btn hidden lg:flex"
              onClick={() => goTo(current - 1)}
              aria-label="Previous"
            >
              ←
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`nk-dot ${i === current ? 'active' : ''}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="nk-nav-btn hidden lg:flex"
              onClick={() => goTo(current + 1)}
              aria-label="Next"
            >
              →
            </button>

            <span className="nk-counter ml-auto">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
          </div>

        </div>
      </section>
    </>
  );
}

type Review = {
  id: number;
  name: string;
  label: string;
  title: string;
  text: string;
  image: string | null;
};

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="nk-review-card">
      <div className="nk-card-img-placeholder hidden sm:block">
        {review.image && (
          <img src={review.image} alt={review.name} className="h-full w-full object-cover" />
        )}
      </div>
      <div className="nk-card-content flex-1">
        <div>
          <div className="nk-card-quote">"</div>
          <h3 className="nk-card-title">{review.title}</h3>
          <p className="nk-card-text">{review.text}</p>
        </div>
        <div>
          <hr className="nk-card-divider" />
          <p className="nk-card-author-name">{review.name}</p>
          <p className="nk-card-author-label">{review.label}</p>
        </div>
      </div>
    </div>
  );
}