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
    color: $color-blue1;
    // font-size: 33px;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
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