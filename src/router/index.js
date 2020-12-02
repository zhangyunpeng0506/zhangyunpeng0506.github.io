import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routers'
import store from '@/store'
import { setTitle, getMenus } from '@/utils/app'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  base: '',
  mode: 'history' // hash是#号
})

// 路由钩子
router.beforeEach((to, from, next) => {
  if (store.state.app.menus.length === 0) {
    // store.dispatch('getMenus')
    store.commit('set_menus', getMenus(routes))
  }
  next()
})

router.afterEach((to, from) => {
  setTitle(to)
})

export default router
