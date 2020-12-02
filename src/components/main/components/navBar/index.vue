<template>
  <div class="navbar-container">
    <el-link
      v-show="!collapsed"
      :underline="false"
      icon="el-icon-s-fold"
      style="font-size:22px"
      @click.native="handleCollapsedChange"/>
    <el-link
      v-show="collapsed"
      :underline="false"
      icon="el-icon-s-unfold"
      style="font-size:22px"
      @click.native="handleCollapsedChange"/>
    <el-breadcrumb style="margin-left:15px" separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">
        <i class="el-icon-s-home"/>
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-if="!$store.state.app.activeTag.meta.affix"
        :to="{ path: $store.state.app.activeTag.path }">
        <i :class="$store.state.app.activeTag.meta.icon"/>
        {{ $store.state.app.activeTag.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCollapsedChange() {
      this.$emit('on-coll-change', !this.collapsed)
    }
  }
}
</script>

<style lang="less" scoped>
  .navbar-container{
    height: 44px;
    display: flex;
    align-items: center;
    padding-left: 5px;
  }
</style>
