/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 12:00:52
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 12:04:01
 */

import useMethods from './useMethods'

const booleanMethods = {
  setTrue() {
    return true
  },

  setFalse() {
    return false
  },
}

const useBoolean = (initialValue = false) => {
  if (typeof initialValue !== 'boolean') {
    throw new Error('initialValue must be an boolean')
  }

  return useMethods(initialValue, booleanMethods)
}

export default useBoolean
