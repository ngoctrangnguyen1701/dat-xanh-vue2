<template>
  <div
    class="statistic-item mt-3 px-3"
    @click="$emit('input', index)"
    :class="value === index && 'active'"
  >
    <div class="circle">
      <span>{{item.quantity}}</span>
    </div>
    <p class="mb-0">{{item.location}}</p>
  </div>
</template>

<script>
export default {
  props: ['item', 'index', 'value']
}
</script>

<style lang="scss" scoped>
  .statistic-item {
    width: 20%;
    min-width: 110px;
    max-width: 140px;
    cursor: pointer;
    
    .circle {
      margin: 0 auto;
      padding-top: calc(100% - 10px); /* độ dày của border trên và dưới mỗi cái 5px  */
      border: 5px solid #b7b7b7;
      border-radius: 50%;

      position: relative;
  
      color: #777777;
    }
    span {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: block;

      text-align: center;
      font-size: 40px;
      font-weight: bold;
    }

    p {
      font-size: 18px;
      text-align: center;
    }

    &:hover {
      .circle {
        border-color: #02437b;
        color: #02437b;
      }
    }

    &.active {
      .circle {
        border-color: #02437b;
        color: #02437b;
      }
    }
  }
</style>