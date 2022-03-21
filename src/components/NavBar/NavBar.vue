<template>
  <section id="header-navbar" class="position-relative">
    <div class="wrapper">
      <b-row class="align-items-center">
        <b-col lg="3">LOGO</b-col>
        <b-col lg="9">
          <b-row class="py-3 align-items-center justify-content-between">
            <div class="navbar-item icon-home">
              <i class="fa-solid fa-house"></i>
            </div>
            <NavBarItem
              v-for="(item, index) in navbarList"
              :key="index"
              :item="item"
              :index="index"
            />
            <div
              class="navbar-item icon-search"
              @click.stop="showFrameSearch = !showFrameSearch"
            >
              <i class="fa-solid fa-search"></i>
              <FrameSearch :show="showFrameSearch" v-model="searchText" />
            </div>
            <div
              class="navbar-item icon-flag"
              @click.stop="showFrameFlag = !showFrameFlag"
            >
              <div
                class="bg-flag"
                :style="`background-image: url(${chooseFlag})`"
              ></div>
              <i class="fa-solid fa-caret-down"></i>
              <FrameFlag :show="showFrameFlag" v-model="chooseFlag" />
            </div>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
//https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
//chặn sự kiện mặc định event.preventDefault()
//và ngưng sự lan truyền (nổi bọt) event.stopPropagation() trong Vue

//binding dữ liệu giữa thằng cha với con trong vue2
// https://www.youtube.com/watch?v=S7PFVKZFmHk

import navbarList from '@/global/data/navbarList'

import FrameSearch from "./FrameSearch.vue";
import FrameFlag from "./FrameFlag.vue";
import NavBarItem from './NavBarItem.vue'

export default {
  data() {
    return {
      showFrameSearch: false,
      searchText: "",
      showFrameFlag: false,
      chooseFlag: "https://datxanh.vn/template/tint/images/flag-vi.svg",
      navbarList,
    };
  },
  components: {
    FrameSearch,
    FrameFlag,
    NavBarItem,
  },
  mounted() {
    //XỬ LÍ CLICK OUTSIDE TẮT CÁI KHUNG SEARCH ĐI
    const body = document.getElementsByTagName("body")[0];
    // console.log(body);
    body.addEventListener("click", () => {
      this.showFrameSearch = false;
      this.showFrameFlag = false;
    });
  },
  watch: {
    searchText(newValue) {
      console.log("searchText: ", newValue);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./scss/navbarStyle.scss";
</style>
