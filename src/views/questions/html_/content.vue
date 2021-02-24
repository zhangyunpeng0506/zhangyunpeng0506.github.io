<template>
  <div class="html-content-container">
    <question0 v-if="question==='HTML5新特性'"/>
  </div>
</template>

<script>
import {
  question0
} from './components'
export default {
  components: {
    question0
  },
  props: {
    question: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .html-content-container{
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
