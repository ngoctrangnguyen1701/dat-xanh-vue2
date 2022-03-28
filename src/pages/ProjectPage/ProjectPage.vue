<template>
  <div>
    <bg-header
      title="DỰ ÁN"
      imgUrl="https://www.datxanh.vn/template/tint/modules/project/images/banner.jpg"
    />
    <ProjectComponent/>
  </div>  
</template>

<script>
import ProjectComponent from '@/components/ProjectPage/ProjectComponent.vue'

export default {
  components: {
    ProjectComponent,
  }
}
</script>