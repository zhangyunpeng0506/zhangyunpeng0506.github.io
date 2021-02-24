<template>
  <div>cookie、localStorage、sessionStorage</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        `cookie: 
            1.一般由服务器生成，可设置失效时间。如果在浏览器端生成Cookie，默认是关闭浏览器后失效
            2.4k左右
            3.每次都会携带在http头中，存储过多信息会带来新能问题
         localStorage:
            1.除非被清除，否则永远保存
            2.一般为5M
            3.仅在客户端保存，不存在与服务器的通信
            setItem
            getItem
            removeItem
            clear
         sessionStorage:
            1.仅在当前会话下有效，关闭页面或浏览器后被清除
            2.一般为5M
            3.仅在客户端保存，不存在与服务器的通信
        `
      ]
    }
  }
}
</script>

<style>

</style>
