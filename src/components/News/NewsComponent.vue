<template>
  <section style="padding: 100px">
    <div class="d-flex border-bottom">
      <global-title
        title="TIN TỨC"
        position="left"
      />
      <div class="breadcrumbs">
        <BreadcrumbsItem
          v-for="(item, index) in breadcrumbsList"
          :key="index"
          :item="item"
          :isLastIndex="index === breadcrumbsList.length - 1 ? true : false"
        />
      </div>
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
import breadcrumbsList from './data/breadcrumbsList'
import newsList from './data/newsList'

import BreadcrumbsItem from './BreadcrumbsItem.vue'
import NewsItem from './NewsItem.vue'

export default {
  data() {
    return {
      breadcrumbsList,
      newsList,
    }
  },
  components: {
    BreadcrumbsItem,
    NewsItem,
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    align-items: end;

    flex-grow: 1;
  }
</style>