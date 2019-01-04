//配置公用axios

const axios = require('axios')
const config = require('../config.js')

//通过config.js配置axios基础信息
const instance = axios.create({
    baseURL: config.api.baseURL,
    timeout: config.api.timeout,
    auth: {
        username: config.api.username,
        password: config.api.password
    }
})

module.exports = instance