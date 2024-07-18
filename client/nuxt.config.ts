// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ["assets/css/app.css"],

  devServer: {
    host: 'api.test'
  },

  modules: ["nuxt-auth-sanctum"],

  sanctum: {
    baseUrl: 'http://api.test',
    redirect: {
      onLogin: '/dashboard',
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})