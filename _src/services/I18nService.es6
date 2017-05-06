import Vue from 'vue'
import VueI18n from 'vue-i18n'
import commons from './i18n/commons.es6'

//  注册国际化文件
const messages = {
    zh: {
        commons: commons.zh
    }    
}

//  启动国际化服务，勿修改
Vue.use(VueI18n)
const I18nService = {
    init () {
        const i18n = new VueI18n({
            locale: 'zh',
            messages
        })
        return i18n
    }
}

export default I18nService