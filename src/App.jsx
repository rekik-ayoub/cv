import React, { useState, useEffect } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EducationAndCerts } from './components/EducationAndCerts';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');

    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Starfield & Constellation Canvas */}
      <BackgroundCanvas />

      {/* Navigation Dock */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main One-Page Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <EducationAndCerts />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal for In-depth Project Details */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
