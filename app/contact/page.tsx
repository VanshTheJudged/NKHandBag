import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow mb-4">contact</p>
          <h1 className="display text-6xl">Get In Touch</h1>
          <p className="mt-4 text-fg-muted">Contact form coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
