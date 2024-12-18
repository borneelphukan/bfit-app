// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-10-07",

  // Enable static site generation
  target: "static", // This makes Nuxt generate a static build
  ssr: true, // Ensures that server-side rendering is enabled
});
