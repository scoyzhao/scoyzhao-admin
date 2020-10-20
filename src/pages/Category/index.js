/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:49:33
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 17:09:29
 */

import React, { useEffect } from 'react'
import { Table, Card, Button, message } from 'antd'
import PageHeaderWrapper from '../../component/PageHeaderWrapper'
import EditorModal from './EditModal'
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
    isEditModalVisible,
    showEditModal,
    editModalLoading,
  ] = useType()

  useEffect(() => {
    const getTypeList = async () => {
      try {
        await getList({})
      } catch (error) {
        message.error(error.toString())
      }
    }
    getTypeList()
  }, [getList])

  useEffect(() => {
    const { id } = type
    if (id) {
      showEditModal(true)
    }
  }, [showEditModal, type])

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
        extra={(
          <Button
            type='primary'
          // onClick={() => handleEdit(id)}
          >
            新增类型
          </Button>
        )}
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
      {
        isEditModalVisible &&
        <EditorModal
          type={type}
          showEditModal={showEditModal}
          loading={editModalLoading}
          addBlogType={addBlogType}
          updateBlogType={updateBlogType}
          getList={getList}
        />
      }
    </PageHeaderWrapper>
  )
}

export default Category
