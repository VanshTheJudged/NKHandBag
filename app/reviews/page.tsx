'use client';

import { useEffect, useMemo, useState } from 'react';
import { Header } from '@/components/Header';
import { supabase, type Review } from '@/lib/supabase';

function pickRandomFiveStar(reviews: Review[], count: number): Review[] {
  const fiveStar = reviews.filter((r) => r.rating === 5);
  const shuffled = [...fiveStar].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={n <= rating ? '#1E2318' : 'none'}
          stroke="#1E2318"
          strokeOpacity={n <= rating ? 1 : 0.35}
          strokeWidth={1.4}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function StarInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const active = hovered ?? value;

  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(null)}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          style={{ background: 'none', border: 'none', padding: 2, cursor: 'pointer' }}
        >
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill={n <= active ? '#1E2318' : 'none'}
            stroke="#1E2318"
            strokeOpacity={n <= active ? 1 : 0.35}
            strokeWidth={1.4}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [displayed, setDisplayed] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) {
      setStatus('error');
      return;
    }

    setStatus('sending');

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
    setStatus('success');
    await loadReviews();
  };

  return (
    <>
      <style>{`
        .nk-reviews {
          background-color: #F5EFE6;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .nk-reviews-hero {
          background-color: #1E2318;
          padding: 5rem 1.25rem 4rem;
          text-align: center;
        }
        @media (min-width: 768px) {
          .nk-reviews-hero {
            padding: 7rem 3rem 5rem;
          }
        }
        .nk-reviews-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: rgba(245,239,230,0.35);
          text-transform: uppercase;
          margin: 0 0 1rem;
        }
        .nk-reviews-hero-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 400;
          font-size: clamp(36px, 8vw, 80px);
          color: #F5EFE6;
          line-height: 1;
          letter-spacing: -0.02em;
          margin: 0 0 1rem;
        }
        .nk-reviews-hero-sub {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          color: rgba(245,239,230,0.4);
          margin: 0 auto;
          max-width: 420px;
          line-height: 1.7;
        }

        /* ── FORM SECTION ── */
        .nk-reviews-form-section {
          max-width: 700px;
          margin: 0 auto;
          padding: 5rem 1.25rem 2rem;
        }
        @media (min-width: 768px) {
          .nk-reviews-form-section {
            padding: 6rem 3rem 2rem;
          }
        }
        .nk-reviews-section-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(30,35,24,0.35);
          text-transform: uppercase;
          margin: 0 0 1rem;
        }
        .nk-reviews-section-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 400;
          font-size: clamp(28px, 4vw, 40px);
          color: #1E2318;
          margin: 0 0 2.5rem;
          line-height: 1.1;
        }

        .nk-reviews-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .nk-reviews-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .nk-reviews-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          color: rgba(30,35,24,0.45);
          text-transform: uppercase;
        }
        .nk-reviews-input,
        .nk-reviews-textarea {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          color: #1E2318;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(30,35,24,0.2);
          border-radius: 0;
          padding: 0.6rem 0;
          outline: none;
          width: 100%;
          transition: border-color 0.2s;
        }
        .nk-reviews-input::placeholder,
        .nk-reviews-textarea::placeholder {
          color: rgba(30,35,24,0.25);
        }
        .nk-reviews-input:focus,
        .nk-reviews-textarea:focus {
          border-bottom-color: #1E2318;
        }
        .nk-reviews-textarea {
          resize: none;
          min-height: 110px;
          line-height: 1.7;
        }

        .nk-reviews-submit {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #F5EFE6;
          background: #1E2318;
          border: none;
          padding: 1rem 2.5rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          transition: opacity 0.2s;
          align-self: flex-start;
          margin-top: 0.25rem;
        }
        .nk-reviews-submit:hover {
          opacity: 0.75;
        }
        .nk-reviews-submit:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .nk-reviews-submit-arrow {
          font-size: 14px;
          transition: transform 0.25s;
        }
        .nk-reviews-submit:hover .nk-reviews-submit-arrow {
          transform: translateX(4px);
        }

        .nk-reviews-success {
          background: rgba(30,35,24,0.05);
          border-left: 2px solid #1E2318;
          padding: 1rem 1.25rem;
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: #1E2318;
          line-height: 1.6;
        }
        .nk-reviews-error {
          background: rgba(180,60,30,0.06);
          border-left: 2px solid #B43C1E;
          padding: 1rem 1.25rem;
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: #B43C1E;
          line-height: 1.6;
        }

        /* ── DISPLAYED REVIEWS ── */
        .nk-reviews-list-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 3rem 1.25rem 6rem;
        }
        @media (min-width: 768px) {
          .nk-reviews-list-section {
            padding: 3rem 3rem 7rem;
          }
        }
        .nk-reviews-empty {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: rgba(30,35,24,0.4);
        }
        .nk-reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .nk-reviews-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (min-width: 1024px) {
          .nk-reviews-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
        .nk-reviews-card {
          background: rgba(30,35,24,0.03);
          border: 1px solid rgba(30,35,24,0.1);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .nk-reviews-card-message {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(30,35,24,0.75);
          margin: 0;
        }
        .nk-reviews-card-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid rgba(30,35,24,0.1);
        }
        .nk-reviews-card-name {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 18px;
          font-weight: 400;
          color: #1E2318;
          margin: 0;
        }
        .nk-reviews-card-date {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(30,35,24,0.35);
          margin: 0.25rem 0 0;
        }
      `}</style>

      <div className="nk-reviews">
        <Header />

        {/* ── HERO ── */}
        <div className="nk-reviews-hero">
          <p className="nk-reviews-eyebrow">Reviews</p>
          <h1 className="nk-reviews-hero-heading">What People Say</h1>
          <p className="nk-reviews-hero-sub">
            Real feedback from businesses and individuals we've made custom bags,
            caps, and merchandise for.
          </p>
        </div>

        {/* ── FORM ── */}
        <div className="nk-reviews-form-section">
          <p className="nk-reviews-section-label">Leave a review</p>
          <h2 className="nk-reviews-section-heading">Share Your Experience</h2>

          {status === 'success' ? (
            <div className="nk-reviews-success">
              Thank you — your review has been posted.
            </div>
          ) : (
            <form className="nk-reviews-form" onSubmit={handleSubmit}>
              <div className="nk-reviews-field">
                <label className="nk-reviews-label">Name</label>
                <input
                  className="nk-reviews-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="nk-reviews-field">
                <label className="nk-reviews-label">Your rating</label>
                <StarInput value={rating} onChange={setRating} />
              </div>

              <div className="nk-reviews-field">
                <label className="nk-reviews-label">Message</label>
                <textarea
                  className="nk-reviews-textarea"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your experience..."
                  required
                />
              </div>

              {status === 'error' && (
                <div className="nk-reviews-error">
                  Please add your name, a rating, and a message before submitting.
                </div>
              )}

              <button
                className="nk-reviews-submit"
                type="submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Posting...' : 'Post Review'}
                {status !== 'sending' && (
                  <span className="nk-reviews-submit-arrow">→</span>
                )}
              </button>
            </form>
          )}
        </div>

        {/* ── DISPLAYED REVIEWS ── */}
        <div className="nk-reviews-list-section">
          <p className="nk-reviews-section-label">From our customers</p>
          <h2 className="nk-reviews-section-heading">Loved by Businesses Like Yours</h2>

          {loading ? (
            <p className="nk-reviews-empty">Loading reviews...</p>
          ) : displayed.length === 0 ? (
            <p className="nk-reviews-empty">
              No 5-star reviews yet — be the first to leave one above.
            </p>
          ) : (
            <div className="nk-reviews-grid">
              {displayed.map((r) => (
                <div key={r.id} className="nk-reviews-card">
                  <Stars rating={r.rating} />
                  <p className="nk-reviews-card-message">&ldquo;{r.message}&rdquo;</p>
                  <div className="nk-reviews-card-footer">
                    <p className="nk-reviews-card-name">{r.name}</p>
                    <p className="nk-reviews-card-date">
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
      </div>
    </>
  );
}