<template>
  <div class="parent">
    <p>{{ text }}</p>
    <div class="child">粘性布局——top:5px</div>
    <div class="other-child">粘性布局——bottom:5px</div>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文字'
    }
  }
}
</script>

<style lang="less" scoped>
  .parent{
    height: 100px;
    width: 300px;
    overflow: auto;
    background: red;
    padding: 2px 10px;
    .child{
      height: 50px;
      width: 100px;
      position: sticky;
      top: 5px;
      margin: 10px 0;
      background: green;
      color: white;
    }
    .other-child{
      height: 50px;
      width: 100px;
      position: sticky;
      bottom: 5px;
      margin: 10px 0;
      margin-left: 150px;
      background: blue;
      color: white;
    }
  }
</style>
