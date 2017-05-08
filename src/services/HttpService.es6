import Vue from 'vue'

import { ERROR } from 'xStore/xType.es6'
import { store } from 'xStore/xStore.es6'
import I18nService from 'services/I18nService.es6'

export default {
    
    init ($) {
        let ajax = $.ajax
        //  修改ajax方法的默认实现
        $.ajax = function(options) {
            //  获取成功函数
            let success = options.success;
            //  对用户配置的success方法进行代理
            function ns() {
                let args = arguments,
                    datas = args[0]
                //  对数据进行处理
                datas.status = 200
                /**
                var str = JSON.stringify(datas);
                var rstr = str.replace(/XXX电力局/g, 'XXX水利局');
                //  替换回调函数的数据参数
                args[0] = JSON.parse(rstr);
                **/
                //  这里需要判断用户传入的上下文，具体实现略
                return success.apply(this, args);
            }
            //  代理嵌入调用
            options.success = ns
            return ajax(options).fail(function(xhr, textStatus, error) {
                let status = xhr.status,
                    url = options.url,
                    text = I18nService.getMessage('commons.error.defaults')
                
                switch(status) {
                        
                    //  处理404错误
                    case 404:
                        text = I18nService.getMessage('commons.error.404', [url])
                        break;
                        
                    case 500:
                        text = I18nService.getMessage('commons.error.500', [url])
                        break;
                        
                    //  默认处理方式
                    default:
                        break
                }
                store.commit(ERROR, {
                    text
                })
            })
        }
    }
    
}