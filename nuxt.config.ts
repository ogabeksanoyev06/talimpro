export default defineNuxtConfig({
   devtools: { enabled: true },
   ssr: true,
   app: {
      head: {
         link: [{ rel: 'icon', type: 'image/png', href: '/gerb.png' }],
         title: 'Bilimdon uchun havola - Ta‘limPro'
      },
      pageTransition: { name: 'page', mode: 'out-in' },
      layoutTransition: { name: 'layout', mode: 'out-in' }
   },
   modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', '@nuxtjs/i18n', '@nuxt/image', '@nuxtjs/color-mode', '@vueuse/nuxt'],
   css: ['@/assets/styles/main.scss'],
   shadcn: {
      prefix: '',
      componentDir: './components/ui'
   },
   colorMode: {
      preference: 'light',
      fallback: 'light',
      hid: 'nuxt-color-mode-script',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      classSuffix: '',
      storageKey: 'nuxt-color-mode'
   },
   pinia: {
      storesDirs: ['./stores/**', './custom-folder/stores/**']
   },
   runtimeConfig: {
      public: {
         apiBaseUrl: 'https://api.talimpro.uz/api/'
      }
   }
});
