export function FeaturedProjects() {
  return (
    <section id="projects" className="page-section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Featured Projects</h1>
          <p className="page-subtitle">
            Selected work demonstrating scalable architecture, secure APIs, and clean UX.
          </p>
        </header>

        <div className="projects-grid">
            <article className="project-card">
              <header>
                <p className="project-label">Featured</p>
                <h2 className="project-title">Cosmetics Shop Web Application</h2>
                <p className="project-summary">
                  Full-stack e-commerce application to manage products and process orders online. Designed for clear
                  user flows, operational visibility, and maintainable growth.
                </p>
              </header>
              <div className="project-tech-row">
                <span className="project-tech-pill">React</span>
                <span className="project-tech-pill">Node.js</span>
                <span className="project-tech-pill">PostgreSQL</span>
              </div>
              <ul className="project-features">
                <li>User authentication and account management</li>
                <li>Admin product management dashboard</li>
                <li>Cart system with order review and confirmation</li>
                <li>Order processing and status tracking</li>
                <li>Secure API integration between frontend and backend</li>
              </ul>
              <div className="project-footer-row">
                <div className="project-cta-row">
                  <button type="button" className="btn btn-secondary">
                    View details
                  </button>
                  <button type="button" className="btn btn-link">
                    Live demo (coming soon)
                  </button>
                  <button type="button" className="btn btn-link">
                    Source code (private / TBD)
                  </button>
                </div>
                <p className="project-meta">Role: full-stack · responsibility from database to UI.</p>
              </div>
            </article>

            <article className="project-card">
              <header>
                <p className="project-label">Case study</p>
                <h2 className="project-title">Bus Reservation System</h2>
                <p className="project-summary">
                  Web-based reservation system to streamline bus ticket booking, seat allocation, and schedule
                  management.
                </p>
              </header>
              <div className="project-tech-row">
                <span className="project-tech-pill">React</span>
                <span className="project-tech-pill">Node.js</span>
                <span className="project-tech-pill">PostgreSQL</span>
              </div>
              <ul className="project-features">
                <li>User authentication and booking history</li>
                <li>Interactive seat selection and availability</li>
                <li>Booking management workflows for staff</li>
                <li>Admin dashboard for routes and schedules</li>
                <li>Real-time availability tracking</li>
              </ul>
              <div className="project-footer-row">
                <div className="project-cta-row">
                  <button type="button" className="btn btn-secondary">
                    View details
                  </button>
                  <button type="button" className="btn btn-link">
                    Live demo (coming soon)
                  </button>
                  <button type="button" className="btn btn-link">
                    Source code (private / TBD)
                  </button>
                </div>
                <p className="project-meta">Role: full-stack · end-to-end design and implementation.</p>
              </div>
            </article>
        </div>

        <section className="arch-panel" aria-label="Architecture and approach">
          <p className="arch-badge">Architecture &amp; approach</p>
          <p className="arch-text">
            Modular architecture with clear separation between frontend, backend, and data layers. Clean APIs, well
            structured relational schemas, and performance-first UIs with responsive design and accessible patterns.
          </p>
        </section>
      </div>
    </section>
  )
}

