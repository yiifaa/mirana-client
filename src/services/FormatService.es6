import moment from 'moment'

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
    return moment(val).format('YYYY-MM-DD hh:mm:ss')
} 

export {
    formatBool,
        
    dateTimeFormat
}