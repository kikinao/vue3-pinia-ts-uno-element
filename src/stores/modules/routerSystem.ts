import {defineStore} from 'pinia'
import {ref} from 'vue'
import {getData} from "@/service";
import {constantRoute} from "@/router";
import type {Roles} from "@/typings/role";
import type {RouteRecordRaw} from "vue-router";

const Layout = () => import('@/layout/index.vue')

const modules = import.meta.glob('/src/views/**/**.vue')

function filterRoutes(routes: Roles.SetMenuRoleParams[]) {
  const addRoutes: RouteRecordRaw[] = []
  routes.forEach(item => {
    const addRouteItem: RouteRecordRaw = {
      path: item.path ?? '',
      name: item.name ?? '',
      component: Layout,
      meta: {
        title: item.name ?? '',
        icon: item.css ?? '',
        hidden: item.hidden ?? false,
        keepAlive: false,
        roles: ['admin']
      },
      children: [],
    }
    if (item?.path === 'Layout') {
      console.log('Layout=>', item)
      addRouteItem.component = Layout
    } else {
      const AddComponent = modules[`/src/views/${item?.path}.vue`]
      const NotFindView = modules['/src/views/ErrorRouter/404.vue']
      addRouteItem.component = AddComponent ? () => AddComponent() : () => NotFindView()
    }
    // 子路由判断
    if (Array.isArray(item.subMenus) && item.subMenus.length > 0) {
      // 重定向
      addRouteItem.redirect = item.subMenus[0].url
      addRouteItem.children = filterRoutes(item.subMenus)
    }

    addRoutes.push(addRouteItem)
  })
  return addRoutes
}

// 更新重定向, 用于刷新页面或切换登录时，重定向到第一个有效路由
function getRedirect(data: RouteRecordRaw[]) {
  for (let i = 0; i < data.length; i++) {
    const routeItem = data[i]
    if (!routeItem.meta!.hidden) {
      return item.redirect
    }
  }
}

export const useRouterSystemStore = defineStore('routerSystem', () => {
  const redirect = ref<string>('')
  const routes = ref<RouteRecordRaw[]>([])

  function getRoutes() {
    return new Promise((resolve, reject) => {
      getData('router').then((res) => {
        if (!res.data || res.data.length === 0) {
          redirect.value = '/403'
          console.log('当前账号暂无权限')
          resolve([])
          return
        }
        // 处理路由
        const addRoutes = filterRoutes(res.data)
        // 更新重定向
        redirect.value = getRedirect(addRoutes)
        setRoutes(addRoutes)
        resolve(addRoutes)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  }


  function setRoutes(data: RouteRecordRaw[]) {
    routes.value = constantRoute.concat(data)
  }

  function removeRoutes() {
    routes.value = []
    redirect.value = ''
  }

  return {
    routes,
    getRoutes,
    setRoutes,
    removeRoutes
  }
})
