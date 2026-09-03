import React, { useState } from 'react';
import { Layers, ArrowDown, ArrowRight, Server, Database, Code, Globe, Cpu, CheckCircle2, Shield } from 'lucide-react';

export const Architecture = () => {
  const [selectedLayer, setSelectedLayer] = useState(0);

  const ecosystemFlow = [
    { name: 'Java', desc: 'Object-Oriented Programming, Collections, Exception Handling, Streams', icon: '☕' },
    { name: 'Spring Framework', desc: 'Inversion of Control (IoC), Dependency Injection, Core Container', icon: '🍃' },
    { name: 'Spring Boot', desc: 'Auto-Configuration, Embedded Tomcat, Starter Dependencies', icon: '🚀' },
    { name: 'Spring MVC', desc: 'DispatcherServlet, Controller Mappings, Request/Response DTOs', icon: '🌐' },
    { name: 'Spring Data JPA', desc: 'CrudRepository Abstraction, JPQL Query Methods, Pagination', icon: '💾' },
    { name: 'Hibernate', desc: 'ORM Engine, Entity Mappings, Session Management, First/Second Level Cache', icon: '🔄' },
    { name: 'Database', desc: 'MySQL RDBMS, SQL Schemas, Indexes, Foreign Key Constraints', icon: '🐬' }
  ];

  const layeredArchitecture = [
    {
      id: 'client',
      name: 'Client Layer',
      tech: 'React / Web Browser / Postman',
      role: 'Sends HTTP requests (GET, POST, PUT, DELETE) with JSON payloads and headers.',
      icon: Globe,
      color: 'border-cyan-500 text-cyan-400 bg-cyan-500/10'
    },
    {
      id: 'controller',
      name: 'Controller Layer',
      tech: '@RestController / Spring MVC',
      role: 'Handles HTTP endpoints, parses incoming JSON DTOs, validates inputs, and returns ResponseEntity objects.',
      icon: Code,
      color: 'border-blue-500 text-blue-400 bg-blue-500/10'
    },
    {
      id: 'service',
      name: 'Service Layer',
      tech: '@Service / Business Logic',
      role: 'Executes core business rules, transactional boundaries (@Transactional), DTO mappings, and security assertions.',
      icon: Cpu,
      color: 'border-purple-500 text-purple-400 bg-purple-500/10'
    },
    {
      id: 'repository',
      name: 'Repository Layer',
      tech: '@Repository / Spring Data JPA',
      role: 'Interfaces with ORM framework (Hibernate) using JpaRepository interfaces to execute CRUD queries.',
      icon: Server,
      color: 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
    },
    {
      id: 'database',
      name: 'Database Layer',
      tech: 'MySQL / RDBMS / H2',
      role: 'Persists relational data tables, foreign keys, indexed columns, and guarantees ACID compliance.',
      icon: Database,
      color: 'border-amber-500 text-amber-400 bg-amber-500/10'
    }
  ];

  return (
    <section className="py-24 relative bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-blue-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>SYSTEM_DESIGN & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Spring Boot <span className="gradient-text">Layered Architecture</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            How enterprise Java backend applications structure request flow, business logic, and database persistence.
          </p>
        </div>

        {/* Part 1: Layered Architecture Interactive Diagram */}
        <div className="mb-20">
          <h3 className="text-xl font-bold text-white light:text-slate-900 mb-8 text-center font-mono">
            [ Controller-Service-Repository Request Flow ]
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {layeredArchitecture.map((layer, idx) => {
              const IconComp = layer.icon;
              const isSelected = selectedLayer === idx;

              return (
                <div
                  key={layer.id}
                  onClick={() => setSelectedLayer(idx)}
                  className={`p-6 rounded-2xl glass-card border cursor-pointer transition-all duration-300 relative flex flex-col justify-between ${
                    isSelected
                      ? `${layer.color} shadow-lg scale-105`
                      : 'border-slate-800/80 light:border-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-slate-400">Step 0{idx + 1}</span>
                      <div className={`p-2 rounded-xl bg-slate-800/60 ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white light:text-slate-900">{layer.name}</h4>
                    <p className="text-xs font-mono text-cyan-400">{layer.tech}</p>
                    <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed pt-1">
                      {layer.role}
                    </p>
                  </div>

                  {idx < layeredArchitecture.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Java Ecosystem Flow Diagram */}
        <div className="p-8 sm:p-10 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200">
          <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-6 text-center">
            Java Backend Tech Stack Pipeline
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {ecosystemFlow.map((step, index) => (
              <React.Fragment key={step.name}>
                <div className="group p-4 rounded-2xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-300 hover:border-cyan-500/50 transition-all text-center min-w-[130px]">
                  <div className="text-2xl mb-1">{step.icon}</div>
                  <h4 className="text-sm font-bold text-white light:text-slate-900">{step.name}</h4>
                  <p className="text-[10px] font-mono text-slate-400 mt-1 max-w-[120px] line-clamp-2">
                    {step.desc}
                  </p>
                </div>

                {index < ecosystemFlow.length - 1 && (
                  <div className="text-cyan-400 font-bold font-mono text-lg animate-pulse">
                    &rarr;
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
export default Architecture;
