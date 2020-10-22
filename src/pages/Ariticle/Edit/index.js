/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 10:46:30
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-22 16:35:57
 */

import React from 'react'
import { Card, Input, Form, Select, Button, Row, Col, message } from 'antd'
import PageHeaderWrapper from '../../../component/PageHeaderWrapper'
import Editor from 'for-editor'

import useAriticleEdit from '../../../hooks/business/useAriticleEdit'
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

const Ariticle = (props) => {
  const [
    ariticle,
    content,
    setAriticle,
    setContent,
    typeList,
    tagList,
    getTypes,
    getTages,
    loading,
  ] = useAriticleEdit()

  useEffect(() => {
    getTages()
    getTypes()
  }, [getTages, getTypes])

  const [form] = useForm()

  useEffect(() => {
    const draft = localStorage.getItem(SCOYZHAO_BLOG_DRAFT)
    if (draft) {
      setAriticle(JSON.parse(draft))
      setContent(JSON.parse(draft).content)
    }
  }, [setAriticle, setContent])

  const handleChange = (value) => {
    setContent(value)
    setAriticle({
      content: value,
    })
  }

  const saveDraft = () => {
    try {
      const newAriticle = Object.assign({}, { content }, form.getFieldsValue())
      setAriticle(newAriticle)
      localStorage.setItem(SCOYZHAO_BLOG_DRAFT, JSON.stringify(newAriticle))
      message.info('草稿已保存')
    } catch (error) {
      message.info('草稿保存失败')
    }
  }

  return (
    <PageHeaderWrapper header={['博客管理', '博客编辑']}>
      <Card loading={loading}>
        <Form {...formItemLayout} form={form} initialValues={ariticle}>
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
            <Col offset={8}>
              <Button onClick={saveDraft}>
                暂存
              </Button>
              <Button
                style={{ marginLeft: '20px' }}
                type='primary'
              >
                保存文章
              </Button>
            </Col>
          </Row>
        </Form>
        <Editor
          value={content}
          preview
          subfield
          onChange={(value) => handleChange(value)}
          onSave={saveDraft}
        />
      </Card>
    </PageHeaderWrapper>
  )
}

export default Ariticle
