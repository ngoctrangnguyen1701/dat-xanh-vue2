<template>
  <Transition name="fade-scale">
    <div class="frame-flag" v-if="show">
      <div
        v-for="(item, index) in list"
        :key="index"
        @click="$emit('input', item.imgUrl)"
      >
        <img :src="item.imgUrl">
        <span>{{item.text}}</span>
      </div>
    </div>
  </Transition>
</template>

<script>
import flagList from './data/flagList'

export default {
  props: ['show', 'value'],
  data() {
    return {
      list: flagList
    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/effectFadeScale.scss';

  .frame-flag {
    border: 1px solid #ccc;
    background: white;
    width: 150px;

    position: absolute;
    right: 0;
    top: 50px;
    z-index: 100;

    div {
      margin: 15px  0 15px 15px;
      cursor: pointer;
    }
    
    img {
      width: 25px;
      height: 18px;
      max-width: 100%;
      display: inline-block;
      margin-right: 15px;
    }
  }
</style>