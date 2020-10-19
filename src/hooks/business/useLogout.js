/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 15:49:27
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 15:58:05
 */

import useTaskPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import http from '../../service/http'
import API from '../../service/api'

const logout = () => {
  return http.get(API.LOGOUT)
}

const useLogout = () => {
  const [loading, { setFalse, setTrue }] = useBoolean(false)

  const [taskWithPending] = useTaskPending(logout, { setTrue, setFalse })
  return [
    taskWithPending,
    loading,
  ]
}

export default useLogout