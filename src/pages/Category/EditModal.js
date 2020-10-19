/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 01:00:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 01:47:14
 */

import React from 'react'
import { Modal, Form, Input } from 'antd'

const { Item } = Form
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const EditModal = ({ type, showEditModal }) => {
  const { id, name, description } = type
  const [form] = Form.useForm()

  return (
    <Modal
      title={`${id ? '编辑标签' : '新增标签'}`}
      visible
      onCancel={() => showEditModal(false)}
    >
      <Form {...formItemLayout} >
        <Item label='标签名'>
          {form.getFieldDecorator('name', {
            initiaValue: name? name: '',
            rules: [{
              required: true,
              message: '请输入标签名',
            }],
          })(<Input />)}
        </Item>
        <Item label='备注'>
          {form.getFieldDecorator('description', {
            initiaValue: description ? description : '',
          })(<Input />)}
        </Item>
      </Form>
    </Modal>
  )
}

export default EditModal
