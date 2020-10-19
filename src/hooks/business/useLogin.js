/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 14:21:03
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 15:47:23
 */

import useTaskPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import useString from '../useString'
import http from '../../service/http'
import API from '../../service/api'

const login = (payload) => {
  return http.post(API.LOGIN, payload)
}

const useLogin = () => {
  const [userName, { set: setUserName }] = useString('')
  const [password, { set: setPassword }] = useString('')
  const [loading, { setFalse, setTrue }] = useBoolean(false)

  const [taskWithPending] = useTaskPending(login, { setTrue, setFalse })
  return [
    { userName, setUserName },
    { password, setPassword },
    taskWithPending,
    loading,
  ]
}

export default useLogin
