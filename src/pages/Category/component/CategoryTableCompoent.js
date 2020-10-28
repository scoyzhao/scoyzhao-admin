/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 20:34:04
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-29 00:15:16
 */

import React, { useEffect, useRef } from 'react'
import { Table, Card, Button, Popconfirm, message } from 'antd'
import EditorModal from './EditModal'

const Category = (props) => {
  const {
    keyword,
    hooks: [
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
    ],
  } = props

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
      title: `${keyword}名称`,
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
              title={`确定要删除${keyword} ${name} 吗?`}
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
    <>
      <Card
        title={keyword}
        hoverable
        extra={(
          <Button
            type='primary'
            onClick={handleAdd}
          >
            {`新增${keyword}`}
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
      {
        modalVisible &&
        <EditorModal
          type={type}
          setModalVisible={setModalVisible}
          loading={modalLoading}
          addBlogType={addBlogType}
          updateBlogType={updateBlogType}
          getList={getList}
          keyword={keyword}
        />
      }
    </>
  )
}

export default Category
