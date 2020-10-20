/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 14:34:14
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-20 20:58:14
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
    '^/type',
    createProxyMiddleware({
      target: 'http://120.27.247.30:7001',
      changeOrigin: true,
    })
  )

  app.use(
    '^/tag',
    createProxyMiddleware({
      target: 'http://120.27.247.30:7001',
      changeOrigin: true,
    })
  )
}
