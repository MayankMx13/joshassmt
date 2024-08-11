import Navbar from "./routes/navbar/navbar"
import Hero from "./routes/hero/hero"
import Projects from "./routes/proj/projects"
import Recommendation from "./routes/recommendations/recommendation"
import Formpallet from "./components/form/formpallet"
import Footer from "./routes/footer/footer"



function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Projects />
      <Recommendation />
      <Formpallet />
      <Footer />

    </div>
  )
}

export default App