import axios from 'axios';

/**
 * 请求拦截器
 */
axios.interceptors.request.use(req => {
    req.baseURL = 'http://localhost:8080';
    req.withCredentials = true;
    return req
})

/**
 * 响应拦截器
 */
axios.interceptors.response.use(res => {
    res.withCredentials = true
    res = res.data;
    return res;
})

export default axios;