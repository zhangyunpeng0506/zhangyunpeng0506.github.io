<template>
  <div/>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '解决对象属性名冲突的问题',
        '表示独一无二的值',
        `1.Symbol函数前不能使用new命令，否则会报错
         2.Symbol函数接受一个字符串作为参数，（只是）表示对Symbol的描述，因此相同参数的Symbol函数返回值是不相等的 symbol.description
         3.在对象内部使用Symbol值定义属性时，Symbol值必须放在方括号之中
         4.Symbol作为属性名，遍历对象的时候，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、
           Object.getOwnPropertyNames()、JSON.stringify()返回
           Object.getOwnPropertySymbols()可以获取指定对象的所有Symbol属性名，返回一个数组
           Reflect.ownKeys()可以返回所有类型的键名
         5.Symbol.for()接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值，与Symbol()区别在于前者会被登记在全局供搜索，后者不会
           Symbol.keyFor()返回一个已登记的Symbol类型的key值
         6.Symbol.hasInstance`
      ]
    }
  }
}
</script>

<style>

</style>
