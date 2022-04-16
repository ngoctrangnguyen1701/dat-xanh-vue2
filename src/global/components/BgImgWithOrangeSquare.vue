<template>
  <div class="bg-img">
    <div style="overflow: hidden">
      <img
        class="w-100"
        :src="imgUrl"
      />
    </div>
    <div 
      class="bg-orange d-none d-xl-block"
      v-local-custom:size="size"
      v-local-custom:left="left"
      v-local-custom:bottom="bottom"
    >
      <p 
        v-local-custom:bgText="bgText"
        v-local-custom:lineHeight='bottom'
      >{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'text', 'size', 'left', 'bottom', 'bgText'],
  directives: {
    'local-custom'(el, binding) {
      const {arg, value} = binding
      if(arg === 'size'){
        el.style.padding = `${value}px 0 0 ${value}px`
      }
      if(arg === 'left'){
        el.style.left = `${value}px`
      }
      if(arg === 'bottom'){
        el.style.bottom = `${value}px`
      }
      if(arg === 'bgText'){
        el.style.backgroundColor = value
      }
      if(arg === 'lineHeight'){
        el.style.lineHeight = `${Math.abs(value)}px`
        //chuyển đổi số âm thành số dương và gán giá trị đó cho line-height
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .bg-img {
    position: relative;
    
    img {
      position: relative;
      z-index: 22;
      transition: 2s;
    }
    .bg-orange {
      background: #f5821f;
      // padding: 300px 0 0 300px;

      position: absolute;
      // left: -50px;
      // bottom: -50px;

      p {
        // background: #02213a;
        margin-bottom: 0;
        padding-left: 15px;

        color: white;
        font-size: 24px;
        font-family: 'Quicksand', sans-serif;;
        // line-height: 50px;
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
</style>
