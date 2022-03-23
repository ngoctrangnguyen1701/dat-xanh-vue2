<template>
  <section>
    <div class="d-flex">
      <b-col lg="6" class="bg-column-left d-none d-lg-block"></b-col>
      <b-col lg="6" class="px-0 pb-5">
        <div class="bg-title pl-3 pl-md-5 pb-4">
          <global-title
            title="ĐẦU TƯ & HỢP TÁC"
            position="left"
            colorTitle="white"
          />
          <div class="d-flex mt-5">
            <b-col md="6" class="statistic">
              <p class="mb-0">Đã & đang triển khai</p>
              <h3>16 <span>dự án</span></h3>
            </b-col>
            <b-col md="6" class="statistic">
              <p class="mb-0">Hợp tác phát triển</p>
              <h3>50 <span>dự án</span></h3>
            </b-col>
          </div>
        </div>
        <div class="mt-4 px-5">
          <global-title
            title="ĐỐI TÁC"
            position="left"
          />
          <PartnerSlider/>
        </div>
      </b-col>
    </div>
  </section>
</template>

<script>
import PartnerSlider from './PartnerSlider.vue'

export default {
  components: {
    PartnerSlider
  }  
}
</script>

<style lang="scss" scoped>
  .bg-column-left {
    background-image: url(https://datxanh.vn/assets/uploads/myfiles/images/home/hop-tac.jpg);
    background-size: cover;
    background-repeat: no-repeat;
  }

  .bg-title {
    background-image: url(https://datxanh.vn/template/tint/modules/main/images/bg-dautu.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
    padding-top: 80px;
  }

  .statistic {
    font-size: 18px;
    color: white;

    h3 {
      font-size: 50px;
    }

    span {
      font-size: 27px;
    }
  }
</style>