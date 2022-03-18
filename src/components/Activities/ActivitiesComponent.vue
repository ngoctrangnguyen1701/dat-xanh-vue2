<template>
  <section class="activities">
    <div class="title">
      <p class="text-white">LĨNH VỰC HOẠT ĐỘNG</p>
      <div class="title-line"></div>
    </div>
    <b-container fluid>
      <b-row>
        <ActivityItem
          v-for="(item, index) in list"
          :key="index"
          :textLarge="item.textLarge"
          :textSmall="item.textSmall"
          :description="item.description"
          :imgUrl="item.imgUrl"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ActivityItem from './ActivityItem.vue'
import activityList from './data/activityList'

export default {
  data() {
    return {
      list: activityList
    }
  },
  components: {
    ActivityItem
  },
}
</script>

<style scoped lang="scss">
  .title {
    padding: 60px 0 20px ;
    background-image: url(https://www.datxanh.vn/template/tint/modules/main/images/bgactivity.jpg);
    background-size: cover;
  }
</style>