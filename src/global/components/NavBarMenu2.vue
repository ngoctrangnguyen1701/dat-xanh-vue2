<template>
  <div class="wrapper">
    <div class="d-flex justify-content-around border-bottom menu">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.link"
        class="menu-item pt-5 pb-3 position-relative"
        :class="item.link.includes($route.path) && 'active'"
      >{{item.label.toUpperCase()}}</router-link>
    </div>
  </div>
</template>

<script>
import navbarList from '@/global/data/navbarList'

export default {
  props: ['menu'],
  data() {
    return {
      list: navbarList.find(item => item.labelParent === this.menu).linkList,
    }
  },
}
</script>

<style lang='scss' scoped>
  .menu {
    padding: 0 10%;
  }

  .menu-item {
    display: block;
    border-bottom: 3px solid transparent;
    margin-bottom: -1px;

    font-size: 18px;
    color: #666666;

    &:after {
      content: '';
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 10px solid transparent;

      position: absolute;
      left: calc(50% - 8px);
      bottom: -1px;
    }

    &:hover {
      color: #0066b3;
      border-color: #27b3ee;

      &:after {
        border-bottom: 10px solid #27b3ee;;
      }
    }

    &.active {
      color: #0066b3;
      border-color: #27b3ee;

      &:after {
        border-bottom: 10px solid #27b3ee;;
      }
    }
  }
</style>