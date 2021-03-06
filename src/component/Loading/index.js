/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 11:22:52
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 15:10:12
 */

import React from 'react'
import { Spin, Row, Col } from 'antd'

const Loading = ({ height }) => {
  return (
    <Row
      style={{ height: height ?? '100vh', backgroundColor: 'white' }}
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
