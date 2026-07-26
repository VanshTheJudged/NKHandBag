'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { MATERIAL_TYPES } from '@/data/products';
import type { DbProduct } from '@/lib/products-db';

const CATEGORIES = ['Bags', 'Cap', 'Raw Materials', 'Customisable Pens', 'Jewellery Boxes'];
const BAG_SUBCATEGORIES = [
  'Shopping Bag', 'Office Bags', 'Laptop Bag', 'School Bags', 'Geometry Pouches',
  'Shagun/Potli', 'Gym Bags', 'Waist Bags', 'Ladies Bag',
];

// name -> url-safe slug, with a short random suffix so two products with the
// same name don't collide.
function makeSlug(name: string) {
  const base = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${base || 'product'}-${Math.random().toString(36).slice(2, 6)}`;
}

// comma-separated text -> clean string[]
function toList(v: string) {
  return v.split(',').map((s) => s.trim()).filter(Boolean);
}

export default function AdminPage() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  const [products, setProducts] = useState<DbProduct[]>([]);

  // form fields
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Bags');
  const [subCategory, setSubCategory] = useState('');
  const [detail, setDetail] = useState('');
  const [description, setDescription] = useState('');
  const [howItsMade, setHowItsMade] = useState('');
  const [materials, setMaterials] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [customisable, setCustomisable] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  const loadProducts = useCallback(async () => {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    setProducts((data as DbProduct[]) ?? []);
  }, []);

  // Gate the page: no session -> bounce to login
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.replace('/admin/login');
        return;
      }
      setChecking(false);
      loadProducts();
    });
  }, [router, loadProducts]);

  function resetForm() {
    setName(''); setCategory('Bags'); setSubCategory(''); setDetail('');
    setDescription(''); setHowItsMade(''); setMaterials('');
    setMaterialType(''); setCustomisable(''); setImageFile(null);
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
  }

  async function handleAdd() {
    if (!name.trim()) { setMsg('Name is required.'); return; }
    setSaving(true);
    setMsg('');

    const slug = makeSlug(name);
    let image_url: string | null = null;

    try {
      // 1. upload image (optional)
      if (imageFile) {
        const ext = imageFile.name.split('.').pop() || 'jpg';
        const path = `${slug}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from('product-images')
          .upload(path, imageFile, { upsert: true });
        if (upErr) throw upErr;
        image_url = supabase.storage.from('product-images').getPublicUrl(path).data.publicUrl;
      }

      // 2. insert row
      const { error: insErr } = await supabase.from('products').insert({
        slug,
        name: name.trim(),
        category,
        sub_category: category === 'Bags' && subCategory ? subCategory : null,
        detail: detail.trim() || null,
        description: description.trim(),
        how_its_made: howItsMade.trim(),
        materials: toList(materials),
        material_type: materialType || null,
        customisable: toList(customisable),
        image_url,
      });
      if (insErr) throw insErr;

      setMsg('Product added ✓');
      resetForm();
      loadProducts();
    } catch (err) {
      setMsg('Error: ' + (err as Error).message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(p: DbProduct) {
    if (!confirm(`Delete "${p.name}"?`)) return;

    // remove the stored image too, if any
    if (p.image_url) {
      const path = p.image_url.split('/product-images/')[1];
      if (path) await supabase.storage.from('product-images').remove([path]);
    }
    await supabase.from('products').delete().eq('id', p.id);
    loadProducts();
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace('/admin/login');
  }

  if (checking) {
    return <main style={{ ...page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading…</main>;
  }

  return (
    <main style={page}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 style={{ margin: 0, fontSize: 22, color: '#1E2318' }}>Manage Products</h1>
          <button onClick={handleLogout} style={{ ...btn, background: '#8a7a62' }}>Log out</button>
        </div>

        {/* ── ADD FORM ── */}
        <section style={card}>
          <h2 style={h2}>Add a product</h2>

          <label style={label}>Name *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} style={input} />

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={label}>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} style={input}>
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {category === 'Bags' && (
              <div style={{ flex: 1 }}>
                <label style={label}>Sub-category</label>
                <select value={subCategory} onChange={(e) => setSubCategory(e.target.value)} style={input}>
                  <option value="">—</option>
                  {BAG_SUBCATEGORIES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            )}
          </div>

          <label style={label}>Detail line (e.g. &quot;Natural jute / Black print&quot;)</label>
          <input value={detail} onChange={(e) => setDetail(e.target.value)} style={input} />

          <label style={label}>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={{ ...input, minHeight: 70 }} />

          <label style={label}>How it&apos;s made</label>
          <textarea value={howItsMade} onChange={(e) => setHowItsMade(e.target.value)} style={{ ...input, minHeight: 70 }} />

          <label style={label}>Materials (comma separated, e.g. &quot;Jute, Cotton&quot;)</label>
          <input value={materials} onChange={(e) => setMaterials(e.target.value)} style={input} />

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={label}>Material type</label>
              <select value={materialType} onChange={(e) => setMaterialType(e.target.value)} style={input}>
                <option value="">—</option>
                {MATERIAL_TYPES.map((m) => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label style={label}>Customisable (comma separated)</label>
              <input value={customisable} onChange={(e) => setCustomisable(e.target.value)} style={input} />
            </div>
          </div>

          <label style={label}>Image</label>
          <input
            type="file"
            accept="image/*,.avif,.webp"
            onChange={(e) => {
              const f = e.target.files?.[0] ?? null;
              if (preview) URL.revokeObjectURL(preview);
              setImageFile(f);
              setPreview(f ? URL.createObjectURL(f) : null);
            }}
            style={{ marginBottom: '0.75rem' }}
          />

          {imageFile && preview && (
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                marginBottom: '1rem', padding: '0.5rem 0.75rem',
                background: '#EFF6EC', border: '1px solid #CDE3C4', borderRadius: 6,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="preview" style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4 }} />
              <span style={{ flex: 1, fontSize: 13, color: '#2e7d32', wordBreak: 'break-all' }}>
                ✓ {imageFile.name} attached
              </span>
              <button
                type="button"
                onClick={() => {
                  if (preview) URL.revokeObjectURL(preview);
                  setImageFile(null);
                  setPreview(null);
                }}
                style={{ background: 'none', border: 'none', color: '#8a7a62', cursor: 'pointer', fontSize: 13 }}
              >
                remove
              </button>
            </div>
          )}

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={handleAdd} disabled={saving} style={btn}>
              {saving ? 'Saving…' : 'Add Product'}
            </button>
            {msg && <span style={{ fontSize: 13, color: msg.startsWith('Error') ? '#b00' : '#2e7d32' }}>{msg}</span>}
          </div>
        </section>

        {/* ── LIST ── */}
        <section style={{ ...card, marginTop: '1.5rem' }}>
          <h2 style={h2}>Added products ({products.length})</h2>
          {products.length === 0 && <p style={{ color: '#8a7a62', fontSize: 14 }}>None yet.</p>}
          {products.map((p) => (
            <div
              key={p.id}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.6rem 0', borderTop: '1px solid #EEE7DA',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {p.image_url && (
                <img src={p.image_url} alt={p.name} style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 4 }} />
              )}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, color: '#1E2318' }}>{p.name}</div>
                <div style={{ fontSize: 12, color: '#8a7a62' }}>{p.category}{p.sub_category ? ` · ${p.sub_category}` : ''}</div>
              </div>
              <button onClick={() => handleDelete(p)} style={{ ...btn, background: '#b23b3b', padding: '0.4rem 0.8rem' }}>
                Delete
              </button>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: '100vh',
  background: '#F5EFE6',
  padding: '2rem 1.25rem',
  fontFamily: 'system-ui, sans-serif',
};
const card: React.CSSProperties = {
  background: '#fff',
  border: '1px solid #E0D8C8',
  borderRadius: 8,
  padding: '1.5rem',
};
const h2: React.CSSProperties = { margin: '0 0 1rem', fontSize: 16, color: '#1E2318' };
const label: React.CSSProperties = { display: 'block', fontSize: 12, color: '#6B5B45', margin: '0 0 4px' };
const input: React.CSSProperties = {
  width: '100%', padding: '0.55rem 0.7rem', marginBottom: '1rem',
  border: '1px solid #D4CFC8', borderRadius: 6, fontSize: 14, boxSizing: 'border-box',
  fontFamily: 'inherit', background: '#fff', color: '#1E2318',
};
const btn: React.CSSProperties = {
  padding: '0.6rem 1.1rem', background: '#1E2318', color: '#F5EFE6',
  border: 'none', borderRadius: 6, fontSize: 14, cursor: 'pointer',
};
