// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxtjs-naive-ui', '@nuxtjs/i18n'],
  i18n: {
    strategy: 'prefix_and_default',
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    vueI18n: "./i18n.config.ts"
  },
  compatibilityDate: '2024-09-15'
})
