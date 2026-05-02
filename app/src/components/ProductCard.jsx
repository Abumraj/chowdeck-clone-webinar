import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'

export default function ProductCard({ product }) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div
        className="product-card-image"
        style={{ background: product.gradient }}
      >
        {discount && <span className="discount-badge">-{discount}%</span>}
        <span style={{ fontSize: '4rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>
          {product.emoji}
        </span>
      </div>
      <div className="product-card-body">
        <div className="product-card-restaurant">{product.restaurant}</div>
        <div className="product-card-name">{product.name}</div>
        <div className="product-card-meta">
          <div className="product-card-price">
            {formatPrice(product.price)}
            {product.originalPrice && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <div className="product-card-info">
            <span className="rating">⭐ {product.rating}</span>
            <span>🕐 {product.deliveryTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
