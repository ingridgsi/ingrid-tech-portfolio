import "./GlobalStyles.css";
import NavBar from "../src/PageStructure/1-header/NavBar";
import Hero from "./PageStructure/2-Hero/Hero";
import Skills from "./PageStructure/3-skills/Skills";
import About from "./PageStructure/4-about/About";
import Projects from "./PageStructure/5-projects/Projects";
import Contact from "./PageStructure/6-contact/Contact";
import Container from "./Container";
import Footer from "./PageStructure/7-footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
