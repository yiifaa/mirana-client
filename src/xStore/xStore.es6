import Vuex from 'vuex'
import Vue from 'vue'
import { MESSAGE } from './xType.es6'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        //  提示信息
        /**
         * 格式如下：
         * {
         *   status: 0   //  提示信息状态，如成功、危险、信息、警告灯
         *    text: ""
         *  }
         */
        message: {
            status: 'info',
            text: '',
            duration: 5000
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
                duration = 5000
           }
           state.message.status = status;
           state.message.text = text;
            /**
           state.message.unshift({
               status,
               text,
               //time,
               duration
           })
           **/
           /**
            // 确定操作方式
            if(action === 'remove') {
                for(let i=0; i<state.message.length; i++) {
                    if(state.message[i] == payload) {
                        break
                    }
                }
                state.message.splice(i, 1)
            } else {
               if(duration !== 0) {
                    duration = 5000
               }
               state.message.unshift({
                   status,
                   text,
                   time,
                   duration
               }) 
            }
            **/
            
        }
    }
})
export { store }