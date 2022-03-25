<template>
  <section class="outstanding-project" style="padding-bottom: 80px">
    <div class="wrapper">
      <div class="d-flex flex-wrap">
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
          <bg-img-with-orange-square 
            imgUrl='https://www.datxanh.vn/assets/uploads/myfiles/files/duan-dxg_2.jpg'
            text="Tạo lập cuộc sống ưu việt"
            size="250"
            left="-40"
            bottom="-40"
            bgText="#02213a"
          />
        </b-col>
      </div>
    </div>
  </section>
</template>

<script>
import OutstandingProjectItem from './OutstandingProjectItem.vue'
import projectList from '@/global/data/projectList'

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
  .outstanding-project {
    background: #02213a
  }
</style>