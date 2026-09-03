import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import RestApiDemo from './components/RestApiDemo';
import CodeShowcase from './components/CodeShowcase';
import Journey from './components/Journey';
import GithubSection from './components/GithubSection';
import RecruiterSection from './components/RecruiterSection';
import Education from './components/Education';
import CurrentlyLearning from './components/CurrentlyLearning';
import Terminal from './components/Terminal';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#0a0d14] dark:bg-[#0a0d14] light:bg-[#f8fafc] text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-300 font-sans selection:bg-cyan-500 selection:text-black">
        
        {/* Top Scroll Reading Indicator */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Flow */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Architecture />
          <RestApiDemo />
          <CodeShowcase />
          <Journey />
          <GithubSection />
          <RecruiterSection />
          <Education />
          <CurrentlyLearning />
          <Terminal />
          <Resume />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back To Top Action Button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
