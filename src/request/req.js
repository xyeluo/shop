import axios from 'axios'

const requests = axios.create({
  baseURL: '/server'
})
requests.interceptors.request.use((config) => {
  return config
})
requests.interceptors.response.use((res) => {
  return res.data
}, (err) => {
  return Promise.reject(new Error(err))
})
export default requests
