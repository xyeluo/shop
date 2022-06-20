import requests from '@/request/req.js'

export const getTopBar = () => requests({ method: 'get', url: '/TopBar.json' })
