/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nuclear: {
          red: '#D31027',
          black: '#000000',
          white: '#F2F2F2',
          ink: '#0A0A0A',
          muted: '#6B6B6B',
          dark: '#0D0D0D',
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'Haettenschweiler', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Roboto Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(4.5rem,12vw,9rem)', { lineHeight: '0.85', letterSpacing: '0.02em' }],
        'display-lg': ['clamp(3rem,8vw,6rem)', { lineHeight: '0.9', letterSpacing: '0.02em' }],
        'display-md': ['clamp(2rem,5vw,3.5rem)', { lineHeight: '0.95', letterSpacing: '0.03em' }],
      },
      borderRadius: {
        card: '1.75rem',
      },
      maxWidth: {
        site: '80rem',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        glitch: 'glitch 3s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 4px #D31027)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px #D31027)' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, -1px)' },
        },
      },
    },
  },
  plugins: [],
}
