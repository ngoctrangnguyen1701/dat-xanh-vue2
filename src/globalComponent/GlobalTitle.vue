<template>
  <div class="title">
    <p 
      :class="`text-${position}`"
      :style="colorTitle && `color: ${colorTitle}`"
    >{{title}}</p>
    <div
      class="title-line"
      :class="position !== 'center' && 'm-0'"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'center'
    },
    colorTitle: String
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .title {
    // text-align: center;
    color: $color-blue1;
    font-size: 33px;
    font-weight: bold;
    
    p {
      margin-bottom: 5px;
    }

    &-line {
      width: 61px;
      height: 4px;
      margin: 0 auto;
      background-color: $color-blue2;
    }
  }
</style>