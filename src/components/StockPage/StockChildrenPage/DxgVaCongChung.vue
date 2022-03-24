<template>
  <section class="mb-4">
    <div class="mt-5 mb-4">
      <global-title title="DXG VÀ CÔNG CHÚNG"/>
    </div>
    <div class="wrapper">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
      >
        <b-carousel-slide
          v-for="(item, index) in slideList"
          :key="index"
        >
          <b-row>
            <NewsItem
              v-for="(newsItem, index) in item"
              :key="index"
              :item="newsItem"
            />
          </b-row>
        </b-carousel-slide>
      </b-carousel>
    </div>

    <!-- CONTROLS -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="btn-change-slide" @click="onChangeSlide(slide - 1)">
        <IconBack/>
      </div>
      <div class="mx-2">
        <p class="mb-0" style="color: #00adee">
          {{currentPage}} <span style="color: #333333">/{{number_of_page}}</span>
        </p>
      </div>
      <div class="btn-change-slide" @click="onChangeSlide(slide + 1)">
        <IconNext/>
      </div>
    </div>
  </section>
</template>

<script>
import newsList from './data/newsList'
import NewsItem from './NewsItem.vue'

const page_size = 4 //1 page sẽ có 4 item

export default {
  components: {
    NewsItem
  },
  data() {
    return {
      slide: 0,
      slideList: [],
      number_of_page: Math.ceil(newsList.length / page_size), 
      currentPage: 1,
    }
  },
  created() {
    // const page_size = 4 //1 page sẽ có 4 item
    // const number_of_page = Math.ceil(newsList.length / page_size)
    // số slide tổng = Math.ceil(tổng số item / 9)
    // slide 1: cắt từ 1 - 9
    // slide 2: cắt từ 10 - 19
    // slide 3: cắt từ 19 - 28
    for(let i = 1; i <= this.number_of_page; i++) {
      const arr = newsList.slice((i - 1) * page_size, i * page_size)
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
      //page 1 tương đương slide 0 --> page = slide + 1
      this.currentPage = value + 1
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