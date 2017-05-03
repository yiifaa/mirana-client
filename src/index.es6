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
                //  是否全屏
                full: true,
                //  是否收起菜单
                toggled: false,
                menus,
                current: null,
                //  个人信息下拉菜单
                opened: false,
                //  当前视图
                currentView: 'index'
            }
        },
               
        computed: {
            /**
             *  容器样式
             * 
             */
            contClass () {
                return this.full? 'container-fluid' : 'container'
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
            }
        }
    })
}) ()
