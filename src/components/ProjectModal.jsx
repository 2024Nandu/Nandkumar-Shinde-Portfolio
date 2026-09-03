import React, { useEffect } from 'react';
import { X, Github, ExternalLink, Cpu, CheckCircle2, AlertCircle, Layers } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-slate-700/80 light:border-slate-300 p-6 sm:p-8 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-800/80 hover:bg-cyan-500 hover:text-black text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {project.badge}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold">
                ⭐ Featured Application
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            {project.title}
          </h2>
          <p className="text-base font-mono text-cyan-400">{project.tagline}</p>
        </div>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Deep Overview */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white light:text-slate-900 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span>Technical Overview</span>
          </h3>
          <p className="text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Architecture Section */}
        {project.architecture && (
          <div className="p-5 rounded-2xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-300 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> System Architecture & Flow
            </h4>
            <p className="text-xs sm:text-sm font-mono text-slate-300 light:text-slate-800 leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Key Features & Highlights */}
        {project.highlights && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white light:text-slate-900">Key Features & Highlights</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 light:text-slate-700">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Challenges Solved */}
        {project.challengesSolved && (
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-white light:text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Challenges Solved & Engineering Notes</span>
            </h3>
            <ul className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              {project.challengesSolved.map((item, idx) => (
                <li key={idx} className="p-3 rounded-xl bg-slate-800/40 light:bg-slate-100 border border-slate-800/60 light:border-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Footer Action Buttons */}
        <div className="pt-6 border-t border-slate-800 light:border-slate-200 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 transition-colors"
            >
              <Github className="w-4 h-4" /> View GitHub Repo
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm flex items-center gap-2 shadow-glow-cyan transition-all"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-slate-400 hover:text-white text-sm font-mono"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
export default ProjectModal;
