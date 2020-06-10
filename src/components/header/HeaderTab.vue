<template>
  <div class="item">
    {{name}}
  </div>
</template>

<script>
export default {
  props:{
    name:{
      type: String,
      default: ''
    },
    icon:{
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
  .item{
    display: inline-block;
  }
</style>