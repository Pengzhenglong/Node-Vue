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

  // 发送所有数据
  router.get('/categories', async (req, res) => {
    const items = await Category.find().limit(10)
    res.send(items)
  })
  // 发送指定id的数据
  router.get('/categories/:id', async (req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  })

  // put修改数据库中的数据
  router.put('/categories/:id', async (req, res) => {
    const model = await Category.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  //删除数据 
  router.delete('/categories/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })


  app.use('/admin/api', router)
}