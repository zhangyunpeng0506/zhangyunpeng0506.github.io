<template>
  <div class="titlebar">
    <h3>
      <a
        :id="title"
        @click="handlePointClick">
        {{ title }}
      </a>
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String | Number,
      default: ''
    }
  },
  methods: {
    handlePointClick() {
      this.$emit('on-click', this.title)
    }
  }
}
</script>

<style lang="less" scoped>
  .titlebar{
    margin: 5px 0;
  }
</style>
