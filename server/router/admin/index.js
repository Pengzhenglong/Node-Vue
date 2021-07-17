module.exports = app => {
  const express = require('express')
  // 子路由
  const router = express.Router()

  const Category = require('../../models/Category')

  // 存入数据库
  router.post('/categories', async (req, res) => {
    const model = await Category.create(req.body)
    res.send(model)
  })

  // 得到数据
  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })
  app.use('/admin/api', router)
}