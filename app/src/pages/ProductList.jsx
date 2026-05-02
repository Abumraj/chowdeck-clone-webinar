import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function ProductList() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [sortBy, setSortBy] = useState('default')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    let items = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category === activeCategory)

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      items = items.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.restaurant.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      )
    }

    switch (sortBy) {
      case 'price-low':  items.sort((a, b) => a.price - b.price); break
      case 'price-high': items.sort((a, b) => b.price - a.price); break
      case 'rating':     items.sort((a, b) => b.rating - a.rating); break
      case 'delivery':   items.sort((a, b) => parseInt(a.deliveryTime) - parseInt(b.deliveryTime)); break
      default: break
    }

    return items
  }, [activeCategory, sortBy, searchQuery])

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>🍽️ Our Menu</h1>
          <p>Browse our full collection of delicious meals from top restaurants.</p>
        </div>
      </div>

      {/* Categories */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="categories">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-chip ${cat.id === activeCategory ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="cat-emoji">{cat.emoji}</span> {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <span className="result-count">
              Showing <strong>{filtered.length}</strong> items
            </span>
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                padding: '8px 16px',
                border: '1.5px solid var(--border)',
                borderRadius: '8px',
                fontSize: '0.85rem',
                outline: 'none',
                flex: '1',
                maxWidth: '300px',
                margin: '0 12px',
              }}
            />
            <select
              className="sort-select"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="default">Sort by: Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
              <option value="delivery">Fastest Delivery</option>
            </select>
          </div>

          {filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              No items found. Try a different category or search term.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="banner-cta">
            <h2>Can't decide? Let us help! 🤔</h2>
            <p>Tell us what you're craving and we'll recommend the perfect meal.</p>
            <Link to="/" className="btn">Back to Home →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
