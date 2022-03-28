<template>
  <Transition name="fade-scale">
    <div class="frame-search bg-white" v-show="show" @click.stop>
      <input
        placeholder="Nhập nội dung tìm kiếm"
        class="form-control"
        :value="value"
        @change="$emit('input', $event.target.value)"
      >
      <i class="fa-solid fa-search"></i>
    </div>
  </Transition>
</template>

<script>
//thay đổi chỗ input @input thành @change để khi người dùng nhập xong đứng lại dữ liệu mới update
//còn nếu dùng @input thì mỗi lần gõ 1 từ sẽ dữ liệu sẽ 1 lần update

//binding dữ liệu giữa thằng cha với con trong vue2
// https://www.youtube.com/watch?v=S7PFVKZFmHk
export default {
  props: ['show', 'value']
}
</script>

<style scoped lang="scss">
  @import '@/scss/effectFadeScale.scss';

  .frame-search {
    display: flex;
    align-items: center;
    border: 5px solid #26b3ef;
    width: 300px;

    position: absolute;
    right: 0;
    top: 50px;
    z-index: 100;

    transform-origin: right;

    input {
      border-radius: 0;
      border: none;

      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;

      &:focus {
        box-shadow: none;
      }
    }

    i {
      width: 30px;
      margin-left: 5px;
    }
  }
</style>