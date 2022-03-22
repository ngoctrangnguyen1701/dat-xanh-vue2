<template>
  <div>
    <bg-header title="GIỚI THIỆU" imgUrl="https://datxanh.vn/assets/uploads/myfiles/files/banner(1).jpg"/>
    <nav-bar-menu-2 menu="GIỚI THIỆU"/>
    <story-component/>
    <milestones-component/>
  </div>  
</template>

<script>
import StoryComponent from '@/components/IntroductionPage/StoryComponent.vue'
import MilestonesComponent from '@/components/IntroductionPage/MilestonesComponents/MilestonesComponents.vue'

export default {
  components: {
    StoryComponent,
    MilestonesComponent,
  },
}
</script>