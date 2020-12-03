import users from './data/users.json'

export function login(req) {
  const userName = JSON.parse(req.body).userName
  const password = JSON.parse(req.body).password
  const userInfo = users
    .find(user =>
      user.userName === userName &&
      user.password === password)
  if (userInfo) {
    return {
      success: true,
      data: {
        userName: userInfo.userName,
        userId: userInfo.id
      },
      msg: '登录成功'
    }
  } else {
    return {
      success: false,
      msg: `用户名或密码不正确`
    }
  }
}

export function register(userName, password) {
  const userInfo = users
    .find(user =>
      user.userName === userName)
  if (userInfo) {
    return {
      success: false,
      msg: `用户已存在`
    }
  } else {
    // 暂时未找到前端将数据写入json文件的方法
  }
}
