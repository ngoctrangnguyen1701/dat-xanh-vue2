<template>
  <div class="w-100 navbar-mobile" :style="value && 'right: 0'">
    <router-link to="/">
      <div
        class="text-center my-3 d-block navbar-mobile-item"
        @click="$emit('input', false)"
      >
        TRANG CHỦ
      </div>
    </router-link>
    <router-link
      v-for="(item, index) in navbarList"
      :key="index"
      :to="item.linkParent"
    >
      <div
        class="text-center my-3 d-block navbar-mobile-item"
        @click="$emit('input', false)"
      >
        {{ item.labelParent }}
      </div>
    </router-link>
  </div>
</template>

<script>
import navbarList from "@/global/data/navbarList";

export default {
  props: ["value"],
  data() {
    return {
      navbarList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/variables.scss";

.navbar-mobile {
  width: 100%;
  height: 100%;

  background: white;
  border-top: 1px solid #cccccc;
  max-width: 400px;

  position: fixed;
  right: -100%;
  z-index: 1001;
  transition: 0.5s;
}

.navbar-mobile-item {
  color: $color-text;
  font-weight: bold;
  &:hover {
    color: #26b3ef;
  }
}
</style>
