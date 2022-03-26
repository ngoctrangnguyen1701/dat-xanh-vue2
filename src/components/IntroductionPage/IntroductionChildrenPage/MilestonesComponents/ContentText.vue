<template>
  <b-col lg="9">
    <div
      v-for="(item, index) in textList"
      :key="index"
      class="content-text-item mr-3 mt-3 d-flex align-items-center"
    >
      <div class="icon">
        <img src="https://www.datxanh.vn/template/tint/images/icon-bullets.svg" class="w-100">
      </div>
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
  @import '@/scss/mixins.scss';

  .content-text-item {
    .icon {
      width: 14px;
      margin-right: 10px;
    }
  }
</style>