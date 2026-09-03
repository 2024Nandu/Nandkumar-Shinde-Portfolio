import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, BookOpen, ShieldCheck } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC_QUALIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Academic degree background and verified technical certifications.
          </p>
        </div>

        {/* Education & Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Degree Card */}
          <div className="p-8 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/40 transition-all duration-300 space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                2022 – 2026
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Bachelor of Engineering (B.E.) in Computer Science
              </h3>
              <p className="text-sm font-mono text-cyan-400">
                Bheemanna Khandre Institute of Technology, Bhalki
              </p>
              <p className="text-xs text-slate-400 light:text-slate-500 flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Bhalki, Karnataka, India
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">Cumulative Grade</span>
              <span className="text-base font-bold font-mono text-emerald-400">CGPA: 7.0 / 10.0</span>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS & SQL', 'Operating Systems', 'Web Technologies', 'Software Engineering'].map((course) => (
                  <span key={course} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-800/60 light:bg-slate-200 text-slate-300 light:text-slate-800">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="p-8 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-purple-500/40 transition-all duration-300 space-y-6">
            <div className="flex items-center justify-between">
              <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                <Award className="w-6 h-6" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 font-bold">
                Verified
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white light:text-slate-900">
                Cyber Security Certification
              </h3>
              <p className="text-sm font-mono text-purple-400">
                Web Security & Authentication Best Practices
              </p>
              <p className="text-xs text-slate-400 light:text-slate-500 pt-1 leading-relaxed">
                Comprehensive training covering web application security, OAuth2, JWT authentication risks, SQL injection prevention, and secure coding practices.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 space-y-2">
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4" /> Security Competencies Covered
              </div>
              <ul className="text-xs text-slate-300 light:text-slate-700 space-y-1">
                <li>• Web Security & CORS Headers</li>
                <li>• Authentication Risks & JWT Token Security</li>
                <li>• Prevention of SQL Injections & XSS Attacks</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Education;
