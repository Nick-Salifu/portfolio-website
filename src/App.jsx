import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Footer from "./components/Footer"
import FeaturedProject from "./components/FeaturedProject"
import Hero from "./components/Hero"

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <FeaturedProject />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
