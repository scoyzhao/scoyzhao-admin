/*
 * @Author: scoyzhao
 * @Date: 2020-10-20 20:30:44
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-05 20:18:37
 */

import React from 'react'
import useTag from '@/hooks/business/useTag'
import CateGoryTableComponent from './component/CategoryTableCompoent'

const Tag = () => {
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
  ] = useTag()

  return (
    <CateGoryTableComponent
      keyword='标签'
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

export default Tag
