// Framework: Next.js 14 (React 18) – App Router
// This is a Server Component by default.

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function Home() {
  const api = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
  const res = await fetch(`${api}/products`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products: Product[] = await res.json();

  return (
    <main style={{ padding: '24px', maxWidth: 1200, margin: '0 auto' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>
        Product Listing
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        {products.map((p) => (
          <article
            key={p.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              overflow: 'hidden',
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={p.imageUrl}
              alt={p.title}
              style={{ width: '100%', height: 180, objectFit: 'cover' }}
            />
            <div style={{ padding: 16, display: 'grid', gap: 8 }}>
              <h2 style={{ fontSize: 18, margin: 0 }}>{p.title}</h2>
              <p style={{ color: '#4b5563', margin: 0 }}>{p.description}</p>
              <div style={{ marginTop: 8, fontWeight: 700 }}>
                ₹{(p.price / 1).toLocaleString('en-IN')}
              </div>
              <button
                style={{
                  marginTop: 8,
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: '1px solid #111827',
                  background: '#111827',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
