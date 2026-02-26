export function SkillsTools() {
  return (
    <section id="skills" className="page-section">
      <div className="container">
        <header className="page-header">
          <h1 className="page-title">Skills &amp; Tools</h1>
          <p className="page-subtitle">My toolkit for building scalable, secure web applications.</p>
        </header>

          <div className="skills-grid">
            <section className="skills-card">
              <header className="card-header">
                <div>
                  <h2 className="card-title">Frontend</h2>
                  <p className="card-subtitle">Engineered interfaces built for performance, clarity, and long-term scalability. Component-driven architecture with a focus on maintainability and user experience.</p>
                </div>
              </header>
              <div className="skills-list">
                <span className="skills-pill">TypeScript</span>
                <span className="skills-pill">React</span>
                <span className="skills-pill">Next.js</span>
              </div>
            </section>

            <section className="skills-card">
              <header className="card-header">
                <div>
                  <h2 className="card-title">Backend</h2>
                  <p className="card-subtitle">Production-grade APIs designed for security, reliability, and scale. Structured architecture, deliberate authentication flows, and performance-conscious system design.</p>
                </div>
              </header>
              <div className="skills-list">
                <span className="skills-pill">Node.js</span>
                <span className="skills-pill">REST APIs</span>
                <span className="skills-pill">Authentication</span>
                <span className="skills-pill">Security best practices</span>
              </div>
            </section>

            <section className="skills-card">
              <header className="card-header">
                <div>
                  <h2 className="card-title">Databases</h2>
                  <p className="card-subtitle">Relational data models optimized for integrity, efficiency, and predictable growth. Schema-first thinking with disciplined query performance.</p>
                </div>
              </header>
              <div className="skills-list">
                <span className="skills-pill">PostgreSQL</span>
                <span className="skills-pill">Schema design</span>
                <span className="skills-pill">Query optimization</span>
              </div>
            </section>

            <section className="skills-card">
              <header className="card-header">
                <div>
                  <h2 className="card-title">Tools &amp; Practices</h2>
                  <p className="card-subtitle">Workflow discipline and engineering standards that keep systems stable and delivery predictable.</p>
                </div>
              </header>
              <div className="skills-list">
                <span className="skills-pill">Git</span>
                <span className="skills-pill">GitHub</span>
                <span className="skills-pill">Linux</span>
                <span className="skills-pill">Code reviews</span>
                <span className="skills-pill">Automated checks</span>
              </div>
            </section>
          </div>

        <section className="page-section" aria-label="Engineering values">
          <div className="section-heading-row">
            <div>
              <h2 className="section-title">Engineering values</h2>
              <p className="section-subtitle">Principles that guide how I design, build, and ship software.</p>
            </div>
          </div>
          <div className="values-row">
            <span className="value-pill">Code quality</span>
            <span className="value-pill">Performance</span>
            <span className="value-pill">Security</span>
            <span className="value-pill">Maintainability</span>
            <span className="value-pill">User experience</span>
          </div>
        </section>
      </div>
    </section>
  )
}

