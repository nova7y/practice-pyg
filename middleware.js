//自定义中间件

const config = require('./config.js')

//获取config中的网站TDK对象，并挂在到locals对象中
module.exports.base = (req, res, next) => {
    res.locals.size = config.size
    next()
}