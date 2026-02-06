/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRIMARY - Deep Teal (trust, calm, depth)
        primary: {
          50: '#f0f9fb',
          100: '#d9f0f5',
          200: '#b8e3ec',
          300: '#87cedf',
          400: '#4eb0cb',
          500: '#2c5f6f',
          600: '#254f5c',
          700: '#20424d',
          800: '#1d3740',
          900: '#1a2f36',
        },
        // SECONDARY - Sage Green (growth, balance, nature)
        secondary: {
          50: '#f6f8f6',
          100: '#e9efe9',
          200: '#d4dfd4',
          300: '#b5c9b5',
          400: '#8ba888',
          500: '#6d8e6b',
          600: '#567156',
          700: '#455a45',
          800: '#394939',
          900: '#303d30',
        },
        // ACCENT - Warm Sand (warmth, approachability)
        accent: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d0',
          300: '#dfc9ae',
          400: '#d4a574',
          500: '#c38c56',
          600: '#a9754a',
          700: '#8d5e3f',
          800: '#744f37',
          900: '#5f4230',
        },
        // NEUTRAL - Charcoal (text)
        neutral: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#2d3748',
          900: '#1a202c',
        },
        background: {
          DEFAULT: '#F7F9FB',
          light: '#FFFFFF',
          dark: '#F0F4F8',
        },
      },
      fontFamily: {
        serif: ['DM Serif Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(44, 95, 111, 0.1), 0 10px 20px -2px rgba(44, 95, 111, 0.04)',
        'medium': '0 4px 25px -5px rgba(44, 95, 111, 0.15), 0 10px 30px -5px rgba(44, 95, 111, 0.08)',
      },
    },
  },
  plugins: [],
}