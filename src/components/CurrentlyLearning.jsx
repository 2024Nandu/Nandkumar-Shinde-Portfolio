import React from 'react';
import { Sparkles, Code, Cpu, Database, Network, Layout, Layers } from 'lucide-react';

export const CurrentlyLearning = () => {
  const learningItems = [
    { name: 'Data Structures & Algorithms', icon: Code, desc: 'LeetCode, Java Collections, Big-O optimization' },
    { name: 'Advanced Spring Boot', icon: Cpu, desc: 'Spring Security, OAuth2, WebFlux asynchronous streams' },
    { name: 'SQL Optimization', icon: Database, desc: 'Execution plans, Indexing strategies, Complex joins' },
    { name: 'Microservices Architecture', icon: Network, desc: 'Service discovery, API Gateway, Distributed tracing' },
    { name: 'System Design', icon: Layers, desc: 'Scalability, Caching (Redis), Load balancing fundamentals' },
    { name: 'React.js', icon: Layout, desc: 'Modern SPA development, Hooks, Tailwind CSS UI' }
  ];

  return (
    <section className="py-20 relative bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONTINUOUS_LEARNING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Currently <span className="gradient-text">Learning & Upskilling</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm sm:text-base">
            Actively expanding technical domain expertise to master high-scale software engineering.
          </p>
        </div>

        {/* Animated Technology Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {learningItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-purple-500/50 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-purple-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1 font-mono">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default CurrentlyLearning;
