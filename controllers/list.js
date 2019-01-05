//处理商品列表页

module.exports.index = (req, res, next) => {
    let page = page || 1 //页码
    let sort = sort || 'commend' //排序规则
    const per_page = 10 //每页数据 数量






    res.render('./list.html') //渲染列表页
}