/*
 * @Author: scoyzhao
 * @Date: 2020-10-24 16:28:03
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-27 00:49:02
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

const AddModal = ({ setAddModalVisible, result, mutateResult, addTodo }) => {
  const [form] = Form.useForm()

  const submit = async () => {
    let payload = {}
    try {
      payload = await form.validateFields()
    } catch (errorInfo) {
      return message.error('表单格式错误，请检查')
    }

    try {
      const newResult = JSON.parse(JSON.stringify(result))
      newResult.data.push({
        isCompleted: 0,
        content: payload.content,
      })
      mutateResult(newResult, false)
      const res = await addTodo(payload)
      message.success(res.msg)
      setAddModalVisible(false)
      mutateResult()
    } catch (error) {
      mutateResult(result)
      message.error(error.toString())
    }
  }

  return (
    <Modal
      title='新增待办'
      visible
      onOk={submit}
      onCancel={() => setAddModalVisible(false)}
    >
      <Form {...formItemLayout} form={form}>
        <Item
          name='content'
          label='内容'
          rules={[
            {
              required: true,
              message: '请输入待办内容',
            },
          ]}
        >
          <Input />
        </Item>
      </Form>
    </Modal>
  )
}

export default AddModal
