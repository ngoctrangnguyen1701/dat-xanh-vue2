<template>
  <section class="milestones position-relative py-5" style="background: #f6f6f6">
    <div class="mb-4">
      <global-title title="CÁC CỘT MỐC"/>
    </div>
    <div class="wrapper">
      <b-row>
        <carousel-vertical @changeText="textList = $event"/>
        <content-text :textList="textList"/>
      </b-row>
    </div>
  </section>
</template>

<script>
import CarouselVertical from './CarouselVertical.vue'
import ContentText from './ContentText.vue'
import milestoneList from './data/milestoneList'

export default {
  data() {
    return {
      textList: milestoneList[0].textList
    }
  },
  components: {
    CarouselVertical,
    ContentText
  }
}
</script>

<style lang='scss' scoped>
  .milestones {
    &:after {
      content: '';
      display: block;
      width: 50%;
      height: 100%;
      background-image: url(https://www.datxanh.vn/template/tint/images/setting.gif);
      background-position: right;
      background-repeat: no-repeat;

      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>