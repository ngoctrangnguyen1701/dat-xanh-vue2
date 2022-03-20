<template>
  <b-col md="4" class="my-3">
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