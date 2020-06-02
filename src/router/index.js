import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

//路由映射表
const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  { 
    path: '/home',
    component: () => import('@/pages/home/Home'),
    meta:{
      title: '首页'
    },
    beforeEnter(to,from,next){
      next()
    },
    afterEnter(to,from){}
  },{
    path:'*',
    component: ()=>import('@/components/error/404'),
    meta:{
      title:'ERROR'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//路由钩子
router.beforeEach((to,from,next)=>{
  document.title = to.matched[0].meta.title //显示根路径的title
  next()
})

router.afterEach((to,from)=>{})

export default router 