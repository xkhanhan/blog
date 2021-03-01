const express = require('express');// 导入 express 框架
const Admin_router = express.Router(); // 使用 express 路由

const Admin = require('../services/Admin');
const Admin_serve = require('../services/Admin'); // 导入Admin 服务层


/**
 * 获取管理员信息接口
 */
Admin_router.get('/',
    /**
     * 根据 id 获取信息
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    (req, res, next) => {
        console.log(req.cookies);

        const id = req.cookies.id;
        const Admin_name = req.cookies.Admin_name
        if (id) {
            Admin_serve.get({id, Admin_name}).then(data => {
                // 当数据库没有有查询的数据时 响应
                if (!data) res.send({ code: false, message: '该用户不存在!', result: {} });
                else res.send({ code: true, message: '成功!', result: data });
            })
        } else {
            next();
        }
    },

    /**
     * 根据 cookie 获取信息
     * @param {*} req 
     * @param {*} res 
     */
    (req, res) => {
        const cookie = req.cookies;
        /**
         * 当 cookie 中存在Admin_name 和 id 时进行查询
         */
        if (cookie.Admin_name && cookie.id) {

            Admin_serve.get(cookie).then(data => {
                // 查询成功
                if (!data) res.send({ code: false, message: '该用户不存在!', result: {} }); 
                // 查询失败
                else res.send({ code: true, message: '成功!', result: data });
            }, err => {
                // 查询失败
                next(err);
                res.send({ code: false, message: '该用户不存在!', result: {} })
            })

        } else {
            res.send({ code: false, message: '该用户不存在!', result: {} })
        }
    }
);

Admin_router.post('/update', (req, res, next) => {
    
   Admin_serve.update_info(req.cookies, req.body).then(data => {
    if(data) res.send({code : true, message : "修改成功"})
    else res.send({code : false, message : "修改失败"})
   }, err => {
        next(err);
       res.send({code : false, message : "修改失败"})
   });
   
})

module.exports = Admin_router;