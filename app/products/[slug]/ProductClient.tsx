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
    <div className="lg:sticky lg:top-8 lg:self-start">

      {/* Category eyebrow */}
      <div className="mb-4 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#8C7B6B]" />
        <span className="font-mono text-xs tracking-widest-plus text-[#8C7B6B]">
          {product.category.toUpperCase()}
        </span>
      </div>

      {/* Product name */}
      <h1 className="display mb-6 text-[clamp(28px,3vw,48px)] leading-tight text-[#1A1A1A]">
        {product.name}
      </h1>

      {/* Detail line */}
      {product.detail && (
        <p className="mb-6 font-mono text-xs leading-relaxed tracking-wide text-[#6B5E50]">
          {product.detail}
        </p>
      )}

      {/* Color swatches */}
      {product.colors && product.colors.length > 0 && (
        <div className="mb-8">
          <p className="mb-3 font-mono text-[10px] tracking-widest-plus text-[#8C7B6B]">
            AVAILABLE COLOURS
          </p>
          <div className="flex items-center gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                className="h-6 w-6 rounded-full border-2 border-transparent ring-1 ring-[#8C7B6B]/30 transition-all hover:ring-[#1A1A1A]"
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            ))}
          </div>
        </div>
      )}

      {/* Price on inquiry */}
      <div className="mb-8 border-b border-t border-[#D4CFC8] py-5">
        <p className="font-mono text-xs tracking-widest-plus text-[#8C7B6B]">
          PRICING
        </p>
        <p className="mt-1 font-sans text-lg font-medium text-[#1A1A1A]">
          Price on Inquiry
        </p>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 flex w-full items-center justify-center gap-3 bg-[#1A1A1A] px-8 py-4 font-mono text-xs tracking-widest-plus text-[#EDE8DF] transition-colors hover:bg-[#2C2C2C]"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        INQUIRE ON WHATSAPP
      </a>

      {/* Secondary CTA */}
      <Link
        href="/contact"
        className="flex w-full items-center justify-center border border-[#1A1A1A] px-8 py-4 font-mono text-xs tracking-widest-plus text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A] hover:text-[#EDE8DF]"
      >
        SEND AN INQUIRY
      </Link>

      {/* Accordion */}
      <div className="mt-10">
        <Accordion items={getAccordionItems(product)} />
      </div>

    </div>
  );
}

function Accordion({ items }: { items: { label: string; content: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={item.label} className="border-t border-[#D4CFC8]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="font-mono text-xs tracking-widest-plus text-[#1A1A1A]">
              {item.label}
            </span>
            <span
              className={`font-mono text-lg text-[#8C7B6B] transition-transform duration-300 ${
                open === i ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open === i ? 'max-h-96 pb-4' : 'max-h-0'
            }`}
          >
            <p className="text-sm leading-relaxed text-[#6B5E50]">
              {item.content}
            </p>
          </div>
        </div>
      ))}
      <div className="border-t border-[#D4CFC8]" />
    </div>
  );
}