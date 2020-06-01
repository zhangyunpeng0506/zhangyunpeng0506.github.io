<template>
  <div>
    <div class="left">我是首页</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to,from,next){
    next()
  },
  afterRouteLeave(to,from){}
}
</script>

<style>

</style>