/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 15:49:27
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 16:58:19
 */

import useTaskPending from '../useTaskWithPending'
import useBoolean from '../useBoolean'
import { logout } from '../../service/request/user'

const useLogout = () => {
  const [loading, { setFalse, setTrue }] = useBoolean(false)

  const [taskWithPending] = useTaskPending(logout, { setTrue, setFalse })
  return [
    taskWithPending,
    loading,
  ]
}

export default useLogout