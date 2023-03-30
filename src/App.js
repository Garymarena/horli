import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
//import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Hero /> */}
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <SocialLinks />
    </div>
  );
}

export default App;
