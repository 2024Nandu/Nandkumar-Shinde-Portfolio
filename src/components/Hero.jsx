import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles, Code, CheckCircle2 } from 'lucide-react';
import Hero3D from './Hero3D';

export const Hero = () => {
  const roles = [
    'Java Developer',
    'Spring Boot Developer',
    'Backend Developer',
    'Full-Stack Developer'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const handleType = () => {
      const fullRole = roles[currentRoleIndex];

      if (!isDeleting) {
        setCurrentText(fullRole.substring(0, currentText.length + 1));
        if (currentText === fullRole) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(80);
        }
      } else {
        setCurrentText(fullRole.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(120);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const techMiniBar = [
    { name: 'Java', icon: '☕' },
    { name: 'Spring Boot', icon: '🍃' },
    { name: 'REST APIs', icon: '⚡' },
    { name: 'Hibernate', icon: '🔄' },
    { name: 'JPA', icon: '💾' },
    { name: 'SQL', icon: '🐬' },
    { name: 'React', icon: '⚛️' },
    { name: 'Git', icon: '🔀' }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Developer Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-mono shadow-glow-cyan">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open to Software Developer Opportunities</span>
            </div>

            {/* Main Greeting & Headings */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-mono text-cyan-400 flex items-center gap-2">
                <span>Hello, World!</span> <Sparkles className="w-4 h-4" />
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="gradient-text">Nandkumar Shinde</span>
              </h1>
            </div>

            {/* Dynamic Typewriter Subtitle */}
            <div className="h-10 flex items-center text-xl sm:text-2xl font-mono text-slate-300 dark:text-slate-300 light:text-slate-700">
              <span className="text-cyan-400 mr-2 font-bold">&gt;</span>
              <span>{currentText}</span>
              <span className="animate-pulse text-cyan-400 font-bold ml-1">|</span>
            </div>

            {/* Professional Summary Intro */}
            <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl leading-relaxed">
              I build scalable backend applications and REST APIs using Java, Spring Boot, Hibernate, JPA, and SQL. I enjoy turning ideas into practical software solutions and continuously improving my development skills.
            </p>

            {/* Location & Quick Info */}
            <div className="flex items-center gap-4 text-xs sm:text-sm font-mono text-slate-400 light:text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" /> BTM Layout, Bangalore, India
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-purple-400" /> KodNest Full Stack Intern
              </span>
            </div>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-glow-cyan hover:shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                download="Nandkumar_Shinde_Resume.pdf"
                className="px-6 py-3.5 rounded-xl glass-card text-white light:text-slate-900 border border-slate-700/60 light:border-slate-300 font-semibold text-sm sm:text-base flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl glass-card text-slate-300 light:text-slate-700 border border-slate-800/80 light:border-slate-300 font-semibold text-sm sm:text-base flex items-center gap-2 hover:border-purple-400 hover:text-purple-400 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-400 light:text-slate-500">Connect:</span>
              <a
                href="https://github.com/2024Nandu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg glass-card text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nandkumar-shinde-231763305/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg glass-card text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:nandkumarshinde61@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg glass-card text-slate-300 light:text-slate-700 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Tech Stack Mini Bar */}
            <div className="pt-6 border-t border-slate-800/80 light:border-slate-200">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Primary Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techMiniBar.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 rounded-lg glass-card text-xs font-mono text-slate-300 light:text-slate-800 border border-slate-800 light:border-slate-200 flex items-center gap-1.5 hover:border-cyan-500/50 hover:text-cyan-300 transition-all"
                  >
                    <span>{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: 3D Developer Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Hero3D />
          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;
