/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 01:00:19
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 01:11:25
 */

import React from 'react'
import { Modal } from 'antd'

const EditModal = ({ type, showEditModal }) => {
  console.log("EditModal -> type", type)
  const {id, name, description } = type

  return (
    <Modal
      title={`${id? '编辑标签': '新增标签'}`}
    >
      123
    </Modal>
  )
}

export default EditModal
