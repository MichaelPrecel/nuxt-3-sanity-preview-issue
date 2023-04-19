// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: `Test repo`,
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
    },
  },

  // CSS
  css: ["reset-css", "@/assets/styles/main.scss"],

  // Vite
  // @ts-ignore
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '~~/assets/styles/abstracts/_include-media.scss';`,
        },
      },
    },
  },

  // Enable server components
  experimental: {
    componentIslands: true,
  },

  // Auto-imports
  imports: {
    // Auto-import pinia stores and page queries
    dirs: ["stores", "queries"],
  },

  modules: [
    "@nuxtjs/sanity",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "@vueuse/motion/nuxt",
  ],

  pinia: {
    autoImports: ["defineStore"],
  },

  sanity: {
    projectId: "w1egracr",
    dataset: "production",
    useCdn: true,
    disableSmartCdn: true,
    additionalClients: {
      preview: {
        useCdn: false,
        withCredentials: true,
      },
    },
  },

  image: {
    sanity: {
      projectId: "w1egracr",
    },
    loading: "lazy",
    domains: ["cdn.sanity.io"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
      "3xl": 2000,
      "4xl": 2400,
    },
  },
});
