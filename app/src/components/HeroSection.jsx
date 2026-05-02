import { useNavigate } from 'react-router-dom'

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Order food you love, delivered fast 🚀</h1>
          <p>
            Get your favourite meals from the best local restaurants delivered to
            your doorstep in minutes. Fresh, hot, and delicious!
          </p>
          <div className="hero-search">
            <input type="text" placeholder="What are you craving today?" />
            <button onClick={() => navigate('/products')}>Search</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">500+</div>
              <div className="stat-label">Restaurants</div>
            </div>
            <div className="stat">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat">
              <div className="stat-number">30 min</div>
              <div className="stat-label">Avg Delivery</div>
            </div>
          </div>
        </div>
        <div className="hero-emoji">🍛</div>
      </div>
    </section>
  )
}
