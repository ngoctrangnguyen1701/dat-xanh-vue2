<template>
  <b-col md="6" lg="4" class="mt-3">
    <router-link :to="item.link" class="project-item">
      <div style="overflow: hidden">
        <div class="img">
          <img :src="item.imgUrl" class="w-100">
        </div>
      </div>
      <p
        class="mb-0 mt-2 text-center font-weight-bold"
        v-style:fontSize="18"
        v-style:color="'#015ba6'"
      >{{item.name}}</p>
    </router-link>
  </b-col>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang='scss' scoped>
  @import '@/scss/mixins.scss';

  .project-item {
    .img{
      transition: 2s;
    }

    &:hover {
      .img {
        transform: scale(1.1);
      }
    }
  }
</style>