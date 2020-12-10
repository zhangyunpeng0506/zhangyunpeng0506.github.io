import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import learn from './modules/learn'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    learn
  }
})

export default store
