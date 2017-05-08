import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'configs/i18n.es6'
import $ from 'jquery'


//  启动国际化服务，勿修改
Vue.use(VueI18n)
const locale = 'zh'

const I18nService = {
    
    init () {    
        //  初始化I18n
        const i18n = new VueI18n({
            locale,
            messages
        })
        return i18n
    },
    
    /**
     * 覆盖实现
     */
    getMessage (key) {
       
    },
    
    install(vm) {
        
        /**
         * 获取资源信息，格式针对于　{'sti.buttons' : ['args']}
         * @param key
         * @returns {String}
         */
        this.getMessage = function(key, args) {
            let k	= key
            if($.type(key) === 'object') {
                k = Object.keys(key)[0]
                args = key[k]
            }
            return vm.$t(k, args)
            //  return Vue.message(k, args)
        }
        //  本区域使用
        let getMessage = this.getMessage
          /**
         * 添加message指令，根据参数自动添加上下文指令
         */
        Vue.directive('message', {

            bind (el, binding) {
                let value = binding.value,
                    message = getMessage(value)
                $(el).text(message)
            }

        })
        
        /**
         * 安装placeholder指令
         */
        Vue.directive('placeholder', {

            bind (el, binding) {
                let value = binding.value,
                    message = getMessage(value)
                $(el).attr('placeholder', message)
            }

        })
        
        Vue.directive('title', {

            bind (el, binding) {
                let value = binding.value,
                    message = getMessage(value)
                $(el).attr('title', message)
            }

        })
        
        let template = '<span v-html="message"></span>'
        Vue.component('message', {

            template,

            props : {
                keys : {
                    type : String,
                    required : true
                }
            },
            
            /**
             * 需要改进
             */
            computed : {
                message () {
                    return getMessage(this.keys)
                }
            }
        })
        
    }
}

export default I18nService