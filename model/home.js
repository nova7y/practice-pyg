//负责home.html页面中的ajax请求获取数据

const axios = require('./api.js')

//轮播图
module.exports.getSlider = () => {
    return axios.get('/settings/home_slides')
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}

