<template>
  <b-container fluid style="padding: 0 100px" id="navbar">
    <b-row class="align-items-center">
      <b-col lg="3">LOGO</b-col>
      <b-col lg="9">
        <b-row class="py-3 align-items-center justify-content-between">
          <div class="navbar-item icon-home">
            <i class="fa-solid fa-house"></i>
          </div>
          <div class="navbar-item">GIỚI THIỆU</div>
          <div class="navbar-item">CỔ PHIẾU</div>
          <div class="navbar-item">DỰ ÁN</div>
          <div class="navbar-item">TIN TỨC</div>
          <div class="navbar-item">TUYỂN DỤNG</div>
          <div class="navbar-item">THƯ VIỆN</div>
          <div class="navbar-item">LIÊN HỆ</div>
          <div
            class="navbar-item icon-search"
            @click.stop="showFrameSearch = !showFrameSearch"
          >
            <i class="fa-solid fa-search"></i>
            <FrameSearch
              :show="showFrameSearch"
              v-model="searchText"
            />
          </div>
          <div
            class="navbar-item icon-flag"
            @click.stop="showFrameFlag = !showFrameFlag"
          >
            <!-- <img class="w-100" :src="chooseFlag"> -->
            <div class="bg-flag" :style="`background-image: url(${chooseFlag})`"></div>
            <i class="fa-solid fa-caret-down"></i>
            <FrameFlag
              :show="showFrameFlag"
              v-model="chooseFlag"
            />
          </div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
//https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
//chặn sự kiện mặc định event.preventDefault() 
//và ngưng sự lan truyền (nổi bọt) event.stopPropagation() trong Vue

//binding dữ liệu giữa thằng cha với con trong vue2
// https://www.youtube.com/watch?v=S7PFVKZFmHk

import FrameSearch from './FrameSearch.vue'
import FrameFlag from './FrameFlag.vue'

export default {
  data() {
    return {
      showFrameSearch: false,
      searchText: '',
      showFrameFlag: false,
      chooseFlag: 'https://datxanh.vn/template/tint/images/flag-vi.svg',
    }
  },
  components: {
    FrameSearch,
    FrameFlag,
  },
  mounted() {
    //XỬ LÍ CLICK OUTSIDE TẮT CÁI KHUNG SEARCH ĐI
    const body = document.getElementsByTagName('body')[0]
    // console.log(body);
    body.addEventListener('click', () => {
      this.showFrameSearch = false
      this.showFrameFlag = false
    })
  },
  watch: {
    searchText(newValue) {
      console.log('searchText: ', newValue);
    }
  }
}

</script>

<style scoped lang="scss">
  @import './scss/navbarStyle';
</style>