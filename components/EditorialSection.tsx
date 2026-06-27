import Link from 'next/link';
import { Fragment } from 'react';
const columns = [
  {
    word: 'REDEFINE',
    text: 'Embrace a new perspective and discover what true craftsmanship feels like.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <circle cx="40" cy="40" r="36" stroke="#1A1A1A" strokeWidth="1"/>
        <path d="M30 38 Q30 26 40 26 Q50 26 50 38" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M24 38 L26 56 Q26 58 28 58 L52 58 Q54 58 54 56 L56 38 Z" stroke="#1A1A1A" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <line x1="24" y1="38" x2="56" y2="38" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    word: 'YOUR',
    text: 'Transform your everyday carry and discover new meaning in the things you hold close.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <circle cx="40" cy="40" r="36" stroke="#1A1A1A" strokeWidth="1"/>
        <path d="M32 36 Q32 25 37 24" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M48 36 Q48 25 43 24" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <rect x="24" y="36" width="32" height="22" rx="2" stroke="#1A1A1A" strokeWidth="1.2" fill="none"/>
        <line x1="40" y1="36" x2="40" y2="58" stroke="#1A1A1A" strokeWidth="0.7" opacity="0.4"/>
        <rect x="35" y="41" width="10" height="6" rx="1" stroke="#1A1A1A" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    word: 'CRAFT',
    text: 'Every stitch, every cut, every finish — made by hand in Mumbai with materials that age beautifully.',
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <circle cx="40" cy="40" r="36" stroke="#1A1A1A" strokeWidth="1"/>
        <path d="M50 28 Q58 22 60 30" stroke="#1A1A1A" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M26 42 Q24 58 40 60 Q56 58 56 42 Q54 28 40 28 Q28 30 26 42Z" stroke="#1A1A1A" strokeWidth="1.2" fill="none"/>
        <path d="M32 50 Q40 54 50 50" stroke="#1A1A1A" strokeWidth="0.8" fill="none" opacity="0.45"/>
      </svg>
    ),
  },
];

export function EditorialSection() {
  return (
    <>
      <style>{`
        .nk-editorial-section {
          background-color: #EDE8DF;
        }
        .nk-editorial-word {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 500;
          font-size: clamp(26px, 4vw, 42px);
          letter-spacing: 0.08em;
          color: #1A1A1A;
          text-align: center;
        }
        .nk-editorial-text {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: #6B5E50;
          text-align: center;
          max-width: 200px;
          margin: 0 auto;
        }

        /* Desktop: vertical dividers between columns */
        .nk-col-divider-v {
          display: none;
        }
        /* Mobile: horizontal dividers between rows */
        .nk-col-divider-h {
          display: block;
          height: 1px;
          background-color: #C8BFB0;
          width: 100%;
        }

        @media (min-width: 768px) {
          .nk-col-divider-v {
            display: block;
            width: 1px;
            background-color: #C8BFB0;
            align-self: stretch;
            flex-shrink: 0;
          }
          .nk-col-divider-h {
            display: none;
          }
        }

        .nk-shop-btn {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #1A1A1A;
          text-transform: uppercase;
          border: 1px solid #1A1A1A;
          border-radius: 9999px;
          padding: 14px 32px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          transition: background 0.25s, color 0.25s;
        }
        .nk-shop-btn:hover {
          background: #1A1A1A;
          color: #EDE8DF;
        }
        .nk-shop-arrow {
          font-size: 15px;
          transition: transform 0.25s;
        }
        .nk-shop-btn:hover .nk-shop-arrow {
          transform: translateX(4px);
        }
        .nk-side-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          color: #8C7B6B;
        }

        /* Mobile: stack columns vertically */
        .nk-columns-wrap {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .nk-columns-wrap {
            flex-direction: row;
            align-items: stretch;
          }
        }

        .nk-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem 1.5rem;
          flex: 1;
        }
        @media (min-width: 768px) {
          .nk-col {
            padding: 2.5rem 2rem;
            gap: 1.25rem;
          }
        }
        @media (min-width: 1024px) {
          .nk-col {
            padding: 3rem 3rem;
          }
        }
      `}</style>

      <section className="nk-editorial-section relative overflow-hidden px-4 py-12 sm:px-6 sm:py-14 lg:px-16 lg:py-20">

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px)',
            backgroundSize: 'calc(100% / 12) 100%',
          }}
        />

        {/* Side labels — desktop only */}
        <div className="absolute bottom-10 left-5 hidden lg:block">
          <span className="nk-side-label" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            CRAFTED IN MUMBAI.
          </span>
        </div>
        <div className="absolute bottom-10 right-5 hidden lg:block">
          <span className="nk-side-label" style={{ writingMode: 'vertical-rl' }}>
            NK·X
          </span>
        </div>

        <div className="relative mx-auto max-w-5xl">

          {/* Columns */}
          <div className="nk-columns-wrap">
            {columns.map((col, i) => (
              <Fragment key={col.word}>   {/* ← Fragment with key instead of <> */}
                <div className="nk-col">
                  <div>{col.icon}</div>
                  <p className="nk-editorial-word">{col.word}</p>
                  <p className="nk-editorial-text">{col.text}</p>
                </div>

                {i < columns.length - 1 && (
                  <>
                    <div className="nk-col-divider-v" />
                    <div className="nk-col-divider-h" />
                  </>
                )}
              </Fragment>
            ))}
          </div>

          {/* SHOP NOW */}
          <div className="mt-10 flex justify-center lg:mt-14">
            <Link href="/products" className="nk-shop-btn">
              SHOP NOW
              <span className="nk-shop-arrow">→</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}