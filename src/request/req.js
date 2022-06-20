import axios from 'axios'

const requests = axios.create({
  baseURL: 'http://localhost:8080/server'
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
