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
  // 商品详情页
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail.vue')
  },
  // 购物车页面
  {
    path: '/shopping',
    name: 'shopping',
    component: () => import('@/views/Shopping.vue'),
    props: true
  },
  {
    // 匹配不到的页面都会重定向到首页
    path: '*',
    redirect: {
      name: 'shopping'
    }
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originPush = VueRouter.prototype.push

// 重写 push | replace
// 第一个参数：跳转地址和参数
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(this, location, () => { }, () => { })
  }
}
router.beforeEach((to, from, next) => {
  // 谷歌
  document.body.scrollTop = 0
  // 火狐
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})
export default router
