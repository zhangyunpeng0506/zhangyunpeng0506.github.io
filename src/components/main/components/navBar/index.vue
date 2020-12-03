<template>
  <div class="navbar-container">
    <div class="collapsed">
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
    </div>
    <div class="navbar">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="el-icon-s-home"/>
          首页
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="!$store.state.app.activeTag.meta.affix">
          <span style="color:#999">
            <i :class="$route.matched[0].meta.icon"/>
            {{ $route.matched[0].meta.title }}
          </span>
        </el-breadcrumb-item>
        <el-breadcrumb-item
          v-if="!$store.state.app.activeTag.meta.affix"
          :to="{ path: $store.state.app.activeTag.path }">
          <i :class="$store.state.app.activeTag.meta.icon"/>
          {{ $store.state.app.activeTag.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="userinfo-container">
      <el-dropdown @command="handleCommand">
        <span class="user-info">
          <el-avatar :size="30" :src="imgUrl" style="margin-right:10px"/>
          {{ $store.state.user.userName }}
          <i class="el-icon-arrow-down el-icon--right"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile" icon="el-icon-user">个人信息</el-dropdown-item>
          <el-dropdown-item command="logOut" icon="el-icon-switch-button">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import imgUrl from '@/static/img/admin.png'
import { mapActions } from 'vuex'
export default {
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imgUrl: imgUrl
    }
  },
  methods: {
    ...mapActions([
      'logOut'
    ]),
    handleCollapsedChange() {
      this.$emit('on-coll-change', !this.collapsed)
    },
    handleCommand(command) {
      switch (command) {
        case 'profile':
          this.$router.push({ path: '/profile' })
          break
        case 'logOut':
          this.$confirm('确认退出系统?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.logOut()
            this.$router.push({ path: '/login' })
          })
          break
      }
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
    .navbar{
      margin-left: 15px;
    }
    .userinfo-container{
      display: flex;
      position: absolute;
      right: 35px;
      cursor: pointer;
      .user-info{
        font-size: 16px;
        font-weight: 700;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
