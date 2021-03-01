/**
 * 定义用户文章模型
 */
const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const Article_label = require('./Article_label');
const Comments = require('./Comments');
const moment = require('moment')

const Article = sequelize.define('Article', {
    Article_title : { // 文章标题
        type : DataTypes.STRING,
        allowNull : false,
    },
    Article_url : {// 文章链接
        type : DataTypes.STRING,
        allowNull : false
    },
    Article_brief : { // 文章简略信息
        type : DataTypes.STRING,
        allowNull : false
    },
    click_quantity : { // 点击量
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue : 0
    },
    year:{
        type : DataTypes.STRING,
        allowNull : false,
        defaultValue : moment.utc().format('YY')
    },
    month : {
        type : DataTypes.STRING,
        allowNull : false,
        defaultValue : moment.utc().format('MM')
    },
    createdAt : {
        type : DataTypes.DATEONLY,
        allowNull : false,
        defaultValue : moment().utc().format('YY-MM-DD')
    }
}, {
    paranoid : true, // 自动添加删除时间
    freezeTableName : true, // 表名与模型名保持一致
    underscored: true
});

Article.hasMany(Article_label,{ foreignKey : "Article_id"}); // 一个文章有多个标签
Article.hasMany(Comments, {foreignKey : "Article_id"}); // 一个文章有多个评论

module.exports = Article;