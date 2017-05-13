const prefix = 'searchForm.'

export default {
    
    /**
     *  转换查询参数
     */
    buildSearchForm (params={}) {
        let result = {}
        for(let prop in params) {
            result[prefix + prop] = params[prop]
        }
        return result
    }
    
}