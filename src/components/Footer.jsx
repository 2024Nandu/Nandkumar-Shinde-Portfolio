import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative border-t border-slate-800/80 light:border-slate-200 bg-[#07090f] text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Decorative Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-mono text-slate-500 mb-8 opacity-60">
          <span>&#123; Java 21 &#125;</span>
          <span>•</span>
          <span>@SpringBootApplication</span>
          <span>•</span>
          <span>REST API 200 OK</span>
          <span>•</span>
          <span>404 bugs not found</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60 light:border-slate-200">
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold font-mono text-lg">
              <Code2 className="w-5 h-5 text-cyan-400" />
              <span>Nandkumar Shinde</span>
            </div>
            <p className="text-xs text-slate-400">
              Java Backend & Full-Stack Developer • BTM Layout, Bangalore
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-300 light:text-slate-700">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          {/* Right Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/2024Nandu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 light:bg-slate-200 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/nandkumar-shinde-231763305/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 light:bg-slate-200 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:nandkumarshinde61@gmail.com"
              className="p-2 rounded-lg bg-slate-900 light:bg-slate-200 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {currentYear} Nandkumar Shinde. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Built by</span>
            <span className="text-cyan-400 font-bold">Nandkumar Shinde</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
