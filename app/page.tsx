import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductsSection } from '@/components/ProductsSection';
import { CategorySection } from '@/components/CategorySection';
import { OurStory } from '@/components/OurStory';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { EditorialSection } from '@/components/EditorialSection';
import {Footer} from '@/components/Footer';
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <CategorySection />
      <OurStory />
      <TestimonialsSection />
      <EditorialSection />
      <Footer />
    </main>
  );
}