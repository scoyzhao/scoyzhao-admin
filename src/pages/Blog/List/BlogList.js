/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 10:51:12
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-12-14 17:16:38
 */

import React from 'react'
import { Table, Button, Card, Popconfirm, Spin, Switch, message } from 'antd'
import { useHistory } from 'react-router-dom'
import useBlogList from '@/hooks/business/useBlogList'

const BlogList = () => {
  const history = useHistory()
  const [
    result,
    loading,
    getBlogMutate,
    deleteItem,
    updateItem,
    getBlogById,
    tagList,
    typeList,
  ] = useBlogList()

  const { data } = result
  const handleChange = async (id, attr, checked) => {
    try {
      const newResult = JSON.parse(JSON.stringify(result))
      for (let i = 0; i < newResult.data.length; i++) {
        if (id === newResult.data[i].id) {
          newResult.data[i][attr] = checked
          break    
        }
      }

      getBlogMutate(newResult, false)
      const res = await updateItem({ id, payload: { [attr]: checked } })
      message.success(res.msg)
      getBlogMutate()
    } catch (error) {
      getBlogMutate(result, false)
      message.error(error.toString())
    }
  }

  const handleDelete = async (id) => {
    try {
      const newResult = JSON.parse(JSON.stringify(result))
      let index = null
      for (let i = 0; i < newResult.data.length; i++) {
        if (id === newResult.data[i].id) {
          index = i
          break
        }
      }

      newResult.data.splice(index, 1)
      getBlogMutate(newResult, false)
      const res = await deleteItem({ id })
      message.success(res.msg)
      getBlogMutate()
    } catch (error) {
      getBlogMutate(result, false)
      message.error(error.toString())
    }
  }

  const handleEdit = async (id) => {
    try {
      const res = await getBlogById({ id })
      gotoEditPage(res.data)
    } catch (error) {
      message.error(error.toString())
    }
  }

  const handleAdd = () => {
    gotoEditPage()
  }

  const gotoEditPage = (state) => {
    history.push({
      pathname: '/index/blog/edit',
      state,
    })
  }

  const columns = [
    {
      title: '标题',
      width: '25%',
      dataIndex: 'title',
    },
    {
      title: '类型',
      width: '10%',
      dataIndex: 'type',
      render: type => {
        let name = ''
        for (let i = 0; i < typeList.length; i++) {
          if (typeList[i].id === Number.parseInt(type)) {
            name = typeList[i].name
            break
          }
        }

        return name
      },
    },
    {
      title: '标签',
      width: '25%',
      dataIndex: 'tags',
      render: tags => {
        const tagObj = {}
        let nameArr = []
        for (let i = 0; i < tagList.length; i++) {
          tagObj[tagList[i].id] = tagList[i].name
        }

        for (let i = 0; i < tags.length; i++) {
          nameArr.push(tagObj[tags[i]])
        }

        return nameArr.join(', ')
      },
    },
    {
      title: '是否置顶',
      width: '10%',
      dataIndex: 'isTop',
      render: (isTop, record) => {
        const { id } = record
        return (
          <Switch
            checked={isTop === 1}
            onClick={(checked) => handleChange(id, 'isTop', checked)}
          />
        )
      },
    },
    {
      title: '是否展示',
      width: '10%',
      dataIndex: 'isShow',
      render: (isShow, record) => {
        const { id } = record
        return (
          <Switch
            checked={isShow === 1}
            onClick={(checked) => handleChange(id, 'isShow', checked)}
          />
        )
      },
    },
    {
      title: '操作',
      width: '20%',
      render: record => {
        const { id, title } = record
        return (
          <>
            <Button
              type='primary'
              onClick={() => handleEdit(id)}
            >
              编辑
            </Button>
            <Popconfirm
              title={`确定要删除 ${title} 吗?`}
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
    <Card
      title={(
        <Button
          type='primary'
          onClick={handleAdd}
        >
          新增博客
        </Button>
      )}
      hoverable
      extra={
        loading ? <Spin /> : null
      }
    >
      <Table
        columns={columns}
        dataSource={data}
        rowKey='id'
      />
    </Card>
  )
}

export default BlogList
