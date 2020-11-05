/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 14:14:08
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-05 20:14:08
 */

import useSWR from 'swr'
import {
  addTodo,
  deleteTodo,
  updateTodo,
  getTodoList,
} from '@/service/request/todo'
import API from '@/service/api'
import useBoolean from '../useBoolean'
import useTaskWithPending from '../useTaskWithPending'

const useTodo = () => {
  const { data: result, isValidating, mutate: getTodoMutate } = useSWR(API.GET_TODO_LIST, () => getTodoList(), {
    suspense: true,
  })
  const [loading, { set: setLoading }] = useBoolean(false)
  const [adddModalVisible, { set: setAddModalVisible }] = useBoolean(false)
  const [addItem] = useTaskWithPending(addTodo, { setLoading })
  const [deleteItem] = useTaskWithPending(deleteTodo, { setLoading })
  const [updateItem] = useTaskWithPending(updateTodo, { setLoading })

  return [
    result,
    isValidating || loading,
    getTodoMutate,
    addItem,
    deleteItem,
    updateItem,
    { adddModalVisible, setAddModalVisible },
  ]
}

export default useTodo
