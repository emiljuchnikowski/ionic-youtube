/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--ion-color-primary)",
          light: "var(--ion-color-primary-tint)",
          dark: "var(--ion-color-primary-shade)",
        },
        secondary: {
          DEFAULT: "var(--ion-color-secondary)",
          light: "var(--ion-color-secondary-tint)",
          dark: "var(--ion-color-secondary-shade)",
        },
        medium: {
          DEFAULT: "var(--ion-color-medium)",
          light: "var(--ion-color-medium-tint)",
          dark: "var(--ion-color-medium-shade)", 
        }
      }
    },
  },
  plugins: [],
}
