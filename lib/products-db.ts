import { supabase } from './supabase';
import type { Product, MaterialType } from '@/data/products';

// Row shape in the Supabase `products` table (see supabase-products-setup.sql)
export type DbProduct = {
  id: string;
  slug: string;
  name: string;
  category: string;
  sub_category: string | null;
  detail: string | null;
  description: string | null;
  how_its_made: string | null;
  materials: string[] | null;
  material_type: string | null;
  customisable: string[] | null;
  image_url: string | null;
  featured: boolean | null;
  created_at: string;
};

// Convert a DB row into the same Product shape the static catalogue uses,
// so the existing listing / detail components render it with no changes.
export function mapDbToProduct(p: DbProduct): Product {
  return {
    slug: p.slug,
    name: p.name,
    category: p.category,
    subCategory: p.sub_category ?? undefined,
    detail: p.detail ?? undefined,
    description: p.description ?? '',
    howItsMade: p.how_its_made ?? '',
    materials: p.materials ?? [],
    images: p.image_url ? [p.image_url] : [],
    customisable: p.customisable && p.customisable.length > 0 ? p.customisable : undefined,
    materialType: (p.material_type as MaterialType) ?? undefined,
    featured: p.featured ?? undefined,
  };
}

// Public read (RLS allows anyone to select). Newest first.
export async function fetchDbProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error || !data) return [];
  return (data as DbProduct[]).map(mapDbToProduct);
}

export async function fetchDbProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .maybeSingle();

  if (error || !data) return null;
  return mapDbToProduct(data as DbProduct);
}
