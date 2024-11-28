// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/google-fonts', 'usebootstrap'],
  googleFonts: {
    families: {
      'Roboto': true, // Carrega a fonte Roboto com os pesos padrão
      'Poppins': [100, 200, 300, 400, 500, 600, 700], // Especifica os pesos desejados para Poppins
      'Montserrat': [100, 200, 300, 400, 500, 600, 700] // Especifica os pesos desejados para Montserrat
    }
  }
})