/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 16:35:32
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 00:54:45
 */

import useTaskPendingState from '../useTaskPendingState'
import useTaskWithPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import useObject from '../useObject'
import useArray from '../useArray'
import {
  addType,
  deleteType,
  updateType,
  getTypeList,
} from '../../service/request/type'

const useType = () => {
  const [typeList, { set: setTypeList }] = useArray([])
  const [type, { set: setEditorType }] = useObject({})
  const [loading, { set: setLoading }] = useBoolean(false)

  const [addBlogType] = useTaskWithPending(addType, { setLoading })
  const [deleteBlogType] = useTaskWithPending(deleteType, { setLoading })
  const [updateBlogType] = useTaskWithPending(updateType, { setLoading })
  const [getList] = useTaskPendingState(getTypeList, setTypeList, { setLoading })
  const [getListById] = useTaskPendingState(getTypeList, setEditorType, { setLoading })

  return [
    type,
    typeList,
    loading,
    addBlogType,
    deleteBlogType,
    updateBlogType,
    getList,
    getListById,
  ]
}

export default useType
