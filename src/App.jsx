import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-cream font-body">
      {/* Film grain overlay */}
      <div className="grain" aria-hidden="true" />

      <Navbar />

      <main>
        <Hero />

        <div className="relative">
          <div className="hidden xl:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}
