<template>
  <section class="stock">
    <div class="stock-bg-title">
      <b-container>
        <div class="title mb-3">
          <p>CỔ PHIẾU</p>
          <div class="title-line"></div>
        </div>
        <b-col class="mx-auto text-center" style="font-size: 18px">
          Hệ thống quản trị công ty vững mạnh là nền tảng để xây dựng một môi trường làm việc chính trực, minh bạch và công bằng, bảo đảm sự phát triển vững bền trong dài hạn, qua đó kiến tạo giá trị cho cộng đồng và cổ đông của Công ty.
        </b-col>
      </b-container>
    </div>
    <b-container fluid>
      <b-row>
        <ChartComponent/>
        <ReportComponent
          label="BÁO CÁO THƯỜNG NIÊN"
          imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/quan-he-co-dong/baocao2.jpg"
        />
        <ReportComponent
          label="BÁO CÁO TÀI CHÍNH"
          imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/quan-he-co-dong/baocao-tai-chinh-1.jpg"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>
import ChartComponent from './ChartComponent.vue'
import ReportComponent from './ReportComponent.vue'

export default {
  components: {
    ChartComponent,
    ReportComponent
  }  
}
</script>

<style lang="scss" scope>
  .stock-bg-title {
    background-image: url('https://www.datxanh.vn/template/tint/modules/main/images/bgcodong.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 80px 0 50px;
    margin-top: -15px;
  }
</style>