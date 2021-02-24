<template>
  <div>requestAnimationFrame</div>
</template>

<script>
export default {
  data() {
    return {
      // 用js实现一个无限循环的动画
      list: [
        // 相比setTimeout、setInterval优势
        'requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的间隔跟随浏览器的刷新率',
        'setTimeout、setInterval的运行机制决定了时间间隔参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间',
        '在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流',

        '需要传入一个回调函数作为参数'
      ]
    }
  }
}
</script>

<style>

</style>
