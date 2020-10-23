/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 11:22:52
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 11:34:48
 */

import React from 'react'
import { Spin, Row, Col } from 'antd'

const Loading = ({ height }) => {
  return (
    <Row
      style={{ height: height ?? '100vh' }}
      type='flex'
      justify='center'
      align='middle'
    >
      <Col>
        <Spin size='large' />
      </Col>
    </Row>
  )
}

export default Loading
