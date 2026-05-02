import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Categories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What are you in the mood for?</h2>
          </div>
          <div className="categories">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to={`/products?category=${cat.id}`}
                className="category-chip"
              >
                <span className="cat-emoji">{cat.emoji}</span> {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">🔥 Popular Right Now</h2>
            <Link to="/products" className="section-link">View all →</Link>
          </div>
          <div className="product-grid">
            {products.slice(0, 8).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How Chowdeck Works</h2>
          </div>
          <div className="steps-grid">
            <div className="step">
              <div className="step-icon">📍</div>
              <h3>Choose Location</h3>
              <p>Enter your delivery address and find restaurants available near you.</p>
            </div>
            <div className="step">
              <div className="step-icon">🍽️</div>
              <h3>Pick Your Meal</h3>
              <p>Browse menus, read reviews, and select your favourite dishes.</p>
            </div>
            <div className="step">
              <div className="step-icon">💳</div>
              <h3>Place Your Order</h3>
              <p>Pay securely online and track your order in real-time.</p>
            </div>
            <div className="step">
              <div className="step-icon">🚴</div>
              <h3>Enjoy Your Food</h3>
              <p>Your meal is delivered fresh & hot right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="banner-cta">
            <h2>Hungry? Order Now!</h2>
            <p>Explore hundreds of dishes from top restaurants around you.</p>
            <Link to="/products" className="btn">Browse Full Menu →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
