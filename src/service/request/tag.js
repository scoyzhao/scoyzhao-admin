/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 20:26:30
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 20:26:52
 */

import API from '../api'
import request from '../http'

export const addTag = payload => {
  return request(API.ADD_TAG, {
    method: 'POST',
    data: payload,
  })
}

export const deleteTag = payload => {
  return request(API.DELETE_TAG, {
    method: 'POST',
    data: payload,
  })
}

export const updateTag = payload => {
  return request(API.UPDATE_TAG, {
    method: 'POST',
    data: payload,
  })
}
export const getTagList = payload => {
  return request(API.GET_TAG_LIST, {
    method: 'POST',
    data: payload,
  })
}
