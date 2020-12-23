<template>
  <div>
    <b>解决方案：</b>
    <ul>
      <template v-for="(item, index) in methodsList">
        <ol :key="'method_' + index">{{ index + 1 }}、{{ item }}</ol>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      methodsList: [
        '给parent设置border',
        '给parent设置padding',
        '给parent设置overflow:hidden（原理：BFC）',
        `给parent加前置伪元素::before{ content:''; display: table }`
      ]
    }
  }
}
</script>

<style>

</style>
