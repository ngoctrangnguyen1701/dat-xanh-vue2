<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
    >
      <b-carousel-slide
        v-for="(item, index) in slideList"
        :key="index"
      >
        <b-row>
          <PartnerItem
            v-for="(partnerItem, partnerIndex) in item"
            :key="partnerIndex"
            :imgUrl="partnerItem"
          />
        </b-row>
      </b-carousel-slide>
    </b-carousel>

    <!-- CONTROLS -->
    <div class="d-flex justify-content-center">
      <div class="mr-3 btn-change-slide" @click="onChangeSlide(slide - 1)">
        <IconBack/>
      </div>
      <div class="btn-change-slide" @click="onChangeSlide(slide + 1)">
        <IconNext/>
      </div>
    </div>
  </div>
</template>

<script>
  import partnerList from './data/partnerList'
  import PartnerItem from './PartnerItem.vue'
  import IconBack from './IconBack.vue'
  import IconNext from './IconNext.vue'

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        slideList: []
      }
    },
    components: {
      PartnerItem,
      IconBack,
      IconNext,
    },
    created() {
      // https://stackoverflow.com/questions/42761068/paginate-javascript-array
      const page_size = 9 //1 slide sẽ có 9 item
      const number_of_page = Math.ceil(partnerList.length / page_size)
      // số slide tổng = Math.ceil(tổng số item / 9)
      // slide 1: cắt từ 1 - 9
      // slide 2: cắt từ 10 - 19
      // slide 3: cắt từ 19 - 28
      for(let i = 1; i <= number_of_page; i++) {
        const arr = partnerList.slice((i - 1) * page_size, i * page_size)
        this.slideList.push(arr)
      }
    },
    mounted() {
      const carousel = document.getElementById('carousel-1')
      const caption = carousel.querySelectorAll('.carousel-caption')
      // console.log(caption);
      for(let i = 0; i < caption.length; i++) {
        caption[i].style.position = 'static'
      }
    },
    methods: {
      onChangeSlide(value) {
        if(value < 0 || value > this.slideList.length - 1){
          //trường hợp value nhỏ hơn 0 hoặc là lớn hơn tổng số slide thì không set slide
          return
        }
        this.slide = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn-change-slide {
    &:hover {
      svg {
        fill: #02437b;
        cursor: pointer;
      }
    }
  }
</style>