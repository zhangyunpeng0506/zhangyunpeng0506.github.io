import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

//路由映射表
const routes=[
  { path:'/home',component:()=>import('../components/Home') }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router 