import Main from '@/components/main'

export default [
  {
    path: '/',
    name: '_home',
    redirect:'/home', //重定向
    component: Main,
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
        icon: ''
      },
      component: () => import('@/pages/home')
    }]
  },
  // {
  //   path: '/learn',
  //   name: 'learn',
  //   meta: {
  //     title: '学习笔记',
  //     icon: '',
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: '/es6',
  //       name: 'es6',
  //       meta: {
  //         title: 'ES6',
  //         icon: ''
  //       },
  //       component: () => import('')
  //     },
  //   ],
  // },
  // {
  //   path: '/questions',
  //   name: 'questions',
  //   meta: {
  //     title: '常见问题',
  //     icon: ''
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: '/browser',
  //       name: 'browser',
  //       meta: {
  //         title: '浏览器',
  //         icon: '',
  //       },
  //       component: () => import('')
  //     }
  //   ]
  // },
  {
    path:'*',
    component: ()=>import('@/components/error/404'),
    meta:{
      title:'ERROR'
    }
  }
]