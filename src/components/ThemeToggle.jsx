import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light theme"
      className="p-2.5 rounded-xl glass-card text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-500 hover:rotate-90" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-500 hover:-rotate-45" />
      )}
    </button>
  );
};
export default ThemeToggle;
