//自定义中间件

const config = require('./config.js')
const categoryModel = require('./model/category.js')



module.exports.base = (req, res, next) => {
    //获取config中的网站TDK对象
    res.locals.size = config.size

    //网站左侧商品树
    categoryModel.getCategoryTree()
        .then(data => {
            //先判断缓存中是否有数据，没有 去取；有 直接用
            if (req.app.locals.category) {
                res.locals.category = req.app.locals.category
                next()
            } else {
                res.locals.category = data
                req.app.locals.category = res.locals.category
                next()
            }
        })
        .catch(err => next(err))
}