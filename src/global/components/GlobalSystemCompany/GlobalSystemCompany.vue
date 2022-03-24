<template>
  <section class="system-company" :class="isPaddingBottom === false && 'pb-0'">
    <div class="wrapper">
      <global-title title="HỆ THỐNG CÔNG TY" />
    </div>
    <div class="mt-4 d-flex">
      <b-col lg="7" class="px-0">
        <div class="wrapper pr-lg-0">
          <b-row class="justify-content-center">
            <StatisticItem
              v-for="(item, index) in statisticList"
              :key="index"
              :item="item"
              :index="index"
              v-model="indexActive"
            />
          </b-row>
        </div>
        <div class="company-name mt-4">
          <div class="wrapper">
            <div class="border-white border-bottom d-flex align-items-end">
              <i class="fa-solid fa-search d-block mr-3 mb-2"></i>
              <input placeholder="Tìm kiếm" class="form-control" />
            </div>
            <div class="frame-company-name-item">
              <CompanyNameItem
                v-for="(item, index) in companyNameList"
                :key="index"
                :item="item"
              />
            </div>
          </div>
        </div>
      </b-col>
      <b-col lg="5" class="d-none d-lg-block">
        <div style="padding: 50px 100px 50px 50px" :class="isPaddingBottom === false && 'pb-0'">
          <img
            src="https://datxanh.vn/template/tint/modules/system/images/vn-map.png"
            class="img-fluid"
          />
        </div>
      </b-col>
    </div>
  </section>
</template>

<script>
import statisticList from "./data/statisticList";
import companyNameList from "./data/companyNameList";

import StatisticItem from "./StatisticItem.vue";
import CompanyNameItem from "./CompanyNameItem.vue";

export default {
  props: {
    isPaddingBottom: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      statisticList,
      indexActive: 0,
      companyNameList,
    };
  },
  components: {
    StatisticItem,
    CompanyNameItem,
  },
};
</script>

<style scope lang="scss">
@import '@/scss/mixins.scss';

.system-company {
  @include bg-img('https://datxanh.vn/template/tint/modules/main/images/bg-hethong.jpg', 'left');
  padding: 80px 0;
}

.company-name {
  background: #02437b;
  padding: 25px 15px;
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
