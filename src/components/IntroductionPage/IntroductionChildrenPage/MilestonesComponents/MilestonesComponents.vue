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
  </section>
</template>

<script>
import milestoneList from './data/milestoneList'
import ContentText from './ContentText.vue'

export default {
  data() {
    return {
      textList: milestoneList[0].textList
    }
  },
  components: {
    ContentText
  }
}
</script>

<style lang='scss' scoped>
  .milestones {
    &:after {
      content: '';
      display: block;
      width: 500px;
      height: 400px;
      background-image: url(https://www.datxanh.vn/template/tint/images/setting.gif);
      background-position: right;
      background-repeat: no-repeat;
      background-size: 80%;
      mix-blend-mode: darken;

      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
</style>