import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Message } from 'element-ui'
import router from '@/router'

const service = axios.create({
  timeout: 10000,
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (localStorage.token) {
      config.headers.token = localStorage.token
      // config.headers.Authorization = localStorage.token
    }
    return config
  },
  (err: any) => {
    Promise.reject(err)
  }
)
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (err: any) => {
    let errMsg = ''
    if (err && err.response.status) {
      switch (err.response.status) {
        case 401:
          errMsg = '登录状态失效，请重新登录'
          localStorage.removeItem('token')
          router.push('/login')
          break
        case 403:
          errMsg = '拒绝访问'
          break
        case 408:
          errMsg = '请求超时'
          break
        default:
          errMsg = err.response.data.msg
          break
      }
    } else {
      errMsg = err
    }

    Message.error(errMsg)
    return Promise.reject(errMsg)
  }
)

export default service
