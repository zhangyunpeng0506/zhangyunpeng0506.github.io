<template>
  <div class="content">
    <el-header>
      <el-button type="success">首页</el-button>
      <el-button @click="btnAbout">关于</el-button>
    </el-header>
  </div>
</template>

<script>
export default {
  methods:{
    btnAbout(){
      this.$router.replace({path:'/home'})
    }
  }
}
</script>

<style lang="less" scoped>

</style>