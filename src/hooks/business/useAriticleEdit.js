/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 11:04:54
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-22 15:44:16
 */
import useString from '../useString'
import useArray from '../useArray'
import useBoolean from '../useBoolean'
import useObject from '../useObject'
import useTaskPendingState from '../useTaskPendingState'
import { getTagList } from '../../service/request/tag'
import { getTypeList } from '../../service/request/type'

const useAriticleEdit = () => {
  const [ariticle, { set: setAriticle }] = useObject({})
  const [content, {set: setContent}] = useString('')
  const [typeList, { set: setTypeList }] = useArray([])
  const [tagList, { set: setTagList }] = useArray([])
  const [loading, { set: setLoading }] = useBoolean(false)

  const [getTypes] = useTaskPendingState(getTypeList, setTypeList, { setLoading })
  const [getTages] = useTaskPendingState(getTagList, setTagList, { setLoading })

  return [
    ariticle,
    content,
    setAriticle,
    setContent,
    typeList,
    tagList,
    getTypes,
    getTages,
    loading,
  ]
}

export default useAriticleEdit