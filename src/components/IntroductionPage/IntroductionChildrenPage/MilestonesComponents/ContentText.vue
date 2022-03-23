<template>
  <b-col lg="9">
    <div
      v-for="(item, index) in textList"
      :key="index"
      class="content-text-item mr-3 mt-3 d-flex align-items-center"
    >
      <div class="bg-img"></div>
      <span>{{item}}</span>
    </div>
  </b-col>
</template>

<script>

export default {
  props: ['textList'],
}
</script>

<style lang='scss' scoped>
  .content-text-item {
    .bg-img {
      width: 14px;
      height: 12px;
      background-image: url(https://www.datxanh.vn/template/tint/images/icon-bullets.svg);
      background-size: cover;
      margin-right: 10px;
    }
  }
</style>