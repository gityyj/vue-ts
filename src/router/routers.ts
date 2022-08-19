import Main from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      }
    ]
  }
]

export default routes