<template>
  <div id="app">
    <NavBar/>
    <IntroVideo/>
    <StockComponent/>
    <ActivitiesComponent/>
    <SystemCompany/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import IntroVideo from './components/IntroVideo.vue'
import StockComponent from './components/Stock/StockComponent.vue'
import ActivitiesComponent from './components/Activities/ActivitiesComponent.vue'
import SystemCompany from './components/SystemCompany/SystemCompany.vue'

export default {
  components: {
    NavBar,
    IntroVideo,
    StockComponent,
    ActivitiesComponent,
    SystemCompany,
  }
}
</script>

<style lang="scss">
  @import './scss/title.scss'
</style>