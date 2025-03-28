import NProgress from "nprogress";
import 'nprogress/nprogress.css' // 单独引入样式
import router from '@/router'
import {ElLoading, ElMessage} from "element-plus";
import type {LoadingInstance} from "element-plus/es/components/loading/src/loading.mjs"
import {tokenStore} from "@/utils/LocalStore";
import {useRouterSystemStore} from "@/stores/modules/routerSystem.ts";
import type {RouteRecordRaw} from "vue-router";

// 配置全局Nprogress样式
NProgress.configure({
  easing: 'ease',//动画方式
  speed: 500,//递增进度条的速度
  showSpinner: false,//是否显示加载ico
  trickleSpeed: 200,//自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})

// 路由守卫
export function setPermission() {
  // 全局加载
  let loadingInstanceof: LoadingInstance

  const whiteList = ['/login']
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    // 开启全局加载
    loadingInstanceof = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    const routerSystemStore = useRouterSystemStore()
    const token = tokenStore.getValue()
    if (token) {
      if (to.path === '/login') {
        next('/')
        NProgress.done()
        return
      }
      const {routes, getRoutes} = routerSystemStore
      // 是否配置过路由
      if (routes.length === 0) {
        // 当前目标路由是否匹配到嵌套路由记录
        if (to.matched.length === 0) {
          from.name ? next({name: from.name}) : next('/404')
        } else {
          next()
        }
      } else {
        try {
          const authRoutes = await getRoutes() as RouteRecordRaw[]
          if (authRoutes.length > 0) {
            authRoutes.forEach(item => {
              router.addRoute(item)
            })
            next({...to, replace: true}) // 跳转并覆盖
          } else {
            next()
          }
        } catch (e) {
          console.error('router=>', e)
          tokenStore.removeValue()
          // 缓存跳转路由信息
          next({path: `/login?redirect=${to.path}`})
        }
      }
    } else {
      if (whiteList.indexOf(to.path) > -1) {
        next()
        return
      } else {
        NProgress.done()
        ElMessage.error('请先登录!')
        next({path: `/login?redirect=${to.path}`})
      }
    }
  })

  router.afterEach(() => {
    NProgress.done()
    loadingInstanceof.close()
  })
}
