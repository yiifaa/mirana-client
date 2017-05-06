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
    name: 'Home',
    component: sLayout,
    children: [
        {
            path: 'dashboard',
            //alias: '/'    
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: 'charts',
            name: 'Charts',
            component: Charts
        },
        {
            path: 'widgets',
            name: 'Widgets',
            component: Widgets
        },
        //  
        comps,
        icons
    ]
}


export default [apps, pages]