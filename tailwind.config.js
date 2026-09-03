/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0d14',
          card: '#121824',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: '#1a2333',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          border: 'rgba(0, 0, 0, 0.08)',
          hover: '#f1f5f9',
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          purple: '#a855f7',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 25px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      }
    },
  },
  plugins: [],
}
