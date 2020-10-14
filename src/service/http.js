/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:10:23
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-14 17:00:48
 */

import axios from 'axios'

// axios.defaults.baseURL = 'http://120.27.247.30:7001'
axios.defaults.baseURL = process.env.NODE_ENV === 'development'
  ? ''
  : 'http://120.27.247.30:7001'
axios.defaults.withCredentials = true

// TODO optimize axios
export default axios
