<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Header from '@/components/header/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
  #app{
    margin: 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
</style>>

</style>
