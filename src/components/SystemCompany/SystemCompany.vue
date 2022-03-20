<template>
  <section class="system-company">
    <div style="margin-left: 100px">
      <global-title title="HỆ THỐNG CÔNG TY"/>
    </div>
    <div class="mt-4 d-flex">
      <b-col lg="6">
        <b-row style="margin-left: 70px">
          <StatisticItem
            v-for="(item, index) in statisticList"
            :key="index"
            :item="item"
            :index="index"
            v-model="indexActive"
          />
        </b-row>
        <div class="company-name mt-4">
          <div class="border-white border-bottom d-flex align-items-end">
            <i class="fa-solid fa-search d-block mr-3 mb-2"></i>
            <input placeholder="Tìm kiếm" class="form-control">
          </div>
          <div class="frame-company-name-item">
            <CompanyNameItem
              v-for="(item, index) in companyNameList"
              :key="index"
              :item="item"
            />
          </div>
        </div>
      </b-col>
      <b-col lg="6">
        <div style="padding: 50px 100px 50px 50px">
          <img src="https://datxanh.vn/template/tint/modules/system/images/vn-map.png" class="img-fluid">
        </div>
      </b-col>
    </div>
  </section>
</template>

<script>
import statisticList from './data/statisticList'
import companyNameList from './data/companyNameList'

import StatisticItem from './StatisticItem.vue'
import CompanyNameItem from './CompanyNameItem.vue'

export default {
  data() {
    return {
      statisticList,
      indexActive: 0,
      companyNameList,
    }
  },
  components: {
    StatisticItem,
    CompanyNameItem,
  }
}
</script>,

<style scoped lang="scss">
  .system-company {
    background-image: url(https://datxanh.vn/template/tint/modules/main/images/bg-hethong.jpg);
    background-size: cover;
    padding: 80px 0;
  }
  
  .company-name {
    background: #02437b;
    padding: 25px 50px 25px 100px;
    margin-left: -15px;
    color: white;

    input {
      background: transparent;
      border-radius: 0;
      border: none;
      color: white;
      &::placeholder {
        color: white;
      }

      &:focus {
        box-shadow: none;
      }
    }
  }

  .frame-company-name-item {
    max-height: 400px;
    overflow: auto;
  }
</style>