import { useState } from 'react'
import { Link } from 'react-router-dom'
import { attendees } from '../data/attendees'

export default function AttendeesCarousel() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const moveCarousel = (direction) => {
    const cardWidth = 280
    const visibleCards = 4
    const maxScroll = Math.max(0, (attendees.length - visibleCards) * cardWidth)
    const newPosition = Math.max(0, Math.min(maxScroll, scrollPosition + (direction * cardWidth * visibleCards)))
    setScrollPosition(newPosition)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">👥 Meet Our Webinar Attendees</h2>
          <Link to="/attendees" className="section-link">View all →</Link>
        </div>
        <div className="attendees-carousel">
          <div className="carousel-container">
            <button 
              className="carousel-btn prev" 
              onClick={() => moveCarousel(-1)}
              disabled={scrollPosition === 0}
            >
              ‹
            </button>
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {attendees.map(attendee => (
                <div 
                  key={attendee.id} 
                  className="attendee-card"
                  onClick={() => window.location.href = '/attendees'}
                >
                  <div className="attendee-avatar">
                    <img 
                      src={attendee.image} 
                      alt={attendee.name}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👤</text></svg>'
                      }}
                    />
                  </div>
                  <div className="attendee-info">
                    <div className="attendee-name">{attendee.name}</div>
                    <div className="attendee-role">
                      {attendee.intro ? attendee.intro.substring(0, 60) + '...' : 'Attendee'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button 
              className="carousel-btn next"
              onClick={() => moveCarousel(1)}
              disabled={scrollPosition >= (attendees.length - 4) * 280}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
