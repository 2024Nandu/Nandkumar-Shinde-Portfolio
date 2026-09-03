import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal, Code2 } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'GitHub', href: '#github' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#0a0d14]/85 dark:bg-[#0a0d14]/85 light:bg-white/85 backdrop-blur-md border-b border-slate-800/80 light:border-slate-200 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 text-xl font-bold font-mono text-white light:text-slate-900 tracking-tight"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-glow-cyan group-hover:scale-105 transition-transform duration-300">
            <Code2 className="w-5 h-5" />
          </div>
          <span>
            Nandkumar<span className="text-cyan-400 font-normal">.java</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 rounded-lg hover:bg-slate-800/40 light:hover:bg-slate-100 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Section (Theme Toggle + Socials + Mobile Menu Button) */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/2024Nandu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 dark:text-slate-400 dark:hover:text-cyan-400 light:text-slate-600 light:hover:text-cyan-600 transition-colors hidden sm:block"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/nandkumar-shinde-231763305/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-slate-400 hover:text-cyan-400 dark:text-slate-400 dark:hover:text-cyan-400 light:text-slate-600 light:hover:text-cyan-600 transition-colors hidden sm:block"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <ThemeToggle />

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-xl glass-card text-slate-300 light:text-slate-700 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 light:border-slate-200 px-4 pt-3 pb-6 mt-2 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 hover:bg-cyan-500/10 hover:text-cyan-400 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-around">
              <a
                href="https://github.com/2024Nandu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 light:text-slate-700 hover:text-cyan-400"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/nandkumar-shinde-231763305/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-300 light:text-slate-700 hover:text-cyan-400"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
