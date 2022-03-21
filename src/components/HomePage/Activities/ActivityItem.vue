<template>
  <b-col md="6" lg="3" class="position-relative activity-item">
    <div class="bg-item" :style="{backgroundImage: `url(${imgUrl})`}"></div>
    <div class="bg-blue"></div>
    <div class="bg-blue2"></div>
    <a href="" class="text-white d-block text-decoration-none">
      <div class="text-white">
        <span>{{textSmall}}</span>
        <h3>{{textLarge}}</h3>
        <p>{{description}}</p>
      </div>
    </a>
  </b-col>
</template>

<script>
export default {
  props: ['textLarge', 'textSmall', 'description', 'imgUrl']
}
</script>

<style lang="scss" scoped>
  @import './scss/activityItemStyle.scss';
</style>