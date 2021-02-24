<template>
  <div/>
</template>

<script>
export default {
  data() {
    return {
      list: [
        '都是用来改变函数this对象的指向',
        '第一个参数都是this要指向的对象',
        '都可以利用后续参数传参',
        'apply和call都是对函数的直接调用，bind方法返回的仍然是一个函数',
        'bind传参和call一样，参数一个一个传入，也可以在调用时再传参',
        'apply的传参参数是一个数组'
      ]

    }
  }
}
</script>

<style>

</style>
