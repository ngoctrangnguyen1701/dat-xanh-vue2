import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import {BootstrapVue} from 'bootstrap-vue'
import './scss/global.scss'

import BtnReadMore from './global/components/BtnReadMore.vue'
import GlobalTitle from './global/components/GlobalTitle.vue'
import NavBarMenu2 from './global/components/NavBarMenu2/NavBarMenu2.vue'
import BgHeader from './global/components/BgHeader'
import GlobalSystemCompany from './global/components/GlobalSystemCompany/GlobalSystemCompany'
import CarouselVertical from './global/components/CarouselVertical/CarouselVertical'
import IconBack from './global/components/IconBack'
import IconNext from './global/components/IconNext'
import BgImgWithOrangeSquare from './global/components/BgImgWithOrangeSquare'

import routes from './routes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

/* GLOBAL COMPONENT */
Vue.component('GlobalTitle', GlobalTitle)
Vue.component('BtnReadMore', BtnReadMore)
Vue.component('NavBarMenu2', NavBarMenu2)
Vue.component('BgHeader', BgHeader)
Vue.component('GlobalSystemCompany', GlobalSystemCompany)
Vue.component('CarouselVertical', CarouselVertical)
Vue.component('IconBack', IconBack)
Vue.component('IconNext', IconNext)
Vue.component('BgImgWithOrangeSquare', BgImgWithOrangeSquare)

Vue.directive('style', {
  bind: function(el, binding) {
    // console.log(el);
    // console.log(binding);
    const {arg, value} = binding

    if(arg === 'fontSize') {
      el.style.fontSize = value + 'px'
    }
    if(arg === 'color') {
      el.style.color = value
    }
  }
})

const router = new VueRouter({routes})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
