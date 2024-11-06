import { resolve } from 'node:path'
import process from 'node:process'
import { crx } from '@crxjs/vite-plugin'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

import manifest from './src/manifest'

const r = (...args: string[]) => resolve(__dirname, ...args)

const isDev = process.env.NODE_ENV !== 'production'
console.info('isDev', isDev)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      // cssCodeSplit: true,
      emptyOutDir: true,
      outDir: 'build',

      rollupOptions: {
        // input: {
        //   options: r('src/options/index.html'),
        //   popup: r('src/popup/index.html'),
        //   sidepanel: r('src/sidepanel/index.html')
        // },
        // output: {
        //   chunkFileNames: 'assets/chunk-[hash].js',
        // },
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     css: {
    //       additionalData: `@import "${r('src/styles/main.css')}";`,
    //     },
    //   },
    // },
    sourcemap: isDev ? 'inline' : false,
    plugins: [
      crx({ manifest }),
      Vue({
        // isProduction: true,
        template: { transformAssetUrls },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      Vuetify({
        autoImport: true,
      }),
    ],
  }
})