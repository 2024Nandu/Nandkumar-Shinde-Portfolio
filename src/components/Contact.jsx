import React, { useState } from 'react';
import { sendContactMessage } from '../services/contactService';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      const res = await sendContactMessage(formData);
      setLoading(false);
      setStatus({ type: 'success', text: res.message });
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger celebratory confetti on message sent
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      setLoading(false);
      setStatus({ type: 'error', text: err.message });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET_IN_TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Let's Build <span className="gradient-text">Something Together</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Have a project in mind, a software role opening, or want to connect? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200 space-y-6">
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Contact Information
              </h3>
              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                Feel free to reach out via email, phone, or LinkedIn. I am actively looking for Java Developer and Full-Stack Developer opportunities in Bangalore and remote setups.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="mailto:nandkumarshinde61@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email Address</div>
                    <div className="text-sm font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors">
                      nandkumarshinde61@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:9353814711"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 hover:border-blue-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Phone Number</div>
                    <div className="text-sm font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                      +91 9353814711
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Location</div>
                    <div className="text-sm font-bold text-white light:text-slate-900">
                      BTM Layout, Bangalore, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Clickable Social Cards */}
              <div className="pt-4 border-t border-slate-800 light:border-slate-200 flex items-center gap-4">
                <a
                  href="https://github.com/2024Nandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl glass-card text-center text-xs font-mono font-semibold text-slate-300 light:text-slate-800 hover:text-cyan-400 border border-slate-800 light:border-slate-300 flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nandkumar-shinde-231763305/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl glass-card text-center text-xs font-mono font-semibold text-slate-300 light:text-slate-800 hover:text-cyan-400 border border-slate-800 light:border-slate-300 flex items-center justify-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-800/80 light:border-slate-200 space-y-6 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Send a Message
              </h3>

              {status && (
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm font-mono flex items-start gap-3 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/40'
                      : 'bg-red-950/60 text-red-300 border border-red-500/40'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-slate-300 light:text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 text-white light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-500 font-sans text-sm transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-slate-300 light:text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 text-white light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-500 font-sans text-sm transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300 light:text-slate-700">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Java Backend Developer Opportunity / Collaboration"
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 text-white light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-500 font-sans text-sm transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-300 light:text-slate-700">Your Message *</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hi Nandkumar, I reviewed your AI Mock Interview project and portfolio..."
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 text-white light:text-slate-900 border border-slate-800 light:border-slate-300 focus:outline-none focus:border-cyan-500 font-sans text-sm transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-base flex items-center justify-center gap-2 shadow-glow-cyan transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
