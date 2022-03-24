<template>
  <section>
    <div class="mt-5 mb-4">
      <global-title title="ĐẠI HỘI ĐỒNG CỔ ĐÔNG"/>
    </div> 
    <div class="shareholder-frame py-3">
      <b-col lg="9" class="mx-auto">
        <div
          v-for="(item, index) in shareholderList"
          :key="index"
          class="shareholder-item"
        >
          <div class="year">Năm {{item.year}}</div>
          <div
            v-for="(subItem, subIndex) in item.list"
            :key="subIndex"
            class="frame-list-item d-flex align-item-center"
            :class="subIndex === item.list.length - 1 && 'has-border-bottom'"
          >
            <b-col lg="9">
              {{subItem.text}}
            </b-col>
            <b-col lg="3" class="d-flex justify-content-end align-items-center">
              <p class="mb-0 mr-3">{{subItem.date}}</p>
              <img src="https://www.datxanh.vn/template/tint/modules/congress/images/dow.png" class="img-fluid">
            </b-col>
            <!-- <b-col lg="1">
            </b-col> -->
          </div>
        </div>
      </b-col>
    </div>
  </section>
</template>

<script>
import shareholderList from './data/shareholderList'

export default {
  data() {
    return {
      shareholderList
    }
  },
}
</script>

<style lang='scss' scoped>
  @import './scss/shareholderStyle.scss';
</style>