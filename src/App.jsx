import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Title id="projects" text="Projects" />
      <Projects />
      <Title id="about" text="About" />
      <About />
      <Title id="contact" text="Contact" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
