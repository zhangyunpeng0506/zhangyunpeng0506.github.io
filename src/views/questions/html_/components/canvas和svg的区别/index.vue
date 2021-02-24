<template>
  <div>canvas和svg的区别</div>
</template>

<script>
export default {
  data() {
    return {
      canvas: '画布，利用JavaScript在网页绘制图像',
      svg: '可缩放矢量图',
      compare: [
        '图片格式不同。canvas是位图，依赖分辨率；svg是矢量图，不依赖分辨率',
        'canvas不支持事件处理；svg支持事件处理'
      ]
    }
  }
}
</script>

<style>

</style>
