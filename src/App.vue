<template>
  <div id="app">
    <NavBar/>
    <IntroVideo/>
    <StockComponent/>
    <!-- <ChartComponent/> -->
    <!-- <LineChart/> -->
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import IntroVideo from './components/IntroVideo.vue'
import StockComponent from './components/Stock/StockComponent.vue'
// import ChartComponent from './components/Chart/ChartComponent.vue'

export default {
  components: {
    NavBar,
    IntroVideo,
    StockComponent,
    // ChartComponent,
  }
}
</script>
