<template>
  <b-col lg="3">
    <div class="display-period position-relative">
      <div class="frame-period postion-absolute" v-scroll="scroll">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="period-item d-flex align-items-center py-2"
          :class="index === indexActive ? 'active' : ''"
        >
          <h3 class="mb-0" @click="indexActive = index">{{item.period}}</h3>
          <div class="dot" @click="indexActive = index"></div>
        </div>
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['list'],
  data() {
    return {
      scroll: 0,
      periodElementList: [],
      indexActive: 0,
      runPeriod: null,
    }
  },
  mounted() {
    //khi component được gắn thì sẽ cho chạy carousel, bằng cách thay cứ 4s thay đổi giá trị indexActive
    //khi giá trị indexActive có sự thay đổi, cập nhật giá trị của biến 'scroll' chính là offsetTop của cái phần tử index được active
    //và cũng là giá trị dùng để translate cho cái thằng frame-period
    //khi giá trị 'scroll' thay đổi, template sẽ được render lại
    //và khi render lại nó sẽ chạy cái directive 'v-scroll' sẽ chạy và thêm giá trị value chính là cái giá trị của biến 'scroll'
    //sau đó cái style transform sẽ được xét dựa vào giá trị của v-scroll
    this.periodElementList = document.getElementsByClassName('period-item')
    this.runPeriod = setInterval(() => {
      const nextIndex = this.indexActive + 1
      // if(nextIndex > milestoneList.length - 1) {
      if(nextIndex > this.list.length - 1) {
        //nếu index được active tiếp theo lớn hơn index cuối cùng trong mảng thì cho nó cuộn về thằng đầu tiên
        this.indexActive = 0
      }
      else {
        this.indexActive = nextIndex
      }
    }, 4000)
    // }, 400000000000)
  },
  unmounted() {
    clearInterval(this.runPeriod)
  },
  watch: {
    indexActive(newIndex) {
      // console.log({newIndex});
      // console.log(milestoneList.length - 4);
      // if(newIndex < milestoneList.length - 4) {
      if(newIndex < this.list.length - 4) {
        //6 vị trí cuối sẽ không có cuộn slide,
        //ở đây do length bằng 15, nên sẽ cuộn đến vị trí thứ 10
        this.scroll = this.periodElementList[newIndex].offsetTop
      }
      // const {textList} = this.milestoneList[newIndex]
      // this.$emit('changeText', textList)
      this.$emit('changeIndex', newIndex)
    }
  },
  directives: {
    'scroll'(el, binding) {
      // console.log(el);
      // console.log(binding);
      el.style.transform = `translateY(-${binding.value}px)`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './carouselVerticalStyle.scss';
</style>