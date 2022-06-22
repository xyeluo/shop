import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/Home.vue'
import EnterIndex from '@/views/EnterIndex.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/enter',
    name: 'enter',
    component: EnterIndex,
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
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '*',
    redirect: {
      name: 'home'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
