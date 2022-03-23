<template>
  <section class="milestones position-relative py-5">
    <div class="mb-5">
      <global-title title="GIẢI THƯỞNG"/>
    </div>
    <div class="wrapper">
      <b-row>
        <carousel-vertical
          :list="prizeList"
          @changeIndex="prizeItem = prizeList[$event]"
        />
        <content-text :item="prizeItem"/>
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
      prizeItem: prizeList[0],
    }
  },
}
</script>

<style lang='scss' scoped>
  
</style>