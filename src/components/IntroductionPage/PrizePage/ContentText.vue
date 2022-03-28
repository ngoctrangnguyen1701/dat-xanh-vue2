<template>
  <b-col lg="6">
    <h3 class="period-large text-center">Năm {{item.period}}</h3>
    <b-carousel
      v-model="slide"
      :interval="3000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="(prize, index) in item.prizeList"
        :key="index"
        img-src="https://www.datxanh.vn/template/tint/modules/personnel/images/bg-giaithuong.jpg"
      >
        <b-col cols="4" lg="6" class="mx-auto carousel-img">
          <img :src="prize.imgUrl" class="img-fluid">
        </b-col>
        <p class="mb-0 my-3 text-center" style="color: #333333">{{prize.text}}</p>
      </b-carousel-slide>
    </b-carousel>

  </b-col>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .period-large {
    font-size: 40px;
    font-weight: bold;
    color: $color-blue4;
  }
</style>
