// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', 'nuxt-icon','nuxt3-leaflet'],
  runtimeConfig: {
    public: {
      production_base_url: process.env.PROD_BASE_URL,
    }
  }
})


