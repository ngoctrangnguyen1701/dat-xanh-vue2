<template>
  <section>
    <div class="mt-5 mb-4">
      <!-- <global-title title="ĐẠI HỘI ĐỒNG CỔ ĐÔNG"/> -->
      <global-title :title="title" />
    </div>
    <div class="shareholder-frame py-3">
      <b-col lg="9" class="mx-auto">
        <!-- <div
          v-for="(item, index) in shareholderList"
          :key="index"
          class="shareholder-item"
          v-transition
        > -->
        <div
          v-for="(item, index) in list"
          :key="index"
          class="shareholder-item"
          v-transition
        >
          <div class="year">Năm {{ item.year }}</div>
          <div
            v-for="(subItem, subIndex) in item.list"
            :key="subIndex"
            class="frame-list-item d-flex align-item-center"
            :class="subIndex === item.list.length - 1 && 'has-border-bottom'"
          >
            <b-col lg="9">
              {{ subItem.text }}
            </b-col>
            <b-col lg="3" class="d-flex justify-content-end align-items-center">
              <p class="mb-0 mr-3">{{ subItem.date }}</p>
              <img
                src="https://www.datxanh.vn/template/tint/modules/congress/images/dow.png"
                class="img-fluid"
                style="cursor: pointer"
                @click="downloadFile(subItem.text)"
              />
            </b-col>
          </div>
        </div>
      </b-col>
    </div>
  </section>
</template>

<script>
// import shareholderList from "./data/shareholderList";
import {getData} from './data/shareholderList'
import navbarList from "@/global/data/navbarList";

export default {
  data() {
    return {
      // shareholderList,
      list: getData(),
      title: '',
    };
  },
  mounted() {
    //khi component render ra và khi path route có sự thay đổi thì điền lại title
    // console.log(this.$route.path);
    this.setTitle(this.$route.path);
  },
  watch: {
    $route() {
      //theo dõi sự thay đổi trên thanh url
      // console.log(this.$route.path);
      this.setTitle(this.$route.path);
      setTimeout(() => {
        this.list = getData()
      }, 300)
    },
  },
  methods: {
    setTitle(path) {
      //tìm danh sách con nằm trong labelParent 'CỔ PHIẾU'
      //sau đó dựa vào cái path lấy từ route tìm lable tương ứng để set giá trị cho title
      const { linkList } = navbarList.find(
        (item) => item.labelParent === "CỔ PHIẾU"
      );
      // console.log({linkList});
      const { label } = linkList.find((item) => item.link === path);
      // console.log({label});
      this.title = label.toUpperCase();
    },
    downloadFile(filename) {
      // console.log({filename});
      //reference: https://attacomsian.com/blog/javascript-download-file
      // Create a new link
      const anchor = document.createElement("a")
      // anchor.href ="https://www.datxanh.vn/assets/uploads/myfiles/files/quan-he-co-dong/dai-hoi-dong-co-dong/2021/26062021/DXG%20-%20210626%20-%20BB%20DHDCD%20thuong%20nien%20nam%202021.pdf";
      // anchor.href = 'public/files/filePDF.pdf' //--> ghi như vầy sẽ không đúng link file
      anchor.href = '/files/filePDF.pdf'
      anchor.download = filename;

      // Append to the DOM
      document.body.appendChild(anchor)

      // Trigger `click` event
      anchor.click()

      // Remove element from DOM
      document.body.removeChild(anchor)
    },
  },
  directives: {
    transition(el) {
      el.style.opacity = '0'
      setTimeout(() => {
        el.style.opacity = '1'
      }, 300)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./scss/shareholderStyle.scss";
</style>