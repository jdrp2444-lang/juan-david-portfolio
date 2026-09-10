import Hero from "./components/Hero";
import "./App.css";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import UniversityProjects from "./components/UniversityProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Juan David Ramírez"
        role="Software Developer"
        description="Estudiante de último semestre de Tecnología en Desarrollo Web, enfocado en el desarrollo de aplicaciones web y en construir soluciones utilizando tecnologías de frontend, backend y herramientas de desarrollo modernas."
/>
      <About />
      <Skills />
      <Projects />
      <UniversityProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;