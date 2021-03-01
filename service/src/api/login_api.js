const login_services = require('../services/login');

const express = require('express');// 导入 express 框架
const router = express.Router(); // 使用 express 路由

router.post('/', (req, res) => {
    const params = req.body;
    const obj = {
        Admin_name: params.Admin_name || "",
        Admin_pass: params.Admin_pass || ""
    }
    login_services(obj).then(data => {
        if (!data) {
            res.send({
                code: false,
                message: "登陆失败！请检查用户名和密码！"
            })
        } else {
            res.cookie('Admin_name', data.Admin_name, {
                path: '/',
                maxAge : 24 * 7 * 3600 * 1000,
                httpOnly : true
            });
            res.cookie('id', data.id, {
                path: '/',
                maxAge : 24 * 7 * 3600 * 1000,
                httpOnly : true
            });
            
            res.send({
                code: true,
                message: '登陆成功！'
            })
        }

    })
})

module.exports = router