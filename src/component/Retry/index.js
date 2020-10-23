/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 19:36:16
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 21:17:41
 */
import React from 'react'
import { Row, Col } from 'antd'
import './index.css'

const Retry = ({ height }) => {
  return (
    <Row
      style={{ height: height ?? '100vh', backgroundColor: 'white' }}
      type='flex'
      justify='center'
      align='middle'
    >
      <Col>
        <div className='error_content'>获取页面数据失败/(ㄒoㄒ)/~~</div>
      </Col>
    </Row>
  )
}

export default Retry