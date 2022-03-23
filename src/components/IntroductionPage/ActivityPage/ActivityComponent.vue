<template>
  <section>
    <div class="mt-5 mb-4">
      <global-title title="LĨNH VỰC HOẠT ĐỘNG"/>
    </div>
    <activity-item
      v-for="(item, index) in activityList"
      :key="index"
      :item="item"
      :index="index"
    />
  </section>
</template>

<script>
import ActivityItem from './ActivityItem.vue'
import activityList from './data/activityList'

export default {
  components: { ActivityItem },
  data() {
    return {
      activityList
    }
  },
}
</script>