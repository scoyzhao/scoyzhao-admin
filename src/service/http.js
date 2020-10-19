/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:10:23
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 21:41:15
 */

// * 限制请求次数
import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development'
    ? ''
    : 'http://120.27.247.30:7001',
  withCredentials: true,
})

instance.interceptors.response.use(response => {
  // * 处理代码403
  const {
    code,
    msg,
  } = response.data

  if (code === 403) {
    message.error(msg)
    window.location.href = '/'
  } else {
    return response.data
  }
}, error => {
  // * 服务器非200，403会在这里捕获
  return Promise.reject(error)
})

export default instance
