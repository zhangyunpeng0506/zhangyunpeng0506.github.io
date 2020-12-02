import VueRouter from 'vue-router'
import Vue from 'vue'
import routes from './routers'
import store from '@/store'
import { setTitle } from '@/utils/app'
import { checkToken } from '@/utils/user'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes,
  base: '',
  mode: 'history' // hash是#号
})

const LOGININ_NAME = 'login'
const HOME_NAME = 'home'

// 路由钩子
router.beforeEach((to, from, next) => {
  const token = checkToken()
  if (!token && to.name === LOGININ_NAME) { // 未登录且跳转登录页
    next()
  } else if (!token && to.name !== LOGININ_NAME) { // 未登录且跳转不是登录页
    next({ name: 'login' })
  } else if (token && to.name === LOGININ_NAME) { // 已登录且跳转登录页
    next({ name: HOME_NAME })
  } else {
    store.commit('ADD_TAG', to)
    store.commit('SET_ACTIVE_TAG', to)
    next()
  }
})

router.afterEach((to, from) => {
  setTitle(to)
})

export default router
