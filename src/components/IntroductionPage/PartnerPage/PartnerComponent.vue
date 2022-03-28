<template>
  <section>
    <div class="my-5">
      <global-title title="ĐỐI TÁC"/>
    </div>
    <div class="d-flex flex-wrap align-items-center justify-content-center" style="background-color: #f1f1f1">
      <b-col lg="6" class="py-3">
        <div class="wrapper pr-lg-5">
          <p>Là thương hiệu hàng đầu trên thị trường bất động sản Việt Nam, Đất Xanh luôn được các đối tác đánh giá cao về năng lực và uy tín kinh doanh. Với mục tiêu trở thành một tập đoàn đa ngành nghề, đa sở hữu và đa quốc gia, Đất Xanh luôn muốn liên doanh, liên kết với các đối tác có cùng chiến lược phát triển trên cơ sở hợp tác bền vững và phát triển.</p>
          <p class="mb-0">Cụ thể, Đất Xanh đã trở thành đối tác tin cậy của hàng loạt công ty, tập đoàn hàng đầu trong rất nhiều lĩnh vực như chủ đầu tư dự án bất động sản, công ty tài chính, xây dựng, dịch vụ, vật liệu xây dựng, quản lý, công nghệ… hoạt động tại Việt Nam và trên thế giới.</p>
        </div>
      </b-col>
      <b-col lg="6" class="bg-column-right"></b-col>
    </div>
    <div class="wrapper mb-5 d-flex flex-wrap mt-4">
      <partner-item
        v-for="(item, index) in partnerList"
        :key="index"
        :imgUrl="item"
      />
    </div>
  </section>
</template>

<script>
import partnerList from '@/global/data/partnerList'
import PartnerItem from './PartnerItem.vue'

export default {
  components: { PartnerItem },
  data() {
    return {
      partnerList
    }
  },
}
</script>

<style lang='scss' scoped>
  @import '@/scss/mixins.scss';

  .bg-column-right {
    @include bg-img('https://www.datxanh.vn/assets/uploads/images/post/dau-tu_252202195612.jpg', center);
    padding: 15% 0;
  }
</style>