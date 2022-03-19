<template>
  <b-col md="6" lg="3" class="mt-3">
    <img class="w-100" :src="item.imgUrl">
    <div class="content">
      <h3>{{item.title}}</h3>
      <span class="d-block">{{item.date}}</span>
      <p class="mb-5 mt-3">{{item.description}}</p>
      <btn-read-more/>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
  .content {
    background: #ebebeb;
    padding: 15px;

    h3 {
      font-size: 17px;
      font-weight: bold;
      color: black;
      margin-bottom: 50px;
    }

    span {
      color: #00aeef
    }
  }
</style>