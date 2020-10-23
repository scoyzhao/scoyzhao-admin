/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 10:46:30
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 11:37:15
 */

import React from 'react'
import { Card, Input, Form, Select, Button, Row, Col, message } from 'antd'
import PageHeaderWrapper from '../../../component/PageHeaderWrapper'
import Loading from '../../../component/Loading/index'
import Editor from 'for-editor'

import useBlogEdit from '../../../hooks/business/useBlogEdit'
import { useEffect } from 'react'
import { useForm } from 'antd/lib/form/Form'

const SCOYZHAO_BLOG_DRAFT = 'myBlogDraft'

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

const BlogEdit = (props) => {
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

  useEffect(() => {
    getTages()
    getTypes()
  }, [getTages, getTypes])

  const [form] = useForm()

  useEffect(() => {
    const draft = localStorage.getItem(SCOYZHAO_BLOG_DRAFT)
    if (draft) {
      setBlog(JSON.parse(draft))
      setContent(JSON.parse(draft).content)
    }
  }, [setBlog, setContent])

  const handleChange = (value) => {
    setContent(value)
    setBlog({
      content: value,
    })
  }

  const handleSaveDraft = () => {
    const draft = JSON.parse(localStorage.getItem(SCOYZHAO_BLOG_DRAFT))
    try {
      let newBlog = Object.assign({}, { content }, form.getFieldsValue())
      // * 如果有草稿，可能有id，这里处理下
      if (draft?.id) {
        newBlog = Object.assign({}, newBlog, { id: draft.id })
      }
      setBlog(newBlog)
      localStorage.setItem(SCOYZHAO_BLOG_DRAFT, JSON.stringify(newBlog))
      message.info('草稿已保存')
    } catch (error) {
      console.log("handleSaveDraft -> error", error)
      message.info('草稿保存失败')
    }
  }

  const handleSaveBlog = async () => {
    try {
      await form.validateFields()
    } catch (error) {
      message.error('请完善表单')
    }

    handleSaveDraft()
    handleSubmit()
  }

  const handleSubmit = async () => {
    const draft = JSON.parse(localStorage.getItem(SCOYZHAO_BLOG_DRAFT))
    // * 补全字段，否则为undefined，无法修改数据库字段
    const newBlog = Object.assign({}, {
      tags: [],
      abstract: ''
    }, draft)

    const { id } = newBlog
    if (id) {
      try {
        const result = await updateBlog({
          id,
          payload: newBlog
        })

        if (result.code !== 0) {
          return message.error(result.msg)
        }

        return message.success(result.msg)
      } catch (error) {
        return message.error(error.msg)
      }
    } else {
      try {
        const result = await addBlog(newBlog)

        if (result.code !== 0) {
          return message.error(result.msg)
        }

        // * 新增的话给草稿加上id
        const newDraft = Object.assign({}, { id: result.data }, newBlog)
        localStorage.setItem(SCOYZHAO_BLOG_DRAFT, JSON.stringify(newDraft))
        return message.success('保存成功')
      } catch (error) {
        return message.error(error.toString())
      }
    }
  }

  const handleDeleteDraft = () => {
    try {
      form.setFieldsValue({
        title: undefined,
        abstract: undefined,
        tags: undefined,
        type: undefined,
      })
      setContent('')
      setBlog({})
      localStorage.removeItem(SCOYZHAO_BLOG_DRAFT)
      console.log("handleDeleteDraft -> blog", blog)
      message.info('草稿已保存')
    } catch (error) {
      message.error(error.toString())
    }
  }

  return (
    <PageHeaderWrapper header={['博客管理', '博客编辑']}>
      {
        loading
          ? <Loading />
          : <Card>
            <Form {...formItemLayout} form={form} initialValues={blog}>
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
                    <Input />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item
                    name='abstract'
                    label='简介'
                  >
                    <TextArea rows={2} />
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
                <Col offset={6}>
                  <Button onClick={handleSaveDraft}>
                    暂存
              </Button>
                  <Button
                    style={{ marginLeft: '20px' }}
                    type='danger'
                    onClick={handleDeleteDraft}
                  >
                    清除草稿
              </Button>
                  <Button
                    style={{ marginLeft: '20px' }}
                    type='primary'
                    loading={editLoading}
                    onClick={handleSaveBlog}
                  >
                    保存博客
              </Button>
                </Col>
              </Row>
            </Form>
            <Editor
              value={content}
              preview
              subfield
              onChange={(value) => handleChange(value)}
              onSave={handleSaveDraft}
            />
          </Card>
      }
    </PageHeaderWrapper>
  )
}

export default BlogEdit
