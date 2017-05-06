export default {
    
    /**
     *
     * 产生UUID字符串
     */
    uuid () {
        let random = (Math.random() + '').substr(-4),
            time = (Date.now().valueOf() + '').substr(-4)
        return 'STI_UUID_' +  random + '_' + time
    }
    
}