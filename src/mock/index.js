import Mock from 'mockjs'
import { login, register } from './user'
import { getMenus } from './app'

// 配置请求延时
Mock.setup({
  timeout: 500
})

Mock.mock('login', login)
Mock.mock('register', register)
Mock.mock('get_menus', getMenus)
