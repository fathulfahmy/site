import Navbar from "./Navbar.jsx";
import Splash from "./Splash.jsx";
import Projects from "./Projects.jsx";
import Title from "./Title.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

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
