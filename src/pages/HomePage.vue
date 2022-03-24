<template>
  <div>
    <IntroVideo/>
    <StockComponent/>
    <ActivitiesComponent/>
    <!-- <SystemCompany/> -->
    <global-system-company/>
    <OutstandingProject/>
    <NewsComponent/>
    <InvestAndCooperate/>
  </div>
</template>

<script>
import IntroVideo from '@/components/HomePage/IntroVideo.vue'
import StockComponent from '@/components/HomePage/Stock/StockComponent.vue'
import ActivitiesComponent from '@/components/HomePage/Activities/ActivitiesComponent.vue'
//import SystemCompany from '@/components/HomePage/SystemCompany/SystemCompany.vue'
import OutstandingProject from '@/components/HomePage/OutstandingProject/OutstandingProject.vue'
import NewsComponent from '@/components/HomePage/News/NewsComponent.vue'
import InvestAndCooperate from '@/components/HomePage/InvestAndCooperate/InvestAndCooperate.vue'

export default {
  components: {
    IntroVideo,
    StockComponent,
    ActivitiesComponent,
    // SystemCompany,
    OutstandingProject,
    NewsComponent,
    InvestAndCooperate,
  }  
}
</script>