<template>
  <div 
    class=""
    :class="isHovering && 'show'"
    :style="`height: ${height}px; top: ${top}px`"
  ></div>
</template>

<script>
export default {
  props: ['isHovering', 'height'],
  data() {
    return {
      width: 0,
      top: 0,
    }
  },
  mounted() {
    this.width = document.getElementById('header-navbar').offsetWidth
    this.top = document.getElementById('header-navbar').offsetHeight
  }
}
</script>

<style lang="scss" scoped>
  div {
    background: rgba(255,255,255,0.9);
    width: 100%;
    opacity: 0;
    cursor: context-menu;

    position: fixed;
    left: 0;
    transform: translateY(20px);
    z-index: -100;
    transition: .5s;

    &.show {
      opacity: 1;
      transform: translateY(0);
      z-index: 100;
    }
  }
</style>