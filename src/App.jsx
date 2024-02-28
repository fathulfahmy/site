import Navbar from "./components/Navbar.jsx";
import Splash from "./components/Splash.jsx";
import Projects from "./components/Projects.jsx";
import Title from "./components/Title.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Splash />
      <Title id="projects" text="Projects" bgColor="bg-red-500" />
      <Projects />
      <Title id="about" text="About" bgColor="bg-green-500" />
      <About />
      <Title id="contact" text="Contact" bgColor="bg-blue-500" />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
