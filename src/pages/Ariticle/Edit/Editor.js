/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 11:24:40
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-22 15:09:44
 */

import React from 'react'
import { Form, Input, Select, message, Button } from 'antd'
import Editor from 'for-editor'
import { useForm } from 'antd/lib/form/Form'

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

const { Option } = Select
const { TextArea } = Input

const BlogEditor = ({ article, typeList, tagList }) => {
  const [form] = useForm()

  return (
    <>
      <Editor />
      <div style={{
        margin: '0 0 20px 60vh'
      }}>
        <Button>暂存</Button>
        <Button
          style={{ marginLeft: '20px' }}
          type='primary'
        >提交</Button>
      </div>
      <Form {...formItemLayout} form={form} initialValues={article}>
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
        <Item
          name='abstract'
          label='简介'
        >
          <TextArea
            style={{ marginTop: '10px' }}
            rows={2}
          />
        </Item>
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
        <Item
          name='content'
          label='内容'
          rules={[
            {
              required: true,
              message: '内容不能为空',
            },
          ]}
        >
          <TextArea
            style={{ marginTop: '10px' }}
            autoSize={{ minRows: 15 }}
          />
        </Item>
      </Form>
    </>
  )
}

export default BlogEditor
