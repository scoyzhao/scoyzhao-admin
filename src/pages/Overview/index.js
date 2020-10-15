/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:05:22
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-16 01:44:04
 */
import React, { useEffect } from 'react'
import http from '../../service/http'
import API from '../../service/api'

import PageHeaderWrapper from '../../component/PageHeaderWrapper'

const Overview = () => {
  useEffect(() => {
    const testAuth = async () => {
      try {
        await http.get(API.TEST_AUTH)
      } catch (error) {
        console.log("testAuth -> error", error)
      }
    }

    testAuth()
  }, [])

  return (
    <>
      <PageHeaderWrapper header={['概览']}>
        TODO 添加概览页面
      </PageHeaderWrapper>
    </>
  )
}

export default Overview
