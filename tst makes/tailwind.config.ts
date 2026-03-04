import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D3A",
          deep: "#061325",
          light: "#132D52",
          mid: "#1A2E4C",
        },
        gold: {
          DEFAULT: "#C8963E",
          light: "#E8C88A",
          pale: "#F5E6C8",
        },
        cream: "#FAF7F2",
        green: {
          DEFAULT: "#2E7D5B",
          light: "#E8F5EE",
        },
        red: {
          DEFAULT: "#C0392B",
          light: "#FDECEA",
        }
      },
      fontFamily: {
        display: ["'DM Serif Display'", "serif"],
        body: ["'Outfit'", "sans-serif"],
        mono: ["'Orbitron'", "sans-serif"],
        tech: ["'Share Tech Mono'", "monospace"],
      },
      animation: {
        'shape-float': 'shapeFloat 12s ease-in-out infinite',
        'gold-shimmer': 'goldShimmer 3s ease-in-out infinite',
        'ticker-left': 'tickerLeft 35s linear infinite',
        'ticker-right': 'tickerRight 40s linear infinite',
        'calc-float': 'calcFloat 3.5s ease-in-out infinite',
        'calc-look': 'calcLook 4.5s ease-in-out infinite',
        'calc-blink': 'calcBlink 4.5s ease-in-out infinite',
        'coin-fall': 'coinFall var(--fall-dur, 3s) var(--fall-delay, 0s) ease-in forwards',
        'coin-spin': 'coinSpin var(--spin-dur, 1s) linear infinite',
      },
      keyframes: {
        shapeFloat: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0) scale(1)', opacity: '0.4' },
          '25%': { transform: 'rotate(45deg) translateY(-20px) scale(1.1)', opacity: '0.6' },
          '50%': { transform: 'rotate(90deg) translateY(10px) scale(0.95)', opacity: '0.5' },
          '75%': { transform: 'rotate(135deg) translateY(-15px) scale(1.05)', opacity: '0.7' },
        },
        goldShimmer: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        tickerLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        tickerRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        calcFloat: {
          '0%, 100%': { transform: 'translateY(0) rotate(-0.5deg)' },
          '50%': { transform: 'translateY(-6px) rotate(0.5deg)' },
        },
        calcLook: {
          '0%, 100%': { transform: 'translateX(-50%)' },
          '25%': { transform: 'translateX(-35%)' },
          '75%': { transform: 'translateX(-65%)' },
        },
        calcBlink: {
          '0%, 42%, 48%, 100%': { height: '0%' },
          '45%': { height: '100%' },
        },
        coinFall: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '1' },
          '100%': { transform: 'translateY(calc(100vh + 80px)) translateX(var(--drift, 30px))', opacity: '0' },
        },
        coinSpin: {
          '0%': { transform: 'rotateY(0) rotateZ(var(--wobble, 5deg))' },
          '100%': { transform: 'rotateY(360deg) rotateZ(var(--wobble, 5deg))' },
        }
      },
    },
  },
  plugins: [],
};
export default config;