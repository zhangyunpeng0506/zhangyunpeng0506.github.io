// 设置浏览器标题
export function setTitle(route) {
  window.document.title = route.meta.title
}

// 通过路由获取菜单列表
export function getMenusByRouter(routes) {
  const res = []
  routes.forEach(route => {
    if (route.meta) {
      if (route.meta.hideParent) {
        const arr = getMenusByRouter(route.children)
        res.push(...arr)
      } else {
        const obj = {
          path: route.path,
          title: route.meta.title || '',
          icon: route.meta.icon || ''
        }
        if (route.children) {
          obj.children = getMenusByRouter(route.children)
        }
        res.push(obj)
      }
    }
  })
  return res
}

// 判断路由是否存在
export function routeHasExit(list, route) {
  let res = false
  list.forEach(item => {
    if (item.name === route.name) {
      res = true
    }
  })
  return res
}
