import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import './scss/global.scss'

import BtnReadMore from './global/components/BtnReadMore.vue'
import GlobalTitle from './global/components/GlobalTitle.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('GlobalTitle', GlobalTitle)
Vue.component('BtnReadMore', BtnReadMore)

new Vue({
  render: h => h(App),
}).$mount('#app')
