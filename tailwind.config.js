/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        elno: {
          bg: "#f5f5f2",
          surface: "#efefe9",
          line: "#d9d9d1",

          text: {
            DEFAULT: "#171717",
            soft: "#5f5f5a",
            muted: "#8e8e86",
            inverse: "#f8f8f5",
          },

          black: {
            DEFAULT: "#1a1a1a",
            soft: "#2a2a2a",
            fade: "rgba(26, 26, 26, 0.16)",
          },

          gray: {
            DEFAULT: "#8b8b84",
            soft: "#a3a39d",
            fade: "rgba(139, 139, 132, 0.22)",
          },

          white: {
            DEFAULT: "#f7f7f3",
            soft: "#ffffff",
            fade: "rgba(255, 255, 255, 0.26)",
          },

          overlay: {
            light: "rgba(0, 0, 0, 0.04)",
            DEFAULT: "rgba(0, 0, 0, 0.08)",
            strong: "rgba(0, 0, 0, 0.14)",
          },
        },
      },

      fontSize: {
        "hero-sm": ["36px", { lineHeight: "1", letterSpacing: "0.22em" }],
        "hero-md": ["58px", { lineHeight: "1", letterSpacing: "0.22em" }],
        "hero-lg": ["64px", { lineHeight: "1", letterSpacing: "0.22em" }],
      },

      letterSpacing: {
        logo: "0.32em",
        nav: "0.16em",
        hero: "0.22em",
        section: "0.24em",
      },

      maxWidth: {
        hero: "1520px",
        heroWide: "1680px",
        page: "1200px",
      },

      spacing: {
        header: "92px",
      },

      boxShadow: {
        "elno-white": "0 2px 10px rgba(0,0,0,0.35)",
      },

      keyframes: {
        elnoLeftIn: {
          from: {
            opacity: "0",
            transform: "translateX(-18px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        elnoCenterIn: {
          from: {
            opacity: "0",
            transform: "translateY(18px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        elnoRightIn: {
          from: {
            opacity: "0",
            transform: "translateX(18px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        pageFade: {
          from: {
            opacity: "0",
            transform: "translateY(8px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "elno-left": "elnoLeftIn 0.9s ease forwards",
        "elno-center": "elnoCenterIn 0.9s ease forwards",
        "elno-right": "elnoRightIn 0.9s ease forwards",
        "page-fade": "pageFade 0.45s ease forwards",
      },

      screens: {
        xs: "480px",
        "3xl": "1680px",
      },
    },
  },
  plugins: [],
};