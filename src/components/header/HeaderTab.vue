<template>
  <div class="item" @click="itemClick">
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
    path:{
      type: String,
      default: '/'
    },
    icon:{
      type: String,
      default: ''
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style lang="less" scoped>
  .item{
    display: inline-block;
  }
</style>