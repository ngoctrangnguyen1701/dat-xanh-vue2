<template>
  <div class="wrapper">
    <div class="d-none d-lg-flex justify-content-between justify-content-xl-around border-bottom menu">
      <router-link
        v-for="(item, index) in list"
        :key="index"
        :to="item.link"
        class="menu-item pt-5 pb-3 position-relative"
        :class="item.link.includes($route.path) && 'active'"
      >
        {{item.label.toUpperCase()}}
      </router-link>
    </div>

    <!-- COLLAPSE MENU -->
    <div class="d-block d-lg-none mt-4">
      <div
        v-b-toggle.collapse-1
        class="position-relative btn-collapse"
      >
        {{menu}}
        <i class="fa-solid fa-angle-down position-absolute" style="right: 5px; top: 10px"></i>
      </div>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <router-link
            v-for="(item, index) in list"
            :key="index"
            :to="item.link"
            :class="index === list.length - 1 ? 'd-block' : 'd-block mb-3'"
            :style="item.link === $route.path ? 'color: #0066b3' : 'color: #333333'"
          >
            {{item.label.toUpperCase()}}
          </router-link>
        </b-card>
      </b-collapse>
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
  @import './navBarMenu2Style.scss';
</style>