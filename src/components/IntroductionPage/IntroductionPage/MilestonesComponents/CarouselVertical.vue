<template>
  <b-col lg="3">
    <div class="display-period position-relative">
      <div class="frame-period postion-absolute" v-scroll="scroll">
        <div
          v-for="(item, index) in milestoneList"
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
import milestoneList from './data/milestoneList'

export default {
  data() {
    return {
      milestoneList,
      scroll: 0,
      periodElementList: [],
      indexActive: 0,
      // indexActive: value,
      runPeriod: null,
    }
  },
  mounted() {
    this.periodElementList = document.getElementsByClassName('period-item')
    this.runPeriod = setInterval(() => {
      const nextIndex = this.indexActive + 1
      if(nextIndex > milestoneList.length - 1) {
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
      if(newIndex < milestoneList.length - 4) {
        //6 vị trí cuối sẽ không có cuộn slide,
        //ở đây do length bằng 15, nên sẽ cuộn đến vị trí thứ 10
        this.scroll = this.periodElementList[newIndex].offsetTop
      }
      const {textList} = this.milestoneList[newIndex]
      this.$emit('changeText', textList)
    }
  },
  methods: {
    changePeriod(index) {
      // console.log(event.target);
      // console.log(event.target.offsetTop);
      console.log(this.periodElementList[index]);
      console.log(this.periodElementList[index].offsetTop);
      this.scroll = this.periodElementList[index].offsetTop
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
  @import './scss/carouselVerticalStyle.scss';
</style>