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
    '@nuxt/content',
    '@nuxtjs/apollo',
  ],

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN
  },

  content: {

    highlight: {
    theme: 'nord',
    preload: ['ts', 'tsx','bash','shell','sh','yaml','yml','json','md','markdown','html','css','scss','sass','less','styl','stylus','vue','js','jsx','ts','tsx','php','py','rb','java','c','cpp','cs','swift','kt'],
 
  }
  },
  apollo: {
    clients: {
      default: {
        tokenName: 'github-token',
        httpEndpoint: 'https://api.github.com/graphql',
      }
     },
    },
});
