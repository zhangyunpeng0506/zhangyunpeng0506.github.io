import store from '@/store'

const TOKEN_KEY = 'token'

// 设置token信息
export function setToken() {
  const token = ''
  const user = store.state.userInfo.userName
  const date = new Date().getTime()
  localStorage.setItem(TOKEN_KEY, token)
}

// 获取token信息
export function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

// 校验token
export function checkToken() {
  // 没有接后台，因此前端对token制定校验
  const token = getToken()
  if (token) {
    // token
    return true
  } else {
    return false
  }
}
