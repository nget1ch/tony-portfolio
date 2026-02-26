export function Home() {
  return (
    <section id="home" className="page-section">
      <div className="container">
        <div className="home-layout">
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
                      <span>Tony Ngetich 
                        <br /> Full-Stack Developer</span>
                      <span className="hero-avatar-note-dot" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="home-profile-content">
                <h2 className="section-title">Connect With Me.</h2>
                <ul className="home-contact-icons" aria-label="Contact links">
                  <li>
                    <a
                      href="https://github.com/TonyKim7493"
                      className="contact-pill"
                      aria-label="GitHub"
                    >
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
                    <a
                      href="https://x.com/your-handle"
                      className="contact-pill"
                      aria-label="X (Twitter)"
                    >
                      <span className="contact-pill-icon" aria-hidden>
                        𝕏
                      </span>
                      <span className="contact-pill-label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:tonykim135@gmail.com"
                      className="contact-pill"
                      aria-label="Email"
                    >
                      <span className="contact-pill-icon" aria-hidden>
                        ✉
                      </span>
                      <span className="contact-pill-label">Email</span>
                    </a>
                  </li>
                  <li className="contact-pill-phone">
                    <a
                      href="tel:+254746612495"
                      className="contact-pill"
                      aria-label="Phone"
                    >
                      <span className="contact-pill-icon" aria-hidden>
                        ☎
                      </span>
                      <span className="contact-pill-label">+254 746 612 495</span>
                    </a>
                  </li>
                </ul>
              </div>
          </aside>

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
            I build scalable, secure web applications with a focus on performance and clean architecture.
            Passionate about backend systems, reliability, and production-ready code.
            </p>
            <p className="hero-secondary-text">
              I design and build maintainable applications using modern JavaScript, thoughtful architecture, and
              performance-focused practices.
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
          </section>
        </div>
      </div>
    </section>
  )
}

