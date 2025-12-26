import Navbar from "../shared/Navbar";
import About from "./sections/About";
import Footer from "../shared/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

// HomePageClient Component
const HomePageClient = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default HomePageClient;
