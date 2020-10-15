/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:08:39
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-15 17:08:23
 */

import React, { useState } from 'react'
import { Button, Card, Input, Row, Col, message } from 'antd'
// TODO shot root
import http from '../../service/http'
import API from '../../service/api'

import './index.css'

const Login = (props) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkLogin = async () => {
    if (!userName || !password) {
      message.error('账号名/密码不能为空')
    } else {
      setIsLoading(true)
      try {
        const res = await http.post(API.LOGIN, {
          userName,
          password,
        })

        if (res.code !== 0) {
          message.error(res.msg)
        } else {
          props.history.replace('/index')
        }
      } catch (error) {
        message.error(error.toString())
      }

      setTimeout(() => {
        setIsLoading(false)
      }, 500)
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
          loading={isLoading}
          bordered={true}
        >
          <Input
            className='login_input'
            size='large'
            placeholder='Enter your userName'
            onChange={(e) => { setUserName(e.target.value) }}
          />
          <Input.Password
            className='login_input'
            size='large'
            placeholder='Enter your password'
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <Button type='primary' size='large' block onClick={checkLogin}>Login in</Button>
        </Card>
      </Col>
    </Row>
  )
}
export default Login
