<template>
  <div>
    <IntroVideo/>
    <StockComponent/>
    <ActivitiesComponent/>
    <SystemCompany/>
    <OutstandingProject/>
    <NewsComponent/>
    <InvestAndCooperate/>
  </div>
</template>

<script>
import IntroVideo from '@/components/IntroVideo.vue'
import StockComponent from '@/components/Stock/StockComponent.vue'
import ActivitiesComponent from '@/components/Activities/ActivitiesComponent.vue'
import SystemCompany from '@/components/SystemCompany/SystemCompany.vue'
import OutstandingProject from '@/components/OutstandingProject/OutstandingProject.vue'
import NewsComponent from '@/components/News/NewsComponent.vue'
import InvestAndCooperate from '@/components/InvestAndCooperate/InvestAndCooperate.vue'

export default {
  components: {
    IntroVideo,
    StockComponent,
    ActivitiesComponent,
    SystemCompany,
    OutstandingProject,
    NewsComponent,
    InvestAndCooperate,
  }  
}
</script>