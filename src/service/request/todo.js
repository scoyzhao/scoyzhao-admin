/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 11:50:23
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-29 00:18:22
 */

import API from '../api'
import request from '../http'

export const addTodo = payload => {
  return request(API.ADD_TODO, {
    method: 'POST',
    data: payload,
  })
}

export const deleteTodo = payload => {
  return request(API.DELETE_TODO, {
    method: 'POST',
    data: payload,
  })
}

export const updateTodo = payload => {
  return request(API.UPDATE_TODO, {
    method: 'POST',
    data: payload,
  })
}

export const getTodoList = payload => {
  return request(API.GET_TODO_LIST, {
    method: 'POST',
    data: payload,
  })
}
