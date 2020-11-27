import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less'

Vue.config.productionTip = false

Vue.use(elementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
