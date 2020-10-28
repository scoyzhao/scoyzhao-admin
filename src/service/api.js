/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:11:25
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-29 01:21:37
 */

const API = {
  // * 测试auth接口
  TEST_AUTH: '/home',

  LOGIN: '/user/login',
  LOGOUT: '/user/logout',

  ADD_TYPE: '/type/addType',
  DELETE_TYPE: '/type/deleteType',
  UPDATE_TYPE: '/type/updateType',
  GET_TYPE_LIST: '/type/getTypeList',

  ADD_TAG: '/tag/addTag',
  DELETE_TAG: '/tag/deleteTag',
  UPDATE_TAG: '/tag/updateTag',
  GET_TAG_LIST: '/tag/getTagList',

  ADD_BLOG: '/blog/addBlog',
  DELETE_BLOG: '/blog/deleteBlog',
  UPDATE_BLOG: '/blog/updateBlog',
  GET_BLOG_LIST: '/blog/getBlogList',

  ADD_TODO: '/todo/addTodo',
  DELETE_TODO: '/todo/deleteTodo',
  UPDATE_TODO: '/todo/updateTodo',
  GET_TODO_LIST: '/todo/getTodoList',
}

export default API
