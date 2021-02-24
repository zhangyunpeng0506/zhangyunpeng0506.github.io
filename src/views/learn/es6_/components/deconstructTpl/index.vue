<template>
  <div class="deconstruct-container">
    <title-bar title="解构赋值" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>解构赋值：</b><br>
        <el-link
          href="https://es6.ruanyifeng.com/#docs/destructuring"
          type="primary"
          target="_blank">https://es6.ruanyifeng.com/#docs/destructuring</el-link>
        <ul>
          <li>1.如果等号右边不是数组（或严格地说，不是可遍历结构），那么将会报错</li>
          <li>2.如果解构不成功，变量的值就等于undefined</li>
          <li>3.当一个成员严格等于undefined，默认值才会生效</li>
          <code-tpl :content="code.code0"/>
          <li>4.可以根据需要选择粒度</li>
          <code-tpl :content="code.code1"/>
          <li>5.如果默认值是一个表达式，那么这个表达式求值是惰性的，只用在用到的时候才会求值</li>
          <li>6.默认值可以引用解构赋值的其他变量，但变量必须已经声明</li>
          <li>7.解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转化为对象，由于undefined和null无法转为对象，所以对他们进行解构赋值会报错</li>
        </ul>
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
