/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 14:21:03
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 16:56:32
 */

import useTaskPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import useString from '../useString'
import { login } from '../../service/request/user'


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
