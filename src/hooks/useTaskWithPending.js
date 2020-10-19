/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 14:04:20
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 21:38:54
 */

import { useCallback } from 'react'
import { message } from 'antd'

const useTaskWithPending = (task, { setFalse, setTrue }) => {
  const useTaskWithPending = useCallback(
    async (payload) => {
      setTrue()
      try {
        const result = await task(payload)
        setFalse()
        if (result.code !== 0) {
          return message.error(result.msg)
        }

        return result
      } catch (error) {
        setFalse()
        return message.error(error.toString())
      }
    },
    [task, setFalse, setTrue],
  )

  return [useTaskWithPending]
}

export default useTaskWithPending
