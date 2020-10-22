/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 18:15:01
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-22 16:16:35
 */

 // TODO optimize useObject
import useMethods from './useMethods'

const ObjectMethods = {
  set(state, newValue) {
    return { ...state, ...newValue}
  }
}

const useObject = (initialValue = {}) => {
  if (Object.prototype.toString.call(initialValue) !== '[object Object]') {
    throw new Error('initialValue must be an Object')
  }

  return useMethods(initialValue, ObjectMethods)
}

export default useObject