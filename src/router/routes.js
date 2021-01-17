export default [
    {
        path: '*',
        component : () => import('@/layout/error.vue')
    },
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName : "index" */ '@/layout/index.vue'),
        redirect: 'index_main',
        children: [
            {   // 首页路由
                path: '/index_main',
                name: 'index_main',
                component: () => import( /* webpackChunkName : "index" */ '@/components/index_main.vue')
            },
            {   // 文章详情页
                path: '/detailed_article/:id',
                name: 'detailed_article',
                component: () => import('@/components/detailed_article.vue')
            },
            {  //我的主页
                path: '/myHomePage',
                name: 'myHomePage',
                component: () => import('@/layout/myHomePage.vue')
            },
        ]
    },
    { path: '/loading', name: 'loading', component: () => import('@/layout/loading.vue') },
    { path: '/login', name: 'login', component: () => import('@/layout/login.vue') },

];