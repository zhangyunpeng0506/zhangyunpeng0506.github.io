import Main from '@/components/main'

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      hide: true
    },
    component: () => import ('@/pages/login')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home', // 重定向
    component: Main,
    meta: {
      hideParent: true
    },
    children: [{
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
        affix: true,
        icon: 'el-icon-s-home'
      },
      component: () => import('@/pages/home')
    }]
  },
  {
    path: '/learn',
    name: 'learn',
    meta: {
      title: '学习笔记',
      icon: 'el-icon-notebook-1'
    },
    component: Main,
    children: [
      {
        path: '/es6',
        name: 'es6',
        meta: {
          title: 'es6',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/es6_')
      },
      {
        path: '/git',
        name: 'git',
        meta: {
          title: 'git',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/git_')
      },
      {
        path: '/less',
        name: 'less',
        meta: {
          title: 'less',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/less_')
      },
      {
        path: '/scss',
        name: 'scss',
        meta: {
          title: 'scss',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/scss_')
      },
      {
        path: '/regexp',
        name: 'regexp',
        meta: {
          title: 'regexp',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/regexp_')
      },
      {
        path: '/typescript',
        name: 'typescript',
        meta: {
          title: 'typescript',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/typescript_')
      },
      {
        path: '/vue',
        name: 'vue',
        meta: {
          title: 'vue',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/vue_')
      },
      {
        path: '/webpack',
        name: 'webpack',
        meta: {
          title: 'webpack',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/learn/webpack_')
      }
    ]
  },
  {
    path: '/questions',
    name: 'questions',
    meta: {
      title: '问题归纳',
      icon: 'el-icon-question'
    },
    component: Main,
    children: [
      {
        path: '/q_browser',
        name: 'q_browser',
        meta: {
          title: 'browser',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/questions/browser_')
      },
      {
        path: '/q_css',
        name: 'q_css',
        meta: {
          title: 'css',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/questions/css_')
      },
      {
        path: '/q_html',
        name: 'q_html',
        meta: {
          title: 'html',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/questions/html_')
      },
      {
        path: '/q_js',
        name: 'q_js',
        meta: {
          title: 'js',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/questions/js_')
      },
      {
        path: '/q_vue',
        name: 'q_vue',
        meta: {
          title: 'vue',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/questions/vue_')
      }
    ]
  },
  {
    path: '/personal',
    name: 'personal',
    meta: {
      title: '个人中心',
      icon: 'el-icon-s-custom'
    },
    component: Main,
    children: [
      {
        path: '/profile',
        name: 'profile',
        meta: {
          title: '个人信息',
          icon: 'el-icon-help'
        },
        component: () => import('@/pages/personal/profile')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/components/error/404')
  }
]
