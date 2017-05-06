import Vue from 'vue'
import Router from 'vue-router'

import routes from 'configs/routes/index.es6'

Vue.use(Router)
export default {
    
    init () {
        let router = new Router({
              //    适用于在线
              mode: 'hash',
              linkActiveClass: 'open active',
              scrollBehavior: () => ({ y: 0 }),
              routes
        })
        return router
    }
    
}

