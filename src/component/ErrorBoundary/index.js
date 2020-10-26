/*
 * @Author: scoyzhao
 * @Date: 2020-10-23 20:33:07
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-23 21:12:34
 */

import React from 'react'
import { message } from 'antd'

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error) {
    message.error(error.toString())
    return {
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary
