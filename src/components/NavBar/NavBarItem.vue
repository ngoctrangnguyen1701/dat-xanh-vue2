<template>
  <!-- <div
    class="navbar-item postion-relative d-none d-lg-flex"
    style="min-width: 70px; max-width: 150px"
    @mouseenter="onHover($event.target)"
    @mouseleave="isHovering = false"
  > -->
  <div
    class="navbar-item postion-relative d-none d-lg-flex"
    style="width: 11.5%; max-width: 140px"
    @mouseenter="onHover($event.target)"
    @mouseleave="isHovering = false"
  >
    <router-link
      :to="item.linkParent"
      class="label-parent"
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
      bgHoverHeight: 0
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
  }
};
</script>

<style lang="scss" scoped>
  @import '@/scss/variables.scss';
  @import "./scss/navbarStyle.scss";

  .navbar-item {
    display: none;
    text-align: center;

    &:hover {
      .navbar-submenu {
        opacity: 1;
        transform: translateY(0);
      }
      a {
        color: $color-text;
      }

      .label-parent {
        color: #26b3ef;
      }
    }
  }


  .navbar-submenu {
    position: absolute;
    top: 100%;
    z-index: 101;
    
    transition: .5s;
    opacity: 0;
    transform: translateY(10px);

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