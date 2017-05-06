import Vue from 'vue'
import App from './App.vue'
import router from './router/index.es6'
import 'styles/index.scss'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
