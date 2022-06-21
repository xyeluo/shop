import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import TopBar from '@cmm/TopBar.vue'

import 'comtoolcss'
import '@ass/css/base.css'
import '@ass/font/iconfont.css'

Vue.component(TopBar.name, TopBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
