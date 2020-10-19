/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 15:03:13
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 15:04:19
 */

import useMethods from './useMethods'

const stringMethods = {
  set(state, newValue) {
    return newValue
  }
}

const useString = (initialValue = '') => {
  if (typeof initialValue !== 'string') {
    throw new Error('initialValue must be an string')
  }

  return useMethods(initialValue, stringMethods)
}

export default useString
