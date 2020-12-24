<template>
  <div>
    <p>
      <template v-for="item in list">
        <div :key="item.name">
          <b>{{ item.name }}：</b>{{ item.data.join('、') }}
        </div>
      </template>
    </p>
    <p>
      <b>注意：</b><br>
      <ul>
        <template v-for="(item, index) in tips">
          <ol :key="'tip_'+index">{{ index+1 }}、{{ item }}</ol>
        </template>
      </ul>
    </p>
    <p>
      <b>完整的导航解析流程</b><br>
      <ul>
        <template v-for="(item, index) in process">
          <ol :key="'process_'+index">{{ index+1 }}、{{ item }}</ol>
        </template>
      </ul>
    </p>
    <p>
      <el-link
        href="https://router.vuejs.org/zh/guide/advanced/navigation-guards.html"
        type="primary"
        target="_blank">https://router.vuejs.org/zh/guide/advanced/navigation-guards.html</el-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: '全局守卫', data: ['beforeEach', 'beforeResolve', 'afterEach'] },
        { name: '路由独享守卫', data: ['beforeEnter'] },
        { name: '组件内守卫', data: ['beforeRouteEnter', 'beforeRouteUpdate', 'beforeRouteLeave'] }
      ],
      tips: [
        '参数或查询的改变不会触发进入/离开的导航守卫(经测是不会触发组件内进入离开守卫)，可以通过观察$route，或使用组件内守卫beforeRouteUpdate',
        'beforeRouteEnter不能访问this，但是可以使用next(vm=>{})，通过vm访问组件实例。beforeRouteEnter是支持给next传递回调的唯一守卫'
      ],
      process: [
        '导航被触发',
        '在失活的组件内调用beforeRouteLeave',
        '调用全局beforeEach',
        '在重用的组件内调用beforeRouteUpdate',
        '在路由配置里调用beforeEnter',
        '解析异步路由组件',
        '在激活的组件里调用beforeRouteEnter',
        '调用全局的beforeResolve',
        '导航被确认',
        '调用全局的afterEach',
        '触发DOM更新',
        '调用beforeRouteEnter守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入'
      ]
    }
  }
}
</script>

<style>

</style>
