<template>
  <div id="app">
    <NavBar/>
    <IntroVideo/>
    <StockComponent/>
    <ActivitiesComponent/>
    <SystemCompany/>
    <OutstandingProject/>
    <NewsComponent/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import IntroVideo from './components/IntroVideo.vue'
import StockComponent from './components/Stock/StockComponent.vue'
import ActivitiesComponent from './components/Activities/ActivitiesComponent.vue'
import SystemCompany from './components/SystemCompany/SystemCompany.vue'
import OutstandingProject from './components/OutstandingProject/OutstandingProject.vue'
import NewsComponent from './components/News/NewsComponent.vue'

export default {
  components: {
    NavBar,
    IntroVideo,
    StockComponent,
    ActivitiesComponent,
    SystemCompany,
    OutstandingProject,
    NewsComponent,
  }
}
</script>

<style lang="scss">
  @import './scss/title.scss'
</style>