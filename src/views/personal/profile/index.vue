<template>
  <div>个人信息</div>
</template>

<script>
export default {
  data() {
    return {
      analyse: [
        `为什么看过查过当时也记住的面经再次遇到的时候又觉得有印象但是答不全————
        1.问题虽然是类似的，但是查的时候答案大体上是一样的，但是描述可能有差别，这样就导致，可能第二次去加深印象的时候，查到的
          内容和之前印象里的描述上有出入，不易于记忆。
        2.没有经常复习，看到自己已经看过的问题，觉得熟悉，但是并没有在自己脑子里过一遍具体这个问题是怎么表述，然后就匆匆略过了，
          这样就造成了虽然对问题很熟悉，但是答案却组织不起来`
      ],
      plan: [
        `1.每天练20道题目（新题+错题），弄清楚弄懂吃透
         2.复习，每天都要复习之前看过的题目，这里的复习是认认真真地将写过的看一遍，需要操作的操作一遍，
           而且要预想一下这个问题会以怎样的形式出题，自己如何回答，要烂熟于心
         3.每天看面经，然后看自己是否能答上来，查漏补缺
        `
      ],
      recite: [// 背诵
        '盒子模型',
        '清除浮动',
        'margin越界',
        'BFC',
        'JavaScript全局函数',
        'this指向',
        'apply、call、bind',
        /* apply传入带下标的集合、数组、类数组 */
        'nth-child、nth-of-type',
        'XXS、CSRF',
        '性能优化',
        'requestAnimationFrame',
        '数据类型判断->原理',
        '常见请求头和响应头',
        '不支持冒泡事件：①focus ②blur ③mouseenter ④mouseleave ⑤load ⑥unload ⑦resize',
        /*
          mouseenter:鼠标光标从元素外部首次移动到元素之内时触发
          mouseleave:位于元素上方的鼠标光标移动到元素之外时触发
          mouseover:父子元素之间来回移动也会触发，会冒泡
          mouseout:父子元素之间来回移动也会触发，会冒泡

          https://segmentfault.com/a/1190000017560710
        */
        'http 3次握手4次挥手',
        '跨域',
        '微任务/宏任务',
        'session/cookie/token',
        '浏览器缓存机制',
        'http状态码',
        'add(1)(2)(3)',
        '垂直居中，居中为什么用transform，而不是margin/top/left', // transform重绘，margin等会引起重排
        '防抖，节流，输入框中文防抖',
        /*
          componsitionstart：触发于一段文字的输入之前（类似于keydown事件，但是该事件仅在若干可见字符输入之前）
          componsitionupdate：每打一个字母触发
          componsitionend：触发componsitionstart时，文本框会填入“虚拟文本”（待确认文本），同时触发input事件；在触发componsitionend时，就是填入实际内容后
        */
        'Set/WeakSet/Map/WeakMap',
        '模块化发展历程', // 引入的模块是只读的
        'const let class声明的变量不在window上',
        /* var a = 12 console.log(window.a) ->12
           ES5，全局变量直接挂载到全局属性上，所以能在window上看到var的声明
           let b = 1 console.log(window.b) -> undefined
           const c = 2 console.log(window.c) -> undefined
           全局作用域中，用let和const声明的全局变量并没有在全局对象中，只是一个块级作用域（Script）中
           ES6的块级作用域必须要用大括号
           if(true) let tmp = 1 //报错
           块级作用域声明函数，优先使用变量=函数
        */
        '暂时性死区',
        /*
          默认赋值可能导致暂时性死区
          typeof不再是一个百分百安全的操作
          typeof tmp  //报错
          let tmp

          typeof tmp2 //undefined
        */
        'sort', // 默认的排序方法会将数组元素转换为字符串，然后比较字符串中字符的UTF-16编码顺序来进行排序
        'https://muyiy.cn/question/js/46.html',
        /* 在对象中加入splice属性方法，和length属性后。这个对象变成一个类数组
           push方法具有通用性。该方法和call()或apply()一起使用时，可应用在类似数组对象上.
           push方法根据length属性来决定从哪里开始插入给定的值，可以理解为push方法根据数组的length给数组创建一个下标为length的属性，然后将length值+1，
           可以同时push多个值，用逗号隔开，等同于将这些值依次push
           如果length不能转成一个数值，则插入元素的索引为0，当length不存在，将会创建
           .运算符优先级高于=
        */
        '箭头函数与普通函数区别',
        'new操作的大致过程', // 静态方法仅在创建他们的构造函数中存在
        /*
          function newFn(Fn){
            const result = {}   // 创建新对象
            result.__proto__ = Fn.prototype // 对象__proto__属性指向构造函数prototype
            Fn.call(result)
            return result
          }
        */
        '多行文本省略',
        'https://muyiy.cn/question/js/100.html',

        'https://muyiy.cn/question/js/129.html',
        'https://muyiy.cn/question/js/130.html',
        // 'Proxy',
        // 'Reflect',
        'Symbol',
        'Promise',
        /*
          1.三种状态：pending(进行中)、fulfilled(已成功)、rejected(已失败)
          const promise = new Promise((resolve, reject)=>{})
          promise.then(res=>{},err=>{})
          2.then方法返回的是一个新的Promise对象
          3.Promise内部的错误不会影响到Promise外部的代码
          4.finally方法用于指定不管Promise对象最后状态如何，都会执行的操作
          5.Promise.all(arr)
          6.Promise.race(arr) 可以用于接口超时
          7.Promise.any(arr)
          8.Promise.try()
        */
        'Iterator',
        /* 遍历器，
          当使用for...of循环遍历某种数据结构时，该循环会自动寻找Iterator接口
          一种数据结构只要部署了Iterator接口，就称这种数据结构是可遍历的
          默认的Iterator接口部署在数据结构Symbol.iterator属性
          原生具备遍历器接口的数据结构
            Array
            Map
            Set
            String
            arguments
          例子：
           let arr = [1, 2, 3]
           let iter = arr[Symbol.iterator]()
           iter.next() //{value:1, done: false}
           iter.next() //{value:2, done: false}
           iter.next() //{value:3, done: false}
           iter.next() //{value:undefined, done: true}

           yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
        */
        'generator函数',
        /*
          1.generator函数返回的是一个遍历器对象，因此可以用for...of循环，注意：一旦next方法的返回对象的done为true，
            循环就会中止，且不包含该返回对象
            //遍历时，返回的是yield后的值
          2.generator可以当做遍历器生成函数
            //对象默认没有遍历接口，因此不能解构赋值，for...of，尝试为对象添加遍历器接口
          3.next方法的参数表示上一次yield表达式的返回值，因此第一次使用next方法，传递参数是无效的
          4.一旦Generator执行过程中抛出错误，且没有被内部捕获，就不会执行下去，如果此后还调用next方法，将会返回{value:undefined,done:true}
          5.gen.return('123')，返回指定值‘123’，且Generator函数遍历终结，如果 Generator 函数内部有try...finally代码块，
            且正在执行try代码块，那么return()方法会导致立刻进入finally代码块，执行完以后，整个函数才会结束，
            然后等到finally代码块执行完，再返回return()方法指定的返回值
          6.yield*用于在generator函数内部执行另一个generator函数(或含有遍历器的对象)，等同于for...of
          7.generator函数不能与new使用，没有this
        */
        'async函数', // async函数返回一个Promise对象，因此可以使用then方法，res是函数的return值
        'class',
        /* 1.类不存在变量提升
           2.静态方法，在方法前加static，该方法不会被实例继承，直接通过类来调用
        */
        '对象作为函数参数',
        /*
          若修改参数的属性，则被引用对象对应属性也会同步修改，若直接改变参数的指向，则不会影响被引用对象.
          类似的
          const obj1 = {a: 1}
          let obj2 = obj1
          obj2 = {}
          console.log(obj1) // {a: 1}
          console.log(obj2) // {}
        */
        'forEach/for...in/for...of 比较',
        /*
          forEach: 无法中途跳出循环，break命令或return命令都不能奏效
          for...in: 1.数组的键名是数字，但是for...in循环是以字符串作为键名"0","1","2"等等
                    2.循环不仅遍历键名，还会遍历手动添加的其他键，甚至包括原型链上的键
                    3.某些情况下，for...in循环会以任意顺序遍历键名
          for...of: 有for...in循环的优点，但是没有其缺点，可配合break，continue，return使用
        */
        '异步编程的方法',
        /*
          1.回调函数
          2.事件监听
          3.发布/订阅（又称为观察者模式）
          4.Promise对象
        */
        'src和href的区别',
        /*
          href标识超文本引用，用在link和a标签上，href是引用和页面关联，在当前元素和引用资源之间建立联系
          src表示引用资源，表示替换当前元素，用在img、script、iframedo
        */
        'git相关',
        // vue高频
        '对于MVVM的理解',
        /* Model:数据层
           View:视图层
           ViewModel:业务逻辑
        */
        '开发中常用的指令有哪些',
        '详细说一下对vue生命周期的理解',
        '双向数据绑定原理',
        'Proxy相比于defineProperty的优势',
        'vue-router有哪几种导航守卫',
        'Vue的路由实现：hash模式和history模式',
        '组件间传值通信',
        '非父子，兄弟组件之间通信',
        /*
          一、props/$emit
              父子组件通信
          二、$children/$parent
              父子组件通信
          三、provide/inject
              父组件通过provide提供变量，子组件通过inject来注入变量
              父子组件通信
          四、ref/refs
              父子组件通信
          五、eventBus  ...
          六、vuex
              state:
              getters:
              mutations:
              actions:
              modules:
          七、localStorage/sessionStorage
          八、$attr/$listeners
        */
        'vuex是什么？怎么使用？哪种场景使用？',
        'vue3.0新特性'
      ],
      list: [ // 面经
        '工作经历，项目性能优化', // get
        '盒子模型，标准盒子模型', // get
        'https加密，什么是非对称加密',
        '原型对象，以及原型对象有什么优点',
        '状态码和缓存',
        '判断数组',
        '数据类型，如何判断数组为空',
        'html5和html4相比有什么性能的优化或标签',
        'node.js有哪些常用的API',
        'javascript全局函数6+2+4+1',
        'apply,bind,call的用法和区别',
        '跨域'
        // 全局变量不会被垃圾回收机制回收
      ],
      list2: [// 算法

      ]
      /*
        天生可赚钱，可长期持有
          消费、医疗、科技 （建材、保险） //长牛，不是在创新高，就是在创新高的路上
        周期行业
          银行、证券、有色、军工、钢铁、煤炭、传媒  //周期行业

        组合配置：
        1.债券/银行存款/理财 <50%
        2.混合行业类型
      */
    }
  },

  methods: {
    // // 深拷贝
    // deepClone(obj) {},

    // // 手动实现promiseAll
    // promiseAll(promises) {}
  }
}
</script>

<style>

</style>
