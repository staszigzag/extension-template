import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json'
import { isDev } from './utils'

export default defineManifest({
  name: `${packageData.displayName || packageData.name}${isDev ? ` ➡️ Dev` : ''}`,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'img/logo-16.png',
    32: 'img/logo-34.png',
    48: 'img/logo-48.png',
    128: 'img/logo-128.png',
  },
  action: {
    default_popup: 'src/popup/index.html',
    default_icon: 'img/logo-48.png',
  },
  // options_page: 'src/options/index.html',
  options_ui: {
    page: 'src/options/index.html',
    open_in_tab: true,
  },
  devtools_page: 'src/devtools/index.html',
  background: {
    service_worker: 'src/background/main.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['http://*/*', 'https://*/*'],
      // '<all_urls>',
      js: ['src/contentScript/main.ts'],
    },
  ],
  side_panel: {
    default_path: 'src/sidepanel/index.html',
  },
  chrome_url_overrides: {
    newtab: 'src/newtab/index.html',
  },

  web_accessible_resources: [
    {
      resources: ['img/logo-16.png', 'img/logo-34.png', 'img/logo-48.png', 'img/logo-128.png'],
      matches: [],
    },
  ],
  permissions: ['tabs', 'storage', 'activeTab', 'sidePanel'],
  host_permissions: ['*://*/*'],
})
