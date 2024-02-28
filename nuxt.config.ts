// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
  },
  css: [
    '~/assets/css/global.scss',
    '~/public/bitcamp-brand/bitcamp.css',
    'vue-final-modal/style.css',
  ],
});
