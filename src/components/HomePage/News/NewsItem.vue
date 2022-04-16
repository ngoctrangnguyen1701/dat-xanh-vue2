<template>
  <b-col lg="6" xl="3" class="mt-3">
    <img class="w-100" :src="item.imgUrl">
    <div class="content">
      <h3>{{item.title}}</h3>
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
      height: 100px;
      overflow: hidden;

      font-size: 17px;
      font-weight: bold;
      color: black;
      margin-bottom: 0;
    }

    span {
      color: #00aeef
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      //hiển thị thành 3 dòng sau đó sẽ là dấu ba chấm
      -webkit-box-orient: vertical;
    }
  }
</style>