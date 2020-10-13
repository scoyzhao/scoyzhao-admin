/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:10:23
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-14 01:34:03
 */

import axios from 'axios'

// axios.defaults.baseURL = 'http://120.27.247.30:7001'
axios.defaults.baseURL = 'http://127.0.0.1:7001'
axios.defaults.withCredentials = true

// TODO optimize axios
export default axios
