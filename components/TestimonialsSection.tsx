'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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

// Duplicate for infinite loop effect
const looped = [...reviews, ...reviews];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = reviews.length;
  const cardWidthPercent = 75; // visible card takes 75% of track width

  const goTo = (index: number) => {
    // Wrap around using modulo
    const next = ((index % total) + total) % total;
    setCurrent(next);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Smooth scroll to current card
    const cardWidth = track.scrollWidth / looped.length;
    track.scrollTo({ left: cardWidth * current, behavior: 'smooth' });
  }, [current]);

  return (
    <section className="relative overflow-hidden bg-bg px-6 py-20 lg:px-12 lg:py-28">
      <div className="studio-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1600px]">

        {/* Header */}
        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-fg-muted" />
              <span className="font-mono text-xs tracking-widest-plus text-fg-muted">
                TESTIMONIAL
              </span>
            </div>
            <h2 className="display text-[clamp(32px,5vw,80px)] leading-[0.9] text-fg">
              WHAT THEY CARRY<br />
              <span className="inline-flex items-center gap-4">
                <span className="hidden h-[3px] w-16 bg-fg lg:inline-block" />
                AND WHY
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-6 lg:items-end">
            <p className="max-w-sm text-base leading-relaxed text-fg-muted lg:text-right">
              Explore what our customers say — honest stories from people who carry NKHANDBAG every day.
            </p>
          </div>
        </div>

        {/* Slider track — hides scrollbar */}
        <div
          ref={trackRef}
          className="flex gap-5 overflow-x-hidden"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {looped.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="flex-shrink-0"
              style={{
                width: `${cardWidthPercent}%`,
                scrollSnapAlign: 'start',
              }}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center gap-6">
          {/* Prev */}
          <button
            onClick={() => goTo(current - 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-all duration-200 hover:border-fg hover:text-fg"
            aria-label="Previous review"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-fg'
                    : 'w-2 bg-fg-subtle hover:bg-fg-muted'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => goTo(current + 1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-all duration-200 hover:border-fg hover:text-fg"
            aria-label="Next review"
          >
            →
          </button>

          {/* Counter */}
          <span className="ml-auto font-mono text-xs tracking-widest-plus text-fg-subtle">
            {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Review Card ─────────────────────────────────────────────────────────────

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
    <div className="flex h-full overflow-hidden rounded-sm bg-white">
      {/* Left — image */}
      <div className="relative hidden w-[38%] flex-shrink-0 sm:block">
        {review.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={review.image}
            alt={review.name}
            className="h-full w-full object-cover grayscale"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-neutral-200 via-neutral-300 to-neutral-200" />
        )}
      </div>

      {/* Right — content */}
      <div className="flex flex-col justify-between p-8 lg:p-10">
        {/* Quote mark */}
        <div>
          <div className="mb-6 text-4xl font-black leading-none text-black">"</div>
          <h3 className="display mb-4 text-[clamp(18px,2vw,28px)] leading-tight text-black">
            {review.title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500 lg:text-base">
            {review.text}
          </p>
        </div>

        {/* Author */}
        <div className="mt-8 border-t border-neutral-100 pt-6">
          <p className="display text-sm text-black lg:text-base">{review.name}</p>
          <p className="mt-1 font-mono text-xs tracking-widest text-neutral-400">
            {review.label}
          </p>
        </div>
      </div>
    </div>
  );
}