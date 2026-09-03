import React from 'react';
import { journeyData } from '../data/journeyData';
import { GraduationCap, Briefcase, Code, Database, Cpu, Zap, CheckCircle2, Clock } from 'lucide-react';

const iconMap = {
  GraduationCap, Briefcase, Code, Database, Cpu, Zap
};

export const Journey = () => {
  return (
    <section id="journey" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>DEVELOPER_ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Learning & Growth <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            My milestone progression from Computer Science academics to building production REST APIs & full-stack web applications.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 -translate-x-1/2" />

          <div className="space-y-12">
            {journeyData.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 z-10 shadow-glow-cyan">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 space-y-3">
                      
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-purple-400 font-semibold">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white light:text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-xs font-mono text-slate-400 light:text-slate-500">
                        {item.institution}
                      </p>

                      <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed pt-1">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="pt-3 border-t border-slate-800/80 light:border-slate-200 flex flex-wrap gap-2">
                        {item.highlights.map((h, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/50 light:bg-slate-100 text-slate-300 light:text-slate-700 flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            {h}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
export default Journey;
