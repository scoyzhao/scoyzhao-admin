/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 14:04:20
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 16:02:40
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
        return result
      } catch (error) {
        console.log("useTaskWithPending -> error", error)
        setFalse()
        return message.error(error.toString())
      }
    },
    [task, setFalse, setTrue],
  )

  return [useTaskWithPending]
}

export default useTaskWithPending
