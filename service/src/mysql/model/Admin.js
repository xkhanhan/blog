/**
 * 系统管理员模型
 */

const sequelize = require('../db'); // 引入定义好的数据库连接
const { DataTypes } = require('sequelize');//引入类型定义文件

const Admin_info = require('./Admin_info');
const Article = require('./Article');

const Admin = sequelize.define('Admin', {
    Admin_name: {// 用户名
        type: DataTypes.STRING, // 字符串类型
        allowNull: false, // 不能为空
    },
    Admin_pass: {// 用户密码
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt : true, // 自动添加创建时间
    updatedAt : true, // 自动添加修改时间
    paranoid : true, // 自动添加删除时间
    freezeTableName : true, // 表名与模型名保持一致
    underscored: true
});

/**
 * 创建表关系
 */
Admin.hasOne(Admin_info, { foreignKey : "Admin_id"}); // 一个用户只对应一个信息
Admin.hasMany(Article, { foreignKey : "Admin_id"}); // 一个用户有多篇文章


module.exports = Admin;