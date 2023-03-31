import NavBar from "./components/NavBar";
//import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Hero from "./components/Hero";
import Services from "./components/Service";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile,",
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Hero />
      {/* <Home /> */}
      <Skills />
      <Services />
      <About />
      <Portfolio />
      <Experience />

      <SocialLinks />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Gary Arellano</h6>
        <p>Foxlabs Developers © All CopyRights Reserved 2023</p>
      </footer>
    </div>
  );
}

export default App;
