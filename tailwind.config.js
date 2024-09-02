module.exports = {
  content: ["./src/**/*.hbs.html"],
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
  variants: {},
  plugins: [],
};
