import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { Github, ExternalLink, Eye, Star, Layers, Sparkles } from 'lucide-react';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = ['All', 'Java', 'Spring Boot', 'Backend', 'Full Stack', 'REST API'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO_PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Featured <span className="gradient-text">Applications & Systems</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Practical backend APIs, AI integrations, and full-stack solutions engineered with Java & Spring Boot.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-cyan-500 text-black shadow-glow-cyan font-bold scale-105'
                  : 'glass-card text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-slate-800 light:border-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group rounded-3xl glass-card border transition-all duration-300 flex flex-col overflow-hidden ${
                project.featured
                  ? 'border-cyan-500/60 shadow-glow-cyan lg:col-span-2 md:col-span-2'
                  : 'border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40'
              }`}
            >
              {/* Project Card Image Banner */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-black/30 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/90 text-black font-bold backdrop-blur-md shadow-md">
                    {project.badge}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-600/90 text-white font-bold backdrop-blur-md flex items-center gap-1 shadow-md">
                      <Star className="w-3 h-3 fill-current text-amber-300" /> Featured Application
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Buttons */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="p-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                  >
                    <Eye className="w-4 h-4" /> View Details
                  </button>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">{project.tagline}</p>
                  <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/80 light:bg-slate-200 text-slate-300 light:text-slate-800 border border-slate-700/50 light:border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-800/50 text-slate-400">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                {/* Footer Link Buttons */}
                <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1"
                  >
                    <span>Details &rarr;</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
};
export default Projects;
