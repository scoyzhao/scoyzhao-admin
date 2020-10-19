/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:49:33
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-19 11:19:05
 */

import { Table, Card, message } from 'antd'
import React, { useEffect, useState } from 'react'
import PageHeaderWrapper from '../../component/PageHeaderWrapper'
import API from '../../service/api'
import http from '../../service/http'

const Category = () => {
  // const [tageList, setTageList] = useState([])
  const [typeList, setTypeList] = useState([])
  const [typeLoading, setTypeLoading] = useState(false)

  useEffect(() => {
    getList()
  }, [])

  const getList = async () => {
    setTypeLoading(true)
    try {
      const res = await http.get(API.GET_TYPE_LIST)
      if (res.code === 0) {
        setTypeList(res.data.result)
      } else {
        message.error(res.msg)
      }
    } catch (error) {
      message.error(error.toString())
    }

    setTimeout(() => {
      setTypeLoading(false)
    }, 500)
  }

  const typeColumns = [
    {
      title: '类型名称',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'description',
    },
    {
      title: '操作',
      dataIndex: 'address',
    },
  ];

  return (
    <PageHeaderWrapper header={['类别管理']}>
      <Card>
        <Table
          columns={typeColumns}
          dataSource={typeList}
          loading={typeLoading}
        />
      </Card>
      <Card>
        <Table
          columns={typeColumns}
          dataSource={typeList}
          loading={typeLoading}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default Category
