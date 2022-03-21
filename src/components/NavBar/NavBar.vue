<template>
  <section id="header-navbar" class="position-relative">
    <div class="wrapper">
      <div class="d-flex flex-wrap align-items-center">
        <b-col cols="2" class="pl-0">LOGO</b-col>
        <b-col cols="10" class="px-0">
          <b-row class="py-3 align-items-center justify-content-end justify-content-lg-between">
            <div class="navbar-item icon-home d-none d-lg-block">
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
            <div
              class="navbar-item icon-menu d-block d-lg-none"
              @click.stop="showNavBarMobile = !showNavBarMobile"
            >
              <i class="fa-solid fa-xmark" v-if="showNavBarMobile"></i>
              <i class="fa-solid fa-bars" v-else></i>
            </div>
          </b-row>
        </b-col>
      </div>
    </div>
    
    <div class="bg-black-opacity" :style="showNavBarMobile && 'opacity: 1'"></div>
    <NavBarMobile :show="showNavBarMobile"/>
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
import NavBarMobile from './NavBarMobile.vue'

export default {
  data() {
    return {
      showFrameSearch: false,
      searchText: "",
      showFrameFlag: false,
      chooseFlag: "https://datxanh.vn/template/tint/images/flag-vi.svg",
      navbarList,
      showNavBarMobile: false,
    };
  },
  components: {
    FrameSearch,
    FrameFlag,
    NavBarItem,
    NavBarMobile,
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
    showNavBarMobile(newValue) {
      const body = document.getElementsByTagName('body')[0]
      body.style.overflow = newValue ? 'hidden' : 'auto'
    }
  },
};
</script>

<style scoped lang="scss">
@import "./scss/navbarStyle.scss";

  .bg-black-opacity {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .8);

    position: fixed;
    left: 0;
    z-index: 1000;
    transition: .3s;
    opacity: 0;
  }
</style>
