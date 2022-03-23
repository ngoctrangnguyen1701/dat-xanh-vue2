<template>
  <b-row
    :class="index % 2 ? 'culture-item flex-row-reverse' : 'culture-item'"
  >
    <b-col lg="6" class="pr-lg-0">
      <div class="wrapper pr-lg-0" :style="index % 2 && 'padding-left: 50px'">
        <h3>{{item.title}}</h3>
        <div
          v-for="(text, index) in item.textList"
          :key="index"
          class="content-text-item mr-3 mt-3 d-flex align-items-center"
        >
          <div class="bg-img-icon"></div>
          <span class="d-block flex-grow-1" style="width: 80%">{{text}}</span>
        </div>
      </div>    
    </b-col>
    <b-col lg="6"
      :style="`background-image: url(${item.imgUrl})`"
      class="bg-column-right"
    ></b-col>
  </b-row>
</template>

<script>
export default {
  props: ['item', 'index'],
}
</script>

<style lang='scss' scoped>
  @import '@/scss/variables.scss';

  .culture-item {
    background: #f1f1f1;
    align-items: center;
  }

  h3 {
    font-size: 30px;
    color: $color-blue4;
  }

  .content-text-item {
    .bg-img-icon {
      width: 14px;
      height: 12px;
      background-image: url(https://www.datxanh.vn/template/tint/images/icon-bullets.svg);
      background-size: cover;
      margin-right: 10px;
    }

    span {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .bg-column-right {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 15% 0;
    //--> padding chỉnh theo phần trăm là phần trăm dựa vào cái width của elment cha chứa nó
  }
</style>