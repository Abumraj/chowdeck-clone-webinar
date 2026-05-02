import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [cartCount] = useState(0)

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo">
          <span>🍽️</span> Chowdeck
        </Link>
        <div className="nav-location">
          📍 Delivering to <strong>Lagos, Nigeria</strong>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search for food, restaurants..." />
        </div>
        <div className="nav-actions">
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
              Menu
            </NavLink>
            <NavLink to="/attendees" className={({ isActive }) => isActive ? 'active' : ''}>
              Attendees
            </NavLink>
          </div>
          <button className="nav-cart">
            🛒 Cart <span className="badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
