import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  // 登录
  {
    path: '/enter',
    name: 'enter',
    component: () => import('@/views/EnterIndex.vue'),
    redirect: {
      name: 'pwdlogin'
    },
    children: [
      {
        path: '/enter/pwdlogin',
        name: 'pwdlogin',
        component: () => import('@cpts/EnterIndex/PwdLogin.vue')
      },
      {
        path: '/enter/notelogin',
        name: 'notelogin',
        component: () => import('@cpts/EnterIndex/NoteLogin.vue')
      }
    ]
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
  {
    path: '*',
    redirect: {
      name: 'detail'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
