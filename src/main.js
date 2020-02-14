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
import store from './store'
import Detail from './components/ComicDetail.vue'

Vue.component('b-link', BLink)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component('v-nav', Nav)
Vue.component('v-detail', Detail)

Vue.config.productionTip = false

Vue.prototype.baseURL = function () {
  return 'http://47.104.98.233'
}

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
