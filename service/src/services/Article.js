const Article_label = require('../mysql/model/Article_label'); // 文章标签表
const Article = require('../mysql/model/Article'); // 文章表
const Comments = require('../mysql/model/Comments');
const User = require('../mysql/model/User');
const Admin_services = require('./Admin');

module.exports = { // 导出文章服务层方法
    /**
     * 添加文章
     * @param {Object} option 
     */
    async add(option) {
        Article.create(option, {
            include: [
                { model: Article_label }, // 文章标签表
            ]
        })
    },

    /**
     * 删除文章
     * @param {*} Admin_id 
     * @param {*} Article_id 
     */
    async delete(Admin_id, Article_id) {
        const Admin_ins = await Admin_services(Admin_id);// 查询该用户是否存在
        if (!Admin_ins) {
            return false
        } else {
            const Article_ins = Article.findByPk(Article_id); // 查询需要删除的文章是否存在
            if (!Article_ins) {
                return false
            } else {
                Article.destroy(Article_id);
                return true;
            }
        }
    },

    /**
     * 修改文章
     * @param {*} Admin_id 管理员id
     * @param {*} Article_id 文章id
     * @param {*} option 需要修改的内容
     */
    async update(Admin_id, Article_id, option) {

    },

    /**
     * 获取文章的所有信息
     * 根据管理员id和文章id查询
     * @param {*} Admin_id  管理员id
     * @param {*} Article_id 文章id
     */
    async get(Admin_id, Article_id) {
        const ins = await Article.findAll({
            where: {
                id: Article_id,
                Admin_id: Admin_id,
            },
            include: [
                {
                    model: Article_label,
                    attributes: ['name'],
                    include: [{
                        model: User,
                    }]
                }, {
                    model: Comments,
                    attributes: ['comment']
                }
            ]
        })
        return ins
    },

    /**
     * 分页查询
     * @param {*} from 开始
     * @param {*} number 查询数量
     */
    async getPage(from = 0, number = 5, createdAt = {}, name = {}) {
        from = parseInt(from);
        number = parseInt(number);
        const {count, rows} = await Article.findAndCountAll({
            where : createdAt,
            offset: from,
            limit: number,
            distinct:true, // 防止出现笛卡尔积，保证总量准确性
            include: [
                {
                    model: Article_label,
                    attributes: ['name'],
                    where : name
                }
            ]
        })
        return {rows, count}
    },

    /**
     * 获取最火热的文章
     */
    async getFox(){
        const ins = await Article.findAll({
            offset : 0,
            limit : 5,
            order :[
                ['click_quantity', 'DESC']
            ]
        })
        return ins;
    },

    /**
     * 获取最新的文章
     */
    async getNew(){
        const ins = await Article.findAll({
            offset : 0,
            limit : 5,
            order :[
                ['createdAt', 'DESC']
            ]
        })
        return ins;
    },

    /**
     * 获取类型分组
     */
    async getType() {
        await Article_label.findAll({
            attributes : ['name'],
            group: 'name'
        })
        const count = await Article_label.count({
            attributes: ['name'],
            group: 'name',
        })

        return count
    },

    /**
     * 获取时间分组
     */
    async getDate() {
        await Article.findAll({
            attributes : ['year'],
            group: 'year'
        })
        const count = await Article.count({
            attributes: ['year'],
            group: 'year',
        })

        return count
    },

    async get_detailed(option){
        const ins = await Article.findAll({
            where :option,
            attributes : ['Article_url']
        });

        return ins[0].toJSON();
    }

}