export function setTitle(route) {
  window.document.title = route.meta.title
}

export function getMenus(routes) {
  const res = []
  routes.forEach(route => {
    if (route.meta) {
      if (route.meta.hideParent) {
        const arr = getMenus(route.children)
        console.log(arr)
        res.push(...arr)
      } else {
        const obj = {
          path: route.path,
          title: route.meta.title || '',
          icon: route.meta.icon || ''
        }
        if (route.children) {
          obj.children = getMenus(route.children)
        }
        res.push(obj)
      }
    }
  })
  return res
}
