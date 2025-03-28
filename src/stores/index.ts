import type {App} from 'vue'
import {createPinia} from 'pinia'

const store = createPinia()

// 挂载store
export function setupStore(app: App<Element>) {
  app.use(store)
}

export {store}
