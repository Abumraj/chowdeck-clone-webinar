import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { getProduct, getRelatedProducts, formatPrice } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const [qty, setQty] = useState(1)
  const [toast, setToast] = useState('')

  if (!product) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Product not found</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 12 }}>
          <Link to="/products" style={{ color: 'var(--primary)' }}>← Back to menu</Link>
        </p>
      </div>
    )
  }

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  const related = getRelatedProducts(product, 4)

  const handleAddToCart = () => {
    setToast(`${product.name} (x${qty}) added to cart!`)
    setTimeout(() => setToast(''), 2500)
    setQty(1)
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span className="sep">/</span>
          <Link to="/products">Menu</Link>
          <span className="sep">/</span>
          <span>{product.name}</span>
        </div>
      </div>

      {/* Detail */}
      <div className="container">
        <div className="product-detail">
          <div
            className="product-detail-image"
            style={{ background: product.gradient }}
          >
            <span style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.15))' }}>
              {product.emoji}
            </span>
          </div>
          <div className="product-detail-info">
            <h1>{product.name}</h1>
            <div className="product-detail-restaurant">
              by <Link to="/products">{product.restaurant}</Link>
            </div>
            <div className="product-detail-rating">
              <span className="stars">⭐ {product.rating}</span>
              <span className="reviews">({product.reviews} reviews)</span>
              <span className="delivery">🕐 {product.deliveryTime} min delivery</span>
            </div>
            <div className="product-detail-price">
              {formatPrice(product.price)}
              {product.originalPrice && (
                <span className="original">{formatPrice(product.originalPrice)}</span>
              )}
              {discount && (
                <span style={{
                  background: '#FF6B00',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  marginLeft: '12px',
                  fontWeight: 700,
                }}>
                  -{discount}%
                </span>
              )}
            </div>
            <p className="product-detail-desc">{product.description}</p>
            <div className="quantity-selector">
              <label>Quantity:</label>
              <div className="quantity-controls">
                <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                <span className="qty">{qty}</span>
                <button onClick={() => setQty(q => Math.min(20, q + 1))}>+</button>
              </div>
            </div>
            <button className="btn-add-to-cart" onClick={handleAddToCart}>
              🛒 Add to Cart – {formatPrice(product.price * qty)}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">You might also like</h2>
            <Link to="/products" className="section-link">View all →</Link>
          </div>
          <div className="product-grid">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Toast */}
      {toast && (
        <div className="toast show">{toast}</div>
      )}
    </>
  )
}
