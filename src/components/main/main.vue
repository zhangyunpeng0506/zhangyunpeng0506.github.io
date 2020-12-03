<template>
  <el-container class="app-container">
    <el-aside :width="collapsed ? '64px' : '200px'" class="aside-container" >
      <side-bar :collapsed="collapsed"/>
    </el-aside>
    <el-container class="main-container">
      <el-header class="header-container">
        <nav-bar
          :collapsed="collapsed"
          @on-coll-change="handleCollapsedChange"/>
        <tags-view/>
      </el-header>
      <el-main class="content-container">
        <router-view :key="$route.path"/>
      </el-main>
      <el-footer class="footer-container">
        <span>版权所有 zhangyunpeng</span>
        {{ $moment(date).format('HH:mm:ss') }}
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import sideBar from './components/sideBar'
import navBar from './components/navBar'
import tagsView from './components/tagsView'
import appMain from './components/appMain'
import { mapMutations } from 'vuex'
import { checkToken, setToken } from '@/utils/user'
export default {
  name: 'Main',
  components: {
    sideBar,
    navBar,
    tagsView,
    appMain
  },
  data() {
    return {
      collapsed: false,
      timer: null,
      date: new Date()
    }
  },
  watch: {
    '$route'(route) {
      this.ADD_TAG(route)
    }
  },
  created() {
    this.$store.dispatch('getMenus')
  },
  mounted() {
    const _this = this
    this.timer = setInterval(() => {
      _this.date = new Date()
    }, 1000)
    window.addEventListener('click', this.updateToken)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  },
  methods: {
    ...mapMutations([
      'ADD_TAG'
    ]),
    handleCollapsedChange(state) {
      this.collapsed = state
    },
    updateToken() {
      if (checkToken()) {
        setToken()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .app-container {
    height: 100%;
    .main-container{
      .header-container{
        height: 78px!important;
        padding: 0;
      }
    }
    .footer-container{
      border-top: 1px solid #ddd;
      height: 30px!important;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 15px;
      &>span{
        margin-right: 10px;
      }
    }
  }
</style>
