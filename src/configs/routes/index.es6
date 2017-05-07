// layout
import sLayout from '@/sLayout.vue'

// Views
import Dashboard from '@/views/Dashboard.vue'
import Charts from '@/views/Charts.vue'
import Widgets from '@/views/Widgets.vue'

import comps from './components.es6'
import icons from './icons.es6'
import pages from './pages.es6'

const apps = {
    //  小屏配置
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: sLayout,
    children: [
        {
            path: 'dashboard',
            icon: 'icon-speedometer icon',
            //alias: '/'    
            name: '仪表盘',
            component: Dashboard,
            news: true
        },
        comps,
        icons,        
        {
            path: 'charts',
            icon: 'fa fa-area-chart',
            name: '图表',
            component: Charts
        },
        {
            path: 'widgets',
            icon: 'fa fa-cogs',
            name: '小组件',
            component: Widgets
        },
       
    ]
}

const routes = [apps, pages]
//  从路由中提取菜单信息
let parse = function(options) {
    let menus = [],
        clone = (item, parent) => {
            let {name, path, news, icon, children} = item,
                result = { name, path, news, icon }
            //  添加层次关系
            if(parent && parent.path) {
                result.path = parent.path + '/' + path
            }
            //  添加路由嵌套
            if(!!result.path && result.path.indexOf('/') != 0){
                result.path = '/' + result.path   
            }
            if(children && children.length > 0) {
                let childs = []
                children.forEach( child => {
                    childs.push(clone(child, result))
                })
                result.children = childs
            }
            return result
        }
    
    //  先添加小屏菜单
    options.forEach((app) => {
        menus.push(clone(app))
    })
    return menus
}

let menus = parse(apps.children)
//  导出路由与菜单
export {
        routes,
        menus
}


//export default [apps, pages]