const  express= require("express")

const  app=express()

app.use(require('cors')())
// 中间件
app.use(express.json())

// 静态托管文件
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./router/admin')(app)
require('./plugins/db')(app)

app.listen(3000,()=>{
  console.log('http://localhost:3000')
})