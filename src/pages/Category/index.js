/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:49:33
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 20:23:30
 */

import React, { useEffect, useRef } from 'react'
import { Table, Card, Button, Popconfirm, message } from 'antd'
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
    modalVisible,
    setModalVisible,
    modalLoading,
    setEditorType,
  ] = useType()

  const isFirstRender = useRef(true)

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
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    setModalVisible(true)
  }, [setModalVisible, type])

  const handleEdit = (id) => {
    try {
      getListById({ id })
    } catch (error) {
      message.error(error.toString())
    }
  }

  const handleAdd = () => {
    try {
      setEditorType({})
    } catch (error) {
      message.error(error.toString())
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteBlogType({ id })
      await getList({})
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
        const { id, name } = record
        return (
          <>
            <Button
              type='primary'
              onClick={() => handleEdit(id)}
            >
              编辑
            </Button>
            <Popconfirm
              title={`确定要删除标签 ${name} 吗?`}
              onConfirm={() => handleDelete(id)}
            >
              <Button
                style={{ marginLeft: '20px' }}
                type='danger'
              >
                删除
            </Button>
            </Popconfirm>
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
            onClick={handleAdd}
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
        modalVisible &&
        <EditorModal
          type={type}
          setModalVisible={setModalVisible}
          loading={modalLoading}
          addBlogType={addBlogType}
          updateBlogType={updateBlogType}
          getList={getList}
        />
      }
    </PageHeaderWrapper>
  )
}

export default Category
