<template>
  <div>
    <p>
      <b>http协议：</b><br>
      http是一个客户端终端（用户）和服务端（网站）请求和应答的标准（TCP）<br>
      http是一种不保存状态，即无状态协议。http协议自身不对请求和响应之间的通信状态进行保存。也就是说在http这个级别，协议
      对于发送的请求或响应都不做持久化处理。
    </p>
    <p>
      <b>cookie：</b>cookie是源自站点并由浏览器存储在客户计算机上的简单文件。<br>
      基于cookie的验证时无状态的，就是说验证或者会话信息必须同时在客户端和服务端保存。这个信息服务端一般在数据库中保存，
      前端保存在cookie中<br>
      <b>cookie验证的一般流程：</b><br>
      <ul>
        <ol>1、用户输入登录凭据</ol>
        <ol>2、服务器验证凭据是否正确，并创建会话，然后把会话数据存储在数据库中</ol>
        <ol>3、具有会话id的cookie被放置在用户浏览器中</ol>
        <ol>4、在后续请求中，每次请求都将携带会话id，服务器会根据数据库验证会话id，如果验证通过，则继续处理</ol>
        <ol>5、一旦用户登出，客户端和服务端同时销毁该会话</ol>
      </ul>
    </p>
    <p>
      <b>token：</b>当讨论基于token的身份验证时，一般都是说JSON Web Tokens（JWT）<br>
      基于token的验证是无状态的。服务器不会记录哪些用户已登录。对服务器的每个请求都需要带上验证请求的token<br>
      <b>token验证的一般流程如下：</b><br>
      <ul>
        <ol>1、用户输入登录凭据</ol>
        <ol>2、服务器验证凭据是否正确，然后返回一个经过签名的token</ol>
        <ol>3、客户端负责存储token，可以存在localStorage或者cookie中</ol>
        <ol>4、对服务器的请求带上这个token</ol>
        <ol>5、服务器对JWT进行解码，如果token有效，则处理该请求</ol>
        <ol>6、一旦用户登出，客户端销毁token</ol>
      </ul>
    </p>
    <p>
      <b>token相对于cookie的优势：</b><br>
      浏览器在访问一个网站的网页时，往往就会携带该网站之前所设置的cookie，而不会带上token<br>
      <el-link
        href="https://github.com/chaijinsong/blog/issues/7"
        type="primary"
        target="_blank">https://github.com/chaijinsong/blog/issues/7</el-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
