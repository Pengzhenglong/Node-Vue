const  express= require("express")

const  app=express()
// 密钥，应放在环境变量中，这里为了方便，可以先放这
app.set('secret',"wer543545fasdfaffdsaf")

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