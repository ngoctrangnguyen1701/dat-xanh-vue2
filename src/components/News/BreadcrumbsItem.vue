<template>
  <div 
    :class="isLastIndex && 'pr-0 no-line'"
  >
    <a :href="item.link">{{item.label}}</a>
  </div>
</template>

<script>
export default {
  props: ['item', 'isLastIndex']
}
</script>

<style scoped lang="scss">
  @import '@/scss/variables.scss';

  div {
    position: relative;
    padding: 0 20px 0 20px;

    &:after {
      content: '';
      background: #333;
      width: 1px;
      height: 15px;

      position: absolute;
      right: 0;
      // top: 100%;
      // transform: translateY(-15px);
      bottom: 7px;
    }

    &.no-line {
      &:after {
        display: none
      }
    }
  }

  a {
    color: $color-text;
    font-size: 18px;
  }
</style>