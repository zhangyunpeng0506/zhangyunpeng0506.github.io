<template>
  <div>浏览器缓存及meta</div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // 什么是浏览器缓存？
        '浏览器保存通过http获取的所有资源，是浏览器将网络资源存储在本地的一种行为',
        // https://blog.csdn.net/luckywinty/article/details/106088990
        // 缓存资源存在哪？
        `1.memory cache(内存) 
            只能存储一些派生类的资源文件 
            退出进程时数据会被清除 
            一般字体、脚本、图片会存在内存
         2.disk cache(磁盘) 
            只能存储一些派生类的资源文件 
            退出进程时数据不会被清除 
            一般非脚本会存在磁盘中
         
         因为css文件加载一次就可以渲染出来，不会去频繁读取，所以不适合缓存在内存中，但js随时可能会执行，如果放在磁盘中，
         在执行脚本的时候需要从磁盘取到内存，这样IO开销很大，可能导致浏览器失去响应`,
        // 缓存原理（访问缓存优先级）
        `1.先在内存中查找，如果有直接加载
         2.如果内存不存在，则在磁盘中查找，如果有直接加载
         3.如果磁盘中也没有，那么就进行网络请求
         4.请求获取的资源缓存到磁盘和内存`,
        // 强缓存
        `浏览器在加载资源时，会先根据本地缓存资源的header中的信息判断是否命中强缓存，如果命中则直接使用缓存中的资源不会再向服务器发送请求
         这里response header中的信息指的是expires和cache-control

         Pragma：Pragma只有一个值为no-cache时，表示禁用强制缓存需要协商缓存
         Expires: http1.0时的规范，值是一个绝对时间的GMT格式的时间字符串。这个时间代表资源失效时间，在此时间之前，即命中缓存，缺点就是服务器时间与客户端时间
                  偏差较大时就会导致缓存混乱
         Cache-Control: http1.1时出现的header信息，主要是利用该字段的max-age值来判断，是一个相对时间。例如Cache-Control:max-age=3600，代表资源有效期是3600秒。
                  请求头中可设置：
                    no-cache: 需要协商缓存，发送请求到服务器确认是否使用缓存
                    no-store: 禁止使用缓存，每次都要重新请求数据
                    max-age=delta-seconds: 告知服务器客户端希望接收一个存在时间（age）不大于delta-seconds秒的资源
                    max-stale[=]
                  响应头中可设置：
                    public: 可以被所有用户缓存，包括终端用户和CDN等中间代理服务器
                    private: 只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存
                    no-cache: 
                    no-store:

                  优先级 Pragma -> Cache-Control -> Expries
                  no-store优先级最高`,
        // 协商缓存
        `当强缓存没有命中的时候，浏览器会发送一个请求到服务器，服务器根据header中的部分信息来判断是否命中缓存。如果命中返回304，告诉浏览器
         资源未更新可使用本地缓存
         Last-Modify（响应头）/If-Modify-Since（请求头）: 
                                      浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify，标识该资源最后修改时间
                                      当浏览器再次请求该资源，request的请求头中会包含If-Modify-Since，该值为之前返回的Last-Modify
                                      服务器收到If-Modify-Since，判断是否命中缓存，命中返回304，并且不会返回资源内容和Last-Modify
                                      缺陷：文件最后修改时间变了，但内容没变
         ETag（响应头）/If-None-Match（请求头）: 
                              返回一个校验码。ETag保证每一个资源是唯一的，资源变化都会都会导致ETag变化，服务器根据If-None-Match值来判断
                              是否命中缓存
          `
      ]
    }
  }
}
</script>

<style>

</style>
