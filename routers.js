//路由汇总

const express = require('express')
const home = require('./controllers/home.js') //首页路由
const account = require('./controllers/account.js') //登陆路由
const list = require('./controllers/list.js') //商品列表页

const router = module.exports = express.Router()


//首页
router.get('/', home.index) //home.html 渲染
router.get('/like', home.like) //猜你喜欢


//列表页
router.get('/list', list.index)

//登陆页login.html 展示
router.get('/login', account.login)