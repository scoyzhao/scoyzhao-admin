/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 11:37:04
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 20:04:48
 */

import useMethods from './useMethods'

const arrayMethods = {
  set(state, newValue) {
    return newValue
  }
}

const useArray = (initialValue  = []) => {
  if (!Array.isArray(initialValue )) {
    throw new Error('initialValue must be an array')
  }

  return useMethods(initialValue , arrayMethods)
}

export default useArray
