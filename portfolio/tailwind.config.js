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
        navy: {
          950: '#070b14', // Ultra deep space background
          900: '#0b1120', // Main background surface
          850: '#0f172a', // Card / panel surface
          800: '#1e293b', // Elevated borders & cards
          700: '#334155', // Muted borders
          600: '#475569',
        },
        aws: {
          orange: '#FF9900',       // Official AWS Orange
          'orange-light': '#FFAC33',
          'orange-hover': '#e68a00',
          'orange-dim': 'rgba(255, 153, 0, 0.12)',
          squid: '#232F3E',        // Official AWS Squid Ink
          paper: '#161E2E',
        },
        cloud: {
          cyan: '#38bdf8',         // Sky blue / cyan accent
          'cyan-dark': '#0284c7',
          'cyan-dim': 'rgba(56, 189, 248, 0.12)',
          blue: '#3b82f6',
          indigo: '#6366f1',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow': 'flow 3s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'node-ping': 'nodePing 2s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        flow: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        nodePing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.25)', opacity: '0.6' },
        },
        glow: {
          '0%': { opacity: '0.3', filter: 'blur(20px)' },
          '100%': { opacity: '0.6', filter: 'blur(30px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'dots-pattern': "url(\"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%2394a3b8' fill-opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
