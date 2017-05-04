import Vue from 'vue'
import I18nService from './services/I18nService.es6'
import RouteService from './services/RouteService.es6'

import template from './index.html'
import './index.less'

//  匿名初始化
(function() {
    let i18n = I18nService.init(),
        {menus, router} = RouteService.init()
    
    new Vue({
        
        router,
        
        i18n,
        
        el: '#app-root',
        
        template,      
        
        data () {
            return {
                message: 'Hello, World!',
                //  是否居中模式
                center: false,
                //  是否大屏模式
                full: false,
                //  是否收起菜单
                toggled: false,
                //  引入的菜单
                menus,
                //  当前选中的菜单项
                current: null,
                //  个人信息下拉菜单
                opened: false                
            }
        },
                   
        computed: {
            /**
             *  容器样式
             * 
             */
            contClass () {
                return this.center? 'container' : 'container-fluid'
            },
            
            /**
             * 菜单样式
             */
            menuClass () {
                return this.toggled? 'app-menu-collapse' : ''
            }
        },
        
        created () {
            this.selectMenu(this.menus[0])    
        },
        
        methods: {
            collapse () {
                this.toggled = !this.toggled;
            },
            
            /**
             *  选中菜单
             */
            selectMenu (menu) {
                if(this.current) {
                    this.current.active = false
                }
                menu.active = true
                this.current = menu
            },
            
            /**
             *  账户下拉菜单
             */
            toggleAccount () {
                this.opened = !this.opened;
            },
            
            toggleTheme () {
                this.full = !this.full;
            }
        }
    })
}) ()
