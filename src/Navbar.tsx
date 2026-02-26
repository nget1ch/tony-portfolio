import { useTheme } from './ThemeProvider'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="navbar" aria-label="Primary">
      <div className="container navbar-inner">
        <div className="nav-left">
          <div className="nav-logo-mark" aria-hidden="true">
            TN
          </div>
          <div className="nav-text-block">
            <span className="nav-name">Tony Ngetich</span>
            <span className="nav-role">Full-Stack Developer · React &amp; Node.js</span>
          </div>
        </div>
        <nav className="nav-links" aria-label="Main sections">
          <a href="#home" className="nav-link">
            Home
          </a>
          <a href="#skills" className="nav-link">
            Skills &amp; Tools
          </a>
          <a href="#projects" className="nav-link">
            Featured Projects
          </a>
        </nav>
        <div className="nav-right">
          <div className="nav-theme-toggle" aria-label="Appearance" role="group">
            <button
              type="button"
              className={`nav-theme-pill ${theme === 'light' ? 'nav-theme-pill-active' : ''}`}
              onClick={() => theme !== 'light' && toggleTheme()}
              aria-pressed={theme === 'light'}
              aria-label="Use light mode"
            >
              ☼
            </button>
            <button
              type="button"
              className={`nav-theme-pill ${theme === 'dark' ? 'nav-theme-pill-active' : ''}`}
              onClick={() => theme !== 'dark' && toggleTheme()}
              aria-pressed={theme === 'dark'}
              aria-label="Use dark mode"
            >
              ☾
            </button>
          </div>
          <a href="#contact" className="btn btn-primary nav-contact-btn">
            <span className="btn-label">Contact</span>
            <span className="nav-contact-icon" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}

