/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:49:33
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 00:55:25
 */

import { Table, Card, Button, message } from 'antd'
import React, { useEffect, useCallback } from 'react'
import PageHeaderWrapper from '../../component/PageHeaderWrapper'
import useType from '../../hooks/business/useType'

const Category = () => {
  const [
    type,
    typeList,
    typeLoading,
    addBlogType,
    deleteBlogType,
    updateBlogType,
    getList,
    getListById,
  ] = useType()

  const getTypeList = useCallback(
    async () => {
      try {
        await getList({})
      } catch (error) {
        message.error(error.toString())
      }
    },
    [getList]
  )

  useEffect(() => {
    getTypeList()
  }, [getTypeList])

  useEffect(() => {
    const { id } = type
    if (id) {
      console.log(id)
    }
  }, [type])

  const handleEdit = async (id) => {
    try {
      await getListById({ id })
    } catch (error) {
      message.error(error.toString())
    }
  }

  const typeColumns = [
    {
      title: '类型名称',
      width: '40%',
      dataIndex: 'name',
    },
    {
      title: '描述',
      width: '30%',
      dataIndex: 'description',
    },
    {
      title: '操作',
      width: '30%',
      render: record => {
        const { id } = record
        return (
          <>
            <Button
              type='primary'
              onClick={() => handleEdit(id)}
            >
              编辑
            </Button>
            <Button
              style={{ marginLeft: '20px' }}
              type='danger'
            >
              删除
            </Button>
          </>
        )
      }
    },
  ];

  return (
    <PageHeaderWrapper header={['类别管理']}>
      <Card
        title='类型'
        hoverable
      >
        <Table
          columns={typeColumns}
          dataSource={typeList}
          rowKey='id'
          loading={typeLoading}
        />
      </Card>
      <Card
        style={{ marginTop: '20px' }}
        title='标签'
        hoverable
      >
        <Table
          columns={typeColumns}
          dataSource={typeList}
          rowKey='id'
          loading={typeLoading}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default Category
