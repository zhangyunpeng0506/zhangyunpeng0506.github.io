<template>
  <title-bar title="数据结构" @on-click="handlePointClick"/>
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
  methods: {
    handlePointClick() {
      this.$emit('on-click', this.path)
    }
  }
}
</script>

<style>

</style>
