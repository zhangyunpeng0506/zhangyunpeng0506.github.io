import $http from '@/http'
import Cookies from 'js-cookie'

const app = {
  state: {
    version: 'v1.0.0',
    baseUrl: '',
    menus: []
  },
  mutations: {
    set_menus(state, menus) {
      state.menus = menus
      Cookies.set('menus', menus)
    }
  },
  actions: {
    getMenus({ commit }) {
      if (JSON.parse(Cookies.get('menus')).length > 0) {
        commit('set_menus', JSON.parse(Cookies.get('menus')))
      } else {
        $http.get('get_menus', {}).then(res => {
          if (res.success) {
            commit('set_menus', res.data)
          }
        })
      }
    }
  }
}

export default app
