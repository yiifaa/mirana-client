import Vue from 'vue'
import _ from 'lodash'
import { store } from 'xStore/xStore.es6'
import { MESSAGE } from 'xStore/xType.es6'
import I18nService from 'services/I18nService.es6'
import RouteService from 'services/RouteService.es6'
import { alert } from 'components/vue-strap'
import HtmlPlugin from 'plugins/HtmlPlugin.es6'

import template from './index.html'
import './index.less'


//console.log(MESSAGE)
//  匿名初始化
(function() {
    let i18n = I18nService.init(),
        {menus, router} = RouteService.init()
    
    Vue.use(HtmlPlugin)
    
    new Vue({
        
        el: '#app-root',
        
        i18n,
        
        router,
        
        store,
        
        template,      
        
        data () {
            return {
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
                opened: false,
                
                show: true,
                
                messageQueue: []
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
            },
            
            /**
              * 返回的消息
              */
            message () {
                return this.$store.state.message
            }
        },
        
        watch: {
            //  必须通过深度监控，才能检测到它的变化，但它的值始终未变
            message : {
                handler: function(val) { 
                   this.messageQueue.push(_.clone(this.message, true))                   
                },
                deep: true
            }
        },
        
        components: {
            alert
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
            },
            
            remove (ms) {
                let index = _.indexOf(this.messageQueue, ms)
                if(index > -1) {
                    //  销毁组件
                    ms.show = false
                    this.messageQueue.splice(index, 1)
                }
            }
        }
    })
}) ()
