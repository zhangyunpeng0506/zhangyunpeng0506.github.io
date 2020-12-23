<template>
  <div class="classtpl-container">
    <title-bar title="Class类" @on-click="handlePointClick"/>
    <div class="content">
      <p>
        <b>概述：</b>
        在ES6中，class（类）作为对象的模块引入，class的本质是function。可以看做是一个语法糖，让对象原型的写法更加清晰、更像面向对象编程的语法。
        <code-tpl :content="code.code0"/>
      </p>
      <p>
        <b>特点：</b><br>
        <code-tpl :content="code.code1"/>
        <ul>
          <li>1.不可重复声明</li>
          <li>2.类定义不会被提升，意味着必须在访问前对类进行定义，否则会报错</li>
          <li>3.方法不需要function关键字，方法间不能加分号</li>
          <li>4.constructor方法是类的默认方法，创建类的实例化对象时被调用</li>
          <li>5.ES6中，prototype仍旧存在，虽然可以直接在类中定义方法，但是其实方法还是定义在prototype上的。</li>
          <li>6.ES6中规定，Class内部只有静态方法，没有静态属性</li>
          <code-tpl :content="code.code2"/>
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
