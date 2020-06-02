<template>
  <div class="header">
    <header>
      <header-tab/>
    </header>
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