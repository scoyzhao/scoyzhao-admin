/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 17:01:41
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 20:00:22
 */

import { useCallback } from 'react'
import useTaskWithPending from './useTaskWithPending'

const useTaskPendingState = (task, store, { setFalse, setTrue }) => {
  const [taskWithPending] = useTaskWithPending(task, { setFalse, setTrue })
  const callAndStore = useCallback(
    async (payload) => {
      const result = await taskWithPending(payload)
      return store(result.data)
    },
    [taskWithPending, store]
  )

  return [callAndStore]
}

export default useTaskPendingState
