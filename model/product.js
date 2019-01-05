//获取产品相关数据

const axios = require('./api.js')

//首页-猜你喜欢
module.exports.getLikeProduct = () => {
    return axios.get('products?type=like&limit=6')
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}

//列表页 数据
module.exports.getCateProducts = () => {

}