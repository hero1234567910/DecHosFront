<template>
  <div class="swiper-container banner_swiper" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="../../../../static/images/下载.jpg" alt style="width:100%;height: 212px;" />
      </div>
      <div class="swiper-slide">
        <img src="../../../../static/images/3-1.jpg" alt style="width:100%;height: 212px;" />
      </div>
      <div class="swiper-slide">
        <img src="../../../../static/img/头部.jpg" alt style="width:100%;height: 212px;" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(".banner_swiper", {
      direction: "horizontal",
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },
      loop: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true
    });
  }
};
</script>

<style scoped>
</style>