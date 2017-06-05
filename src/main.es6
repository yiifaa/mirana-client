import Vue from 'vue'
import $ from 'jquery'

import template from './main.html'

import HtmlPlugin from 'plugins/HtmlPlugin.es6'
import I18nService from 'services/I18nService.es6'
import RouteService from 'services/RouteService.es6'
import HttpService from 'services/HttpService.es6'
import UrlService from 'services/UrlService.es6'
import { basePath } from 'configs/AppConfig.es6'
import { store } from 'xStore/xStore.es6'
import { MESSAGE, THEME, LOGON } from 'xStore/xType.es6'


import _ from 'lodash'
import { alert, modal } from 'components/vue-strap'


let i18n = I18nService.init(),
    router = RouteService.init()

//  安装HTML组件
Vue.use(HtmlPlugin)
//  格式化Http服务
HttpService.init($)
//  创建根组件
let AppRoot = Vue.extend({
    
    name: 'appRoot',
    
    template,
    
    i18n,
    
    store,
    
    router,
    
    data () {

        return {
            //  显示消息
            messageQueue: [],
            
            modal: {
                show  : false,
                title : '',
                status: 'primary',
                comments: ''
            }
        }
    },
    
    
    computed : {
        
        /**
          * 返回的消息
          */
        message () {
            return this.$store.state.message
        },
        
        /**
         * 登陆状态
         */
        logon () {
            return this.$store.state.logon
        },
        
        /**
         *  对话框样式
         */
        modalClass () {
            return "modal-" + this.modal.status
        }
    },
    
    components: {
        alert,
        modal
    },
    
    watch: {
            //  必须通过深度监控，才能检测到它的变化，但它的值始终未变
            message : {
                handler: function(val) {
                    let message = _.clone(this.message, true)
                    this.messageQueue.push(message)                   
                },
                deep: true
            },
        
            logon: {
                handler (val) {
                    let state = val.state
                    if(state === false) {
                        this.$router.push('/pages/login')
                    } else {
                        this.$router.push('/dashboard')
                    }
                },
                deep: true
            }
    },
    
    
    created () {
        //  安装国际化指令与组件
        I18nService.install(this)
        //  安装实例化方法
        this.installConfirm()
        this.installUrl()
        //  确定登陆状况
        $.getJSON(UrlService.url('app/home'), (datas) => {
            //  如果直接登陆成功(已登陆用户，Session处于有效期)，则更新用户数据
            if(datas.logon) {
                this.$store.commit(LOGON, {
                    state: datas.logon,
                    timestamp: datas.timestamp,
                    username: datas.username
                })
            }
        })
    },
    
    methods : {
        
        /* 删除消息 */
        remove (ms) {
            let index = _.indexOf(this.messageQueue, ms)
            if(index > -1) {
                //  销毁组件
                ms.show = false
                this.messageQueue.splice(index, 1)
            }
        },
        
        ok () {
            this.$emit('modal.ok')
            this.modal.show = false
        },
        
        cancel () {
            this.$emit('modal.cancel')
        },
        
        confirm (payload) {
            this.modal.title = payload.title || I18nService.getMessage('commons.confirm.title')
            this.modal.status = payload.status || 'warning'
            this.modal.comments = payload.comments || I18nService.getMessage('commons.confirm.comments')
            //  显示对话框
            this.modal.show = true
            return new Promise((resolve, reject) => {                
                //  等待事件发生
                this.$on('modal.ok', () => {
                    resolve(true)
                })
                
                this.$on('modal.cancel', () => {
                    reject(false)
                })
            })
        },
        
        /**
         *  安装确认框
         */
        installConfirm () {
            //  添加实例方法
            Vue.prototype.$confirm = (payload = {
                        title : I18nService.getMessage('commons.confirm.title'),
                        status : 'warning',
                        comments : I18nService.getMessage('commons.confirm.comments')
                     }) => {
                this.modal.title = payload.title
                this.modal.status = payload.status
                this.modal.comments = payload.comments
                //  显示对话框
                this.modal.show = true
                return new Promise((resolve, reject) => {                
                    //  等待事件发生
                    this.$on('modal.ok', () => {
                        resolve(true)
                    })

                    this.$on('modal.cancel', () => {
                        reject(false)
                    })
                })
            }
        },
        
        /**
         * 安装路径访问服务
         */
        installUrl () {
            Vue.prototype.$url = path => {
                return basePath + path
            }
            //  判断是否是编辑模式
            Vue.prototype.$id = id => {
                return id != '_'
            }
        }
    }
    
})

new AppRoot().$mount('#app')

