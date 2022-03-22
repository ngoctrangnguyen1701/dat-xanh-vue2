<template>
  <div>
    <story-component/>
    <milestones-component/>
  </div>
</template>

<script>
import StoryComponent from './StoryComponent.vue'
import MilestonesComponent from './MilestonesComponents/MilestonesComponents.vue'

export default {
  data() {
    return {
    }
  },
  components: {
    StoryComponent,
    MilestonesComponent,
  }
}
</script>

<style lang='scss' scoped>
  
</style>