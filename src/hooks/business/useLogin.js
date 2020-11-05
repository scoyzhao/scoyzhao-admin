/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 14:21:03
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 23:11:41
 */

import useTaskPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import useString from '../useString'
import { login } from '@/service/request/user'


const useLogin = () => {
  const [userName, { set: setUserName }] = useString('')
  const [password, { set: setPassword }] = useString('')
  const [loading, { set: setLoading}] = useBoolean(false)

  const [taskWithPending] = useTaskPending(login, { setLoading })
  return [
    { userName, setUserName },
    { password, setPassword },
    taskWithPending,
    loading,
  ]
}

export default useLogin
