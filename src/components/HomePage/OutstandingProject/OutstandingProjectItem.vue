<template>
  <b-col sm="6" class="outstanding-project-item pl-0">
    <router-link
      class="d-flex align-items-center mt-3 text-decoration-none"
      :to="item.link"
    >
      <div class="line"></div>
      <p class="mb-0">{{item.name}}</p>
    </router-link>
  </b-col>
</template>

<script>
export default {
  props: ['item']  
}
</script>

<style lang="scss" scoped>
  .outstanding-project-item {

    .line {
      position: relative;
      height: 1px;
      width: 0;
      background: #f5821f;
      transition: .3s;
      
      &:after {
        content: "";
        background: #f5821f;
        width: 0;
        height: 0;
        border-radius: 50%;

        position: absolute;
        left: 100%;
        top: -3px;
      }
    }

    p {
      font-size: 22px;
      color: white;
    }

    &:hover {
      .line {
        width: 60px;
        margin-right: 20px;
      }
      :after {
        width: 6px;
        height: 6px;
      }
    }
  }
</style>