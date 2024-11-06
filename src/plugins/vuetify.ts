/**
 * Framework documentation: https://vuetifyjs.com`
 */

import { createVuetify } from 'vuetify' // Composables
import colors from 'vuetify/lib/util/colors.mjs'
import { en } from 'vuetify/locale'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.deepPurple.lighten2,
          secondary: colors.teal.lighten2,
          accent: colors.indigo.base,
          error: colors.red.lighten2,
          // accent: '#EB5757',
          // error: '#F2994A',
          // info: '#F2C94C',
          // success: '#219653',
          // warning: '#000000'
        },
      },
    },
  },
  locale: {
    locale: 'en',
    messages: { en },
  },
})

export default vuetify
