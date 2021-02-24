<template>
  <div>跨域</div>
</template>

<script>
export default {
  data() {
    return {
      // 同源：“协议+域名+端口”三者相同
      /* 同源限制：
        1.cookie、localStorage、IndexDB无法读取
        2.DOM和JS对象无法获得
        3.AJAX请求不能发送
      */
      desc: '',
      list: {
        'jsonp': '利用<script>标签没有跨域限制，通过<script>标签src属性，发送带有callback参数的get请求',
        'document.domain + iframe': '',
        'location.hash + iframe': '',
        'window.name + iframe': '',
        'postMessage': `
          1.页面和其他打开的新窗口传递数据
          2.多窗口之间消息传递
          3.页面与嵌套的iframe消息传递
          用法：
          postMessage(data, origin)
          data: 基本类型或可复制对象（部分浏览器只支持字符串）
          origin：协议+域名+端口，也可以设置为'*'，如果要指定和当前窗口同源'/'
          接收：
          window.addEventListener('message', function(e) {alert(e.data)})
        `,
        '跨域资源共享（CORS）': `
          W3C标准，需要浏览器和服务器同时支持
          一、简单请求（
              head/get/post，
              Content-Type只限application/x-www-form-urlencoded、multipart/form-data、text/plain(将文件设置为纯文本的形式，浏览器在获取到这种文件时并不会对其进行处理)）
            // 请求头
            1.请求头中增加Origin字段告诉服务器本次请求来自哪个源
            // 响应头
            2.Access-Control-Allow-Origin，必选，它的值要么是请求时Origin字段的值，要么是一个*，表示接受任意域名的请求
            3.Access-Control-Allow-Credentials，可选，是否允许发送cookie
            4.Access-Control-Expose-Headers，可选，CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段，
              如果想要拿到其他字段，必须用这个字段指定
          二、非简单请求（put/delete等，或者Content-Type字段的类型是application/json）
            1.会在正式通信之前，增加一次HTTP查询请求
            2.预检请求用的请求方法是OPTIONS，表示这个请求是用来询问的
            // 请求头
            3.Origin
            4.Access-Control-Request-Method，必选，用来列出浏览器CORS请求会用到哪些HTTP方法
            5.Access-Control-Request-Headers，可选，逗号分隔的字符串，指定浏览器CORS请求会额外发送的头信息字段
            // 响应头
            6.Access-Control-Allow-Methods，必选，逗号分隔的字符串，表明服务器支持的所有跨域请求方法
            7.Access-Control-Allow-Headers，如果请求头包括该字段，则响应头该字段是必须的
            8.Access-Control-Allow-Credentials
            9.Access-Control-Max-Age，本次预检请求的有效期，单位：秒
          `,
        'nginx代理': '实质与CORS跨域原理一样，通过配置文件设置请求响应头Access-Control-Allow-Origin等字段',
        'nodejs中间件代理': '',
        'WebSocket协议': `
          HTML5一种新协议，实现了浏览器与服务器全双工通信，同时允许跨域
        `
      }
    }
  }
}
</script>

<style>

</style>
