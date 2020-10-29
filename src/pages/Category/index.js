/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:49:33
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-11-05 20:17:54
 */

import React from 'react'
import PageHeaderWrapper from '@/component/PageHeaderWrapper'
import Type from './Type'
import Tag from './Tag'

const Category = () => {
  return (
    <PageHeaderWrapper header={['类别管理']}>
      <Type />
      <div style={{ height: '30px' }} />
      <Tag />
    </PageHeaderWrapper>
  )
}

export default Category
