import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Home } from './pages/Home'
import { SkillsTools } from './pages/SkillsTools'
import { FeaturedProjects } from './pages/FeaturedProjects'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Home />
        <SkillsTools />
        <FeaturedProjects />
      </main>
      <Footer />
    </div>
  )
}

export default App
