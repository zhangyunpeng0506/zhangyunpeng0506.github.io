
// 闭包：有权访问另一个函数作用域中变量的函数

// 深拷贝
export function deepClone(obj) {
  if (typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  const cloneObj = new obj.constructor()
  for (const key in obj) {
    cloneObj[key] = deepClone(obj[key])
  }
  return cloneObj
}

// 手动实现Promise
export class myPromise {
  constructor(fn) {
    this.status = 'pending'
  }

  then() {}

  catch() {}

  finally() {}

  all() {}

  race() {}
}

// 手动实现PromiseAll
export function promiseAll(promises) {
  const iterator = Symbol.iterator
  if (!promises[iterator]) return

  return new Promise((resolve, reject) => {
    const resolveArr = []
    const rejectArr = []
    for (let p of promises) {
      if (!(p instanceof Promise)) {
        p = Promise.resolve(p)
      }
      // promise是微任务
      p.then(res => {
        resolveArr.push(res)
      })
        .catch(err => {
          rejectArr.push(err)
        })
    }

    // setTimeout是宏任务
    setTimeout(() => {
      return rejectArr.length > 0 ? reject(rejectArr[0]) : resolve(resolveArr)
    }, 0)
  })
}

// 节流
/**
 * 注意事项：
 * 1.this指向
 * 2.参数传递
 * 3.是否立即执行
 */
export function throttle(fn, wait) {
  let timer = null
  return function(...args) {
    if (timer) {
      return
    } else {
      timer = setTimeout(() => {
        fn.call(this, ...args)
        timer = null
      }, wait)
    }
  }
}

// 防抖
export function debounce(fn, wait) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

// 单例模式：在一个类只能有一个实例，即使多次实例化该类，也只返回第一次实例化后的实例对象
// 1.直接通过字面量的的方式实例化一个对象，单例模式的体现
const timeTool = {
  name: '处理时间的工具库',
  getUTCDate() {}
}
// 2.使用立即执行函数和构造函数(惰性单例)
const timeTool2 = (function() {
  let _instance = null

  function Init() {
    return new Date()
  }

  return function() {
    if (!_instance) {
      _instance = new Init()
    }
    return _instance
  }
})()

const instance1 = timeTool2()
const instance2 = timeTool2()
console.log(instance1 === instance2) // true
