// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Zamonaviy onlayn kinoteatr | MoviTube",
      link: [{ rel: "icon", type: "image/jpg", href: "/custom-fav.jpg" }],
    },
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image", "nuxt-icon", "vue3-carousel-nuxt"],
});
