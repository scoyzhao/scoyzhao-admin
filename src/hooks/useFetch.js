/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 17:41:32
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 18:18:05
 */

import { message } from 'antd';
import useSWR from 'swr'

const useSWRFetch = (url, fetcher, options = {}) => {
  const { data, error, isValidating, mutate } = useSWR(url, async () => {
    try {
      const res = await fetcher()
      if (res.code !== 0) {
        return message.error(res.msg)
      }

      return res
    } catch (error) {
      throw error
    }
  }, options)

  return {
    data,
    error,
    isValidating,
    mutate,
  }
}

export default useSWRFetch

