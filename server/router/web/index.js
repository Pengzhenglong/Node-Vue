module.exports = app => {
  const router = require('express').Router()


  const mongoose = require('mongoose')
  // const Article = require('../../models/Article')
  const Category = mongoose.model('Category')
  const Article = mongoose.model('Article')
  // 测试初始化新闻的路由
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻分类'
    })
    const cats = await Category.find().where({
      parent: parent
    }
    ).lean()

    const newsTitle = ["元歌皮肤设计大赛精彩创意赏析第五期", "新赛季新英雄教学，来虎牙海量好礼免费赢", "狄某有话说 |头铁沈梦溪：我不信游走战术会失败！", "斗鱼S26新赛季版本全攻略请查收!", "王者新赛季快手主播接受终极挑战，一天学会新英雄暃操作技巧！", "1月10日部分安卓用户异常说明", "1月8日妲己小助手维护说明", "1月8日全服不停机更新公告", "1月7日体验服停机更新公告", "1月7日铭文系统显示异常问题说明", "新赛年开启！S26赛季一触即发，好礼不断", "元歌皮肤设计大赛精彩创意赏析第四期", "【女儿国之梦】送全新回城及【女儿国国王】点券优惠卡活动公告", "新年到！众多王者福利陪你畅玩元旦", "【踏玉暃檐，趣探玉城】活动开启公告及FAQ", "武汉ES、广州TTG顶峰再遇，挑战者杯总决赛1月15日开战", "挑战者杯预报丨大湾区德比，广州TTG、佛山GK谁能去往总决赛", "挑战者杯预报丨武汉ES对阵长沙TES.A，今天谁能进总决赛？", "属于挑战者们的赛场故事，敢于拼搏即为王者！", "挑战者杯预报丨佛山GK破狼为四强，广州TTG迎战K甲冠军"]
    const newsList = newsTitle.map(title => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5)
      return {
        categories: randomCats.slice(0, 2),
        title: title
      }
    })
    await Article.deleteMany({})
    await Article.insertMany(newsList)

    res.send(newsList)
  })
  // 展示新闻列表，用于前端调用
  router.get('/news/list', async (req, res) => {
    // const parent = await Category.findOne({
    //   name: "新闻分类"
    // }).populate({
    //   path: 'children',
    //   populate: {
    //     path: 'newsList'
    //   }
    // }).lean()

    const parent = await Category.findOne({
      name: '新闻分类'
    })
    // aggregate  mongoose聚合查询
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'categories',
          as: 'newsList'
        }
      },
      //  只获取五条数据
      {
        $addFields: {
          newsList: {
            $slice: ['$newsList', 5]
          }
        }
      }
    ])


    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      newsList: await Article.find().where({
        categories: { $in: subCats }
      }).populate('categories').limit(5).lean()
    })
    cats.map(cat => {
      cat.newsList.map(news => {
        news.CategoryName = (cat.name === '热门')
          ? news.categories[0].name : cat.name
        return news
      })

      return cat
    })

    res.send(cats)
  })



  app.use('/web/api', router)
}