//首页home.html路由
const homeModel = require('../model/home.js')

//直接将对应的函数导出，统一在router.js使用


//渲染首页home.html
module.exports.index = (req, res, next) => {
    homeModel.getSlider().then(data => { //轮播图数据
        res.locals.slider = data
        res.render('./home.html') //渲染首页.html
    })
}