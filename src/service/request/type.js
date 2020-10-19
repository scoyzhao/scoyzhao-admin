/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 16:58:36
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 00:54:40
 */

import API from '../api'
import request from '../http'

export const addType = payload => {
  return request(API.ADD_TYPE, {
    method: 'POST',
    data: payload,
  })
}

export const deleteType = payload => {
  return request(API.DELETE_TYPE, {
    method: 'POST',
    data: payload,
  })
}

export const updateType = payload => {
  return request(API.UPDATE_TYPE, {
    method: 'POST',
    data: payload,
  })
}
export const getTypeList = payload => {
  return request(API.GET_TYPE_LIST, {
    method: 'POST',
    data: payload,
  })
}
