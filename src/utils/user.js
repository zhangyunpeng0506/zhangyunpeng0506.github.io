import store from '@/store'
import config from '@/config'

const sha256 = require('js-sha256').sha256

// 设置用户名
export function setUserName(userName) {
  localStorage.setItem('userName', userName)
}

// 获取用户名
export function getUserName() {
  return localStorage.getItem('userName')
}

// 设置用户ID
export function setUser(id) {
  localStorage.setItem('userId', id)
}

// 获取用户ID
export function getUser() {
  return localStorage.getItem('userId')
}

// 设置token信息
export function setToken(token) {
  if (token === undefined) {
    const userId = getUser()
    const date = new Date().getTime() // 13位
    const psdKey = sha256(date + '')
    const sub1 = psdKey.substr(2, 7)// 7
    const sub2 = psdKey.substr(15, 7)// 7
    token = sub1 + date + sub2 + userId
  }
  localStorage.setItem('token', token)
}

// 获取token信息
export function getToken() {
  return localStorage.getItem('token')
}

// 校验token
export function checkToken() {
  // 没有接后台，因此前端对token制定校验
  const token = getToken()
  if (token) {
    const date = token.substr(7, 13)
    const userId = token.substr(27)
    const dateDiff = new Date().getTime() - date
    if (dateDiff < config.timeout * 60 * 1000 && userId === store.state.user.userId) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
