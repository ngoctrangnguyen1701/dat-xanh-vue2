import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import './scss/global.scss'
import BtnReadMore from './globalComponent/BtnReadMore.vue'
import GlobalTitle from './globalComponent/GlobalTitle.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('GlobalTitle', GlobalTitle)
Vue.component('BtnReadMore', BtnReadMore)

new Vue({
  render: h => h(App),
}).$mount('#app')
