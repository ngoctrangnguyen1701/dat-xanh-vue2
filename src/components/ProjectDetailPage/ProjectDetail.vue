<template>
  <div>
    <div class="bg-project-detail">
      <div class="bg-project-detail-opacity d-flex">
        <div class="wrapper my-auto d-none d-lg-block">
          <div class="frame-description-project">
            <img
              src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/logo-gemskyworld.png"
            />
            <h3 class="text-large">GEM SKY WORLD</h3>
            <p>Hội tụ phồn hoa, lan tỏa phú quý</p>
            <div class="d-flex">
              <b-button class="btn-left">
                WEBSITE
                <i class="fa-solid fa-sort-up d-inline-block ml-2"></i>
              </b-button>
              <b-button class="btn-right ml-3">
                TƯ VẤN THÊM
                <i class="fa-solid fa-sort-up d-inline-block ml-2"></i>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="frame-description-project d-block d-lg-none">
      <img
        src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/logo-gemskyworld.png"
      />
      <h3 class="text-large">GEM SKY WORLD</h3>
      <p>Hội tụ phồn hoa, lan tỏa phú quý</p>
      <div class="d-flex flex-wrap">
        <b-button class="btn-left flex-grow-1">
          WEBSITE
          <i class="fa-solid fa-sort-up d-inline-block ml-2"></i>
        </b-button>
        <b-button class="btn-right ml-lg-3 flex-grow-1">
          TƯ VẤN THÊM
          <i class="fa-solid fa-sort-up d-inline-block ml-2"></i>
        </b-button>
      </div>
    </div>

    <div class="my-5">
      <global-title title="THÔNG TIN DỰ ÁN" />
    </div>
    <div class="d-flex flex-wrap">
      <b-col lg="6" xl="7" class="project-info-left"></b-col>
      <b-col lg="6" xl="5" class="project-info-right py-3">
        <div class="pl-lg-3">
          <global-title title="TỔNG QUAN" position="left" />
          <div
            class="border-bottom py-3 d-flex flex-wrap align-items-center"
            v-for="(item, index) in infoOverview"
            :key="index"
          >
            <b-col lg="3" class="pl-0">
              <h6 class="mb-0 font-weight-bold">{{ item.label }}</h6>
            </b-col>
            <b-col lg="7" class="pl-0 pl-lg-3">
              <p class="mb-0">{{ item.text }}</p>
            </b-col>
          </div>
        </div>
      </b-col>
    </div>

    <div class="d-flex flex-wrap" style="background-color: #f1f1f1">
      <b-col lg="6" xl="5" class="px-0 px-lg-3">
        <div class="wrapper my-3 my-lg-5">
          <div class="mb-4">
            <global-title title="VỊ TRÍ" position="left" />
          </div>
          <p class="mb-0">
            Tọa lạc tại xã Long Đức, huyện Long Thành, tỉnh Đồng Nai, cách sân
            bay quốc tế Long Thành khoảng 4 km, Khu đô thị thương mại giải trí
            Gem Sky World được thừa hưởng tối đa lợi thế của vị trí gần kề sân
            bay. Gem Sky World còn kết nối linh hoạt với trung tâm thành phố,
            tỉnh Bà Rịa Vũng Tàu, các tỉnh miền Tây và tất cả các khu vực lân
            cận… bằng đường cao tốc TP.HCM - Long Thành - Dầu Giây, cao tốc Biên
            Hoà - Vũng Tàu, cao tốc Bến Lức - Long Thành và các tuyến đường
            huyết mạch như Quốc lộ 1A, Quốc lộ 51…
          </p>
        </div>
      </b-col>
      <b-col lg="6" xl="7" class="position-right px-0">
        <img
          src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/vi-tri-gem-sky-world.jpg"
          class="w-100"
        />
      </b-col>
    </div>

    <div class="my-5">
      <global-title title="MẶT BẰNG" />
    </div>
    <p class="mb-0 text-center">
      Với tổng diện tích 92.2 ha, Gem Sky World bao gồm 8 phân khu
    </p>
    <div class="wrapper">
      <img
        src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/mat-bang-gem-sky-world.jpg"
        class="w-100"
      />
    </div>

    <div style="background-color: #f1f1f1" class="py-5">
      <global-title title="TIỆN ÍCH" />
      <p class="my-3 text-center">
        Quần thể giải trí rộng 3 ha với các trò chơi vận động ngoài trời, khu
        leo núi, mê cung, quảng trường, nhà điều hành rộng 1.600 m², tuyến phố
        thương mại, trung tâm thương mại, trường học, khu y tế… theo tiêu chuẩn
        quốc tế.
      </p>

      <b-col lg="8" class="mx-auto">
        <b-carousel
          id="carousel-tien-ich"
          v-model="slide"
          :interval="3000"
          controls
        >
          <b-carousel-slide
            v-for="(item, index) in utilities"
            :key="index"
            :img-src="item"
          >
          </b-carousel-slide>
        </b-carousel>
      </b-col>
    </div>

    <div class="wrapper" style="padding-top: 50px; padding-bottom: 50px">
      <global-title title="THƯ VIỆN" />
      <b-row>
        <b-col md="6" class="mt-3">
          <router-link to="/" class="project-item-2">
            <div style="overflow: hidden">
              <div class="img">
                <img
                  src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/san-pham-du-an-gem-sky-world-2.jpg"
                  class="w-100"
                  style="height: 400px"
                />
              </div>
            </div>
            <p
              class="mb-0 mt-2 text-center font-weight-bold"
              v-style:fontSize="18"
              v-style:color="'#015ba6'"
            >
              SẢN PHẨN CỦA DỰ ÁN
            </p>
          </router-link>
        </b-col>
        <b-col md="6" class="mt-3">
          <router-link to="/" class="project-item-2">
            <div style="overflow: hidden">
              <div class="img">
                <img
                  src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/phoi-canh-du-an-gem-sky-world-1.jpg"
                  class="w-100"
                  style="height: 400px"
                />
              </div>
            </div>
            <p
              class="mb-0 mt-2 text-center font-weight-bold"
              v-style:fontSize="18"
              v-style:color="'#015ba6'"
            >
              PHỐI CẢNH CỦA DỰ ÁN
            </p>
          </router-link>
        </b-col>
      </b-row>
    </div>

    <div class="py-5" style="background-color: #f1f1f1">
      <global-title title="VIDEO DỰ ÁN"/>
      <b-col lg="8" class="mt-3 frame-play-video-project mx-auto">
        <img src="https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/GSW-night-SanBayLT-airballoon.png" class="w-100">
        <div class="box-play-video-project">
          <div class="play-video-project d-flex">
            <div class="position-relative m-auto" style="z-index: 1">
              <IconNext/>
            </div>
          </div>
        </div>
      </b-col>
      <p class="mb-0 text-center font-weight-bold">GEM SKY WORLD - HỘI TỤ PHỒN HOA, LAN TỎA PHÚ QUÝ</p>
    </div>
  </div>
</template>

<script>
import projectList from "@/global/data/projectList";

export default {
  data() {
    return {
      infoOverview: [
        {
          label: "Địa chỉ	",
          text: "Xã Long Đức, Huyện Long Thành, Tỉnh Đồng Nai",
        },
        {
          label: "Loại hình",
          text: "Khu đô thị thương mại giải trí",
        },
        {
          label: "Diện tích",
          text: "92,2 ha",
        },
        {
          label: "Quy mô",
          text: "50,5% diện tích dành để xây dựng shophouse, nhà phố thương mại",
        },
        {
          label: "Tiện ích",
          text: "Quần thể giải trí rộng 3 ha với các trò chơi vận động ngoài trời, khu leo núi, mê cung, quảng trường, nhà điều hành rộng 1.600 m², tuyến phố thương mại, trung tâm thương mại, trường học, khu y tế… theo tiêu chuẩn quốc tế",
        },
        {
          label: "Tiến độ",
          text: "Xem tiến độ cập nhật tại đây",
        },
      ],
      utilities: [
        "https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/GSW-SKYPARK%20CENTER.png",
        "https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/tien-ich-gem-sky-world-4.jpg",
        "https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/lt_dot3_pv_01_sanchoicat.jpeg",
      ],
      slide: 0,
      projectList,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/mixins.scss";

.bg-project-detail {
  @include bg-img(
    "https://www.datxanh.vn/assets/uploads/images/post/du-an-gsw_810202117354.jpg",
    center
  );
  width: 100%;
  height: 100vh;
  min-height: 300px;
}

.bg-project-detail-opacity {
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
}

.frame-description-project {
  color: white;
  max-width: 520px;

  img {
    max-width: 350px;
  }

  .text-large {
    font-size: clamp(2rem, 3vw, 3.5rem);
  }
  p {
    font-size: 22px;
    font-style: italic;
  }
  .btn-left,
  .btn-right {
    min-width: 200px;
    height: 40px;
    background: #005ba5;
    border: 1px solid transparent;
    border-radius: 0px;

    color: white;
    transition: 0.3s;

    i {
      transform: rotate(90deg);
    }

    &:hover {
      opacity: 0.7;
    }
  }
  .btn-right {
    background: transparent;
    border: 1px solid #00adee;
    color: #00adee;
  }
}

@media (max-width: 992px) {
  .bg-project-detail {
    max-height: 300px;
  }
  .frame-description-project {
    margin: 20px auto;
    text-align: center;
    h3 {
      color: #005ba5;
    }
    p {
      color: black;
    }
  }
}

.project-info-left {
  @include bg-img(
    "https://www.datxanh.vn/assets/uploads/myfiles/images/du-an/gem-sky-world/TOPDOWN%20SUNSET%20Horizone.png",
    center
  );
  min-height: 300px;
}

.project-info-right {
  background-color: #f1f1f1;
}

.position-right {
  // min-height: 300px;
}

.project-item-2 {
  .img {
    transition: 2s;
  }

  &:hover {
    .img {
      transform: scale(1.1);
    }
  }
}

.frame-play-video-project {
  position: relative;
  img {
    min-height: 300px;
  }

  .box-play-video-project {
    width: 100%;
    height: 100%;
    display: flex;

    position: absolute;
    top: 0;
    left: 0;

    .play-video-project {
      width: 100px;
      height: 100px;
      margin: auto;
      position: relative;
      cursor: pointer;

      &:before, &:after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: #005ba5;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
      }

      svg {
        fill: white;
      }

      &:before {
        opacity: 0.6;
      }

      &:after{
        // background-color: yellow;
        // width: calc(100% + 30px);
        // height: calc(100% + 30px);
        // top: -15px;
        // left: -15px;
        // opacity: 0.6;

        animation: effect-play linear 1s infinite forwards;
      }
    }
  }
}
@keyframes effect-play {
  to{width: calc(100% + 30px);
     height: calc(100% + 30px);
     top: -15px;
     left: -15px;
     opacity: 0.6;}
}
</style>
