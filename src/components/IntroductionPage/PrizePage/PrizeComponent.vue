<template>
  <section class="milestones position-relative py-5">
    <div class="mb-4">
      <global-title title="GIẢI THƯỞNG"/>
    </div>
    <div class="wrapper">
      <b-row>
        <carousel-vertical
          :list="prizeList"
          @changeIndex="prizeInsideList = prizeList[$event].prizeList"
        />
        <content-text/>
      </b-row>
    </div>
  </section>
</template>

<script>
import prizeList from './data/prizeList'
import ContentText from './ContentText.vue'

export default {
  components: { ContentText },
  data() {
    return {
      prizeList,
      prizeInsideList: prizeList[0].prizeList
    }
  },
}
</script>

<style lang='scss' scoped>
  
</style>