import requests from '@/request/req.js'

// topbar组件菜单数据
export const getTopBar = () => requests({ method: 'get', url: '/TopBar.json' })
// 分类组件菜单数据
export const getNewService = () =>
  requests({ method: 'get', url: '/NewService.json' })
// mainservice组件导航栏数据
export const getMainService = () =>
  requests({ method: 'get', url: '/MainService.json' })
// 首页商品列表
export const getProdInfo = () =>
  requests({ method: 'get', url: '/ProdInfo.json' })
