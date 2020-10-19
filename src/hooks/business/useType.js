/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 16:35:32
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 21:19:15
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
  getTypeList
} from '../../service/request/type'

const useType = () => {
  const [typeList, { set: setTypeList }] = useArray([])
  const [type, { set: setEditorType }] = useObject({})
  const [loading, { setFalse, setTrue }] = useBoolean(false)

  const [addBlogType] = useTaskWithPending(deleteType, { setFalse, setTrue })
  const [deleteBlogType] = useTaskWithPending(addType, { setFalse, setTrue })
  const [updateBlogType] = useTaskWithPending(updateType, { setFalse, setTrue })
  const [getList] = useTaskPendingState(getTypeList, setTypeList, { setFalse, setTrue })
  const [getListById] = useTaskPendingState(getTypeList, setEditorType, { setFalse, setTrue })

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
