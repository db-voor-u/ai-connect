// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon', 
    '@nuxt/content'
  ],
  content: {

    highlight: {
    theme: 'nord',
    preload: ['ts', 'tsx','bash','shell','sh','yaml','yml','json','md','markdown','html','css','scss','sass','less','styl','stylus','vue','js','jsx','ts','tsx','php','py','rb','java','c','cpp','cs','swift','kt'],
 
  }
  },

})