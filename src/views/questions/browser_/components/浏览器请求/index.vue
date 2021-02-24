<template>
  <div>浏览器请求</div>
</template>

<script>
export default {
  data() {
    return {
      desc: 'http是一个无状态的协议，因此需要在请求头和响应头中包括自身的一些信息和想要执行的动作',
      list: {
        '请求头': {
          'Accept': '指定客户端能接收的资源类型，内容类型中的先后次序表示客户端接收的先后次序',
          'Accept-Charset': '浏览器可以接受的字符编码集',
          'Accept-Encoding': '指定客户端浏览器可以支持的web服务器返回内容压缩编码类型',
          'Accept-Language': '客户端接收的语言类型',

          'Connection': '浏览器与服务器之间的连接类型（Keep-Alive——数据传递完并不立即关闭连接，默认3000ms后断开）',
          'Content-length': '请求头的长度',
          'Content-Type': '请求提交的内容类型，一般只有post提交时才需要设置该属性',

          'Cookie': '浏览器Cookie',
          'Date': '客户端请求服务端的时间',
          'Origin': '跨域地址',
          'Referer': '发送请求的页面的URL（告诉服务器是从哪发起的请求）',
          'User-Agent': '客户端运行的浏览器类型的详细信息。通过该信息，web服务器可以判断当前客户端浏览器类别'
        },
        '响应头': {
          'Content-Encoding': '文档的编码方法',
          'Content-Length': '内容长度',
          'Content-Type': '表示后面的文档属于什么MIME类型',
          'Cache-Control': 'no-***（服务端禁止客户端缓存页面数据）',
          'Date': '当前的GMT时间',
          'Expires': 'http1.0时的规范，值是一个绝对时间的GMT格式的时间字符串。这个时间代表资源失效时间',
          'Last-Modified': '文档最后改动时间',
          'Location': '服务端需要客户端访问的页面路径',
          'Refresh': '表示浏览器应该在多少时间之后刷新文档，以秒计',
          'Server': '服务器名字',
          'Set-Cookie': '设置和页面关联的cookie',
          'WWW-Authenticate': '客户应该在Authorization头中提供什么类型的授权信息'
        }
      }
    }
  }
}
</script>

<style>

</style>
