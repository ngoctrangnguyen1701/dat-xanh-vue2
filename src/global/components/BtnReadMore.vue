<template>
  <a :href="link || '/'" class="btn-read-more">
    {{text || 'XEM THÊM'}}
    <i class="fa-solid fa-sort-up d-inline-block ml-2"></i>
  </a>
</template>

<script>
export default {
  props: ['link', 'text']
}
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';

  .btn-read-more {
    display: block;
    margin-top: 15px;
    font-weight: bold;

    color: $color-blue2;
    i {
      transform: rotate(90deg) translate(0);
      transition: .3s;
    }

    &:hover {
      i {
        transform: rotate(90deg) translateY(-5px);
      }
    }
  }
</style>