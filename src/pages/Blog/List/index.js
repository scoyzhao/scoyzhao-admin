/*
 * @Author: scoyzhao
 * @Date: 2020-10-22 10:51:12
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-29 00:33:36
 */

import React, { Suspense } from 'react'
import PageHeaderWrapper from '../../../component/PageHeaderWrapper'
import ErrorBoundary from '../../../component/ErrorBoundary'
import CollapsePage from '../../../component/CollapsePage'
import Loading from '../../../component/Loading'
import BlogList from './BlogList'

const Index = () => {
  return (
    <PageHeaderWrapper header={['管理', '博客列表']}>
      <ErrorBoundary fallback={<CollapsePage />
      }>
        <Suspense fallback={<Loading />}>
          <BlogList />
        </Suspense>
      </ErrorBoundary>
    </PageHeaderWrapper>
  )
}

export default Index
