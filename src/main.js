import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(animate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
