//处理商品列表页
const productModel = require('../model/product.js')
const categoryModel = require('../model/category')

module.exports.index = (req, res, next) => {

    let cateId = req.params.id //当前url中的id      router.get('/list/:id', list.index) 
    let page = req.query.page || 1 //页码
    let sort = req.query.sort || 'commend' //排序规则
    let per_page = 10 //每页数据 数量


    // productModel.getCateProducts(cateId, page, sort, per_page)
    //     .then(data => {
    //         res.locals.lists = data
    //         res.render('./list.html') //渲染列表页
    //     })
    //     .catch(err => next(err))


    //商品列表 + 面包屑
    Promise.all([productModel.getCateProducts(cateId, page, sort, per_page),
            categoryModel.getCategoryParent(cateId)
        ])
        .then(data => {
            res.locals.lists = data[0] //获取列表页对应商品的数据
            res.locals.cate = data[1] //当前列表的父级列表名
            res.locals.sort = sort //排序规则
            res.locals.total = data[1].total //分页 页数
            
            res.render('./list.html') //渲染列表页
        })
        .catch(err => next(err))



}