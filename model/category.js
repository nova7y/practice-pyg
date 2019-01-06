// 商品分类数据

const axios = require('./api.js')


//获取商品分类树
module.exports.getCategoryTree = () => {
    return axios.get('categories?format=tree')
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}


//面包屑：获取当前分类的父级分类
module.exports.getCategoryParent = (cateId) => {
    return axios.get(`categories/${cateId}?include=parent`)
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}