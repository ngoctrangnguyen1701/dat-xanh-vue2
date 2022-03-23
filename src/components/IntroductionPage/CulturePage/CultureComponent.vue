<template>
  <section>
    <div class="mt-5 mb-4">
      <global-title title="VĂN HÓA DOANH NGHIỆP"/>
    </div>
    <culture-item
      v-for="(item, index) in cultureList"
      :key="index"
      :item="item"
      :index="index"
    />
  </section>
</template>

<script>
import CultureItem from './CultureItem.vue'
import cultureList from './data/cultureList'

export default {
  components: { CultureItem },
  data() {
    return {
      cultureList
    }
  },
}
</script>

<style lang='scss' scoped>
  
</style>