/*
 * @Date: 2020-03-27 11:19:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-04-28 17:18:35
 */
// 连接数据库
module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  // 引用所有模型
  require('require-all')(__dirname + '/../models')
}
