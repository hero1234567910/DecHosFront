<template>
  <div class="Choice-wzl">
    <div class="swiper-head">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-img" src="../../../../static/images/二院图片.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img class="swiper-img" src="../../../../static/images/二院图片.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img class="swiper-img" src="../../../../static/images/二院图片.jpg" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="img-content">
      <img style="margin-top: 10px;margin-left: 34%;" src="../../../../static/images/当天门诊.png" />
    </div>
    <div class="Choice-wzl-1">
      <a href="javascript:;" class="weui-btn weui-btn_primary" @click="toDayOutPatient()">当天门诊</a>
    </div>
    <div class="white-space"></div>
    <div class="img-content">
      <img style="margin-top: 10px;margin-left: 34%;" src="../../../../static/images/预约门诊.png" />
    </div>
    <div class="Choice-wzl-1">
      <a href="javascript:;" class="weui-btn weui-btn_primary" @click="appointOutPatient()">预约门诊</a>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import model from "./model.js";

export default {
  data() {
    this.model = model(this.axios);
    return {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      autoplay: {
        //自动播放，里面有很多参数可以根据需求进行调试
        delay: 3000
      },
      effect: "coverflow",
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  methods: {
    toDayOutPatient() {
      let self = this;
      self.$router.push("/outpatientMainToday");
    },
    appointOutPatient() {
      let self = this;
      self.$router.push("/outpatientMain");
    }
  }
};
</script>


<style scoped>
.swiper-img {
  width: 100%;
  align-content: center;
  height: 175px;
  border-radius: 6px;
}
.img-content {
  height: 145px;
}
.weui-btn_primary {
  background-color: #4ccbdb;
}
.weui-btn {
  width: 230px;
}
/* .white-space{
    margin-top: 10px;
    height: 5px;
    background-color: white;
} */
</style>

