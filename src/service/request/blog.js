/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 23:43:33
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 00:14:23
 */

import API from '../api'
import request from '../http'

export const addBlog = payload => {
  return request(API.ADD_BLOG, {
    method: 'POST',
    data: payload,
  })
}

export const updateBlog = payload => {
  return request(API.UPDATE_BLOG, {
    method: 'POST',
    data: payload,
  })
}