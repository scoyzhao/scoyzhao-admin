/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 20:25:34
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 20:30:03
 */


import useTaskPendingState from '../useTaskPendingState'
import useTaskWithPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import useObject from '../useObject'
import useArray from '../useArray'
import {
  addTag,
  deleteTag,
  updateTag,
  getTagList,
} from '../../service/request/tag'

const useTag = () => {
  const [tagList, { set: setTagList }] = useArray([])
  const [tag, { set: setEditorTag }] = useObject({})
  const [loading, { set: setLoading }] = useBoolean(false)
  const [modalLoading, { set: setModalLoading }] = useBoolean(false)

  const [addBlogTag] = useTaskWithPending(addTag, { setLoading: setModalLoading })
  const [deleteBlogTag] = useTaskWithPending(deleteTag, { setLoading })
  const [updateBlogTag] = useTaskWithPending(updateTag, { setLoading: setModalLoading })
  const [getList] = useTaskPendingState(getTagList, setTagList, { setLoading })
  const [getListById] = useTaskPendingState(getTagList, setEditorTag, { setLoading })
  const [modalVisible, { set: setModalVisible }] = useBoolean(false)

  return [
    tag,
    tagList,
    loading,
    addBlogTag,
    deleteBlogTag,
    updateBlogTag,
    getList,
    getListById,
    modalVisible,
    setModalVisible,
    modalLoading,
    setEditorTag,
  ]
}

export default useTag
