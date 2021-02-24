<template>
  <div>多行文本省略</div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less">
  //多行文本省略
  .test{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;  //行数
    overflow: hidden;
  };
  //单行文本省略
  .test2{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
