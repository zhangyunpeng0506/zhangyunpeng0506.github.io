<template>
  <div>
    <p>
      <b>XSS：</b>用户通过各种方式将恶意代码注入到其他用户的页面中，就可以通过脚本获取信息、发起请求之类的操作。
    </p>
    <p>
      <b>CSRF：</b>跨站请求攻击。欺骗用户的浏览器去访问一个自己曾经认证过的网站（在一个用户登录过的网站，放一张图片，图片
      链接是某个请求），利用的是用户对网页浏览器的信任
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        `xss分类： 存储型XSS、反射型XSS、DOM型
         防御：转译、限制输入长度`
      ]
    }
  }
}
</script>

<style>

</style>
