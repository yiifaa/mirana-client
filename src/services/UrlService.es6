import { basePath } from 'configs/AppConfig.es6'

/**
 * @deprecated
 * 建议使用实例方法 this.$url(path)替代
 */
export default {
    
    /**
     *  获取准确的上下文地址
     */
    url (path) {
        return basePath + path
    }
    
}