<template>
  <div class="menus-wapper">
    <template v-for="(menu,index) in menus">
      <el-submenu
        v-if="menu.children&&menu.children.length>0"
        :key="menu.path+'_'+index"
        :index="menu.path"
        popper-append-to-body>
        <template slot="title">
          <i :class="menu.icon"/>
          <span v-show="!collapsed">{{ menu.title }}</span>
        </template>
        <side-item :menus="menu.children"/>
      </el-submenu>
      <el-menu-item
        v-else
        :key="menu.path+'_'+index"
        :index="menu.path">
        <i :class="menu.icon"/>
        <span v-show="!collapsed">{{ menu.title }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SideItem',
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/.el-icon-arrow-right{
    display: none;
  }
</style>
