<template>
  <section class="milestones position-relative py-5" style="background: #f6f6f6">
    <div class="mb-4">
      <global-title title="CÁC CỘT MỐC"/>
    </div>
    <div class="wrapper">
      <b-row>
        <carousel-vertical
          :list="milestoneList"
          @changeIndex="textList = milestoneList[$event].textList"
        />
        <content-text :textList="textList"/>
      </b-row>
    </div>
    <div class="bg-gears d-none d-lg-block"></div>
  </section>
</template>

<script>
import milestoneList from './data/milestoneList'
import ContentText from './ContentText.vue'

export default {
  data() {
    return {
      milestoneList,
      textList: milestoneList[0].textList
    }
  },
  components: {
    ContentText
  }
}
</script>

<style lang='scss' scoped>
  @import '@/scss/mixins.scss';

  .milestones {
    &.bg-gears {
      width: 500px;
      height: 400px;
      
      @include bg-img('https://www.datxanh.vn/template/tint/images/setting.gif', center);
      background-size: 80%;
      mix-blend-mode: darken; //cái này làm cho element nó nằm ở dưới, và mất cái khung viền xung quanh

      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>