/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      "neutral-50": "#F9F9F9",
      "neutral-100": "#F4F4F4",
      "neutral-200": "#E4E4E4",
      "neutral-300": "#D3D3D3",
      "neutral-400": "#A2A2A2",
      "neutral-500": "#737373",
      "neutral-600": "#525252",
      "neutral-700": "#404040",
      "neutral-800": "#262626",
      "neutral-900": "#171717",
      "neutral-950": "#0A0A0A",
      "neutral-1000": "#000000",
      "primary-100": "#1D9BF0",
      "primary-200": "#1871CA",
      "primary-300": "#1E5D87",
      "primary-400": "#75beef",
      "fill-100": "#16181C",
      "fill-200": "#212327",
      stroke: "#536471",
      success: "#00BE74",
      error: "#8B141A",
      transparent: "transparent",
    },
    fontSize: {
      xxxs: "0.625rem",
      xxs: "0.75rem",
      xs: "0.8125rem",
      sm: "0.875rem",
      "semi-base": "0.9375rem",
      base: "1rem",
      "semi-lg": "1.0625rem",
      lg: "1.125rem",
      "semi-xl": "1.1875rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.625rem",
      "4xl": "1.9375rem",
      "5xl": "3rem",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    lineHeight: {
      normal: "normal",
    },
    extend: {
      spacing: {
        "1/10": "10%",
        "4/10": "40%",
        "9/10": "90%",
        "27/100": "27%",
        "50%-": "-50%",
        "2.5-": "-.625rem",
        4.5: "1.125rem",
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        17.25: "4.375rem",
        22: "5.5rem",
        26: "6.5rem",
        37.5: "9.375rem",
        55: "13.75rem",
        84: "21rem",
        87: "21.75rem",
        88: "22rem",
        92: "23rem",
        106: "26.5rem",
        110: "27.5rem",
        119: "29.75rem",
        120: "30rem",
        128: "32rem",
        150: "37.5rem",
        170: "42.5rem",
        "8/10screen": "80vh",
        "9/10screen": "90vh",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
        "4xl": "4rem",
      },
      screens: {
        tab: "820px",
        mobile: "520px",
      },
      borderWidth: {
        56: "3.5rem",
      },
      opacity: {
        65: "0.65",
      },
      minWidth: {
        10: "2.5rem",
        12: "3rem",
      },
      minHeight: {
        119: "29.75rem",
      },
    },
  },
  plugins: [],
};
