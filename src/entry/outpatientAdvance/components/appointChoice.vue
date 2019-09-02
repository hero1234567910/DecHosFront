<template>
  <div class="Choice-wzl">
    <!--<div class="swiper-head">
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
    </div>-->

    <div class="ad-header">
      <div class="ad-headerImg">
        <img
          src="../../../../static/img/预约 (1).svg"
          style="width: 11%;position: absolute;top: 7px;
    left: 17px;"
        />
      </div>
      <div class="ad-title">
        <p style="font-size: 20px;font-weight: 700;">门诊在线预约</p>
      </div>
      <!--<div class="ad-fin">
  			<img src="../../../../static/img/在院.png" style="position: absolute;width: 73%;
    top: 20px;
    left: 100px;"/>
      </div>-->
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
import model from "./model.js";

export default {
  data() {
    this.model = model(this.axios);
    return {
      serverTime: ""
    };
  },
  created() {
    this.getServerDate();
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

    //this.checkTime();
  },
  methods: {
    toDayOutPatient() {
      let self = this;
      if (!this.checkTime()) {
        $.alert({
          title: "温馨提示",
          text: "现在不是挂号时间段",
          onOK: function() {
            if (process.env.NODE_ENV == "dev") {
              window.location = "../index.html";
            } else if (process.env.NODE_ENV == "production") {
              window.location = "../2ysechos/index.html";
            }
          }
        });
      } else {
        self.$router.push("/outpatientMainToday");
      }
    },
    appointOutPatient() {
      let self = this;
      if (!this.checkTime()) {
        $.alert({
          title: "温馨提示",
          text: "现在不是挂号时间段",
          onOK: function() {
            if (process.env.NODE_ENV == "dev") {
              window.location = "../index.html";
            } else if (process.env.NODE_ENV == "production") {
              window.location = "../2ysechos/index.html";
            }
          }
        });
      } else {
        self.$router.push("/outpatientMain");
      }
    },
    getServerDate() {
      let xhr = null;
      if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
      } else {
        xhr = new ActiveObject("Microsoft");
      }
      xhr.open("GET", "/", false); //false不可变
      xhr.send(null);
      let date = xhr.getResponseHeader("Date");
      this.serverTime = new Date(date).getHours();
      //console.log(this.serverTime);
    },
    checkTime() {
      //console.log(time.getHours());
      let serverHour = this.serverTime;

      //console.log(serverHour);
      if (serverHour >= 16 || serverHour <= 7) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>


<style scoped>
.ad-fin {
  height: 60px;
  width: 60px;
  line-height: 60px;
  position: relative;
}
.ad-title {
  float: left;
  height: 60px;
  line-height: 60px;
}
.ad-headerImg {
  width: 80px;
  height: 60px;
  line-height: 60px;
  float: left;
}
.ad-header {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
}
.img-content {
  height: 145px;
  margin-top: 40px;
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

