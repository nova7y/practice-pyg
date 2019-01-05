//首页home.html路由
const homeModel = require('../model/home.js')
const productModel = require('../model/product.js')
//直接将对应的函数导出，统一在router.js使用


//渲染首页home.html
// module.exports.index = (req, res, next) => {
//     homeModel.getSlider().then(data => { //轮播图数据
//         res.locals.slider = data
//         res.render('./home.html') //渲染首页.html
//     }).catch(err => next(err))
//     productModel.getLikeProduct().then(data => {
//         console.log(data)
//     }).catch(err => next(err))
// }

//渲染首页home.html
module.exports.index = (req, res, next) => {

    Promise.all([homeModel.getSlider(), productModel.getLikeProduct()])
        .then(data => {

            res.locals.slider = data[0] //轮播图
            res.locals.likes = data[1] //猜你喜欢
            res.render('./home.html') //渲染页面

            // if (req.app.locals.slider) {
            //     res.locals.slider = req.app.locals.slider
            // } else {
            //     res.locals.slider = data[0] //轮播图
            //     req.app.locals.slider = res.locals.slider
            // }
            // res.locals.likes = data[1] //猜你喜欢
            // res.render('./home.html') //渲染页面
        })
        .catch(err => next(err))
}

//猜你喜欢
module.exports.like = (req, res, next) => {
    productModel.getLikeProduct()
        .then(data => res.json(data))
        .catch(err => next(err))
}