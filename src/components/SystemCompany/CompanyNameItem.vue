<template>
  <div class="mt-3">
    <i class="fa-solid fa-location-dot d-inline-block mr-3"></i>
    <span>{{item}}</span>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
  div {
    transition: .3s;

    &:hover {
      color: #015ba6;
    }
  }
</style>