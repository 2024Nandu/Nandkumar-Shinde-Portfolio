import React from 'react';
import { Server, Rocket, Bug, BookOpenCheck, CheckCircle } from 'lucide-react';

export const RecruiterSection = () => {
  const recruiterCards = [
    {
      title: 'Backend Focused',
      description: 'Strong interest in Java, Spring Boot, and backend development architecture.',
      icon: Server,
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      title: 'Project Based Learning',
      description: 'Learning software development by building real-world practical applications.',
      icon: Rocket,
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      title: 'Problem Solver',
      description: 'Enjoy debugging applications and understanding why backend systems behave the way they do.',
      icon: Bug,
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      title: 'Continuous Learner',
      description: 'Constantly learning Java, Spring, relational databases, DSA, and modern software practices.',
      icon: BookOpenCheck,
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>RECRUITER_OVERVIEW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Why Work <span className="gradient-text">With Me?</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Core strengths and value I bring as a early-career Java Backend / Full-Stack Engineer.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recruiterCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`p-8 rounded-3xl glass-card border ${card.border} hover:scale-[1.02] transition-all duration-300 space-y-4 group`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-slate-800/80 light:bg-slate-100 ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white light:text-slate-900">{card.title}</h3>
                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default RecruiterSection;
