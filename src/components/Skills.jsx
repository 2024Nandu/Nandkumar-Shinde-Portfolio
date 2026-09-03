import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';
import { 
  Coffee, Zap, Layers, Database, GitMerge, Globe, Server, Code, Cpu, FileCode, Palette, 
  Terminal, Atom, GitBranch, Github, Box, Send, Monitor, Shield, List, AlertTriangle, 
  Layout, CheckCircle, RefreshCw, Sparkles 
} from 'lucide-react';

const iconMap = {
  Coffee, Zap, Layers, Database, GitMerge, Globe, Server, Code, Cpu, FileCode, Palette,
  Terminal, Atom, GitBranch, Github, Box, Send, Monitor, Shield, List, AlertTriangle,
  Layout, CheckCircle, RefreshCw
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('backend');

  const currentCategory = skillsData.find((cat) => cat.id === activeTab) || skillsData[0];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL_CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Interactive Technical <span className="gradient-text">Skill Dashboard</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Core technologies, frameworks, tools, and computer science concepts I work with daily.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillsData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-5 py-3 rounded-2xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-glow-cyan scale-105'
                  : 'glass-card text-slate-300 light:text-slate-700 hover:text-cyan-400 border border-slate-800 light:border-slate-300'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Description */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <p className="text-xs font-mono text-cyan-400/90 bg-cyan-950/30 dark:bg-cyan-950/30 light:bg-cyan-50 border border-cyan-500/20 py-2 px-4 rounded-xl">
            {currentCategory.description}
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.skills.map((skill) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <div
                key={skill.name}
                className="group relative p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all"></div>

                <div className="flex items-start gap-4">
                  {/* Technology Icon Container */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/90 light:bg-slate-100 text-cyan-400 border border-slate-700/60 light:border-slate-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 light:text-slate-600 pt-1 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Skills;
