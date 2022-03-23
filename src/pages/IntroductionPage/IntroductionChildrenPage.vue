<template>
  <div>
    <story-component/>
    <milestones-component/>
  </div>
</template>

<script>
import StoryComponent from '@/components/IntroductionPage/IntroductionChildrenPage/StoryComponent.vue'
import MilestonesComponent from '@/components/IntroductionPage/IntroductionChildrenPage/MilestonesComponents/MilestonesComponents.vue'

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