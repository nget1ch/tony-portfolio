export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <span>© {new Date().getFullYear()} Tony Kimutai Ngetich.</span>{' '}
          <span className="muted">Building scalable, secure web applications.</span>
        </div>
        <div className="footer-links">
          <a href="/" className="footer-link">
            Home
          </a>
          <a href="/skills" className="footer-link">
            Skills &amp; Tools
          </a>
          <a href="/projects" className="footer-link">
            Featured Projects
          </a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/TonyKim7493"
            className="footer-link footer-social-pill"
            aria-label="GitHub"
          >
            <span aria-hidden>🐙</span>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/tony-ngetich-544373252/"
            className="footer-link footer-social-pill"
            aria-label="LinkedIn"
          >
            <span aria-hidden>in</span>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/your-handle"
            className="footer-link footer-social-pill"
            aria-label="X (Twitter)"
          >
            <span aria-hidden>𝕏</span>
            <span>Twitter</span>
          </a>
          <a
            href="mailto:tonykim135@gmail.com"
            className="footer-link footer-social-pill"
            aria-label="Email"
          >
            <span aria-hidden>✉</span>
            <span>Email</span>
          </a>
          <a
            href="tel:+254746612495"
            className="footer-link footer-social-pill"
            aria-label="Phone"
          >
            <span aria-hidden>☎</span>
            <span>+254 746 612 495</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

