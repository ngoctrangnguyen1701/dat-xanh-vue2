<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import FooterComponent from './components/Footer/FooterComponent.vue'

export default {
  components: {
    NavBar,
    FooterComponent,
  }
}
</script>