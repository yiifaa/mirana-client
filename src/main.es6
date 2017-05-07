import Vue from 'vue'
import template from './main.html'
import 'styles/index.scss'
import HtmlPlugin from 'plugins/HtmlPlugin.es6'

import I18nService from 'services/I18nService.es6'
import RouteService from 'services/RouteService.es6'
import { store } from 'xStore/xStore.es6'
import { MESSAGE, THEME } from 'xStore/xType.es6'

import AppHeader from 'components/Header.vue'
import Sidebar from 'components/Sidebar.vue'
import AppAside from 'components/Aside.vue'
import AppFooter from 'components/Footer.vue'
import Breadcrumb from 'components/Breadcrumb.vue'

let i18n = I18nService.init(),
    router = RouteService.init()

//  创建根组件
let AppRoot = Vue.extend({
    
    name: 'appRoot',
    
    template,
    
    i18n,
    
    store,
    
    router,
    
    
    
    computed : {
        
        
    },
    
    components: {
            AppHeader,
            Sidebar,
            AppAside,
            AppFooter,
            Breadcrumb
        },
    
    
    created () {
        //  安装国际化指令与组件
        I18nService.install(this)
    }
    
})

new AppRoot().$mount('#app')

