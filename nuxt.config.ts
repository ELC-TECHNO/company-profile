// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import  "@/assets/style/color.scss";',
        },
      },
    },
  },
  css: ["@/assets/style/main.scss"],
  modules: ["@nuxt/image","@nuxtjs/google-fonts", "nuxt-icon", "vue3-carousel-nuxt"],
  googleFonts: {
    families: {
      kanit: "100..900",
    },
  },
  carousel: {
    prefix: 'MyPrefix'
  }
})