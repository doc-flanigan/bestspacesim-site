import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepGreen: '#0d1f16',
        greenMid: '#142b1e',
        purple: {
          DEFAULT: '#9b59ff',
          dark: '#7b39df',
        },
        offwhite: '#eef2ee',
        muted: '#7a8f7d',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'starfield':
          'radial-gradient(1200px 600px at 50% -10%, rgba(155,89,255,0.18), transparent 60%), radial-gradient(800px 400px at 90% 110%, rgba(155,89,255,0.10), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(155,89,255,0.35), 0 10px 40px -10px rgba(155,89,255,0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
