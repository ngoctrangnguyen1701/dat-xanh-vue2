<template>
  <section class="mt-5">
    <global-title title="CÂU CHUYỆN ĐẤT XANH"/>
    <div class="wrapper">
      <b-row class="align-items-center">
        <b-col lg="6" class="d-flex mt-4 column-left">
          <i class="fa-solid fa-quote-left d-block" style="font-size: 60px"></i>
          <p>
            Trở thành <strong>1 trong 10</strong> công ty phát triển Bất động sản
            <strong>tốt nhất Đông Nam Á.</strong>
          </p>
        </b-col>
        <b-col lg="6" class="mt-4">
          <p class="text-justify">
            Được thành lập từ năm 2003 bởi ông Lương Trí Thìn với tiền thân là Công ty TNHH dịch vụ và xây dựng địa ốc Đất Xanh, Tập đoàn Đất Xanh đã trở thành một trong những đơn vị hoạt động bất động sản chuyên nghiệp đầu tiên tại Việt Nam, mang đến cho khách hàng trên toàn quốc những sản phẩm bất động sản ưu việt.<br/>
            Sau gần 20 năm phát triển, Tập đoàn Đất Xanh tích cực phát triển quy mô ngành bất động sản, tạo cơ hội nhà ở cho hàng trăm ngàn gia đình trên khắp cả nước, góp phần thay đổi đáng kể tầm vóc, chất lượng, diện mạo đô thị Việt Nam và kiên định nhìn về phía trước với mục tiêu trở thành tập đoàn kinh tế - bất động sản tư nhân hàng đầu Việt Nam và Đông Nam Á.<br/>
            Những thành tựu nổi bật đó đến từ các lĩnh vực hoạt động chuyên nghiệp và hiệu quả xuyên suốt chuỗi hệ sinh thái bất động sản của Tập đoàn Đất Xanh bao gồm: <br/>
            Phát triển bất động sản <br/>
            Dịch vụ bất động sản<br/>
            Xây dựng & vật liệu xây dựng<br/>
            Công nghệ <br/>
            Đầu tư<br/>
          </p>
        </b-col>
      </b-row>
    </div>

    <div class="bg-story mt-5"></div>
  </section>
</template>

<script>
import GlobalTitle from '@/global/components/GlobalTitle.vue'
export default {
  components: { GlobalTitle },
  data() {
    return {
    }
  },
}
</script>

<style lang='scss' scoped>
  .column-left {
    font-size: 60px;
    color: #064d92;

    p {
      margin-bottom: 0;
    }
  }
  .bg-story {
    background-image: url(https://www.datxanh.vn/assets/uploads/images/post/bg-history-1_2122020195734_15320211093.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 10% 0;
  }
</style>