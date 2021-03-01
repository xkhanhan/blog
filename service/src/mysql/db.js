const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('blog', 'root' ,'1234567', {
    host : "localhost", // 端口
    dialect : 'mysql', // 数据库类型
    logging : true, // 是否记录日志
})
// 导出
module.exports = sequelize;


