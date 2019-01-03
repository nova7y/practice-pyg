const express = require('express')
const path = require('path')
const template = require('art-template')
const createError = require('http-errors') //处理http 404、500等错误
const Youch = require('youch') //开发环境中 易于阅读的错误页面

const app = express()

app.listen(8080, '127.0.0.1', () => console.log('server running : http://127.0.0.1:8080'))


// 处理静态资源
app.use(express.static(path.join(__dirname, 'public')))
//配置post请求体
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
//配置express-art-template
app.set('view engine', 'html');
app.engine('html', require('express-art-template'));


//路由
app.get('/', (req, res) => {
    res.send('123')
})



//-----------------中间件-----------------

//处理请求、响应错误
app.use((req, res, next) => {
    return next(createError(404, 'Not Found'))
})
//详细的错误页面
app.use((err, req, res, next) => {
    let env = req.app.get('env') //获取当前环境变量
    if (env == 'development') {
        const youch = new Youch(err, req)
        return youch.toHTML().then(html => res.end(html))
    }

    //如果是生产环境 则渲染404、500页面
    
})