import Link from 'next/link';

const footerNav = [
  {
    heading: 'SHOP',
    links: [
      { label: 'All Products', href: '/products' },
      { label: 'Totes', href: '/products?category=tote' },
      { label: 'Shoulder Bags', href: '/products?category=shoulder' },
      { label: 'Sling Bags', href: '/products?category=sling' },
      { label: 'Clutches', href: '/products?category=clutch' },
    ],
  },
  {
    heading: 'DISCOVER',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Craftsmanship', href: '/about#craft' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'FAQs', href: '/contact#faq' },
      { label: 'Contact Us', href: '/contact' },
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
];

const socials = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'WhatsApp', href: 'https://wa.me/919876543210' },
  { label: 'Facebook', href: 'https://facebook.com' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-bg">
      {/* ── TOP SECTION ── */}
      <div className="relative border-t border-border px-6 py-16 lg:px-12 lg:py-20">
        <div className="studio-grid pointer-events-none absolute inset-0" />

        <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-16 lg:grid-cols-[1fr_auto]">
          {/* LEFT — brand info */}
          <div className="max-w-sm">
            <h2 className="display mb-6 text-[clamp(24px,3vw,48px)] leading-tight text-fg">
              BESPOKE BAGS.
              <br />
              CRAFTED IN MUMBAI.
            </h2>

            <p className="mb-10 text-sm leading-relaxed text-fg-muted">
              Explore our collection of handcrafted bags — designed with
              purpose, built to last, and made for the everyday moments that
              matter.
            </p>

            {/* Contact details */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-fg-muted">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.49-2.01-4.5-4.5-4.5zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <span className="text-sm text-fg-muted">
                  Mumbai, Maharashtra, India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-fg-muted">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.5 3h-11A1.5 1.5 0 001 4.5v7A1.5 1.5 0 002.5 13h11a1.5 1.5 0 001.5-1.5v-7A1.5 1.5 0 0013.5 3zm-11 1h11l-5.5 4L2.5 4zm11 8h-11V5.5l5.5 4 5.5-4V12z"
                      fill="currentColor"
                    />
                  </svg>
                </span>

                <a
                  href="mailto:hello@NKHANDBAG.com"
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  hello@NKHANDBAG.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-fg-muted">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect
                      x="1.5"
                      y="1.5"
                      width="13"
                      height="13"
                      rx="3.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="8"
                      cy="8"
                      r="2.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <circle cx="11.5" cy="4.5" r="0.75" fill="currentColor" />
                  </svg>
                </span>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  @NKHANDBAG
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT — nav columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="mb-6 font-mono text-xs tracking-widest-plus text-fg">
                  {col.heading}
                </p>

                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-mono text-xs tracking-wide text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GIANT BRAND NAME ── */}
      <div className="relative select-none overflow-hidden border-t border-border">
        <p
          className="display whitespace-nowrap text-center font-black leading-none text-fg-subtle"
          style={{
            fontSize: 'clamp(80px, 18vw, 260px)',
            opacity: 0.08,
          }}
        >
          NKHANDBAG
        </p>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-border px-6 py-5 lg:px-12">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {socials.map((s, i) => (
              <span key={s.label} className="flex items-center gap-2">
                {i !== 0 && (
                  <span className="h-1 w-1 rounded-full bg-fg-subtle" />
                )}

                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs tracking-widest-plus text-fg-muted transition-colors hover:text-fg"
                >
                  {s.label}
                </a>
              </span>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-mono text-xs tracking-widest-plus text-fg-subtle">
            COPYRIGHT © {new Date().getFullYear()} NKHANDBAG. ALL RIGHTS
            RESERVED.
          </p>

          {/* Right label */}
          <p className="font-mono text-xs tracking-widest-plus text-fg-subtle">
            MUMBAI · INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}