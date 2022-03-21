<template>
  <div class="w-100 navbar-mobile" :style="show && 'right: 0'">
    <a
      href="/"
      class="text-center my-3 d-block navbar-mobile-item"
    >
      TRANG CHỦ
    </a>
    <a
      v-for="(item, index) in navbarList"
      :key="index"
      :href="item.linkParent"
      class="text-center my-3 d-block navbar-mobile-item"
    >
      {{item.labelParent}}
    </a>
  </div>
</template>

<script>
import navbarList from '@/global/data/navbarList'

export default {
  props: ['show'],
  data() {
    return {
      navbarList
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .navbar-mobile {
    width: 100%;
    height: 100%;

    background: white;
    border-top: 1px solid #cccccc;
    max-width: 400px;

    position: fixed;
    right: -100%;
    z-index: 1001;
    transition: .5s
  }

  .navbar-mobile-item {
    color: $color-text;
    font-weight: bold;
    &:hover {
      color: #26b3ef;
    }
  }

</style>