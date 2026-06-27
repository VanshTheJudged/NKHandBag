'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/data/products';

const getAccordionItems = (product: Product) => [
  { label: 'PRODUCT DETAILS', content: product.description },
  { label: "HOW IT'S MADE", content: product.howItsMade },
  { label: 'MATERIALS', content: product.materials.join(' · ') },
  {
    label: 'SHIPPING & RETURNS',
    content:
      'All orders are carefully packaged and shipped within 5–7 business days. Custom orders may take longer. Returns accepted within 14 days of delivery in original condition.',
  },
  {
    label: 'CARE INSTRUCTIONS',
    content:
      'Store in the dust bag provided. Avoid prolonged exposure to moisture or direct sunlight. Clean with a dry soft cloth.',
  },
];

type Props = {
  product: Product;
  whatsappUrl: string;
};

export function ProductClient({ product, whatsappUrl }: Props) {
  return (
    <>
      <style>{`
        .pdp-right {
          position: relative;
        }
        @media (min-width: 1024px) {
          .pdp-right {
            position: sticky;
            top: 2rem;
            align-self: start;
          }
        }
        .pdp-eyebrow {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: #9A8A74;
          text-transform: uppercase;
          margin: 0;
        }
        .pdp-name {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-weight: 300;
          font-size: clamp(28px, 3vw, 52px);
          line-height: 1;
          color: #1C1410;
          letter-spacing: -0.01em;
          margin: 0;
        }
        .pdp-detail {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: #9A8A74;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.7;
        }
        .pdp-colour-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: #9A8A74;
          text-transform: uppercase;
          margin: 0 0 0.6rem;
        }
        .pdp-pricing-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.28em;
          color: #9A8A74;
          text-transform: uppercase;
          margin: 0 0 0.25rem;
        }
        .pdp-pricing-value {
          font-family: "Cormorant Garamond", "Playfair Display", Georgia, serif;
          font-size: 22px;
          font-weight: 400;
          color: #1C1410;
          margin: 0;
        }
        .pdp-whatsapp {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          background: #1E2318;
          color: #F5EFE6;
          padding: 1rem 2rem;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-decoration: none;
          border: none;
          transition: opacity 0.2s;
          cursor: pointer;
        }
        .pdp-whatsapp:hover {
          opacity: 0.8;
        }
        .pdp-inquiry {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: center;
          border: 1px solid #1C1410;
          padding: 1rem 2rem;
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #1C1410;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .pdp-inquiry:hover {
          background: #1E2318;
          color: #F5EFE6;
        }
        /* Accordion */
        .pdp-accordion-btn {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .pdp-accordion-label {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          color: #1C1410;
          text-transform: uppercase;
        }
        .pdp-accordion-icon {
          font-family: var(--font-jetbrains-mono), monospace;
          font-size: 18px;
          color: #9A8A74;
          transition: transform 0.3s;
          line-height: 1;
        }
        .pdp-accordion-icon.open {
          transform: rotate(45deg);
        }
        .pdp-accordion-content {
          font-family: var(--font-outfit), sans-serif;
          font-size: 13px;
          line-height: 1.75;
          color: #6B5B45;
          overflow: hidden;
          transition: max-height 0.3s ease, padding-bottom 0.3s;
        }
      `}</style>

      <div className="pdp-right">

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#9A8A74', flexShrink: 0 }} />
          <p className="pdp-eyebrow">{product.category}</p>
        </div>

        {/* Name */}
        <h1 className="pdp-name" style={{ marginBottom: '1rem' }}>{product.name}</h1>

        {/* Detail */}
        {product.detail && (
          <p className="pdp-detail" style={{ marginBottom: '1.5rem' }}>{product.detail}</p>
        )}

        {/* Colours */}
        {product.colors && product.colors.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <p className="pdp-colour-label">Available Colours</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {product.colors.map((color) => (
                <button
                  key={color}
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    backgroundColor: color,
                    border: '2px solid transparent',
                    outline: '1px solid rgba(154,138,116,0.3)',
                    cursor: 'pointer',
                    transition: 'outline-color 0.2s',
                  }}
                  aria-label={color}
                />
              ))}
            </div>
          </div>
        )}

        {/* Pricing */}
        <div style={{
          borderTop: '1px solid rgba(30,35,24,0.1)',
          borderBottom: '1px solid rgba(30,35,24,0.1)',
          padding: '1.25rem 0',
          marginBottom: '1.5rem',
        }}>
          <p className="pdp-pricing-label">Pricing</p>
          <p className="pdp-pricing-value">Price on Inquiry</p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="pdp-whatsapp">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Inquire on WhatsApp
          </a>
          <Link href="/contact" className="pdp-inquiry">
            Send an Inquiry
          </Link>
        </div>

        {/* Accordion */}
        <Accordion items={getAccordionItems(product)} />

      </div>
    </>
  );
}

function Accordion({ items }: { items: { label: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={item.label} style={{ borderTop: '1px solid rgba(30,35,24,0.1)' }}>
          <button
            className="pdp-accordion-btn"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="pdp-accordion-label">{item.label}</span>
            <span className={`pdp-accordion-icon ${open === i ? 'open' : ''}`}>+</span>
          </button>
          <div
            className="pdp-accordion-content"
            style={{
              maxHeight: open === i ? '400px' : '0px',
              paddingBottom: open === i ? '1rem' : '0',
            }}
          >
            {item.content}
          </div>
        </div>
      ))}
      <div style={{ borderTop: '1px solid rgba(30,35,24,0.1)' }} />
    </div>
  );
}