<template>
  <div
    class="navbar-item postion-relative d-none d-lg-flex py-3"
    style="width: 11.5%; max-width: 140px"
    @mouseenter="onHover($event.target)"
    @mouseleave="isHovering = false"
  >
    <!-- <router-link
      :to="item.linkParent"
      class="label-parent"
      :class="isActiveLink && 'active'"
    > -->
    <router-link
      :to="item.linkParent"
      class="label-parent"
      active-class="active"
    >
      {{ item.labelParent }}
    </router-link>
    <div class="navbar-submenu">
      <router-link 
        v-for="(submenu, index) in item.linkList"
        :key="index"
        :to="submenu.link"
        :class="index === item.linkList.length - 1 ? 'submenu-item pb-3' : 'submenu-item'"
      >
        <div class="circle"></div> 
        <span>{{submenu.label.toUpperCase()}}</span>
      </router-link>
    </div>
    <BgWhiteBottom
      :isHovering="isHovering"
      :height="bgHoverHeight"
    />
  </div>
</template>

<script>
import BgWhiteBottom from './BgWhiteBottom.vue'

export default {
  props: ["item", 'index'],
  data() {
    return {
      isHovering: false,
      bgHoverHeight: 0,
    }
  },
  methods: {
    onHover(target) {
      // console.log(target);
      const height = target.querySelector('.navbar-submenu').offsetHeight
      //lấy cái height của cái thằng menu con
      // console.log(this.item.labelParent, height);
      this.isHovering = true
      this.bgHoverHeight = height
    }
  },
  components: {
    BgWhiteBottom
  },
  computed: {
    isActiveLink() {
      // console.log('set isActiveLink');
      // const result = this.item.linkList.findIndex(link => link.link === this.$route.path)
      const result = this.item.linkList.findIndex(link => {
        // console.log(link);
        // console.log(link.link);
        // console.log(this.$route.path);
        const x = link.link === this.$route.path
        // console.log({x});
        return x
      })
      // console.log({result});
      //nếu như mà trong cái linkList có cái phần tử có giá trị của thuộc tính 'link'
      //bằng với giá trị của cái thằng route thì cho nó active lên
      return result > -1 ? true : false
      //chuyển qua xài method
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';
  @import "./scss/navbarStyle.scss";

  .navbar-item {
    display: none;
    text-align: center;

    .label-parent {
      color: $color-text;

      &.active {
        color: #26b3ef;
      }
    }

    &:hover {
      .navbar-submenu {
        opacity: 1;
        transform: translateY(0);
        z-index: 101;
      }

      .label-parent {
        color: #26b3ef;
      }
    }
  }


  .navbar-submenu {
    position: absolute;
    top: 100%;
    z-index: -101;
    // z-index: 101;

    opacity: 0;
    // opacity: 1;
    transform: translateY(20px);
    transition-duration: .5s;
    transition-property: opacity, transform;

    .submenu-item {
      padding-top: 15px;
      display: block;
      color: $color-text;
      font-size: 18px;
      text-align: left;

      .circle {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 1px solid $color-text;
        display: inline-block;
        margin-right: 5px;
      }

      &:hover {
        color: #26b3ef;

        .circle {
          border: 1px solid #26b3ef;
        }
      }
    }
  }
</style>