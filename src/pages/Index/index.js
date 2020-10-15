/*
 * @Author: scoyzhao
 * @Date: 2020-10-16 01:05:24
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-16 01:41:23
 */

import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { Layout, Menu, Button, message } from 'antd'
import {
  DesktopOutlined,
  PieChartOutlined,
  // FileOutlined,
  // TeamOutlined,
  // UserOutlined,
} from '@ant-design/icons'

import Overveiw from '../Overview'
import Category from '../Category'

import http from '../../service/http'
import API from '../../service/api'
import './index.css'

const { Header, Content, Footer, Sider } = Layout
const { Item } = Menu
// const { SubMenu } = Menu

// TODO add exit
const Index = (props) => {
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

  const logout = async () => {
    try {
      const res = await http.get(API.LOGOUT)

      if (res.code !== 0) {
        message.error(res.msg)
      } else {
        props.history.push('/login')
      }
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
          {/* <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9' icon={<FileOutlined />} /> */}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-header' style={{ padding: 0 }}>
          <Button
            className='site-layout-header-button'
            type='danger'
            onClick={logout}
          >
            退出登录
          </Button>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <>
            <Route path='/index/' exact component={Overveiw} />
            <Route path='/index/category/' exact component={Category} />
          </>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default Index
