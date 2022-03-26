<template>
  <div
    class="bg-header" 
    :style="`background-image: url('${imgUrl}')`"
  >
    <div class="wrapper">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'imgUrl']
}
</script>

<style lang="scss" scoped>
  .bg-header {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 12% 0;

    h1 {
      margin: 0;
      font-size: 25px;
      font-weight: bold;
      color: white;
    }

    @media (min-width: 992px) {
      h1 {
        font-size: 50px;
      }
    }
  }
</style>