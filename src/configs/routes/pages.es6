// Views - Pages
import Page404 from '@/views/pages/Page404.vue'
import Page500 from '@/views/pages/Page500.vue'
import Login from '@/views/pages/Login.vue'
import Register from '@/views/pages/Register.vue'

export default {
    path: '/pages',
    redirect: '/pages/404',
    name: '通用页面',
    component: {
        render(c) {
            return c('router-view')
        }
    },
    children: [
        {
            path: '404',
            name: '无法找到',
            component: Page404
        },
        {
            path: '500',
            name: '内部错误',
            component: Page500
        },
        {
            path: 'login',
            name: '登陆页面',
            component: Login
        },
        {
            path: 'register',
            name: '注册页面',
            component: Register
        }
    ]
}