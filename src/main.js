import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import elementUI from 'element-ui'
import $http from '@/http'
import moment from 'moment'
import VueCodeMirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import '@/icons'
import 'element-ui/lib/theme-chalk/index.css'
import '@/index.less'
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.config.productionTip = false

Vue.use(elementUI)
Vue.use(VueCodeMirror)

Vue.prototype.$http = $http
Vue.prototype.$moment = moment

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
