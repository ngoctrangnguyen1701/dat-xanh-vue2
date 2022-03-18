<template>
  <div id="app">
    <NavBar/>
    <IntroVideo/>
    <StockComponent/>
    <ActivitiesComponent/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import IntroVideo from './components/IntroVideo.vue'
import StockComponent from './components/Stock/StockComponent.vue'
import ActivitiesComponent from './components/Activities/ActivitiesComponent.vue'

export default {
  components: {
    NavBar,
    IntroVideo,
    StockComponent,
    ActivitiesComponent,
  }
}
</script>

<style lang="scss">
  @import './scss/title.scss'
</style>