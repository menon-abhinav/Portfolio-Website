import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ShowcaseSection2 from "./sections/ShowcaseSection2";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import AboutMe from "./sections/AboutMe";
import Particles from "./components/ParticlesBackground";

const App = () => (
  <>
    {/* <ParticlesBackground /> */}
    <Navbar />
    <Hero />
    <AboutMe />
    <ShowcaseSection />
    <ShowcaseSection2 />
    {/* <LogoShowcase /> */}
    {/* <FeatureCards /> */}
    <Experience />
    <TechStack />
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
  </>
);

export default App;
