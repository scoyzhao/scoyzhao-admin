/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 18:15:01
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-28 00:47:54
 */

import useMethods from './useMethods'

const ObjectMethods = {
  set(state, newValue) {
    return { ...newValue}
  }
}

const useObject = (initialValue = {}) => {
  if (Object.prototype.toString.call(initialValue) !== '[object Object]') {
    throw new Error('initialValue must be an Object')
  }

  return useMethods(initialValue, ObjectMethods)
}

export default useObject