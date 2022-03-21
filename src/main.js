import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import './scss/global.scss'

import BtnReadMore from './global/components/BtnReadMore.vue'
import GlobalTitle from './global/components/GlobalTitle.vue'
import NavBarMenu2 from './global/components/NavBarMenu2.vue'
import BgHeader from './global/components/BgHeader'

import routes from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

Vue.component('GlobalTitle', GlobalTitle)
Vue.component('BtnReadMore', BtnReadMore)
Vue.component('NavBarMenu2', NavBarMenu2)
Vue.component('BgHeader', BgHeader)

const router = new VueRouter({routes})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
