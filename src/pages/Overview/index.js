/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:05:22
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 11:14:40
 */
import React from 'react'
import { Row, Col } from 'antd'
import PageHeaderWrapper from '../../component/PageHeaderWrapper'
import Introduction from './Introduction'
import Todo from './Todo'

const Overview = () => {
  return (
    <>
      <PageHeaderWrapper header={['概览']}>
        <Row gutter={15}>
          <Col span={16}>
            <Introduction />
          </Col>
          <Col span={8}>
            <Todo />
          </Col>
        </Row>
      </PageHeaderWrapper>
    </>
  )
}

export default Overview
