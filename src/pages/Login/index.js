import React, { useState } from 'react'
import { Button, Card, Spin, Input } from 'antd'

import './index.css'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const checkLogin = () => {
    console.log(userName, password)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
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
