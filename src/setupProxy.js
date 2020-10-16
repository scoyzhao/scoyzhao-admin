/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 14:34:14
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-16 11:28:19
 */

const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '^/user',
    createProxyMiddleware({
      target: 'http://120.27.247.30:7001',
      changeOrigin: true,
    })
  )

  app.use(
    '^/home',
    createProxyMiddleware({
      target: 'http://120.27.247.30:7001',
      changeOrigin: true,
    })
  )
}
