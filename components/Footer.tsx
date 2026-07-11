import Link from 'next/link';
import Image from 'next/image';

const footerNav = [
  {
    heading: 'SHOP',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'Bags', href: '/products?category=bags' },
      { label: 'Cap', href: '/products?category=cap' },
      { label: 'Raw Materials', href: '/products?category=raw-materials' },
      { label: 'Customisable Pens', href: '/products?category=customisable-pens' },
      { label: 'Jewellery Boxes', href: '/products?category=jewellery-boxes' },
    ],
  },
  {
    heading: 'SUPPORT',
    links: [
      { label: 'Shipping & Delivery', href: '/contact' },
      { label: 'Return Policy', href: '/contact' },
      { label: 'Care Instructions', href: '/contact' },
      { label: 'Custom Orders', href: '/contact' },
    ],
  },
  {
    heading: 'DISCOVER',
    links: [
      { label: 'Our Story', href: '/#our-story' },
      { label: 'Craftsmanship', href: '/about#craft' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'FAQs', href: '/contact#faq' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <>
      <style>{`
        .nk-footer {
          background-color: #1E2318;
          color: #F5EFE6;
          overflow-x: hidden;
        }

        /* ── SHARED CONTAINER WIDTH ──
           All three panels (top, nav, bottom) now share the same
           max-width + horizontal padding so their content lines up
           on the same left/right edges instead of drifting between
           1600px / 1400px containers. */
        .nk-footer-top,
        .nk-footer-nav,
        .nk-footer-bottom {
          padding: 2.5rem 1.25rem;
        }
        @media (min-width: 1024px) {
          .nk-footer-top,
          .nk-footer-nav {
            padding: 4rem 3rem;
          }
        }

        .nk-footer-top-inner,
        .nk-footer-nav-inner,
        .nk-footer-bottom-inner {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* ── TOP PANEL ── */
        .nk-footer-top {
          background-color: #252B1C;
          border-bottom: 1px solid rgba(245,239,230,0.08);
        }

        .nk-footer-top-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }
        @media (min-width: 1024px) {
          .nk-footer-top-inner {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 5rem;
          }
        }

        .nk-footer-top-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        @media (min-width: 1024px) {
          .nk-footer-top-text {
            align-items: center;
            text-align: center;
            max-width: 560px;
          }
        }
        .nk-footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          align-items: center;
        }

        .nk-footer-img-placeholder {
          background: linear-gradient(145deg, #8B6347 0%, #6B4A30 50%, #3D2810 100%);
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          aspect-ratio: 16/9;
          max-height: 220px;
          position: relative;
        }
        @media (min-width: 1024px) {
          .nk-footer-img-placeholder {
            width: 300px;
            flex-shrink: 0;
            aspect-ratio: 4/3;
            max-height: none;
          }
        }

        .nk-footer-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          color: rgba(245,239,230,0.45);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }
        .nk-footer-heading {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 400;
          font-size: clamp(24px, 5vw, 48px);
          color: #F5EFE6;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 1rem;
        }
        .nk-footer-desc {
          font-family: var(--font-outfit), sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(245,239,230,0.5);
          margin-bottom: 1.5rem;
          max-width: 420px;
        }
        .nk-footer-contact-label {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          color: rgba(245,239,230,0.65);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nk-footer-contact-label:hover {
          color: #F5EFE6;
        }

        /* ── NAV PANEL ── */
        .nk-footer-nav {
          background-color: #1E2318;
          border-bottom: 1px solid rgba(245,239,230,0.08);
        }

        .nk-footer-nav-inner {
          display: grid;
          grid-template-columns: repeat(2, minmax(140px, 200px));
          justify-content: center;
          gap: 2rem 1.5rem;
        }
        @media (min-width: 640px) {
          .nk-footer-nav-inner {
            grid-template-columns: repeat(3, minmax(150px, 220px));
            justify-content: center;
          }
        }
        @media (min-width: 1024px) {
          .nk-footer-nav-inner {
            gap: 2.5rem 7rem;
          }
        }

        .nk-footer-nav-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .nk-footer-nav-heading {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: #F5EFE6;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .nk-footer-nav-link {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          color: rgba(245,239,230,0.4);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
          display: block;
          line-height: 2;
          text-align: center;
        }
        .nk-footer-nav-link:hover {
          color: rgba(245,239,230,0.85);
        }

        /* ── GIANT BRAND ── */
        .nk-footer-brand-wrap {
          background-color: #1E2318;
          border-top: 1px solid rgba(245,239,230,0.06);
          padding: 0.5rem 1rem 0.75rem;
          text-align: center;
          overflow: hidden;
        }
        .nk-footer-brand-name {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 700;
          font-size: clamp(28px, 8vw, 200px);
          line-height: 1;
          color: rgba(245,239,230,0.07);
          letter-spacing: 0.05em;
          white-space: nowrap;
          user-select: none;
          word-break: normal;
          margin: 0;
          text-align: center;
        }
        .nk-footer-tagline {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: rgba(245,239,230,0.2);
          text-transform: uppercase;
          margin-top: 0.25rem;
          text-align: center;
        }

        /* ── BOTTOM BAR ── */
        .nk-footer-bottom {
          background-color: #1E2318;
          border-top: 1px solid rgba(245,239,230,0.06);
        }
        .nk-footer-bottom-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          text-align: center;
        }
        @media (min-width: 640px) {
          .nk-footer-bottom-inner {
            flex-direction: row;
            justify-content: center;
            text-align: center;
          }
        }
        .nk-footer-bottom-text {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          color: rgba(245,239,230,0.22);
          text-transform: uppercase;
        }
        .nk-footer-social-wrap {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .nk-footer-social-link {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.12em;
          color: rgba(245,239,230,0.32);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
        }
        .nk-footer-social-link:hover {
          color: rgba(245,239,230,0.75);
        }
      `}</style>

      <footer className="nk-footer">

        {/* ── TOP PANEL ── */}
        <div className="nk-footer-top">
          <div className="nk-footer-top-inner">
            <div className="nk-footer-img-placeholder">
              <Image
                src="/images/footer/craftsmanship.jpg"
                alt="Handcrafted bag making in Mumbai"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1023px) 100vw, 300px"
              />
            </div>
            <div className="nk-footer-top-text">
              <p className="nk-footer-eyebrow">Bespoke Bags.</p>
              <h2 className="nk-footer-heading">CRAFTED IN MUMBAI.</h2>
              <p className="nk-footer-desc">
                Explore our collection of handcrafted bags — designed with
                purpose, built to last, and made for the everyday moments that matter.
              </p>

              <ul className="nk-footer-contact-list">
                <li className="flex items-center gap-3">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.49-2.01-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="rgba(245,239,230,0.4)"/>
                  </svg>
                  <span className="nk-footer-contact-label">Mumbai, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M13.5 3h-11A1.5 1.5 0 001 4.5v7A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0013.5 3zm-11 1h11l-5.5 4L2.5 4zm11 8h-11V5.5l5.5 4 5.5-4V12z" fill="rgba(245,239,230,0.4)"/>
                  </svg>
                  <a href="mailto:hello@nkhandbag.com" className="nk-footer-contact-label">
                    hello@nkhandbag.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="rgba(245,239,230,0.4)" strokeWidth="1.2"/>
                    <circle cx="8" cy="8" r="2.5" stroke="rgba(245,239,230,0.4)" strokeWidth="1.2"/>
                    <circle cx="11.5" cy="4.5" r="0.75" fill="rgba(245,239,230,0.4)"/>
                  </svg>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nk-footer-contact-label">
                    @NKHANDBAG
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── NAV PANEL ── */}
        <div className="nk-footer-nav">
          <div className="nk-footer-nav-inner">
            {footerNav.map((col) => (
              <div key={col.heading} className="nk-footer-nav-col">
                <p className="nk-footer-nav-heading">{col.heading}</p>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="nk-footer-nav-link">
                        {link.label.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── GIANT BRAND ── */}
        <div className="nk-footer-brand-wrap">
          <p className="nk-footer-brand-name">NKHANDBAG</p>
          <p className="nk-footer-tagline">Handcrafted. Timeless. Yours.</p>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="nk-footer-bottom">
          <div className="nk-footer-bottom-inner">
            <div className="nk-footer-social-wrap">
              {['Instagram', 'WhatsApp', 'Facebook'].map((s, i) => (
                <span key={s} className="flex items-center gap-1">
                  {i !== 0 && (
                    <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(245,239,230,0.2)', display: 'inline-block', flexShrink: 0 }} />
                  )}
                  <a href="#" className="nk-footer-social-link">{s}</a>
                </span>
              ))}
            </div>
            <p className="nk-footer-bottom-text">
              © {new Date().getFullYear()} NKHANDBAG. All rights reserved.
            </p>
            <p className="nk-footer-bottom-text">Mumbai · India</p>
          </div>
        </div>

      </footer>
    </>
  );
}