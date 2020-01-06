import Vue from 'vue'
import {
  Toast
} from 'vant'
import Axios from 'axios'

Vue.use(Toast)

export function request (config) {
  const instance = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 1000 * 5
  })
  // 请求拦截
  instance.interceptors.request.use(config => {
    Toast.loading({
      forbidClick: true,
      message: '加载中...'
    })
    return config
  }, err => Promise.reject(err))

  // 相应拦截
  instance.interceptors.response.use(res => {
    setTimeout(() => {
      Toast.clear()
    }, 500)
    return res.data
  }, err => Promise.reject(err))

  return instance(config)
}