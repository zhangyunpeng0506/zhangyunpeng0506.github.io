<template>
  <title-bar title="await" @on-click="handlePointClick"/>
</template>

<script>
import titleBar from '../titleBar'
import codeTpl from '_c/codeTpl'
export default {
  components: {
    titleBar,
    codeTpl
  },
  props: {
    path: {
      type: String | Number,
      default: ''
    }
  },
  data() {
    return {
      list: [
        'async函数其实就是Generator函数的语法糖',
        `1.async函数返回一个Promise对象，可以使用then方法添加回调函数
         2.async函数内部return语句返回值，会成为then方法回调函数的参数
         3.任何一个await语句后面的Promise对象变为reject状态，那么整个async函数都会中断执行（
           解决方案：a. try...catch，多个await命令，可以放在一起；
                    b. await Promise.reject('出错啦').catch(e=>console.log(e))）`
      ]
    }
  },
  methods: {
    handlePointClick() {
      this.$emit('on-click', this.path)
    }
  }
}
</script>

<style>

</style>
