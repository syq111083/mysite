import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: window.localStorage.getItem('token'),
    nickname: window.localStorage.getItem('nickname')
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
