import React, { useState } from 'react';
import { Download, Eye, FileText, CheckCircle2, X } from 'lucide-react';

export const Resume = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  return (
    <section id="resume" className="py-20 relative bg-slate-950/60 light:bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Resume CTA Banner */}
        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/90 to-purple-950/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL_RESUME_DOC</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
                Want to know more about my experience?
              </h2>
              <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                Download my complete resume to explore my technical skills, internship experience at KodNest, academic achievements, and featured project implementations.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300 light:text-slate-700">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Java & Spring Boot</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> AI Mock Interview Platform</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> B.E. CS (2022-2026)</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <a
                href="/resume.pdf"
                download="Nandkumar_Shinde_Resume.pdf"
                className="px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-base flex items-center justify-center gap-3 shadow-glow-cyan hover:scale-[1.02] transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => setShowPreviewModal(true)}
                className="px-6 py-4 rounded-2xl glass-card text-white light:text-slate-900 border border-slate-700 light:border-slate-300 font-semibold text-base flex items-center justify-center gap-3 hover:border-cyan-400 hover:text-cyan-400 transition-all"
              >
                <Eye className="w-5 h-5" />
                <span>View Resume</span>
              </button>
            </div>

          </div>
        </div>

        {/* PDF Modal Viewer */}
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-4xl h-[85vh] rounded-3xl glass-panel border border-slate-700 p-4 flex flex-col">
              <div className="flex items-center justify-between p-3 border-b border-slate-800">
                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span>Nandkumar_Shinde_Resume.pdf</span>
                </h3>
                <button
                  onClick={() => setShowPreviewModal(false)}
                  className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 w-full mt-3 rounded-2xl overflow-hidden bg-slate-900">
                <iframe
                  src="/resume.pdf"
                  title="Nandkumar Shinde Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
export default Resume;
