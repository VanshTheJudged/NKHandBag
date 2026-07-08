'use client';

import { useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { supabase, type Review } from '@/lib/supabase';

function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={n <= rating ? '#3D4A28' : 'none'}
          stroke="#3D4A28"
          strokeWidth={1.5}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function StarInput({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? value;

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(null)}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          className="p-0.5"
        >
          <svg
            width={26}
            height={26}
            viewBox="0 0 24 24"
            fill={n <= active ? '#3D4A28' : 'none'}
            stroke="#3D4A28"
            strokeWidth={1.5}
            className="transition-colors"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function pickRandomFiveStar(reviews: Review[], count: number): Review[] {
  const fiveStar = reviews.filter((r) => r.rating === 5);
  const shuffled = [...fiveStar].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function ReviewsPage() {
  const [displayed, setDisplayed] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>(
    'idle'
  );

  async function loadReviews() {
    setLoading(true);
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setDisplayed(pickRandomFiveStar(data, 3));
    }
    setLoading(false);
  }

  useEffect(() => {
    loadReviews();
  }, []);

  const canSubmit = useMemo(
    () => name.trim().length > 0 && rating > 0 && message.trim().length > 0,
    [name, rating, message]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      setStatus('error');
      return;
    }

    setStatus('submitting');

    const { error } = await supabase.from('reviews').insert({
      name: name.trim(),
      rating,
      message: message.trim(),
    });

    if (error) {
      console.error(error);
      setStatus('error');
      return;
    }

    setName('');
    setRating(0);
    setMessage('');
    setStatus('submitted');

    await loadReviews();
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-[#1E2318] px-6 py-24 text-center">
        <p className="eyebrow mb-4 text-[#F5EFE6]/50">reviews</p>
        <h1 className="display text-6xl text-[#F5EFE6]">What People Say</h1>
        <p className="mt-4 max-w-xl mx-auto text-[#F5EFE6]/60">
          Real feedback from businesses and individuals we&apos;ve made custom bags,
          caps, and merchandise for.
        </p>
      </section>

      {/* Form + reviews */}
      <section className="bg-[#F5EFE6] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-[#3D4A28]">leave a review</p>
          <h2 className="display text-4xl text-[#1E2318] mb-10">
            Share Your Experience
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="eyebrow block mb-2 text-[#1E2318]/60">name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full bg-transparent border-b border-[#1E2318]/20 py-2 text-sm text-[#1E2318] placeholder:text-[#1E2318]/40 focus:outline-none focus:border-[#1E2318]"
              />
            </div>

            <div>
              <label className="eyebrow block mb-2 text-[#1E2318]/60">
                your rating
              </label>
              <StarInput value={rating} onChange={setRating} />
            </div>

            <div>
              <label className="eyebrow block mb-2 text-[#1E2318]/60">
                message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your experience..."
                rows={4}
                className="w-full bg-transparent border-b border-[#1E2318]/20 py-2 text-sm text-[#1E2318] placeholder:text-[#1E2318]/40 focus:outline-none focus:border-[#1E2318] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center gap-2 bg-[#1E2318] text-[#F5EFE6] px-6 py-3 text-xs tracking-widest uppercase hover:bg-[#1E2318]/90 transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'Posting...' : 'Post Review'}
              <span aria-hidden>→</span>
            </button>

            {status === 'submitted' && (
              <p className="text-sm text-[#3D4A28]">
                Thank you — your review has been posted.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-700">
                Something went wrong. Make sure your name, rating, and message are
                filled in, then try again.
              </p>
            )}
          </form>
        </div>

        {/* Displayed reviews */}
        <div className="mx-auto max-w-6xl mt-24">
          <p className="eyebrow mb-4 text-[#3D4A28]">from our customers</p>
          <h3 className="display text-3xl text-[#1E2318] mb-10">
            Loved by Businesses Like Yours
          </h3>

          {loading ? (
            <p className="text-sm text-[#1E2318]/50">Loading reviews...</p>
          ) : displayed.length === 0 ? (
            <p className="text-sm text-[#1E2318]/50">
              No 5-star reviews yet — be the first to leave one above.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {displayed.map((r) => (
                <div
                  key={r.id}
                  className="bg-white/60 border border-[#1E2318]/10 p-6 flex flex-col gap-4"
                >
                  <StarRating rating={r.rating} />
                  <p className="text-sm text-[#1E2318]/80 leading-relaxed">
                    &ldquo;{r.message}&rdquo;
                  </p>
                  <div className="mt-auto pt-2 border-t border-[#1E2318]/10">
                    <p className="text-sm font-medium text-[#1E2318]">{r.name}</p>
                    <p className="text-xs text-[#1E2318]/50">
                      {new Date(r.created_at).toLocaleDateString('en-IN', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}