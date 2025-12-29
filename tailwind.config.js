/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        textLight: 'var(--text-light)',
        surface: 'var(--surface)',
        surfaceStrong: 'var(--surface-strong)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Lora', 'Georgia', 'serif'],
        serif: ['Playfair Display', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 25px 60px -15px rgba(217, 177, 143, 0.55)',
        soft: '0 10px 35px rgba(7, 9, 12, 0.65)',
      },
      backdropBlur: {
        glass: '24px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeIn: 'fadeIn 0.8s ease forwards',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
      backgroundImage: {
        'pastel-gradient':
          'radial-gradient(circle at 20% 20%, rgba(217, 177, 143, 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(42, 51, 64, 0.85), transparent 55%), radial-gradient(circle at 50% 80%, rgba(42, 51, 64, 0.9), transparent 55%)',
      },
    },
  },
  plugins: [],
}

