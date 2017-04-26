import $ from 'jquery'
import Vue from 'vue'
import hello from './components/Hello.vue'
let template = `
                <div>
                    <hello></hello>
                </div>
                `
function init() {
    //$('body').html('Hello, World!')
    new Vue({
        el: '#appRoot',
        template,
        components: {
            hello    
        },
        data: {
            message: 'Hello, World!'
        }
    })
}

init()
