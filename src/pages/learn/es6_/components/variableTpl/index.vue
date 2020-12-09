<template>
  <div class="variable-container">
    <title-bar title="变量" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>js作用域分类：</b>
        全局作用域、局部作用域、块级作用域。
      </p>
      <p>
        <b>作用域链查找规则：</b>
        如果一个函数需要用到一个变量，那它会先在自己的作用域去找这个变量，如果有就直接使用，如果没有就一层一层向外找，
        直到找到外层的变量，找到后就用外层的变量（只会向外，不会向内找）。
      </p>
      <p>
        <b>var都有哪些问题：</b>
        <ul>
          <li>1.可以重复声明</li>
          <code-tpl
            :content="code.code0"
            mode="javascript"/>
          <li>2.没有块级作用域</li>
          <code-tpl
            :content="code.code1"
            mode="javascript"/>
          <li>3.没有常量，即无法限制其被修改</li>
        </ul>
      </p>
      <p>
        <b>let和const：</b><br>
        <code-tpl
          :content="code.code2"
          mode="javascript"/>
      </p>
      <p>
        <b>总结：</b><br>
        <span>let：声明变量（可修改），同一作用域不能重复声明，不存在变量提升</span><br>
        <span>const：声明常量（不可修改，可以改变对象属性和调用数组及对象方法，声明时必须赋值），同一作用域不能重复声明，不存在变量提升</span>
      </p>
    </div>
  </div>
</template>

<script>
import titleBar from '../titleBar'
import codeTpl from '../codeTpl'
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
