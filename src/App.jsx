import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BubbleBackground } from './components/ui/bubble-background'

function App() {
  return (
    <div className="app-container">
      <BubbleBackground 
        interactive 
        className="bubble-background-fixed"
      />
      <div className="app-content">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
