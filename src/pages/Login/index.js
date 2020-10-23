/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:08:39
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-24 16:03:04
 */

import React from 'react'
import { Button, Card, Input, Row, Col, message } from 'antd'
import useLogin from '../../hooks/business/useLogin'

import './index.css'

const Login = (props) => {
  const [
    { userName, setUserName },
    { password, setPassword },
    login,
    loading,
  ] = useLogin()

  const checkLogin = async () => {
    try {
      await login({ userName, password })
      return props.history.replace('/index')
    } catch (error) {
      message.error(error.toString())
    }
  }

  return (
    <Row
      style={{ minHeight: '100vh' }}
      type='flex'
      justify='center'
      align='middle'
    >
      <Col>
        <Card
          style={{ width: 400 }}
          title='scoyzhao-admin'
          loading={loading}
          bordered={true}
        >
          <Input
            className='login_input'
            size='large'
            placeholder='Enter your userName'
            value={userName}
            onChange={(e) => { setUserName(e.target.value) }}
          />
          <Input.Password
            className='login_input'
            size='large'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <Button type='primary' size='large' block onClick={checkLogin}>Login in</Button>
        </Card>
      </Col>
    </Row>
  )
}
export default Login
