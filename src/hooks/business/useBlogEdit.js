/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 11:04:54
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-05 21:02:57
 */

import useArray from '../useArray'
import useBoolean from '../useBoolean'
import useObject from '../useObject'
import useTaskPendingState from '../useTaskPendingState'
import { getTagList } from '@/service/request/tag'
import { getTypeList } from '@/service/request/type'
import { addBlog, updateBlog } from '@/service/request/blog'
import useTaskWithPending from '../useTaskWithPending'

const useBlogEdit = () => {
  const [blog, { set: setBlog }] = useObject({})
  const [typeList, { set: setTypeList }] = useArray([])
  const [tagList, { set: setTagList }] = useArray([])
  const [loading, { set: setLoading }] = useBoolean(false)
  const [editLoading, { set: setEditLoading }] = useBoolean(false)

  const [getTypes] = useTaskPendingState(getTypeList, setTypeList, { setLoading })
  const [getTages] = useTaskPendingState(getTagList, setTagList, { setLoading })
  const [add] = useTaskWithPending(addBlog, { setLoading: setEditLoading })
  const [update] = useTaskWithPending(updateBlog, { setLoading: setEditLoading })

  return [
    blog,
    setBlog,
    typeList,
    tagList,
    getTypes,
    getTages,
    loading,
    add,
    update,
    editLoading,
  ]
}

export default useBlogEdit