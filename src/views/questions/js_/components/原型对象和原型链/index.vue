<template>
  <div>原型对象和原型链</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '函数才有prototype（显示原型）属性，对象没有这个属性，对象对应的是__proto__（隐式原型）属性',
        '函数广义上来说有__proto__属性，因为函数也属于对象，只要是对象就有__proto__属性，只是函数的__proto__是Function.prototype',
        '实例是通过new一个构造函数生成（箭头函数不能new）',
        '构造函数中定义的方法，实例化后并不一样，而原型对象prototype中定义的方法相等（指向同一地址），即实例对象的__proto',
        '构造函数的原型对象的构造器（constructor）指向该构造函数，实例对象的构造器也指向构造函数',
        '原型链就是由原型组成的一个链条，实例对象的__proto__是原型对象，原型对象的本质也是对象，所以原型对象也有__proto__，这样一直找__proto__',
        ''
      ]
    }
  }
}
</script>

<style>

</style>
