import { useEffect } from 'react';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  // Prevent hydration mismatch on scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <div className="bg-[#030712] min-h-screen text-slate-200 selection:bg-violet-500/30 selection:text-violet-200">
      <Cursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
