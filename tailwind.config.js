/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#0d89ec",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  theme: {
    extend: {
      borderRadius: {
        10: "10px",
      },
      boxShadow: {
        outer: "0 0 10px rgba(0, 0, 0, 0.25)",
      },
      padding: {
        1.25: "5px",
      },
      backgroundColor: {
        card: "#f1f1f1",
      },
      fontSize: {
        "15px": "15px",
        "10px": "10px",
      },
      minWidth: {
        "793px": "793px",
      },
      maxWidth: {
        "793px": "793px",
      },
      colors: {
        "primary-grey": "#616161",
      },
    },
  },
  plugins: [require("daisyui")],
};
