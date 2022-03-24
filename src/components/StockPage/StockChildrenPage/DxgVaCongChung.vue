<template>
  <section>
    <div class="mt-5 mb-4">
      <global-title title="DXG VÀ CÔNG CHÚNG"/>
    </div>
    <b-row>
      <NewsItem
        v-for="(item, index) in newsList"
        :key="index"
        :item="item"
      />
    </b-row>
  </section>
</template>

<script>
import newsList from './data/newsList'
import NewsItem from './NewsItem.vue'

export default {
  components: {
    NewsItem
  },
  data() {
    return {
      newsList,
    }
  }
}
</script>