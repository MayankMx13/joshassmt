import Navbar from "./routes/navbar/navbar"
import Hero from "./routes/hero/hero"
import Projects from "./routes/proj/projects"
import Recommendation from "./routes/recommendations/recommendation"
import Formpallet from "./components/form/formpallet"
import Footer from "./routes/footer/footer"
import { useEffect } from "react";



function App() {


  function App() {
    useEffect(() => {
      const intervalId = setInterval(() => {
        fetch("https://json-server-azvl.onrender.com")
          .then(data => console.log("Server is alive:", data))
          .catch(error => console.error("Error keeping server alive:", error));
      }, 50000);
      return () => clearInterval(intervalId);
    }, []);

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