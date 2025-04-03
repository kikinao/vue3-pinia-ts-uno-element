import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import path from "node:path";

const pathSrc = path.resolve(__dirname, 'src')
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router'], // 自动导入vue和vue-router相关函数
      resolvers: [ElementPlusResolver()],
      // 生成自动导入的 TypeScript 声明文件
      dts: 'src/auto/auto-import.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto/components.d.ts',
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹-路径错误将会无法展示
      iconDirs: [path.resolve(pathSrc, 'assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    })
  ],
  server: {
    port: 8000,
    open: true,
  }
  ,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
