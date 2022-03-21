<template>
  <b-col md="6" lg="4" class="report position-relative pt-3 pt-lg-0">
    <div class="bg-report" :style="{backgroundImage: `url(${imgUrl})`}"></div>
    <a href="" class="text-white d-block text-center text-decoration-none">
      <div>
        <p>{{label}}</p>
        <div class="d-flex justify-content-center mt-auto">
          <b-button class="btn-left">TẢI VỀ</b-button>
          <b-button class="btn-right">XEM CHI TIẾT</b-button>
        </div>
      </div>
    </a>
  </b-col>
</template>

<script>
export default {
  props: ['label', 'imgUrl']
}
</script>

<style scoped lang="scss">
  .report {
    display: flex;
    flex-direction: column-reverse;
    padding-bottom: 15px;
    overflow: hidden;

    .bg-report {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
  
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: 1s;
    }

    p {
      font-size: 18px;
      font-weight: bold;
    }

    .btn-left, .btn-right {
      border-radius: 3px 0 0 3px;
      background: #0065b3;
      border: none;
      padding: 10px 20px;

      &:hover {
        background: #f5821f;
      }
    }
    .btn-right {
      border-radius: 0 3px 3px 0;
      background: #01aef0;
    }

    &:hover {
      .bg-report {
        width: 105%;
        height: 105%;
      }
    }
  }
</style>