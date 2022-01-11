const AdminUser = require('../../models/AdminUser')

module.exports = app => {
  const express = require('express')
  // 子路由
  const router = express.Router({
    mergeParams: true
  })

  // const req.Model = require('../../models/req.Model')

  // 存入数据库
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 发送所有数据//分类列表//populate关联字段查询
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })


  // 发送指定id的数据
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // put修改数据库中的数据
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  //删除数据 
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 添加一个中间件
  app.use('/admin/api/rest/:resource', async (req, res, next) => {
    // 复数转单数   npm  i  inflection用于单复数的转换，
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  }, router)



  // npm  i  multer  中间件处理数据上传
  // __dirname绝对地址，当前文件的绝对地址
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    // 图片地址
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  app.post('/admin/api/login', async (req, res) => {
    // res.send('OK')
    const { username, password } = req.body

    // 1.根据用户名找用户
    const AdminUser = require('../../models/AdminUser')
    const user = await AdminUser.findOne({ username }).select('+password')
    if (!user) {
      return res.status(422).send({
        message: '用户名不存在'
      })
    }
    // 2. 校验密码
    const isVaild = require('bcrypt').compareSync(password, user.password)
    if (!isVaild) {
      return res.status(422).send({
        message: '密码错误'
      })
    }
    // 3.返回token

    const jwt = require('jsonwebtoken')

    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })

  })
}

