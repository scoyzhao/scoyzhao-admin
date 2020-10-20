/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 20:30:44
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 20:54:18
 */

import React from 'react'
import useType from '../../hooks/business/useType'
import CateGoryTableComponent from './component/CategoryTableCompoent'

const Type = () => {
  const [
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
  ] = useType()

  return (
    <CateGoryTableComponent
      keyword='类型'
      hooks={[
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
      ]}
    />
  )
}

export default Type
