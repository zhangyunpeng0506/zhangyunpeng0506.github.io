<template>
  <div class="css-content-container">
    <!-- @media -->
    <question0 v-if="question==='@media'"/>
    <!-- 垂直居中 -->
    <question1 v-if="question==='垂直居中'"/>
    <!-- 多行文本省略 -->
    <question2 v-if="question==='多行文本省略'"/>
    <!-- 盒子模型 -->
    <question3 v-if="question==='盒子模型'"/>
    <!-- 块级元素和行内元素 -->
    <question4 v-if="question==='块级元素和行内元素'"/>
    <!-- 浏览器渲染全过程（含重绘重排） -->
    <question5 v-if="question==='浏览器渲染全过程（含重绘重排）'"/>
    <!-- 清除浮动 -->
    <question6 v-if="question==='清除浮动'"/>
    <!-- 优雅降级和渐进增强 -->
    <question7 v-if="question==='优雅降级和渐进增强'"/>
    <!-- 元素消失的方法及区别 -->
    <question8 v-if="question==='元素消失的方法及区别'"/>
    <!-- BFC -->
    <question9 v-if="question==='BFC'"/>
    <!-- css3新特性 -->
    <question10 v-if="question==='css3新特性'"/>
    <!-- css布局 -->
    <question11 v-if="question==='css布局'"/>
    <!-- css选择器优先级 -->
    <question12 v-if="question==='css选择器优先级'"/>
    <!-- flex布局 -->
    <question13 v-if="question==='flex布局'"/>
    <!-- line-height与height -->
    <question14 v-if="question==='line-height与height'"/>
    <!-- link和import标签区别 -->
    <question15 v-if="question==='link和import标签区别'"/>
    <!-- position属性比较 -->
    <question16 v-if="question==='position属性比较'"/>
    <!-- transition和animation的区别 -->
    <question17 v-if="question==='transition和animation的区别'"/>
    <!-- margin越界 -->
    <question18 v-if="question==='margin越界'"/>
  </div>
</template>

<script>
import {
  question0,
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
  question11,
  question12,
  question13,
  question14,
  question15,
  question16,
  question17,
  question18
} from './components'
export default {
  components: {
    question0,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16,
    question17,
    question18
  },
  props: {
    question: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      questions: this.$store.state.questions.css
    }
  }
}
</script>

<style lang="less" scoped>
  .css-content-container{
    /deep/p{
      margin: 10px 10px 10px 0;
      padding: 5px 10px;
      background: #f2f2f2;
      border-radius: 5px;
    }
    /deep/b{
      color: #1c90f3;
    }
  }
</style>
