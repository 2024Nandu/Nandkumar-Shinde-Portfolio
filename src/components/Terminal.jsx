import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';

export const Terminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Antigravity Developer Shell v2.4 [Nandkumar Shinde Portfolio Terminal]' },
    { type: 'system', content: 'Type "help" to view available terminal commands.' },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', content: `$ ${input}` }];

    switch (cmd) {
      case 'whoami':
        newHistory.push({
          type: 'output',
          content: 'Nandkumar Shinde - Java Backend & Full-Stack Developer based in BTM Layout, Bangalore, India.'
        });
        break;

      case 'role':
        newHistory.push({
          type: 'output',
          content: 'Java Backend Developer | Spring Boot Developer | Full-Stack Developer'
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: 'Java, Spring Boot, Spring MVC, Spring Data JPA, Hibernate, REST API, MySQL, SQL, React, Git, Maven, Postman'
        });
        break;

      case 'github':
        newHistory.push({
          type: 'output',
          content: 'GitHub Profile: https://github.com/2024Nandu'
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: '1. AI Mock Interview Web Application [Featured]\n2. Student Management System\n3. Banking Management System\n4. Employee Management System\n5. REST API Showcase\n6. Amazon Clone Website'
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: 'Email: nandkumarshinde61@gmail.com | Phone: 9353814711 | Location: BTM Layout, Bangalore, India'
        });
        break;

      case 'help':
        newHistory.push({
          type: 'output',
          content: 'Available commands: whoami, role, skills, github, projects, contact, clear, help'
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          content: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto rounded-3xl glass-panel border border-slate-800/80 light:border-slate-300 overflow-hidden shadow-2xl">
          
          {/* Terminal Title Bar */}
          <div className="px-6 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> nandu@dev-terminal:~
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">zsh</span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 sm:p-8 bg-slate-950/95 font-mono text-xs sm:text-sm text-slate-200 min-h-[300px] max-h-[420px] overflow-y-auto space-y-3">
            {history.map((item, index) => (
              <div key={index} className="leading-relaxed">
                {item.type === 'user' && (
                  <span className="text-cyan-400 font-bold">{item.content}</span>
                )}
                {item.type === 'system' && (
                  <span className="text-slate-400 italic">{item.content}</span>
                )}
                {item.type === 'output' && (
                  <pre className="text-emerald-300 whitespace-pre-wrap font-mono pt-1">
                    {item.content}
                  </pre>
                )}
                {item.type === 'error' && (
                  <span className="text-red-400 font-semibold">{item.content}</span>
                )}
              </div>
            ))}

            {/* Active Command Prompt Input Line */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold">nandu@dev:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help'..."
                className="flex-1 bg-transparent text-cyan-300 focus:outline-none font-mono"
              />
              <span className="w-2 h-4 bg-cyan-400 animate-pulse"></span>
            </div>
            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
export default Terminal;
