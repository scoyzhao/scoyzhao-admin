/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 10:46:30
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-05 20:39:08
 */

import React from 'react'
import { Card, Input, Form, Select, Button, Row, Col, message } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import PageHeaderWrapper from '@/component/PageHeaderWrapper'
import Loading from '@/component/Loading/index'
import Editor from 'for-editor'
import _ from 'lodash'

import useBlogEdit from '@/hooks/business/useBlogEdit'
import { useEffect } from 'react'
import { useForm } from 'antd/lib/form/Form'

const { Option } = Select
const { TextArea } = Input
const { Item } = Form
const formItemLayout = {
  labelCol: {
    sm: { span: 2, },
  },
  labelAlign: 'left',
  wrapperCol: {
    sm: { span: 20 },
  },
}

const BlogEdit = () => {
  const [
    blog,
    content,
    setBlog,
    setContent,
    typeList,
    tagList,
    getTypes,
    getTages,
    loading,
    addBlog,
    updateBlog,
    editLoading,
  ] = useBlogEdit()

  const location = useLocation()
  const history = useHistory()
  const [form] = useForm()

  useEffect(() => {
    const { state } = location
    if (state) {
      setBlog(state)
    }
  }, [location, setBlog])

  useEffect(() => {
    getTages()
    getTypes()
  }, [getTages, getTypes])

  const handleChange = (value) => {
    const newBlog = _.cloneDeep(blog)
    setBlog(Object.assign(newBlog, {
      content: value,
    }))
  }

  const handleSubmit = async (isShow = false) => {
    try {
      await form.validateFields()
      let newBlog = Object.assign(blog, form.getFieldsValue())
      setBlog(newBlog)
      submit(isShow)
    } catch (error) {
      message.error('请完善表单')
    }
  }

  const submit = async (isShow) => {
    // * 补全字段，否则为undefined，无法修改数据库字段
    const newBlog = Object.assign({}, {
      tags: [],
      abstract: ''
    }, blog)

    const { id, title, abstract, type, tags, content } = newBlog
    if (id) {
      try {
        const result = await updateBlog({
          id,
          payload: {
            title,
            abstract,
            type,
            tags,
            content,
            isShow: isShow? 1: 0,
          }
        })

        if (result.code !== 0) {
          return message.error(result.msg)
        }

        message.success(result.msg)
        return history.push('/index/blog/list')
      } catch (error) {
        return message.error(error.toString())
      }
    } else {
      try {
        const result = await addBlog(Object.assign(newBlog, {
          isShow: isShow? 1: 0,
        }))

        if (result.code !== 0) {
          return message.error(result.msg)
        }

        message.success(result.msg)
        return history.push('/index/blog/list')
      } catch (error) {
        return message.error(error.toString())
      }
    }
  }

  const setInitialValues = () => {
    const values = {}
    if (blog.title) {
      const tags = []
      blog.tags.map(tag => {
        return tags.push(Number.parseInt(tag))
      })

      Object.assign(values, {
        title: blog.title,
        abstract: blog.abstract,
        tags: tags,
        type: Number.parseInt(blog.type),
        content: blog.content,
      })
    }

    return values
  }

  return (
    <PageHeaderWrapper header={['博客管理', '博客编辑']}>
      {
        loading
          ? <Loading />
          : <Card>
            <Form {...formItemLayout} form={form} initialValues={setInitialValues()}>
              <Row>
                <Col span={12}>
                  <Item
                    name='title'
                    label='标题'
                    rules={[
                      {
                        required: true,
                        message: '标题不能为空',
                      },
                    ]}
                  >
                    <Input placeholder='请输入博客标题' />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item
                    name='abstract'
                    label='简介'
                  >
                    <TextArea rows={2} placeholder='请输入博客简介' />
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Item
                    name='type'
                    label='类型'
                    rules={[
                      {
                        required: true,
                        message: '类型不能为空',
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      allowClear
                      style={{ width: 200 }}
                      placeholder='请选择博客类型'
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {
                        typeList.map(el => (
                          <Option key={el.id} value={el.id}>{el.name}</Option>
                        ))
                      }
                    </Select>
                  </Item>
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Item
                    name='tags'
                    label='标签'
                    rules={[
                      {
                        required: true,
                        message: '标签不能为空',
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      allowClear
                      mode='multiple'
                      style={{ width: '100%' }}
                      placeholder='请选择标签'
                      optionFilterProp='children'
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {
                        tagList.map(el => (
                          <Option key={el.id} value={el.id}>{el.name}</Option>
                        ))
                      }
                    </Select>
                  </Item>
                </Col>
                <Col offset={8}>
                  <Button
                    onClick={() => handleSubmit(false)}
                  >
                    保存博客
                  </Button>
                  <Button
                    style={{ marginLeft: '20px' }}
                    type='primary'
                    loading={editLoading}
                    onClick={() => handleSubmit(true)}
                  >
                    发布博客
              </Button>
                </Col>
              </Row>
            </Form>
            <Editor
              value={blog.content}
              preview
              subfield
              onChange={(value) => handleChange(value)}
            />
          </Card>
      }
    </PageHeaderWrapper>
  )
}

export default BlogEdit
