<template>
  <div class="deconstruct-container">
    <title-bar title="解构赋值" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>解构赋值：</b><br>
        <ul>
          <li>1.左右两边结构必须一样</li>
          <li>2.右边必须是个合法的数组或对象</li>
          <li>3.声明和赋值不能分开（必须在一句话里完成，即声明就必须赋值）</li>
          <code-tpl :content="code.code0"/>
          <li>4.可以根据需要选择粒度</li>
          <code-tpl :content="code.code1"/>
        </ul>
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
