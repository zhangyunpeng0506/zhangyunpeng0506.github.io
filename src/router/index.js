import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routers'
import { setTitle } from '@/utils/app'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  base: '',
  mode: 'history' // hash是#号
})

// 路由钩子
router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((to, from) => {
  setTitle(to)
})

export default router
