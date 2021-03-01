/**
 * 其他用户模型
 */
const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Comments = require('./Comments');

const User = sequelize.define('User', {
    name : { // 评论人姓名
        type : DataTypes.STRING,
        allowNull : false
    },
    email : { // 评论人邮箱
        type : DataTypes.STRING,
        allowNull : false
    },
},{
    createdAt : true, // 自动添加创建时间
    updatedAt : true, // 自动添加修改时间
    paranoid : true, // 自动添加删除时间
    freezeTableName : true, // 表名与模型名保持一致
    underscored: true
})

User.hasMany(Comments, { foreignKey : 'User_id', as : "comments"})

module.exports = User;