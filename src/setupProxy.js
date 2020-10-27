/*
 * @Author: scoyzhao
 * @Date: 2020-10-14 14:34:14
 * @Last Modified by: scoyzhao
 * @Last Modified time: 2020-10-28 00:43:54
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

  app.use(
    '^/blog',
    createProxyMiddleware({
      target: 'http://120.27.247.30:7001',
      changeOrigin: true,
    })
  )

  app.use(
    '^/todo',
    createProxyMiddleware({
      target: 'http://120.27.247.30:7001',
      changeOrigin: true,
    })
  )
}
