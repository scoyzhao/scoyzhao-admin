/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 00:05:22
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-24 16:26:42
 */

import React, { Suspense } from 'react'
import { Row, Col } from 'antd'
import PageHeaderWrapper from '../../component/PageHeaderWrapper'
import ErrorBoundary from '../../component/ErrorBoundary'
import Retry from '../../component/Retry'
import Loading from '../../component/Loading'
import Introduction from './Introduction'
import Todo from './Todo'

const Overview = () => {
  return (
    <>
      <PageHeaderWrapper header={['概览']}>
        <Row
          style={{ marginTop: '50px' }}
          gutter={15}
        >
          <Col span={16}>
            <Introduction />
          </Col>
          <Col span={8}>
            <ErrorBoundary fallback={
              <Retry height='600px' />
            }>
              <Suspense fallback={
                <Loading height='600px' />
              }>
                <Todo />
              </Suspense>
            </ErrorBoundary>
          </Col>
        </Row>
      </PageHeaderWrapper>
    </>
  )
}

export default Overview
