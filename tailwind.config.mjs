/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: [{ raw: "print" }, { min: "640px" }],
        md: [{ raw: "print" }, { min: "768px" }],
        lg: [{ raw: "print" }, { min: "1024px" }],
        xl: "1280px", // Only a min-width condition, so no need for an array
      },
    },
  },
  plugins: [],
};
