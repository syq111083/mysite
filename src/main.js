import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  BootstrapVue,
  IconsPlugin,
  BLink
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Nav from './components/Nav.vue'
import axios from 'axios'

Vue.use(axios)
Vue.component('b-link', BLink)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('v-nav', Nav)

Vue.config.productionTip = false

Vue.prototype.baseURL = function () {
  return '47.104.98.233'
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
