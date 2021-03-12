import axios from './intercept';

export default {
    /**
     * 用户接口 api
     */
    Admin: {
        // 获取用户信息
        get: () => {
            return axios.get('Admin')
        },
        // 修改用户信息
        update:(value)=>{
            return axios.post('Admin/update', {
                ...value
            })
        }
    },
    // 登录方法
    login(value) {
        return axios.post('login', {
            ...value,
        })
    },

    /**
     * 文章api
     */
    Article: {
        // 获取文章信息
        get: (from, num, createdAt = null, name = null) => {
            return axios.get('Article', {
                params: {
                    from,
                    num,
                    createdAt,
                    name
                }
            })
        },
        // 根据文章id获取文章详细信息
        get_detailed :(id)=>{
            return axios.get('Article/detailed', {
                params :{
                    Article_id : id
                }
            })
        },

        // 
        getFox : () => {
            return axios.get('Article/fox')
        },

        //
        getNew : ()=>{
            return axios.get('Article/new')
        },
        getType : () => {
            return axios.get('Article/type');
        },
        getDate: () => {
            return axios.get('Article/date');
        },
        
    },
    loadImg:(formDate) => {
        return axios.post('loadImg', formDate)
    }
}