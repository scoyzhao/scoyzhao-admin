/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:15:54
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-16 00:50:53
 */

import React from 'react'
import { Breadcrumb } from 'antd'

import './index.css'

const { Item } = Breadcrumb

const PageHeaderWrapper = (props) => {
  const { header, children } = props;

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          header.map(item => (
            <Item key={item}>{item}</Item>
          ))
        }
      </Breadcrumb>
      <div className='content'>
        { children }
      </div>
    </>
  )
}

export default PageHeaderWrapper
