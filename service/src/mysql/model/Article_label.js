const sequelize = require('../db');
const { DataTypes } = require('sequelize');


module.exports = sequelize.define('Article_label', {
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    }
},{
    createdAt : true, // 自动添加创建时间
    updatedAt : true, // 自动添加修改时间
    paranoid : true, // 自动添加删除时间
    freezeTableName : true, // 表名与模型名保持一致
    underscored: true
})