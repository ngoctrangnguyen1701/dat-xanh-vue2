<template>
  <section class="outstanding-project" style="padding-bottom: 80px">
    <div class="wrapper">
      <div class="d-flex flex-wrap">
        <!-- <b-col lg="6" style="padding: 80px 0 80px 100px"> -->
        <b-col lg="6" style="padding: 80px 0">
          <global-title
            title="DỰ ÁN NỔI BẬT"
            position="left"
            colorTitle="white"
          />
          <div class="d-flex flex-wrap">
            <OutstandingProjectItem
              v-for="(item, index) in projectList"
              :key="index"
              :item="item"
            />
          </div>
          <btn-read-more/>
        </b-col>
        <b-col lg="6" class="pr-lg-0">
          <div class="outstanding-project-img">
            <div style="overflow: hidden">
              <img class="w-100" src="https://www.datxanh.vn/assets/uploads/myfiles/files/duan-dxg_2.jpg">
            </div>
            <div class="bg-orange d-none d-lg-block">
              <p>Tạo lập cuộc sống ưu việt</p>
            </div>
          </div>
        </b-col>
      </div>
      
    </div>
  </section>
</template>

<script>
import OutstandingProjectItem from './OutstandingProjectItem.vue'
import projectList from './data/projectList'

export default {
  data() {
    return {
      projectList
    }
  },
  components: {
    OutstandingProjectItem,
  }
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .outstanding-project {
    background: #02213a
  }

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