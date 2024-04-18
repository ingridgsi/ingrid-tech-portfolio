/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // Apply automatically for all files
  theme: {
    boxShadow: {
      "3xl": "0px 0px 5px rgba(0, 0, 0, 0.15)",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },

    container: {
      center: true,
    },
    colors: {
      primary: "#227d7d",
      secondary: "#186969",
    },

    // Apply only if we call it
    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
        headingPrimary: ["3rem", { lineHeight: "1.7" }],
        headingSecondary: ["2rem", { lineHeight: "1.2" }],
        headingTertiary: ["1.8rem"],
        subheading: ["1.4rem"],
        paragraphs: ["1rem"],
      },

      height: { screen: "100dvh" },

      transitionDuration: {
        8000: "8000ms",
      },

      lineHeight: {
        defaultLine: "1.7",
        headings: "1.5",
      },

      fontWeight: {
        headings: "700",
      },

      letterSpacing: {
        headings: "-0.5px",
        subheading: "-0.5px",
      },

      colors: {
        headings: "#555",
        subheading: "#227d7d",
        paragraphs: "#333",
      },

      backgroundImage: {
        toDoApp: "url(src/images/fastPizza.jpg)",
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`rubik:300,400,500,700`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          {
            family: `Great Vibes`,
            variants: [`400`], // You can include additional variants if needed
          },
        ],
        display: "swap",
      },
    },
  ],
};
