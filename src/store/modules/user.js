import $http from '@/http'
import config from '@/config'
import {
  setToken,
  setUser,
  setUserName,
  getUser,
  getUserName
} from '@/utils/user'

export default {
  state: {
    userName: getUserName(),
    userId: getUser(),
    ip: '',
    nation: '',
    province: '',
    city: '',
    mapKey: 'PZZBZ-ENNRP-QAAD5-V7DPP-JNYEK-7FFKA' // 腾讯地图key
  },
  mutations: {
    SET_USER_NAME(state, userName) {
      state.userName = userName
      setUserName(userName)
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
      setUser(userId)
    },
    SET_IP(state, ip) {
      state.ip = ip
    },
    SET_NATION(state, nation) {
      state.nation = nation
    },
    SET_PROVINCE(state, province) {
      state.province = province
    },
    SET_CITY(state, city) {
      state.city = city
    }
  },
  actions: {
    login({ commit, dispatch }, { userName, password }) {
      return new Promise((resolve, reject) => {
        if (!config.useMock && process.env.NODE_ENV !== 'production') {
          commit('SET_USER_NAME', 'admin')
          commit('SET_USER_ID', '1')
          dispatch('getLocation')
          setToken()
          resolve()
        } else {
          $http.postByBody('login', {
            userName,
            password
          }).then(res => {
            if (res.success) {
              commit('SET_USER_NAME', res.data.userName)
              commit('SET_USER_ID', res.data.userId)
              setToken()
              resolve()
            } else {
              reject(res.msg)
            }
          })
        }
      })
    },
    getLocation({ commit, state }) {
      return new Promise((resolve, reject) => {
        $http.get('https://apis.map.qq.com/ws/location/v1/ip', {
          key: state.mapKey
        }).then(res => {
          const location = res.result.ad_info
          commit('SET_IP', res.result.ip)
          commit('SET_NATION', location.nation)
          commit('SET_PROVINCE', location.province)
          commit('SET_CITY', location.city)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    register({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
        $http.get('register', {
          userName,
          password
        }).then(res => {
          if (res.success) {
            resolve()
          } else {
            reject(res.msg)
          }
        })
      })
    },
    logOut({ commit }) {
      commit('SET_USER_NAME', '')
      commit('SET_USER_ID', '')
      setToken('')
    }
  }
}
