import React, { useEffect, useState } from 'react';
import { fetchGithubProfile, fetchGithubRepos } from '../services/githubService';
import { Github, Star, GitFork, BookOpen, ExternalLink, Calendar, Users, Code, Activity } from 'lucide-react';

export const GithubSection = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadGithubData() {
      setLoading(true);
      const profileData = await fetchGithubProfile();
      const reposData = await fetchGithubRepos();
      setProfile(profileData);
      setRepos(reposData);
      setLoading(false);
    }
    loadGithubData();
  }, []);

  return (
    <section id="github" className="py-24 relative bg-slate-950/40 light:bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Github className="w-3.5 h-3.5" />
            <span>OPEN_SOURCE_ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            My GitHub <span className="gradient-text">Activity & Repositories</span>
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Real-time public repositories and code contributions on GitHub.
          </p>
        </div>

        {/* Profile Stats Card */}
        {profile && (
          <div className="p-8 rounded-3xl glass-card border border-slate-800/80 light:border-slate-200 mb-14">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Profile Avatar & Info */}
              <div className="flex items-center gap-5 text-center md:text-left">
                <img
                  src={profile.avatar_url}
                  alt={profile.name || '2024Nandu'}
                  className="w-20 h-20 rounded-2xl border-2 border-cyan-500/50 shadow-glow-cyan object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white light:text-slate-900">
                    {profile.name || 'Nandkumar Shinde'}
                  </h3>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline font-mono text-sm inline-flex items-center gap-1"
                  >
                    @{profile.login} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-slate-400 light:text-slate-600 mt-1 max-w-lg">
                    {profile.bio || 'Java Backend & Full-Stack Developer'}
                  </p>
                </div>
              </div>

              {/* Quick Metrics Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="px-5 py-3 rounded-2xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center min-w-[110px]">
                  <div className="text-2xl font-extrabold text-cyan-400 font-mono">{profile.public_repos}</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Repositories</div>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-slate-900/80 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-center min-w-[110px]">
                  <div className="text-2xl font-extrabold text-purple-400 font-mono">{profile.followers}</div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Followers</div>
                </div>

                <a
                  href="https://github.com/2024Nandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm flex items-center gap-2 shadow-glow-cyan transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Profile</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* Featured Repositories Subheading */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white light:text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>Featured Public Repositories</span>
          </h3>
          <span className="text-xs font-mono text-slate-400">Live API Data</span>
        </div>

        {/* Repositories Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 4].map((i) => (
              <div key={i} className="h-44 rounded-2xl glass-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-2xl glass-card border border-slate-800/80 light:border-slate-200 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-white light:text-slate-900 group-hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </a>
                  </div>

                  <p className="text-xs text-slate-400 light:text-slate-600 line-clamp-2 leading-relaxed">
                    {repo.description || 'Java backend implementation repository.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="flex items-center gap-1 text-cyan-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                      <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                    </span>
                  </div>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/60 hover:bg-cyan-500 hover:text-black text-slate-300 transition-colors"
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
export default GithubSection;
