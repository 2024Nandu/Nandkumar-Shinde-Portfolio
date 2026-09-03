import React from 'react';
import { MapPin, User, Code2, Rocket, Award, CheckCircle, Terminal } from 'lucide-react';

export const About = () => {
  const quickCards = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bangalore, India',
      subtitle: 'BTM Layout',
      color: 'text-cyan-400',
      border: 'border-cyan-500/30'
    },
    {
      icon: User,
      title: 'Primary Role',
      value: 'Java Backend Developer',
      subtitle: 'Spring Boot Specialist',
      color: 'text-blue-400',
      border: 'border-blue-500/30'
    },
    {
      icon: Code2,
      title: 'Primary Stack',
      value: 'Java + Spring Boot',
      subtitle: 'JPA, Hibernate, SQL & React',
      color: 'text-purple-400',
      border: 'border-purple-500/30'
    },
    {
      icon: Rocket,
      title: 'Interested In',
      value: 'Backend / Full-Stack',
      subtitle: 'Scalable Systems & APIs',
      color: 'text-emerald-400',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>ABOUT_ME.MD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Passionate About Building <br />
            <span className="gradient-text">Scalable Backend Systems</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Engineering clean REST APIs, robust databases, and practical software solutions.
          </p>
        </div>

        {/* Quick Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`p-6 rounded-2xl glass-card border ${card.border} hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">{card.title}</span>
                  <div className={`p-2.5 rounded-xl bg-slate-800/80 light:bg-slate-100 ${card.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white light:text-slate-900 mb-1">{card.value}</h3>
                <p className="text-xs font-mono text-slate-400 light:text-slate-500">{card.subtitle}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200 space-y-6">
            <h3 className="text-2xl font-bold text-white light:text-slate-900 flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-xl">&lt;DeveloperProfile /&gt;</span>
            </h3>

            <div className="space-y-4 text-slate-300 light:text-slate-600 leading-relaxed text-base">
              <p>
                I am a Java Backend / Full-Stack Developer focused on building scalable and maintainable web applications. My main development stack includes Java, Spring Boot, Spring MVC, Hibernate, JPA, REST APIs, and SQL.
              </p>
              <p>
                I enjoy understanding how backend systems work, designing clean APIs, working with databases, debugging complex problems, and turning application requirements into working software.
              </p>
              <p>
                Currently interning as a Full Stack Developer at KodNest Academy in Bengaluru, I have developed projects including an <strong className="text-cyan-400 font-semibold">AI Mock Interview Web Application</strong> featuring resume parsing, speech recognition, and dynamic question engines, alongside multiple CRUD-based backend applications.
              </p>
              <p>
                I am continuously improving my knowledge of backend development, system design, data structures, SQL, and modern software development practices.
              </p>
            </div>

            {/* Key Strengths Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-800/80 light:border-slate-200 text-sm font-mono text-slate-300 light:text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Spring Boot & Layered Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>RESTful API Design & Validation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>Hibernate & JPA ORM Persistence</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>MySQL Relational Querying & Indexing</span>
              </div>
            </div>
          </div>

          {/* Side Card: Focus Highlights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-purple-500/20 bg-gradient-to-b from-purple-500/5 to-transparent space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white light:text-slate-900">Academic & Training Background</h4>
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Bachelor of Engineering (B.E.) in Computer Science from Bheemanna Khandre Institute of Technology, Bhalki (2022-2026).
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                  CGPA: 7.0 / 10.0
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
