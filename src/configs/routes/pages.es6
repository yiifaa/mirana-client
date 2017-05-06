// Views - Pages
import Page404 from '@/views/pages/Page404.vue'
import Page500 from '@/views/pages/Page500.vue'
import Login from '@/views/pages/Login.vue'
import Register from '@/views/pages/Register.vue'

export default {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
        render(c) {
            return c('router-view')
        }
    },
    children: [
        {
            path: '404',
            name: 'Page404',
            component: Page404
        },
        {
            path: '500',
            name: 'Page500',
            component: Page500
        },
        {
            path: 'login',
            name: 'Login',
            component: Login
        },
        {
            path: 'register',
            name: 'Register',
            component: Register
        }
    ]
}