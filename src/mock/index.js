import Mock from 'mockjs'
import { getMenus } from './app'

// 配置请求延时
Mock.setup({
  timeout: 200
})

Mock.mock('get_menus', getMenus)
