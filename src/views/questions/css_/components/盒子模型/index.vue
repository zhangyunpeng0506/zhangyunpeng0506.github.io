<template>
  <div class="box-container">
    <p>
      <b>概念：</b>{{ define }}
    </p>
    <p>
      <b>宽度和高度：</b>{{ des }}
    </p>
    <p>
      <b>box-sizing：</b>content-box / border-box
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      define: 'CSS盒子模型（Box Model）本质上是一个盒子，包括外边距（margin），边框（border）、内边距（padding）、内容（content）',
      des: '标准盒子模型的width和height表示content的宽度或高度，IE盒子模型的width和height表示content+padding+border'
    }
  }
}
</script>

<style>

</style>
