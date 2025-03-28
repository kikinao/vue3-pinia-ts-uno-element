import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'

const Layout = import('@/layout/index.vue')

export const constantRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
    meta: {
      title: '登录',
      hidden: true // 隐藏在菜单中
    }
  },
  {
    path: '/',
    name: 'index',
    component: () => Layout,
    meta: {
      title: '首页',
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorRouter/404.vue'),
    meta: {
      title: '404',
      hidden: true,
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/ErrorRouter/403.vue'),
    meta: {
      title: '403',
      hidden: true
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/ErrorRouter/500.vue'),
    meta: {
      title: '500',
      hidden: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/ErrorRouter/404.vue'),
    meta: {
      hidden: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoute,
  scrollBehavior: () => ({top: 0, left: 0})
})

export default router
