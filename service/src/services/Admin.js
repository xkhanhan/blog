const Admin = require('../mysql/model/Admin');// 导入模型
const Admin_info = require('../mysql/model/Admin_info');

const validate = require('validate.js'); // 导入验证方法
const rules = require('rules');


// 导出接口
module.exports = {
    /**
     * 添加方法
     * @param {Object} option 
     */
    async add(option) {
        // 创建管理员用户名密码
        const ins = await Admin.create(option, {
            raw : true,
            include : [ // 进行联表插入
                { model : Admin_info },
                { model : Admin_hob }
            ],
        });

        return ins.toJSON();
    },

    /**
     * 根据id删除一个管理员
     * @param { Number } id 
     */
    async delete(id) {
        const Admin_ins = await Admin.findByPk(id);// 查询该管理员

        const Admin_info_ins = await Admin_info.findByPk(id);
        const Admin_hob_ins = await Admin_hob.findByPk(id);

        if (!Admin_ins && Admin_info_ins && Admin_hob_ins) return false; // 管理员不存在时

        await Admin_ins.destroy(); // 删除
        await Admin_info_ins.destroy();
        await Admin_hob_ins.destroy();

        return true;
    },

    /**
     * 根据 管理员 id 修改管理员的密码
     * @param { Number } id 
     * @param { Object } option 需要修改的内容 
     */
    async set(id, Admin_pass) {
        const ins = await Admin.findByPk(id);// 查询该管理员
        if (!ins) return false; // 当管理员不存在时

        const rule = { Admin_pass: rules.Admin.Admin_pass };

        await validate.async({ Admin_pass }, rule); // 经行数据验证

        ins.Admin_pass = Admin_pass; // 修改密码
        await ins.save(); // 提交信息

        return true
    },
    async update_info(option, value){
        let info_ins = await Admin_info.update(value.Admin_info, {
            where : {
                id :option.id
            }
        });

        return true
    },

    async get(option){
        const result = await Admin.findAll({
            where : option,
            attributes: { exclude: ['deletedAt', 'updatedAt', 'Admin_pass'] }, // 不查询修改时间、删除时间和密码
            include: [ // 联表查询 信息表，爱好表
                {
                    model: Admin_info,
                    attributes: { exclude: ['createdAt', 'deletedAt', 'updatedAt', 'id', 'Admin_id'] }, //不查询修改时间、删除时间、信息id、用户id
                },
               
            ]
        })
        return result[0] ;
    }
}