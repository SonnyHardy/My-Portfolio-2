import Navbar from "./layout/Navbar.tsx";
import Hero from "./sections/Hero.tsx";
import About from "./sections/About.tsx";
import Projects from "./sections/Projects.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import Contact from "./sections/Contact.tsx";
import Experience from "./sections/Experience.tsx";

function App() {

  return (
    <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
        </main>
    </div>
  )
}

export default App
