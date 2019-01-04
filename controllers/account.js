//登陆页面login.html 路由


//直接将对应的函数导出，统一在router.js使用


//渲染页面
module.exports.login = (req, res, next) => {
    res.render('./login.html')
}