import api from '../api/api';
export default [
    {
        path: '*',
        component: () => import('@/layout/error.vue')
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
                meta: {
                    id: 2
                },
                component: () => import( /* webpackChunkName : "index" */ '@/components/index/index_main.vue')
            },
            {   // 文章详情页
                path: '/detailed_article/:id',
                name: 'detailed_article',
                component: () => import('@/components/detailed_article.vue')
            },
            {  //分类
                path: '/classification',
                name: 'classification',
                component: () => import('@/components/classification/classification_main.vue')
            },
            {  //归档
                path: '/archive',
                name: 'archive',
                component: () => import('@/components/archive/archive_main.vue')
            },
            {
                path: '/my',
                name: 'my',
                component: () => import(/* webpackChunkName : "my" */ '@/components/my/my_index.vue'),
                redirect: { name: 'my_info' },
                children: [
                    {
                        path: 'my_info',
                        name: 'my_info',
                        components: { my: () => import(/* webpackChunkName : "my" */'@/components/my/my_info') },
                    },
                    {
                        path: 'article_list',
                        name: 'article_list',
                        components: { my: () => import('@/components/my/article_list') }
                    },

                ],
                // 导航守卫
                beforeEnter: (to, form, next) => {
                    api.Admin.get().then(data => {
                        if (data.code) {
                            next()
                        } else {
                            next({ name: 'login' })
                        }
                    })
                },
            },
            {  //留言
                path: '/leaveMessage',
                name: 'leaveMessage',
                component: () => import('@/components/leaveMessage.vue')
            }, {
                path: '/upload_article',
                name: 'upload_article',
                component: () => import('@/components/index/upload_article.vue')
            }
        ]
    },
    { path: '/login', name: 'login', component: () => import('@/layout/login.vue') }
    
];