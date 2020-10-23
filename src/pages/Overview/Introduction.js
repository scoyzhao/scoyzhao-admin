/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 10:44:16
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 11:14:07
 */

import React from 'react'
import { Card, Row, Col } from 'antd'
import './index.css'

const Introduction = () => {
  return (
    <Card
      style={{ height: '600px' }}
      hoverable
    >

      <Row>
        <Col span={12}>
          <img
            width="100%"
            src="http://img.wxcha.com/file/201811/01/e7acbcc1fd.jpg"
            alt=""
          />
        </Col>
        <Col span={12}>
          <Row
            style={{ height: '350px' }}
            type='flex'
            justify='center'
            align='middle'
          >
            <Col>
              <div className='overview_name'>scoyzhao-admin</div>
              <div className='overview_slogan'>love and share</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}

export default Introduction
