import { resolve } from 'node:path'
import { crx } from '@crxjs/vite-plugin'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import manifest from './src/manifest'
import { isDev } from './src/utils'

export const r = (...args: string[]) => resolve(__dirname, ...args)

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
      AutoImport({
        imports: ['vue', '@vueuse/core'],
        dirs: ['src/composables'],
        dts: r('src/auto-imports.d.ts'),
      }),

      Components({
        dts: r('src/components.d.ts'),
        dirs: [r('src/components')],
      }),

      Vue({
        // isProduction: true,
        template: { transformAssetUrls },
      }),

      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
      Vuetify({
        autoImport: true,
      }),

      crx({
        manifest,
        browser: 'chrome',
        // contentScripts: {
        //   injectCss: true,
        // },
      }),
    ],
  }
})
