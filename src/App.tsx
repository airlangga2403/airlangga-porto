import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Principles } from './components/sections/Principles';
import { Contact } from './components/sections/Contact';
import { Navigation } from './components/ui/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-primary/30 selection:text-primary-100">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Principles />
        <Contact />
      </main>
    </div>
  );
}
