/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 16:53:58
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 16:57:28
 */

import API from '../api'
import request from '../http'

export const login = payload => {
  return request(API.LOGIN, {
    method: 'POST',
    data: payload,
  })
}

export const logout = () => {
  return request(API.LOGOUT)
}
