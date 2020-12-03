import $http from '@/http'
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
    userId: getUser()
  },
  mutations: {
    SET_USER_NAME(state, userName) {
      state.userName = userName
      setUserName(userName)
    },
    SET_USER_ID(state, userId) {
      state.userId = userId
      setUser(userId)
    }
  },
  actions: {
    login({ commit }, { userName, password }) {
      return new Promise((resolve, reject) => {
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
