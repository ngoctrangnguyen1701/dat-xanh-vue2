<template>
  <div>
    <chart-component/>
    <dxg-va-cong-chung/>
  </div>
</template>

<script>
import ChartComponent from '@/components/StockPage/StockChildrenPage/ChartComponent.vue'
import DxgVaCongChung from '@/components/StockPage/StockChildrenPage/DxgVaCongChung.vue'

export default {
  components: {
    ChartComponent,
    DxgVaCongChung,
  },
  data() {
    return {
    }
  },
}
</script>