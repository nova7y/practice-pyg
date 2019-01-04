//负责home.html页面中的ajax请求获取数据

const api = require('./api.js')

module.exports.getSlider = () => {
    return api.get('/settings/home_slides')
        .then(res => res.data)
        .catch(err => Promise.reject(err))
}

