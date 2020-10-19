/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 17:01:41
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 00:46:12
 */

import { useCallback } from 'react'
import useTaskWithPending from './useTaskWithPending'

const useTaskPendingState = (task, store, { setLoading }) => {
  const [taskWithPending] = useTaskWithPending(task, { setLoading })
  const callAndStore = useCallback(
    async (payload) => {
      try {
        const result = await taskWithPending(payload)
        return store(result.data)
      } catch (error) {
        throw error
      }
    },
    [taskWithPending, store]
  )

  return [callAndStore]
}

export default useTaskPendingState
