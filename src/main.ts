import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'

import 'normalize.css'
import '@/style/global.scss'

const app = createApp(App)
app.use(router)
app.use(store)

router.isReady().then(() => {
  const loading_page: HTMLElement | null =
    document.querySelector('.loading-page')
  if (loading_page) {
    loading_page.parentNode?.removeChild(loading_page)
  }
  app.mount('#app')
})
