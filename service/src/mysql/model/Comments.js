/**
 * 评论表
 */
const sequelize = require('../db');
const DataTypes = require('sequelize');

const Comments = sequelize.define('Comments', {
    comment : {
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

Comments.hasOne(Comments, { foreignKey : 'Parent_id'})

module.exports = Comments;