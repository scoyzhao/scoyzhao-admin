/*
 * @Author: scoyzhao
 * @Date: 2020-10-29 00:17:42
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-29 01:35:42
 */

import useSWR from 'swr'
import {
  deleteBlog,
  updateBlog,
  getBlogList,
} from '../../service/request/blog'
import { getTagList } from '../../service/request/tag'
import { getTypeList } from '../../service/request/type'
import API from '../../service/api'
import useBoolean from '../useBoolean'
import useTaskWithPending from '../useTaskWithPending'

const useTodo = () => {
  const { data: result, isValidating, mutate: getBlogMutate } = useSWR(API.GET_TODO_LIST, () => getBlogList(), {
    suspense: true,
  })
  const { data: tagListResult, isValidating: isTagListLoading } = useSWR(API.GET_TAG_LIST, () => getTagList(), {
    suspense: true,
  })
  const { data: typeListResult, isValidating: isTypeListLoading } = useSWR(API.GET_TYPE_LIST, () => getTypeList(), {
    suspense: true,
  })
  const [loading, { set: setLoading }] = useBoolean(false)
  const [deleteItem] = useTaskWithPending(deleteBlog, { setLoading })
  const [updateItem] = useTaskWithPending(updateBlog, { setLoading })

  return [
    result,
    isValidating || loading || isTagListLoading || isTypeListLoading,
    getBlogMutate,
    deleteItem,
    updateItem,
    tagListResult.data,
    typeListResult.data,
  ]
}

export default useTodo
