module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  // Tailwind v4 uses CSS @plugin to add DaisyUI, so keep this empty to avoid CJS/ESM issues.
  plugins: [],
};
