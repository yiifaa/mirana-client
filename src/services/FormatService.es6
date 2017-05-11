import moment from 'moment'
import { dateTime } from 'configs/AppConfig.es6'

/**
  * 格式化boolean值
  */
let formatBool = function(val) {
    if(val === true) {
        return "是"
    }
    return "否"
}

/**
 *
 *
 */
let dateTimeFormat = function(val) {
    return moment(val).format(dateTime)
} 

export {
    formatBool,
        
    dateTimeFormat
}