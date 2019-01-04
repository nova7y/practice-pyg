//路由汇总

const express = require('express')
const home = require('./controllers/home.js') //首页路由
const account = require('./controllers/account.js') //登陆路由


const router = module.exports = express.Router()


//首页home.html 展示
router.get('/', home.index)


//登陆页login.html 展示
router.get('/login',account.login)