import requests from '@/request/req.js'

export const getTopBar = () => requests({ method: 'get', url: '/TopBar.json' })
export const getNewService = () => requests({ method: 'get', url: '/NewService.json' })
