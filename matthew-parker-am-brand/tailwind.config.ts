import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#03070d",
        graphite: "#0b111a",
        carbon: "#111821",
        steel: "#1c2631",
        slateblue: "#6f86a5",
        signal: "#8fb4d9",
        silver: "#d9e0e8",
        ash: "#9aa6b2",
        frost: "#f5f7f9",
        alloy: "#c4ccd4",
        copper: "#b58b5a"
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["SFMono-Regular", "Consolas", "Liberation Mono", "monospace"]
      },
      boxShadow: {
        panel: "0 30px 90px rgba(0, 0, 0, 0.34)"
      },
      maxWidth: {
        site: "1200px"
      }
    }
  },
  plugins: []
};

export default config;
