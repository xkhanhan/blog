const express = require('express');
const { async } = require('validate.js');
const Article_router = express.Router();

const Article_services = require('../services/Article')
const fs = require('fs');

/**
 * 获取全部文章信息
 * 或根据传入的 创建时间和类别 返回文章信息
 */
Article_router.get('/', async (req, res) => {
    const from = req.query.from || 0;
    const num = req.query.num || 5;

    let createdAt = req.query.createdAt ? {createdAt : req.query.createdAt} : undefined
    let name = req.query.name ? {name : req.query.name} : undefined;
  
    console.log(createdAt, name);
    const data = await Article_services.getPage(from, num, createdAt, name)|| data;
    console.log(data);
    res.send({code : true, message : "查询成功!", result : data });
})

Article_router.get('/fox', async (req, res) => {
    const data = await Article_services.getFox() || {};
    res.send({code : true, message : "查询成功!", result : data });
})

Article_router.get('/new', async (req, res) => {
    const data = await Article_services.getNew() || {};
    res.send({code : true, message : "查询成功!", result : data });
})

Article_router.get('/type', async (req, res) => {
    const data = await Article_services.getType() || {};
    res.send({code : true, message : "查询成功!", result : data });
})

Article_router.get('/date', async (req, res) => {
    const data = await Article_services.getDate() || {};
    res.send({code : true, message : "查询成功!", result : data });
})

Article_router.get('/detailed', async (req, res) => {
    const data = await Article_services.get_detailed({ id : req.query.Article_id, Admin_id : req.cookies.id}) 
    const file = await fs.promises.readFile(data.Article_url, 'utf-8')
    res.send(file)
})

Article_router.post('/add', async (req, res) =>{
    console.log(req.query);
})

module.exports = Article_router;