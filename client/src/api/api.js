import axios from './intercept';

export default {
    Admin: {
        get: () => {
            return axios.get('Admin')
        },
        update:(value)=>{
            return axios.post('Admin/update', {
                ...value
            })
        }
    },
    login(value) {
        return axios.post('login', {
            ...value,
        })
    },
    Article: {
        get: (from, num, createdAt = null, name = null) => {
            console.log(createdAt);
            return axios.get('Article', {
                params: {
                    from,
                    num,
                    createdAt,
                    name
                }
            })
        },
        get_detailed :(id)=>{
            return axios.get('Article/detailed', {
                params :{
                    Article_id : id
                }
            })
        },
        getFox : () => {
            return axios.get('Article/fox')
        },
        getNew : ()=>{
            return axios.get('Article/new')
        },
        getType : () => {
            return axios.get('Article/type');
        },

        getDate: () => {
            return axios.get('Article/date');
        }
    },
    loadImg:(formDate) => {
        return axios.post('loadImg', formDate)
    }
}