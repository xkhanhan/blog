const express = require('express');// 导入 express 框架
const Admin_router = express.Router(); // 使用 express 路由
const multer = require('multer');
const path = require('path');


// 或则存入磁盘
const storage = multer.diskStorage({
    destination : (req, file, cb)=>{
        const imgPath = path.resolve(__dirname, '../assets/image');
        cb(null, imgPath)
    },
    filename : (req, file, cb) => {
        const filename =  +new Date()+'-' +file.originalname;
      
        cb(null, filename);
    }
})
const upload = multer({ storage });

Admin_router.post('/', upload.single('image') ,(req, res, next) => {
    const url = 'http://localhost:8080/assets/image/' + req.file.filename;
    res.send(url)
})

module.exports = Admin_router;