/*
 * @Author: scoyzhao
 * @Date: 2020-10-19 11:28:32
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 20:09:56
 */
import { useState, useMemo } from 'react'

const useMethods = (initialValue, methods) => {
  const [value, setValue] = useState(initialValue)
  const boundMethods = useMemo(
    () => Object.entries(methods).reduce(
      (methods, [name, fn]) => {
        const method = (...args) => {
          setValue(value => fn(value, ...args))
        }
        methods[name] = method
        return methods
      },
      {}
    ),
    [methods]
  )
  return [value, boundMethods]
}

export default useMethods
