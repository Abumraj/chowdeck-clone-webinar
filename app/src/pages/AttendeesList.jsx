import { useState, useMemo } from 'react'
import { attendees } from '../data/attendees'

export default function AttendeesList() {
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    if (!searchQuery) return attendees
    const q = searchQuery.toLowerCase()
    return attendees.filter(attendee =>
      attendee.name.toLowerCase().includes(q) ||
      attendee.email.toLowerCase().includes(q) ||
      (attendee.intro && attendee.intro.toLowerCase().includes(q))
    )
  }, [searchQuery])

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>👥 Webinar Attendees</h1>
          <p>Meet the amazing people joining our AI webinar. Learn about their backgrounds and what brings them here!</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <span className="result-count">
              Showing <strong>{filtered.length}</strong> attendees
            </span>
            <input
              type="text"
              placeholder="Search attendees..."
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
          </div>

          {filtered.length > 0 ? (
            <div className="attendees-grid">
              {filtered.map(attendee => (
                <div key={attendee.id} className="attendee-card-full">
                  <div className="attendee-avatar-large">
                    <img 
                      src={attendee.image} 
                      alt={attendee.name}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">👤</text></svg>'
                      }}
                    />
                  </div>
                  <div className="attendee-details">
                    <h3 className="attendee-name-full">{attendee.name}</h3>
                    <p className="attendee-email">📧 {attendee.email}</p>
                    <p className="attendee-intro">
                      {attendee.intro || 'No introduction provided'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
              No attendees found matching your search.
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="banner-cta">
            <h2>Want to join our next webinar? 🎓</h2>
            <p>Stay updated with our upcoming AI and tech workshops.</p>
            <a href="/" className="btn">Back to Home →</a>
          </div>
        </div>
      </section>
    </>
  )
}
