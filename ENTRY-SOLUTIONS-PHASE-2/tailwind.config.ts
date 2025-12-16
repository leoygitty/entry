import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#6B7280",
        accent: "#10B981",
        background: "#F9FAFB"
      }
    }
  },
  plugins: []
};
export default config;