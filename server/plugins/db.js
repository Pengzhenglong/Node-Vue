// 连接数据库
module.exports = app => {
  const mongoose = require('mongoose')
  // 
  mongoose.set('useFindAndModify', false)

  mongoose.connect('mongodb://127.0.0.1:27017/node-vue', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  require('require-all')(__dirname + '/../models')
}