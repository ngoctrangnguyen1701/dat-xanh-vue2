<template>
  <b-col sm="2" class="my-3" style="min-width: 250px">
    <div class="border">
      <img :src="imgUrl">
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['imgUrl']  
}
</script>

<style lang="scss" scoped>
  .border {
    display: flex;
    height: 118px;

    img {
      max-width: 80%;
      max-height: 80%;
      display: block;
      margin: auto;
    }
  }
</style>