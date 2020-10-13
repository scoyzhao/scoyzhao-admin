/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 01:08:39
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-14 01:54:16
 */

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Button, Card, Spin, Input, message } from 'antd'
// TODO shot root
import http from '../../service/http'
import API from '../../service/api'

import './index.css'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const checkLogin = async () => {

    setIsLoading(true)
    try {
      const res = await http.post(API.LOGIN, {
        userName,
        password,
      })

      // TODO axios 封装
      if (res.data.code !== 0) {
        message.error(res.data.msg)
      } else {
        history.push('/index')
      }
    } catch (error) {
      console.log("checkLogin -> error", error)
      message.error(error.toString())
    }
    setIsLoading(false)
  }

  return (
    <div className='login_div'>
      <Spin tip='Loading...' spinning={isLoading}>
        <Card
          style={{ width: 400 }}
          title='scoyzhao-admin'
          bordered={true}
        >
          <Input
            className='login_input'
            size='large'
            placeholder='Enter your userName'
            onChange={(e) => { setUserName(e.target.value) }}
          />
          <br /><br />
          <Input.Password
            className='login_input'
            size='large'
            placeholder='Enter your password'
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br /><br />
          <Button type='primary' size='large' block onClick={checkLogin}>Login in</Button>
        </Card>
      </Spin>
    </div>
  )
}
export default Login
