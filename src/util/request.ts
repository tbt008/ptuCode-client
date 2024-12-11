import axios from 'axios'
import router from '@/router/index.ts'

const request = axios.create({
  baseURL: '/api',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

request.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data
    }
    return response
  },
  (error) => {
    if (error.response.status == 401) {
      // 返回 401 清除token信息并跳转到登录页面
      localStorage.removeItem('auth-token')

      router.push('/login')
    }

    return Promise.reject(error)
  }
)
request.interceptors.request.use((config) => {
  // 动态设置授权头（示例）
  const token = getAuthToken() // 你需要实现这个函数来获取 token
  if (token) {
    config.headers['auth-Token'] = `Bearer ${token}`
  }
  return config
})
function getAuthToken() {
  const token = localStorage.getItem('authToken')
  if (token) {
    return token
  }
  return null
}
export default request
