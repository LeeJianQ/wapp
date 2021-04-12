import { Toast } from 'vant'
import axios from 'axios'
import { apis } from '../configs/api.domain'
import store from '../store'

const wgRequest = axios.create({
  baseURL: apis.wg
})

wgRequest.interceptors.request.use( function (config) {
  const { user }: any = store.state
  // 设置请求头
  if (user.user && user.user.token) {
    config.headers.token = `${user.user.token}`
  }
  // const { user } = store.state.user
  return config
}, function (error) {
  return Promise.reject(error)
})

// 设置响应信息
wgRequest.interceptors.response.use( function (response) {
  return response
}, function (error) {
  if (error.response) {
    // 发送成功，状态码超过 2xx
  } else if (error.resquest) {
    // 请求超时
    Toast('请求响应超时～')
  } else {
    Toast(`请求失败，${error.message}`)
  }
  return error
})

export default {
  wgRequest
}