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

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in the ${product.name}. Could you please share more details and pricing?`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#EDE8DF]">
      <Header />

      {/* Breadcrumb */}
      <div className="px-6 py-4 lg:px-12">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest-plus text-[#8C7B6B]">
            <Link href="/" className="transition-colors hover:text-[#1A1A1A]">HOME</Link>
            <span>·</span>
            <Link href="/products" className="transition-colors hover:text-[#1A1A1A]">PRODUCTS</Link>
            <span>·</span>
            <span className="text-[#1A1A1A]">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-24 pt-6 lg:px-12">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-[1fr_420px] lg:gap-16 xl:grid-cols-[1fr_480px]">

          {/* ── LEFT — 2-column image grid ── */}
          <div className="grid grid-cols-2 gap-3">
            {product.images.length > 0 ? (
              product.images.map((img, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden bg-[#E0DAD0] ${
                    i === 0 ? 'col-span-2 aspect-[4/3]' : 'col-span-1 aspect-[3/4]'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} – image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={i === 0}
                  />
                </div>
              ))
            ) : (
              <>
                <div className="col-span-2 aspect-[4/3] bg-gradient-to-br from-[#D9D0C1] to-[#C8BFB0]" />
                <div className="col-span-1 aspect-[3/4] bg-gradient-to-br from-[#C8BFB0] to-[#BFB8A8]" />
                <div className="col-span-1 aspect-[3/4] bg-gradient-to-br from-[#D4CFC8] to-[#C8BFB0]" />
                <div className="col-span-1 aspect-[3/4] bg-gradient-to-br from-[#BFB8A8] to-[#C8BFB0]" />
                <div className="col-span-1 aspect-[3/4] bg-gradient-to-br from-[#C8BFB0] to-[#D4CFC8]" />
              </>
            )}
          </div>

          {/* ── RIGHT — client component handles accordion + interactivity ── */}
          <ProductClient product={product} whatsappUrl={whatsappUrl} />

        </div>
      </div>

      <Footer />
    </main>
  );
}