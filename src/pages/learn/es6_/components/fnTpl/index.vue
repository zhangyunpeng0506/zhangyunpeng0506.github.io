<template>
  <div class="fntpl-container">
    <title-bar title="函数" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>箭头函数：</b><br>
        <ul>
          <li>1.箭头函数没有自己的this，它的this是向外层作用域一层一层查找this，直到有this的定义。（使用call或apply等任何方式都无法改变this的指向）</li>
          <li>2.普通函数的this最终指向调用它的对象</li>
          <li>3.普通函数作为回调函数，this始终指向window；而箭头函数作为回调函数this指向还是符合第1条</li>
          <code-tpl :content="code.code0"/>
          <li>4.箭头函数中没有arguments（类数组），只能基于...arg获取传递的参数集合（数组）</li>
          <code-tpl :content="code.code1"/>
          <li>5.箭头函数不能new执行（因为箭头函数没有this，也没有prototype）</li>
        </ul>
      </p>
      <p>
        <b>js new操作符做了哪些事？</b><br>
        <span>new操作符创建了一个空对象，这个对象的原型指向构造函数的prototype，执行构造函数后返回这个对象。</span>
        <code-tpl :content="code.code2"/>
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
