/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 16:35:32
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 16:44:41
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
  const [modalLoading, { set: setModalLoading }] = useBoolean(false)

  const [addBlogType] = useTaskWithPending(addType, { setLoading: setModalLoading })
  const [deleteBlogType] = useTaskWithPending(deleteType, { setLoading })
  const [updateBlogType] = useTaskWithPending(updateType, { setLoading: setModalLoading })
  const [getList] = useTaskPendingState(getTypeList, setTypeList, { setLoading })
  const [getListById] = useTaskPendingState(getTypeList, setEditorType, { setLoading })
  const [isEditModalVisible, { set: showEditModal }] = useBoolean(false)

  return [
    type,
    typeList,
    loading,
    addBlogType,
    deleteBlogType,
    updateBlogType,
    getList,
    getListById,
    isEditModalVisible,
    showEditModal,
    modalLoading,
  ]
}

export default useType
