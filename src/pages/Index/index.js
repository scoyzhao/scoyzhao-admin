/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 01:05:24
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-22 23:34:17
 */

import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { Layout, Menu, Button, message } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

import useLogout from '../../hooks/business/useLogout'
import Overveiw from '../Overview'
import Category from '../Category'
import BlogEdit from '../Blog/Edit'
import BlogList from '../Blog/List'

import './index.css'

const { Content, Footer, Sider } = Layout
const { Item } = Menu
const { SubMenu } = Menu

const Index = (props) => {
  const [
    logout,
    loading,
  ] = useLogout()


  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  const handleNavigation = ({ key }) => {
    if (key === 'index') {
      props.history.push('/index')
    } else {
      props.history.push(`/index/${key}`)
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      props.history.push('/')
    } catch (error) {
      message.error(error.toString())
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu
          theme='dark'
          defaultSelectedKeys={['index']}
          mode='inline'
          onClick={handleNavigation}
        >
          <Item key='index' icon={<PieChartOutlined />}>
            概览
          </Item>
          <Item key='category' icon={<DesktopOutlined />}>
            类别管理
          </Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='博客管理'>
            <Item key='blog/list'>博客列表</Item>
            <Item key='blog/edit'>博客编辑</Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Button
          className='site-layout-header-button'
          type='danger'
          loading={loading}
          onClick={handleLogout}
        >
          退出登录
          </Button>
        <Content style={{ margin: '0 16px' }}>
          <>
            <Route path='/index' exact component={Overveiw} />
            <Route path='/index/category' exact component={Category} />
            <Route path='/index/blog/list' exact component={BlogList} />
            <Route path='/index/blog/edit' exact component={BlogEdit} />
          </>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout >
  )
}

export default Index
