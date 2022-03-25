<template>
  <section>
    <div class="mb-4 mt-5">
      <global-title title="DỰ ÁN NỔI BẬT"/>
    </div>
    <div class="wrapper" style="margin-bottom: 80px">
      <b-row class="align-items-center">
        <b-col lg="4">
          <h3 class="mb-4 font-weight-bold" v-style:fontSize="30" v-style:color="'#064d92'">DỰ ÁN MỚI</h3>
          <h1 class="mb-4" v-style:fontSize="50" v-style:color="'#0066b3'">Gem Sky World</h1>
          <p class="my-4" v-style:fontSize="18">Được quy hoạch đồng bộ và hiện đại hàng đầu Long Thành, Khu đô thị thương mại giải trí Gem Sky World hứa hẹn sẽ là thế giới giải trí, mua sắm, ẩm thực và trải nghiệm cuộc sống mang tính toàn cầu cho những người trẻ năng động.</p>
          <btn-read-more/>
        </b-col>
        <b-col lg="8">
          <bg-img-with-orange-square
            imgUrl="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/gemskyworld.jpg"
            size="250"
            left="-50"
            bottom="-50"
          />
        </b-col>
      </b-row>
    </div>

    <div class="wrapper" style="background-color: #f6f5f5; padding-top: 80px; padding-bottom: 80px">
      <b-row>
        <project-item
          v-for="(item, index) in projectList"
          :key="index"
          :item="item"
        />  
      </b-row>
    </div>
  </section>
</template>

<script>
import ProjectItem from './ProjectItem.vue'
import projectList from '@/global/data/projectList'

export default {
  components: { ProjectItem },
  data() {
    return {
      projectList
    }
  },
}
</script>