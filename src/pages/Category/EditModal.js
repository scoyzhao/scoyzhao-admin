/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 01:00:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 19:56:52
 */

import React from 'react'
import { Modal, Form, Input, message } from 'antd'

const { Item } = Form
const formItemLayout = {
  labelCol: {
    sm: { span: 4 },
  },
  wrapperCol: {
    sm: { span: 18 },
  },
}

const EditModal = ({ type, setModalVisible, getList, addBlogType, updateBlogType, loading }) => {
  const { id, name, description } = type
  const [form] = Form.useForm()

  const submit = async() => {
    let payload = {}
    try {
      payload = await form.validateFields()
    } catch (errorInfo) {
      return message.error('表单格式错误，请检查')
    }

    let fn = addBlogType
    if (id) {
      fn = updateBlogType
      Object.assign(payload, {
        id,
      })
    }

    try {
      await fn(payload)
      setModalVisible(false)
      getList({})
    } catch (error) {
      message.error(error.toString())
    }
  }

  return (
    <Modal
      title={`${id ? '编辑标签' : '新增标签'}`}
      visible
      confirmLoading={loading}
      onOk={submit}
      onCancel={() => setModalVisible(false)}
    >
      <Form {...formItemLayout} form={form} initialValues={{
        name: id? name: '',
        description: id? description: '',
      }}>
        <Item
          name='name'
          label='标签名'
          rules = {[
            {
              required: true,
              message: '请输入标签名',
            },
          ]}
        >
          <Input disabled={id}/>
        </Item>
        <Item
          name='description'
          label='描述'
        >
          <Input />
        </Item>
      </Form>
    </Modal>
  )
}

export default EditModal
