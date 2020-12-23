<template>
  <div class="home-container">
    <el-col :span="10">
      <el-card>
        <div slot="header">
          账户信息
        </div>
        <div class="user-info">
          <div>IP：{{ $store.state.user.ip }}</div>
          <div>地址：{{ $store.state.user.nation }}{{ $store.state.user.province }}{{ $store.state.user.city }}</div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card>
        <div slot="header">
          <span>常用网站</span>
        </div>
        <div v-for="web in webs" :key="web.name">
          <el-link
            :href="web.path"
            type="primary"
            target="_blank">{{ web.name }}</el-link>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webs: [
        { name: 'Vue.js', path: 'https://cn.vuejs.org/v2/guide/' },
        { name: 'axios', path: 'http://www.axios-js.com/zh-cn/docs/vue-axios.html' },
        { name: 'creatElement参数', path: 'https://www.cnblogs.com/vickylinj/p/9566474.html' },
        { name: 'element-ui', path: 'https://element.eleme.cn/#/zh-CN/component/table' },
        { name: 'vue-element-admin', path: 'https://panjiachen.github.io/vue-element-admin/#/dashboard' },
        { name: 'iView', path: 'https://www.iviewui.com/components/table' },
        { name: 'iview-admin', path: 'https://admin.iviewui.com/home' },
        { name: 'cron表达式', path: 'https://blog.csdn.net/wh13267207590/article/details/79667529' },
        { name: 'cron用法', path: 'https://www.jianshu.com/p/e9ce1a7e1ed1' },
        { name: 'ECharts', path: 'https://echarts.apache.org/examples/zh/index.html' },
        { name: 'vue-codemirror', path: 'https://blog.csdn.net/weixin_43080277/article/details/83860629' },
        { name: 'codemirror-mergeView', path: 'https://blog.csdn.net/ryleelouth/article/details/104656081?utm_medium=distribute.pc_relevant.none-task-blog-title-2&spm=1001.2101.3001.4242' },
        { name: 'moment.js', path: 'http://momentjs.cn/' },
        { name: '阿里图标库', path: 'https://www.iconfont.cn/search/index' },
        { name: '菜鸟教程', path: 'https://www.runoob.com/' },
        { name: 'node入门教程', path: 'http://nodejs.cn/learn/introduction-to-nodejs' },
        { name: '腾讯位置服务', path: 'https://lbs.qq.com/dev/console/user/info' }
      ]
    }
  },
  mounted() {
    this.getWeather()
  },
  methods: {
    getWeather() {
      this.$http.get('https://wis.qq.com/weather/common', {
        source: 'pc',
        weather_type: 'forecast_1h',
        province: this.$store.state.user.province,
        city: this.$store.state.user.city
      }).then(res => {
        console.log(res)
      })
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
  },
  afterRouteLeave(to, from) {}
}
</script>

<style lang="less" scoped>
  .home-container{

  }
</style>
