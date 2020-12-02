<template>
  <div class="sidebar-container">
    <div class="sidebar-title">
      <i class="el-icon-reading"/>
      <span v-show="!collapsed">
        学无止境
      </span>
    </div>
    <el-scrollbar class="sidebar-menus">
      <el-menu
        :collapse="collapsed"
        :collapse-transition="false"
        router
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-custom-menu">
        <side-item :menus="menus" :collapsed="collapsed"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import sideItem from './sideItem'
export default {
  name: 'SideBar',
  components: {
    sideItem
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menus: this.$store.state.app.menus
    }
  }
}
</script>

<style lang="less" scoped>
  .sidebar-container{
    background-color: #545c64;
    color: #fff;
    height: 100%;
    overflow: hidden;
    /deep/i {
      color: white;
    }
    .sidebar-title{
      line-height: 44px;
      font-size: 16px;
      text-align: center;
      background-color: #367fa9;
    }
    .sidebar-menus{
      height: calc(~'100% - 44px');
      overflow-x: hidden;
      /deep/.el-scrollbar__wrap{
        overflow-x: hidden;
      }
      .el-custom-menu {
        border: none;
      }
    }
  }
</style>
