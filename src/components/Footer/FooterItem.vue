<template>
  <b-col md="6" lg="3">
    <a :href="item.linkParent">
      <h3 class="footer-title">{{item.labelParent}}</h3>
    </a>
    <a 
      v-for="(itemChild, index) in item.linkList"
      :key="index"
      :href="itemChild.link"
    >
      <p class="footer-sub-menu">{{itemChild.label}}</p>
    </a>
    <btn-read-more 
      v-if="item.labelParent === 'DỰ ÁN'"
      text="XEM TẤT CẢ"
    />
  </b-col>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
  .footer-title {
    font-size: 20px;
    color: white;
    margin: 24px 0;
  }

  .footer-sub-menu {
    color: #cccccc;
    font-size: 18px;
    transition: .5s;
    position: relative;

    &:hover {
      transform: translate(5px);
      color: white;
    }
  }
</style>