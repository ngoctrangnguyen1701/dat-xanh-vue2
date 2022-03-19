<template>
  <section class="outstanding-project" style="padding-bottom: 80px">
    <div class="d-flex flex-wrap">
      <b-col lg="6" style="padding: 80px 0 80px 100px">
        <div class="title mb-3">
          <p class="text-white text-left">DỰ ÁN NỔI BẬT</p>
          <div class="title-line m-0"></div>
        </div>
        <b-row>
          <OutstandingProjectItem
            v-for="(item, index) in projectList"
            :key="index"
            :item="item"
          />
        </b-row>
        <!-- <a href="" class="btn-read-more">
          XEM THÊM
          <i class="fa-solid fa-sort-up d-inline-block ml-2"></i>
        </a> -->
        <btn-read-more/>
      </b-col>
      <b-col lg="6" class="pr-0">
        <div class="outstanding-project-img">
          <div style="overflow: hidden">
            <img class="w-100" src="https://www.datxanh.vn/assets/uploads/myfiles/files/duan-dxg_2.jpg">
          </div>
          <div class="bg-orange">
            <p>Tạo lập cuộc sống ưu việt</p>
          </div>
        </div>
      </b-col>
    </div>
  </section>
</template>

<script>
import OutstandingProjectItem from './OutstandingProjectItem.vue'
import projectList from './data/projectList'
import BtnReadMore from '@/globalComponent/BtnReadMore.vue'

export default {
  data() {
    return {
      projectList
    }
  },
  components: {
    OutstandingProjectItem,
    BtnReadMore
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .outstanding-project {
    background: #02213a
  }

  // .btn-read-more {
  //   display: block;
  //   margin-top: 15px;

  //   color: $color-blue2;
  //   i {
  //     transform: rotate(90deg) translate(0);
  //     transition: .3s;
  //   }

  //   &:hover {
  //     i {
  //       transform: rotate(90deg) translateY(-5px);
  //     }
  //   }
  // }

  .outstanding-project-img {
    position: relative;
    
    img {
      position: relative;
      z-index: 22;
      transition: 2s;
    }
    .bg-orange {
      background: #f5821f;
      padding: 300px 0 0 300px;

      position: absolute;
      left: -50px;
      bottom: -50px;

      p {
        background: #02213a;
        margin-bottom: 0;
        padding-left: 15px;

        color: white;
        font-size: 24px;
        font-family: 'Quicksand', sans-serif;;
        line-height: 50px;
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
</style>