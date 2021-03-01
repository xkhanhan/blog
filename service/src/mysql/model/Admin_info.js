/**
 * 管理员信息
 */
const sequelize = require('../db');
const { DataTypes } = require('sequelize');
const moment = require('moment');
const { set } = require('../db');

module.exports = sequelize.define('Admin_info', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : '用户' + moment.utc()
    },
    sex: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue : 1,
    },
    birthday: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        get() { // 对日期格式化
            const formats = ["YYYY-MM-DD","YYYY-M-D", "x"];
            let birthday = this.getDataValue('birthday');
                birthday = moment.utc(birthday).format("YYYY-MM-DD");

            return birthday;
        },
        set(value) {
            value = moment(value).utc().format('yyyy-MM-DD') ;
            this.setDataValue("birthday", value);
        }
    },
    qq: {
        type: DataTypes.INTEGER,
        allowNull: true,
        get() {
            const qq =  this.getDataValue('qq');
            return qq || '此人没有开通qq';
        }
    },
    e_mail: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '此人没有开通邮箱',
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue : '中国大陆'
    },
    ideal: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: '此人没有理想，是条咸鱼',
     
    },
    git: {
        type : DataTypes.STRING,
        allowNull : true,
        defaultValue: '此人没有git，不是好程序员'
       
    },
    signature : {
        type : DataTypes.STRING,
        allowNull : true,
        defaultValue: '此人没有签名，没点个性'
    }
},{
    createdAt : true, // 自动添加创建时间
    updatedAt : true, // 自动添加修改时间
    paranoid : true, // 自动添加删除时间
    freezeTableName : true, // 表名与模型名保持一致
    underscored: true
})