<template>
  <div class="header">
    <header>
      <header-tab :name="'首页'"/>
      <header-tab :name="'关于'"/>
      <header-tab :name="'我的'"/>
    </header>
  </div>
</template>

<script>

import headerTab from './HeaderTab'

export default {
  components:{
    headerTab
  },
  methods:{
    btnAbout(){
      this.$router.replace({path:'/home'})
    }
  }
}
</script>

<style lang="less" scoped>

</style>