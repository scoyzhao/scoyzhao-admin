import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './mian.css'

import Login from './Login'

function Main() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/login/' exact component={Login} />
    </Router>
  )
}
export default Main
