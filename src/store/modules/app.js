import $http from '@/http'
import routes from '@/router/routers'
import config from '@/config'
import { routeHasExit, getMenusByRouter } from '@/utils/app'

const app = {
  state: {
    version: 'v1.0.0',
    gitHub: 'https://github.com/zhangyunpeng0506/zhangyunpeng0506.github.io',
    baseUrl: '',
    menus: [],
    tagList: [],
    activeTag: ''
  },
  mutations: {
    SET_MENUS(state, menus) {
      state.menus = menus
    },
    SET_ACTIVE_TAG(state, route) {
      state.activeTag = route
    },
    ADD_TAG(state, route) {
      if (!routeHasExit(state.tagList, route)) {
        state.tagList.push(route)
      }
      if (!routeHasExit(state.tagList, { name: 'home' })) {
        state.tagList.unshift({
          path: '/home',
          name: 'home',
          meta: {
            title: '首页',
            affix: true,
            icon: 'el-icon-s-home'
          }
        })
      }
    },
    CLOSE_TAG(state, route) {
      const index = state.tagList.findIndex(item => item.name === route.name)
      if (index > -1) {
        state.tagList.splice(index, 1)
      }
    }
  },
  actions: {
    getMenus({ commit }) {
      if (config.useDBMenu) {
        $http.get('get_menus').then(res => {
          if (res.success) {
            commit('SET_MENUS', res.data)
          }
        })
      } else {
        commit('SET_MENUS', getMenusByRouter(routes))
      }
    }
  }
}

export default app
