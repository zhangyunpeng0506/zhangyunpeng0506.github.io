<template>
  <div/>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // 原则
        '多使用内存，缓存或者其他方法',
        '减少CPU计算，减少网络请求',
        '减少I/O操作（硬盘读写）',
        // 方法
        '减少http请求',
        '使用服务端渲染?',
        '将css放在文件头部，JavaScript文件放在底部',
        '使用字体图标iconfont代替图片图标',
        '善用缓存，不重复加载相同的资源',
        '压缩文件（js/html/css）',
        '图片优化（1.延迟加载，2.响应式图片，浏览器根据屏幕大小加载合适的图片，3.降低图片质量，4.尽可能利用css3效果代替图片）',
        '按需加载代码',
        '减少重绘重排',
        '使用事件委托（可节省内存）',
        '当判断条件越来越多时，越倾向使用switch而不是if-else',
        '使用requestAnimationFrame来实现视觉变化',
        '尽量不要覆盖原生方法',
        '降低css选择器的复杂性'
      ]
    }
  }
}
</script>

<style>

</style>
