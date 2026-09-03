import React, { useState } from 'react';
import { Terminal as TerminalIcon, Play, Copy, Check, Server, RefreshCw } from 'lucide-react';

export const RestApiDemo = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('GET /api/students');
  const [copied, setCopied] = useState(false);

  const endpoints = [
    {
      method: 'GET',
      path: '/api/students',
      status: '200 OK',
      statusColor: 'text-emerald-400',
      description: 'Fetch list of all enrolled students with academic records.',
      response: `[
  {
    "id": 101,
    "name": "Nandkumar Shinde",
    "email": "nandkumarshinde61@gmail.com",
    "course": "Computer Science (B.E.)",
    "cgpa": 7.0,
    "status": "ACTIVE"
  },
  {
    "id": 102,
    "name": "Alex Johnson",
    "email": "alex.j@example.com",
    "course": "Software Engineering",
    "cgpa": 8.5,
    "status": "ACTIVE"
  }
]`
    },
    {
      method: 'POST',
      path: '/api/students',
      status: '201 CREATED',
      statusColor: 'text-cyan-400',
      description: 'Create a new student record in MySQL database.',
      requestBody: `{
  "name": "Rahul Verma",
  "email": "rahul.v@example.com",
  "course": "Computer Science",
  "cgpa": 7.8
}`,
      response: `{
  "id": 103,
  "name": "Rahul Verma",
  "email": "rahul.v@example.com",
  "course": "Computer Science",
  "cgpa": 7.8,
  "createdDate": "2026-03-03T12:00:00Z",
  "status": "CREATED"
}`
    },
    {
      method: 'PUT',
      path: '/api/students/101',
      status: '200 OK',
      statusColor: 'text-purple-400',
      description: 'Update existing student details by student ID.',
      requestBody: `{
  "course": "Full Stack Java Engineering",
  "cgpa": 8.0
}`,
      response: `{
  "id": 101,
  "name": "Nandkumar Shinde",
  "course": "Full Stack Java Engineering",
  "cgpa": 8.0,
  "updatedAt": "2026-03-03T12:15:00Z"
}`
    },
    {
      method: 'DELETE',
      path: '/api/students/102',
      status: '204 NO CONTENT',
      statusColor: 'text-amber-400',
      description: 'Remove student record from persistent storage.',
      response: `{
  "message": "Student record ID 102 deleted successfully.",
  "success": true
}`
    },
    {
      method: 'POST',
      path: '/api/interviews/generate',
      status: '200 OK (AI Engine)',
      statusColor: 'text-blue-400',
      description: 'AI Mock Interview platform question generation payload.',
      requestBody: `{
  "role": "Java Backend Developer",
  "candidateId": "NS-9353",
  "topics": ["Spring Boot", "JPA", "MySQL"]
}`,
      response: `{
  "sessionId": "AI-SESSION-8849",
  "questions": [
    "Explain Dependency Injection and how @Autowired works in Spring Boot.",
    "What is the difference between Lazy and Eager fetching in Hibernate?",
    "How do you handle database transactions using @Transactional?"
  ],
  "ttsAudioEnabled": true
}`
    }
  ];

  const currentApi = endpoints.find((e) => `${e.method} ${e.path}` === selectedEndpoint) || endpoints[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentApi.response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Server className="w-3.5 h-3.5" />
            <span>REST_API_LAB</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Interactive REST API <span className="gradient-text">Endpoint Tester</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Test backend HTTP request endpoints and inspect JSON response payloads.
          </p>
        </div>

        {/* REST API Simulator Container */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel border border-slate-800/80 light:border-slate-300 overflow-hidden shadow-2xl">
          
          {/* Terminal Window Header */}
          <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 font-mono text-xs text-slate-400">api-testing-client --http/1.1</span>
            </div>

            <button
              onClick={handleCopy}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy JSON'}</span>
            </button>
          </div>

          {/* Endpoint Selector Tabs */}
          <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-wrap gap-2">
            {endpoints.map((ep) => {
              const fullKey = `${ep.method} ${ep.path}`;
              const isSelected = fullKey === selectedEndpoint;

              return (
                <button
                  key={fullKey}
                  onClick={() => setSelectedEndpoint(fullKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 font-bold'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  <span className={`font-bold ${
                    ep.method === 'GET' ? 'text-emerald-400' :
                    ep.method === 'POST' ? 'text-cyan-400' :
                    ep.method === 'PUT' ? 'text-purple-400' : 'text-amber-400'
                  }`}>
                    {ep.method}
                  </span>
                  <span className="truncate max-w-[140px]">{ep.path}</span>
                </button>
              );
            })}
          </div>

          {/* Response Payload & Details */}
          <div className="p-6 sm:p-8 space-y-6 font-mono text-xs sm:text-sm">
            
            {/* Request Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  {currentApi.method}
                </span>
                <span className="text-white font-bold">{currentApi.path}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-400">Response Status:</span>
                <span className={`font-bold ${currentApi.statusColor}`}>{currentApi.status}</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs font-sans italic">{currentApi.description}</p>

            {/* Request Body (If present) */}
            {currentApi.requestBody && (
              <div className="space-y-2">
                <div className="text-slate-400 text-xs uppercase tracking-wider">// Request Payload Body</div>
                <pre className="p-4 rounded-xl bg-slate-950 text-cyan-300 overflow-x-auto border border-slate-800">
                  <code>{currentApi.requestBody}</code>
                </pre>
              </div>
            )}

            {/* Response JSON Output */}
            <div className="space-y-2">
              <div className="text-slate-400 text-xs uppercase tracking-wider">// JSON Response Payload</div>
              <pre className="p-4 rounded-xl bg-slate-950 text-emerald-300 overflow-x-auto border border-slate-800 leading-relaxed">
                <code>{currentApi.response}</code>
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default RestApiDemo;
