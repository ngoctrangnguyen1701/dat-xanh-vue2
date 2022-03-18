<template>
  <section class="activities">
    <div class="title">
      <p class="text-white">LĨNH VỰC HOẠT ĐỘNG</p>
      <div class="title-line"></div>
    </div>
    <b-container fluid>
      <b-row>
        <ActivityItem
          textLarge="BẤT ĐỘNG SẢN"
          textSmall="PHÁT TRIỂN"
          description="Đây là một trong những hoạt động then chốt, tạo nên thương hiệu Đất Xanh. Chúng tôi luôn cập nhật công nghệ, nâng cao chất lượng công trình"
          imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/home/phat-trien-bds.jpg"
        />
        <ActivityItem
          textLarge="BẤT ĐỘNG SẢN"
          textSmall="DỊCH VỤ"
          description="Đây là một trong những hoạt động then chốt, tạo nên thương hiệu Đất Xanh. Chúng tôi luôn cập nhật công nghệ, nâng cao chất lượng công trình"
          imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/home/HSS_6331_resize.jpg"
        />
        <ActivityItem
          textLarge="VẬT LIỆU XÂY DỰNG"
          textSmall="XÂY DỰNG &amp;"
          description="Đây là một trong những hoạt động then chốt, tạo nên thương hiệu Đất Xanh. Chúng tôi luôn cập nhật công nghệ, nâng cao chất lượng công trình"
          imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/home/xay-dung.jpg"
        />
        <ActivityItem
          textLarge="KHU CÔNG NGHIỆP"
          textSmall=""
          description="Đây là một trong những hoạt động then chốt, tạo nên thương hiệu Đất Xanh. Chúng tôi luôn cập nhật công nghệ, nâng cao chất lượng công trình"
          imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/home/khu-cong-nghiep-home2.jpg"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ActivityItem from './ActivityItem.vue'

export default {
  components: {
    ActivityItem
  }
}
</script>

<style scoped lang="scss">
  .title {
    padding: 60px 0 20px ;
    background-image: url(https://www.datxanh.vn/template/tint/modules/main/images/bgactivity.jpg);
    background-size: cover;
  }
</style>