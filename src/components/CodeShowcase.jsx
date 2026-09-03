import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal } from 'lucide-react';

export const CodeShowcase = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `package com.nandkumar.portfolio.controller;

import com.nandkumar.portfolio.model.Project;
import com.nandkumar.portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    /**
     * Fetch all portfolio projects
     * @return List of Project objects with HTTP 200 OK
     */
    @GetMapping
    public ResponseEntity<List<Project>> getProjects() {
        List<Project> projects = projectService.getAllProjects();
        return ResponseEntity.ok(projects);
    }

    /**
     * Fetch project by unique ID
     */
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable String id) {
        return projectService.getProjectById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 relative bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
              <Code2 className="w-4 h-4" />
              <span>ProjectController.java</span>
            </div>

            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg glass-card text-xs font-mono text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Code' : 'Copy Code'}</span>
            </button>
          </div>

          {/* IDE Window Frame */}
          <div className="rounded-3xl glass-panel border border-slate-800/80 light:border-slate-300 overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="px-6 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-slate-400">IntelliJ IDEA -- Spring Boot REST Controller</span>
              </div>
              <span>Java 21</span>
            </div>

            {/* Code Content Area */}
            <div className="p-6 sm:p-8 bg-slate-950 font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed">
              <pre>
                <code>
                  {codeSnippet.split('\n').map((line, index) => (
                    <div key={index} className="flex hover:bg-slate-900/50 px-2 py-0.5 rounded">
                      <span className="w-8 text-slate-600 select-none text-right mr-4">{index + 1}</span>
                      <span className="flex-1">
                        {line
                          .replace(/(@RestController|@RequestMapping|@GetMapping|@PathVariable|@CrossOrigin|@Autowired)/g, '~~~KW~~~$1~~~END~~~')
                          .replace(/(public class|public|private final|package|import|return)/g, '~~~BL~~~$1~~~END~~~')
                          .replace(/(ResponseEntity|List|Project|ProjectService|String)/g, '~~~CY~~~$1~~~END~~~')
                          .split('~~~')
                          .map((chunk, i) => {
                            if (chunk.startsWith('KW')) return <span key={i} className="text-amber-400 font-bold">{chunk.replace('KW', '')}</span>;
                            if (chunk.startsWith('BL')) return <span key={i} className="text-purple-400 font-semibold">{chunk.replace('BL', '')}</span>;
                            if (chunk.startsWith('CY')) return <span key={i} className="text-cyan-400">{chunk.replace('CY', '')}</span>;
                            if (chunk.startsWith('END')) return null;
                            if (chunk.startsWith('/*') || chunk.startsWith(' *') || chunk.startsWith('//')) {
                              return <span key={i} className="text-slate-500 italic">{chunk}</span>;
                            }
                            return chunk;
                          })}
                      </span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default CodeShowcase;
