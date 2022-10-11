import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

import TopBar from '@cmm/TopBar.vue'
import FooterVue from '@cmm/Footer.vue'
import SearchHome from '@cmm/Search.vue'

import 'comtoolcss'
import '@ass/css/base.css'
import '@ass/font/iconfont.css'

import defalImg from '@images/pic_029.gif'

Vue.use(VueLazyLoad, {
  loading: defalImg
})

Vue.component(TopBar.name, TopBar)
Vue.component(FooterVue.name, FooterVue)
Vue.component(SearchHome.name, SearchHome)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate () {
    Vue.prototype.$bus = this
  },
  render: (h) => h(App)
}).$mount('#app')
