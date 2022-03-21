import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import './scss/global.scss'

import BtnReadMore from './global/components/BtnReadMore.vue'
import GlobalTitle from './global/components/GlobalTitle.vue'
import routes from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.component('GlobalTitle', GlobalTitle)
Vue.component('BtnReadMore', BtnReadMore)

const router = new VueRouter({routes})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
