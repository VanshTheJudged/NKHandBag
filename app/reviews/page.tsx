import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-4">reviews</p>
          <h1 className="display text-6xl">What People Say</h1>
          <p className="mt-4 text-fg-muted">Testimonials coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
