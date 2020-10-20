/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 14:04:20
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 16:33:42
 */

import { useCallback } from 'react'

const useTaskWithPending = (task, { setLoading }) => {
  const useTaskWithPending = useCallback(
    async (payload) => {
      setLoading(true)
      try {
        const result = await task(payload)
        setLoading(false)
        if (result.code !== 0) {
          throw new Error(result.msg)
        }

        return result
      } catch (error) {
        setLoading(false)
        throw error
      }
    },
    [task, setLoading],
  )

  return [useTaskWithPending]
}

export default useTaskWithPending
