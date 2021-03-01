const Admin = require('../mysql/model/Admin');// 导入模型

module.exports = async (option) =>{
    const ins = await Admin.findAll({
        where : option
    })
    return ins.length ? ins[0].toJSON() : null;
}
