import Vue from 'vue'
import VueRouter from 'vue-router'
import menus from './menu/total.json'
//  引入组件
import hello from '../components/Hello.vue'


Vue.use(VueRouter)
const RouteService = {
    
    init () {
        //  处理菜单对象
        menus.forEach(item => {
            item.active = false
        })
        
        //  注册组件与地址映射
        const routes = [{
            path: '/index', component: hello
        }]
        
        //  注册路由器
        const router = new VueRouter({
            routes
        })
        
        //  返回路由对象
        return {
            router,
            menus
        }
    }
}
//
export default RouteService