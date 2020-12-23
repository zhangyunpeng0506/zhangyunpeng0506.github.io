<template>
  <div class="moduletpl-container">
    <title-bar title="模块化" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>概述：</b><br>
        在es6前，实现模块化使用的是RequireJS或者seaJS（分别基于AMD规范的模块化库，和基于CMD规范的模块化库）。<br>
        es6的模块化分为导出（export）@与导入（import）两个模块。
      </p>
      <p>
        <b>特点：</b><br>
        <ul>
          <li>1.自动开启严格模式，不管有没有在模块头部加上use strict</li>
          <li>2.模块中可以导入和导出各种类型的变量，如函数、对象、字符串、数字、布尔值、类等</li>
          <li>3.每个模块都有自己的上下文，每个模块内声明的变量都是局部变量，不会污染全局作用域</li>
          <!-- <li></li> -->
        </ul>
      </p>
      <p>
        <b>export：</b><br>
        export default向外暴露成员，可以使用任意变量来接收。<br>
        export default仅有一个
      </p>
      <p>
        <b>import：</b><br>
        import命令会提升到整个模块头部首先执行。<br>
        静态执行，不能使用表达式和变量。
        <code-tpl :content="code.code0"/>
      </p>
    </div>
  </div>
</template>

<script>
import titleBar from '../titleBar'
import codeTpl from '_c/codeTpl'
import * as code from './code'
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
      code: code
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
