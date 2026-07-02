import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';
import { ProductClient } from './ProductClient';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919315101359';
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name}. Could you please share more details and pricing?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F5EFE6' }}>
      <Header />

      {/* Breadcrumb */}
      <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid rgba(30,35,24,0.07)' }}>
        <style>{`
          .pdp-bc-link {
            font-family: var(--font-jetbrains-mono), monospace;
            font-size: 9px;
            letter-spacing: 0.22em;
            color: #9A8A74;
            text-transform: uppercase;
            text-decoration: none;
            transition: color 0.2s;
          }
          .pdp-bc-link:hover { color: #1C1410; }
          .pdp-bc-current {
            font-family: var(--font-jetbrains-mono), monospace;
            font-size: 9px;
            letter-spacing: 0.22em;
            color: #1C1410;
            text-transform: uppercase;
          }
          .pdp-bc-sep {
            font-family: var(--font-jetbrains-mono), monospace;
            font-size: 9px;
            color: rgba(154,138,116,0.4);
          }
          @media (min-width: 1024px) {
            .pdp-grid {
              grid-template-columns: 1fr 420px !important;
              gap: 4rem !important;
            }
          }
          @media (min-width: 1280px) {
            .pdp-grid {
              grid-template-columns: 1fr 480px !important;
            }
          }
        `}</style>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Link href="/" className="pdp-bc-link">Home</Link>
            <span className="pdp-bc-sep">·</span>
            <Link href="/products" className="pdp-bc-link">Products</Link>
            <span className="pdp-bc-sep">·</span>
            <span className="pdp-bc-current">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '3rem 1.5rem 6rem', maxWidth: '1600px', margin: '0 auto' }}>
        <div
          className="pdp-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
          }}
        >
          {/* ── LEFT — image grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: product.images.length > 1 ? '1fr 1fr' : '1fr',
              gap: '0.75rem',
            }}
          >
            {product.images.length > 0 ? (
              product.images.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#E8E0D0',
                    gridColumn: i === 0 && product.images.length > 1 ? 'span 2' : 'span 1',
                    aspectRatio: product.images.length === 1 ? '4/5' : i === 0 ? '4/3' : '3/4',
                  }}
                >
                  <Image
                    src={img}
                    alt={`${product.name} – image ${i + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={i === 0}
                  />
                </div>
              ))
            ) : (
              <>
                <div style={{ gridColumn: 'span 2', aspectRatio: '4/3', background: 'linear-gradient(135deg, #E8E0D0 0%, #D4CFC8 100%)' }} />
                <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #D4CFC8 0%, #C8BFB0 100%)' }} />
                <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #C8BFB0 0%, #D4CFC8 100%)' }} />
                <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #E0D8C8 0%, #C8BFB0 100%)' }} />
                <div style={{ aspectRatio: '3/4', background: 'linear-gradient(135deg, #C8BFB0 0%, #E8E0D0 100%)' }} />
              </>
            )}
          </div>

          {/* ── RIGHT ── */}
          <ProductClient product={product} whatsappUrl={whatsappUrl} />
        </div>
      </div>

      <Footer />
    </main>
  );
}