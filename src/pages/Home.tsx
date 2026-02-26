import { useState } from 'react'

export function Home() {
  return (
    <section id="home" className="page-section">
      <div className="container">
        <div className="home-layout">
          <HomeProfilePanel />

          <section className="home-intro" aria-label="Professional introduction">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" aria-hidden="true" />
              <span>Full-stack engineering</span>
            </div>
            <h1 className="hero-title">
              <span className="hero-name">Tony Ngetich</span>
              <span className="hero-role">Full-Stack Developer</span>
            </h1>
            <p className="hero-summary">
            I design and build scalable, secure web applications with a strong emphasis on performance, reliability, and long-term maintainability. My approach goes beyond writing code — I focus on engineering systems that are structured, efficient, and built to scale.
            <br />
            Working across the full stack, I develop modern frontend applications using React and Next.js, while architecting robust backend systems with Node.js and PostgreSQL. I prioritize clean architecture, thoughtful API design, and well-structured data models to ensure every application remains stable under growth and complexity.
            <br />
            I am particularly drawn to backend systems and production-grade engineering — authentication flows, database optimization, and performance-focused development. I value precision, clarity, and deliberate design decisions over shortcuts.
            </p>
            <p className="hero-secondary-text">
              My goal is simple: build software that works flawlessly, scales intelligently, and reflects disciplined engineering standards.
            </p>

            <div className="hero-badges">
              <div className="chip-row">
                <span className="chip chip-pill">JavaScript</span>
                <span className="chip chip-pill">TypeScript</span>
                <span className="chip chip-pill">React</span>
                <span className="chip chip-pill">Next.js</span>
                <span className="chip chip-pill">Node.js</span>
                <span className="chip chip-pill">PostgreSQL</span>
              </div>
            </div>

            <div className="hero-cta-row">
              <a
                href="/Tony-Kimutai-Ngetich-Resume.pdf"
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <span className="btn-label">View Resume</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

function HomeProfilePanel() {
  const [isMessageOpen, setIsMessageOpen] = useState(false)

  return (
    <>
      <aside id="contact" className="home-profile-panel" aria-label="Profile and contact">
        <div className="home-profile-photo">
          <div className="hero-profile-shell">
            <div className="hero-profile-inner">
              <div className="hero-avatar-ring">
                <div className="hero-avatar" aria-label="Profile image">
                  <img
                    src="https://i.postimg.cc/vTDKbkgH/Whats-App-Image-2026-02-26-at-19-49-17-(1).jpg"
                    alt="Tony Ngetich"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
                  />
                </div>
              </div>
              <div className="hero-avatar-note">
                <span>
                  Tony Ngetich
                  <br /> Full-Stack Developer
                </span>
                <span className="hero-avatar-note-dot" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className="home-profile-content">
          <h2 className="section-title">Connect with me</h2>
          <ul className="home-contact-icons" aria-label="Connect with me">
            <li>
              <a href="https://github.com/nget1ch" className="contact-pill" aria-label="GitHub">
                <span className="contact-pill-icon" aria-hidden>
                  🐙
                </span>
                <span className="contact-pill-label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tony-ngetich-544373252/"
                className="contact-pill"
                aria-label="LinkedIn"
              >
                <span className="contact-pill-icon" aria-hidden>
                  in
                </span>
                <span className="contact-pill-label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/nget1ch" className="contact-pill" aria-label="X (Twitter)">
                <span className="contact-pill-icon" aria-hidden>
                  𝕏
                </span>
                <span className="contact-pill-label">Twitter</span>
              </a>
            </li>
          </ul>

          <div className="home-contact-group">
            <h3 className="home-contact-heading">Get in touch</h3>
            <ul className="home-contact-icons" aria-label="Get in touch">
              <li>
                <a href="mailto:tonykim135@gmail.com" className="contact-pill" aria-label="Email">
                  <span className="contact-pill-icon" aria-hidden>
                    ✉
                  </span>
                  <span className="contact-pill-label">Email</span>
                </a>
              </li>
              <li className="contact-pill-phone">
                <a href="tel:+254746612495" className="contact-pill" aria-label="Phone">
                  <span className="contact-pill-icon" aria-hidden>
                    ☎
                  </span>
                  <span className="contact-pill-label">+254 746 612 495</span>
                </a>
              </li>
              <li className="contact-pill-phone">
                <button
                  type="button"
                  className="contact-pill contact-pill-button"
                  onClick={() => setIsMessageOpen(true)}
                >
                  <span className="contact-pill-icon" aria-hidden>
                    ✉
                  </span>
                  <span className="contact-pill-label">Send message</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {isMessageOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
          <div className="modal-card">
            <div className="modal-header">
              <h2 id="contact-modal-title" className="page-title">
                Send Me a Message
              </h2>
              <button
                type="button"
                className="btn btn-ghost modal-close"
                onClick={() => setIsMessageOpen(false)}
                aria-label="Close message form"
              >
                ×
              </button>
            </div>

            <form className="modal-form">
              <div className="form-grid form-grid-2">
                <div className="field">
                  <label htmlFor="modal-full-name" className="field-label">
                    Full Name
                  </label>
                  <input
                    id="modal-full-name"
                    name="fullName"
                    className="input"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="field">
                  <label htmlFor="modal-email" className="field-label">
                    Email Address
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    className="input"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="form-grid" style={{ marginTop: '0.75rem' }}>
                <div className="field">
                  <label htmlFor="modal-subject" className="field-label">
                    Subject
                  </label>
                  <input
                    id="modal-subject"
                    name="subject"
                    className="input"
                    placeholder="What would you like to work on?"
                  />
                </div>

                <div className="field">
                  <label htmlFor="modal-message" className="field-label">
                    Message
                  </label>
                  <textarea
                    id="modal-message"
                    name="message"
                    className="textarea"
                    placeholder="Share a bit about your project, timeline, and goals."
                  />
                </div>

                <div className="modal-actions">
                  <button type="submit" className="btn btn-primary">
                    <span className="btn-label">Send Message</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

