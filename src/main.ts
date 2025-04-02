// 基本样式 && 重置样式
import '@/style/reset.scss'
import '@/style/variable.scss'

// 公共样式
import '@/style/common.scss'
import 'virtual:uno.css';

import {createApp} from 'vue'
import {setupStore} from '@/stores'

import App from './App.vue'
import router from './router'
import {setupElementPlusIcons, setPermission} from '@/plugins'

const app = createApp(App)

app.use(setupStore)
// 注册element-plus图标
setupElementPlusIcons(app)
// 注册路由
setPermission()
app.use(router)

app.mount('#app')
