import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import Router from './router'
import './assets/newcss/base.css'
import './assets/newcss/index.css'

Vue.use(VueAxios, Axios)

Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')
