import { createApp } from 'vue'
import vuetify from '../plugins/vuetify'
import Content from './Content.vue'

// createApp(Content).use(vuetify).mount('#app')
;(() => {
  console.info('contentScript is running')

  // Создаем контейнер для Shadow DOM
  const container = document.createElement('div')
  // Создаем Shadow Root
  const shadowRoot = container.attachShadow({ mode: 'open' })
  // Создаем элемент для монтирования Vue приложения внутри Shadow DOM
  const shadowContainer = document.createElement('div')
  shadowRoot.appendChild(shadowContainer)
  document.body.appendChild(shadowRoot)
  // Монтируем Vue приложение в Shadow DOM
  createApp(Content).use(vuetify).mount(shadowContainer)
})()
