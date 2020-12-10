<template>
  <div class="git-container custom-scrollbar">
    <el-collapse v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div :class="{divider:activeName.includes('1')}" class="title">定义</div>
        </template>
        <div class="content">
          <div>分布式版本控制系统</div>
          <el-link
            href="https://www.runoob.com/git/git-tutorial.html"
            type="primary"
            target="_blank">https://www.runoob.com/git/git-tutorial.html</el-link>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <template slot="title">
          <div :class="{divider:activeName.includes('2')}" class="title">基本概念</div>
        </template>
        <div class="content">
          <el-link
            href="https://www.runoob.com/git/git-workspace-index-repo.html"
            type="primary"
            target="_blank">https://www.runoob.com/git/git-workspace-index-repo.html</el-link>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <template slot="title">
          <div :class="{divider:activeName.includes('3')}" class="title">常用指令</div>
        </template>
        <div class="content">
          <template v-for="item in command">
            <div :key="item.cmd">
              <span class="cmd">{{ item.cmd }}</span>
              <span class="des">{{ item.des }}</span>
            </div>
          </template>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <template slot="title">
          <div :class="{divider:activeName.includes('4')}" class="title">git与svn区别</div>
        </template>
        <div class="content">
          <ul>
            <li>1、git是分布式版本控制系统，svn是集中式版本控制系统（有一个单一集中管理的服务器，保存所有记录）</li>
            <li>2、git把内容按元数据方式存储，svn是按文件</li>
            <li>3、git分支和svn分支不同。git工作区下的.git目录是版本库</li>
            <li>4、git没有全局版本号；svn每个版本库有唯一的URL（官方地址），所有人都在这个地址更新和提交</li>
            <li>5、git面对一个庞大的项目也只能全部检出，而svn则可以将某个目录单独检出</li>
          </ul>
          <el-link
            href="https://www.cnblogs.com/Sungeek/p/9152223.html"
            type="primary"
            target="_blank">https://www.cnblogs.com/Sungeek/p/9152223.html</el-link>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import command from './gitCommand.json'

export default {
  data() {
    return {
      activeName: ['3'],
      command: command
    }
  }
}
</script>

<style lang="less" scoped>
  .git-container{
    height: 100%;
    .title{
      font-size: 15px;
      padding-left: 5px;
      font-weight: 700;
      width: 100%;
    }
    .divider{
      border-bottom: 1px dashed #ddd;
    }
    .content{
      padding-left: 10px;
      padding-top: 10px;
      .cmd{
        margin-right: 15px;
        font-weight: 700;
      }
    }
  }
</style>
