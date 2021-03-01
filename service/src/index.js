const express = require('express'); // 导入express 框架
const app = express(); // 使用express

app.use(express.urlencoded({extended: false})); // 解析任何格式的请求
app.use(express.json()); // 解析 json 格式的请求

const path = require('path');
const staticPath = path.join(__dirname, './assets');
console.log(staticPath);
/**
 *  导入 cookie-parser 插件， 
 *  用于给前端传递cookie 或者解析前端传递的cookie
 */
const cookieParser = require('cookie-parser');
app.use(cookieParser()); // 使用 cookieParser 用 toke 进行加密

/**
 * 设置请求头和请求源
 */
app.use('*', (req, res, next) => {
    /**
     * 设置请求源只能为 http://localhost:8081
     * 允许携带cookie
     */
    res.header("access-control-allow-origin", "http://localhost:8081");
    res.header("Access-Control-Allow-Methods", req.headers["access-control-request-method"]);
    res.header("Access-Control-Allow-Headers", req.headers["access-control-request-headers"]);
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/assets',express.static(staticPath));
// 用户对应接口
app.use('/Admin', require('./api/Admin_api'));

// 登录对应接口
app.use('/login', require('./api/login_api'));

// 文章对应接口
app.use('/Article', require('./api/Article_api'));

app.use('/loadImg',require('./api/loadImg_api'))

app.use(require('./error'))

/**
 * 监听 8080 端口的所有请求
 */
app.listen(8080, () => {
    console.log('running...');
});
