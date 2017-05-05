import Vuex from 'vuex'
import Vue from 'vue'
import { MESSAGE } from './xType.es6'
import UuidService from 'services/UuidService.es6'

Vue.use(Vuex)
const DURATION = 5000
const store = new Vuex.Store({
    state: {
        //  提示信息
        /**
         * 格式如下：
         * {
         *   status: 0   //  提示信息状态，如成功、危险、信息、警告灯
         *    text: ""
         *  }
         * status: 'info',
            text: '提示信息',
            duration: 5000,
            show: true
         */
        message: {
            status: 'info',
            text: '提示信息',
            duration: DURATION,
            show: true,
            id: '-1'
        }
    },
    
    mutations: {
        
        /**
         *  获取变更的提示信息
         */
        [MESSAGE] (state, payload) {
           let {status, text, duration} = payload
                //time = Date.now().valueOf()
           if(duration !== 0) {
                duration = DURATION
           }
           state.message.status = status;
           state.message.text = text;
           state.message.show = true
           state.message.duration = duration
           state.message.id = UuidService.uuid()
        }
    }
})
export { store }