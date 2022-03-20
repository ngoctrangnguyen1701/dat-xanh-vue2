<template>
  <footer>
    <div class="bg-footer-opacity">
      <b-row>
        <b-col lg="5">
          <div class="mb-5">LOGO</div>
          <div class="footer-info mr-3">
            <i class="fa-solid fa-location-dot"></i>
            <span>Trụ sở chính: 2W Ung Văn Khiêm, P.25, Quận Bình Thạnh, TP.HCM</span>
          </div>
          <div class="footer-info mr-3">
            <i class="fa-solid fa-phone"></i>
            <span>Điện thoại: 028 6252 5252</span>
          </div>
          <div class="footer-info mr-3">
            <i class="fa-solid fa-fax"></i>
            <span>Fax: 028 6252 5252</span>
          </div>
          <div class="footer-info mr-3">
            <i class="fa-solid fa-envelope"></i>
            <span>Email: info@datxanh.com.vn</span>
          </div>
          <div class="footer-info mr-3">
            <i class="fa-solid fa-globe"></i>
            <span>Website: www.datxanh.vn</span>
          </div>
        </b-col>
        <b-col lg="7">
          <b-row>
            <FooterItem
              v-for="(item, index) in footerList"
              :key="index"
              :item="item"
            />
          </b-row>
        </b-col>
      </b-row>    

      <div class="footer-bottom mt-4">
        <div class="social">
          <a href="/" class="mr-4">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="/" class="mr-4">
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
        <span>Copyright © 2022 DAT XANH GROUP. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<script>
import footerList from './data/footerList'
import FooterItem from './FooterItem.vue'

export default {
  data() {
    return {
      footerList
    }
  },
  components: {
    FooterItem
  }
}
</script>

<style lang="scss" scoped>
  @import './scss/footerStyle.scss';
</style>