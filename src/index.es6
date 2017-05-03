import $ from 'jquery'
import Vue from 'vue'
import hello from './components/Hello.vue'
import template from './index.html'
import './index.less'
import menus from './menu.json'



function init() {
    menus.forEach(item => {
        item.active = false
    })
    
    new Vue({
        
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
                current: null
            }
        },
        
        components: {
            hello    
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
            
            selectMenu (menu) {
                if(this.current) {
                    this.current.active = false
                }
                menu.active = true
                this.current = menu
            }
        }
    })
}

init()
